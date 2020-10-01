const path = require('path');
const redis = require('redis');
const { NlpManager } = require('node-nlp');

const { findLocation } = require('../utils/location');
const redisClient = redis.createClient();
const manager = new NlpManager({ languages: ['en'] });

module.exports = function (client) {
  var module = {};

  module.ready = async () => {
    console.info(`Logged in as ${client.user.tag}!`);
    // manager.load(path.resolve(__dirname, 'ml', 'models', 'tavern-model.nlp'));
  };
  
  module.message = async (message) => {
    const { content, author } = message;
  
    if (author.bot) return;
    if (!content.startsWith('!')) {
      // Let's try our NLP 
      const result = await manager.process(content);
      if (!!result.answer) {
        message.reply(result.answer);
      }
    }
    
    const args = content.split(/ +/);
    const command = args.shift().replace('!','').toLowerCase();
    if (!client.commands.has(command)) return;
  
    try {
      const ctx = await redisClient.get(author.id);
      console.log(ctx);
      client.commands.get(command).execute(message, args, ctx);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  };
  
  module.guildMemberAdd = async (member) => {
    redisClient.set(member.id, JSON.stringify({
      displayName: member.displayName,
      location: [0,0] // Tavern
    }));
    
    
    const channel = await client.channels.fetch(findLocation('tavern').id);
      
    await channel.updateOverwrite(member, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGES: true,
    });
      
  };

  return module;
};
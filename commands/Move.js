const { findLocation } = require('../utils/location');

module.exports = {
  name: 'move',
  execute: async (msg, args) => {
    const search = args.join('');
    const location = findLocation(search);
    
    try {
      const channel = await msg.client.channels.fetch(location.id);
      
      await channel.updateOverwrite(msg.author, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        READ_MESSAGES: true,
      });
      
      channel.send(`${msg.author.username} has entered the building`);
      
      await msg.channel.updateOverwrite(msg.author, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGES: false,
      });
    } catch (ex) {
      console.error(ex);
    }
  }
};
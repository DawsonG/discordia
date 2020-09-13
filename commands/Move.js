const locations = require('../castle-of-the-south-wind/locations');

module.exports = {
  name: 'move',
  execute: async (msg, args) => {
    const location = args.join('');
    
    try {
      const channel = await msg.client.channels.fetch(locations[location].id);
      
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
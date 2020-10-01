const card = require('../embeds/card');
const { findLocation } = require('../utils/location');

module.exports = {
  name: 'look',
  execute: (msg, args) => {
    //lookup location
    const locationId = msg.channel.id;
    const location = findLocation(locationId);
    
    // No parameters? Default to the description of the location.
    if (args.length === 0) {
      return msg.reply(location.card);
    }
    
    // else find what the user might be looking for
    //msg.reply();
  }
};
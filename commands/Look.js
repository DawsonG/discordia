const card = require('../embeds/card');
const { findInObjects } = require('../utils/arrays');

const locations = require('../castle-of-the-south-wind/locations.js');

module.exports = {
  name: 'look',
  execute: (msg, args) => {
    if (args.length === 0) {
      //lookup location
      const locationId = msg.channel.id;
      const location = findInObjects(locations, 'id', locationId);
      msg.reply(location.card);
    }
    
    // 
    //msg.reply();
  }
};
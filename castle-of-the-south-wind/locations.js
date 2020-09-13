const cardEmbed = require('../embeds/card');

module.exports = {
  tavern: {
    name: 'the-oak-barrel',
    id: '754210219202183169',
    card: cardEmbed(
      'The Oak Barrel',
      'Dan the Barkeep',
      'http://abigail.ddns.net:6001/assets/bartender-rpg.jpg',
      'A bustling hub of activity in an otherwise quiet hamlet, The Oak Barrel is the only inn or tavern for miles.  Many sorts of unsavory folk not welcome elsewhere in town find their way here for drink and food.  Leprechauns are strictly forbidden.',
      'http://abigail.ddns.net:6001/assets/tavern.jpg',
    ),
    characters: [
      {
        name: 'Dan',
        
      }
    ],
  },
  smithy: {
    name: 'geralds-smithy',
    id: '754210339968778261',
    card: cardEmbed(
      "Gerald's Smithy",
      'Gerald',
      'http://abigail.ddns.net:6001/assets/smith.jpg',
      "Smelling of smoke and metal, Gerald's Smithy is the go to place for adventuring gear.  Gerald is not only a master smith, but an importer of magical and rare items.",
      'http://abigail.ddns.net:6001/assets/smithy.jpg',
    ),
  }
};
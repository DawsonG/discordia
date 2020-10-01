const cardEmbed = require('../embeds/card');

module.exports = [
  [ // 0,y
    { // ----------- 0, 1
      name: 'the-oak-barrel',
      aliases: [
        'tavern',
        'inn',
        'oak barrel',
      ],
      id: '754210219202183169',
      card: cardEmbed(
        'The Oak Barrel',
        'Dan the Barkeep',
        'http://abigail.ddns.net:6001/assets/bartender-rpg.jpg',
        'A bustling hub of activity in an otherwise quiet hamlet, The Oak Barrel is the only inn or tavern for miles.  Many sorts of unsavory folk not welcome elsewhere in town find their way here for drink and food.  Leprechauns are strictly forbidden.',
        'http://abigail.ddns.net:6001/assets/tavern.jpg',
      ),
      models: 'tavern',
      characters: [
        {
          name: 'Dan',
          
        }
      ],
    },
    
    { // ----------- 0, 2
      name: 'geralds-smithy',
      aliases: [
        'smithy',
        'smith',
      ],
      id: '754210339968778261',
      card: cardEmbed(
        "Gerald's Smithy",
        'Gerald',
        'http://abigail.ddns.net:6001/assets/smith.jpg',
        "Smelling of smoke and metal, Gerald's Smithy is the go to place for adventuring gear.  Gerald is not only a master smith, but an importer of magical and rare items.",
        'http://abigail.ddns.net:6001/assets/smithy.jpg',
      ),
    },
    
    { // ----------- 0, 3
      name: 'herbalist',
      aliases: [],
      id: '755280940565004298',
      card: cardEmbed(
        "The Herbalist",
        'Avey',
        'http://abigail.ddns.net:6001/assets/herbalist.png',
        "Avey's herb shop is the only place in town that smells good. She has a lovely array of flowers potted by the windows, but most people come here from a variety of potions.  Sniffles? Poison? Fix your infertility? She can help.",
        'http://abigail.ddns.net:6001/assets/herbalist_shop.jpg',
      ),
    }
  ]
];
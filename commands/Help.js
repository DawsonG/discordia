module.exports = {
  name: 'help',  
  execute: async (msg, args) => {
    msg.author.send(`
      Here are your commands!
        !move - Move to another location.
        !look - Look at something in the room.
        
        Of course, just talking also triggers events!  Try addressing some of the NPCs!
        
        !help
    `);
  }
};
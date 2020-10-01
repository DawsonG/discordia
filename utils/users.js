function getUsers() {
  let guilds = bot.guilds.array();

  for (let i = 0; i < guilds.length; i++) {
    bot.guilds.get(guilds[i].id).fetchMembers().then(r => {
      r.members.array().forEach(r => {
        let username = `${r.user.username}#${r.user.discriminator}`;
        console.log(`${username}`);
      });
    });
  }
}
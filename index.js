require('dotenv').config();
const Discord = require('discord.js');
const express = require('express');
const path = require('path');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Map commands to object
const commands = require('./commands');
Object.keys(commands).map(key => {
  client.commands.set(commands[key].name, commands[key]);
});

const events = require('./game/events')(client);
client.on('ready', events.ready);
client.on('message', events.message);
client.on('guildMemberAdd', events.guildMemberAdd);

const app = express();
const port = '6001';

app.use('/assets', express.static(path.join(__dirname, process.env.STORY, 'pictures')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  client.login(process.env.TOKEN);
});
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

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  const { content } = message;
  
  if (!content.startsWith('!')) return;
  
  const args = content.split(/ +/);
  const command = args.shift().replace('!','').toLowerCase();
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

const app = express();
const port = '6001';

app.use('/assets', express.static(path.join(__dirname, 'castle-of-the-south-wind', 'pictures')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  client.login(process.env.TOKEN);
});
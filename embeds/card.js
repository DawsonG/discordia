const Discord = require('discord.js');

module.exports = (title, author, authorImg, description, image, color = '#0099ff') => new Discord.MessageEmbed()
  .setColor(color)
	.setTitle(title)
	.setAuthor(author, authorImg)
	.setDescription(description)
	.setImage(image);
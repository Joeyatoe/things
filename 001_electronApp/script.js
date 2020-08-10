const he = document.querySelector('.he');
const ready = document.querySelector('.ready')
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
  ready.innerHTML = 'ready!';
});
client.on('message', (message) => {
  he.innerHTML = message.content;
  document.querySelector("#icon").setAttribute("src", message.author.avatarURL);
});

client.login('token');

const Discord = require('discord.js');
const chalk = require('chalk');
const config = require('./config.json');
require('date-utils');
const client = new Discord.Client();
const dt = new Date();
client.once('ready', () => {
	console.log(chalk.bgCyan("Bot now ready"));
});

client.on('message', (message) => {
	const formatted = dt.toFormat("現在時刻：西暦YYYY年MM月DD日HH24時MI分SS秒");
	if (message.content === "!something") {
		console.log("something");
	}	else if (message.content === `${config.prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${config.prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === `${config.prefix}time`) {
		message.channel.send(formatted);
	} else if (message.content === `${config.prefix}test`) {
		console.log(chalk.yellow(message.content));
	} else if (message.content === `${config.prefix}plese_reply`) {
		return message.reply("Hey!")
	} else if (message.content === "fuck you") {
		const message = message.content;
		message.channel.send(message.toUppercase());
	}
});
client.on('channelCreate', message => {
	console.log("チャンネルが作成されました。");
});
client.on('messageDelete', (message) => {
	message.channel.send(`${message.createdAt}に作成された\n${message.author}のメッセージは誰かが削除しました。`);
});
client.on('message', (message) => {
	if (message.content)
})
client.login(config.token);

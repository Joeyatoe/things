const Discord = require('discord.js');
	const client = new Discord.Client();
const config = require("./config.json");
require('date-utils');

	let hour;
	let date;
	let minutes;
	let seconds;

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", (message) => {
	if (message.content === "!ctg time")　{

		date = new Date();
		hour = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();

		message.channel.send("30秒後に時刻を表示します。");

		const timeoutMeth = setTimeout( () => {
			message.channel.send(`${hour}時${minutes}分${seconds}秒`);
		}, 30000);

		client.on("message", (messagen) => {
			if (messagen.content === `${config.prefix}cancel time`) {
				const promise = new Promise(() => {
					clearTimeout(timeoutMeth);
					resolve();
				});
				promise.then(() => {
					messagen.channel.send("時刻の表示をキャンセルしました。");
				});
			}
		});
	} else {
		return;
	}
});



client.login(config.token);

const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', message => {
	var myRe = /[\W]{1,}[l,L]it|^[l,L]it/g;
	if(myRe.test(message.content)) {
		console.log(message.content);
		message.channel.send("https://pics.onsizzle.com/worth-investing-in-deep-fried-travis-scott-29075721.png")
		console.log("Image sent");
	}
})

client.login(token);

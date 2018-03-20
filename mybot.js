const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">"
client.on('ready', () => {
 
  client.user.setGame(">help", "https://go.twitch.tv/generatedscript");
});

            client.login('NDI1NDUwNTIwMDkwNjQwMzk0.DZHnSA.-mvbi2-1Es7d_B3PgP6-M6X9XCY');

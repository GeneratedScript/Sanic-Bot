const Discord = require('discord.js');
const client = new Discord.Client();
var PastebinAPI = require('pastebin.js');
var pastebin = new PastebinAPI('3a3f03696725a46033929f7ca868f1f4');
const prefix = ">"
client.on('ready', () => {
 
  client.user.setGame(">help || Cyber Hella Cool", "https://go.twitch.tv/generatedscript");
});



client.login('NDI1NDUwNTIwMDkwNjQwMzk0.DZHnSA.-mvbi2-1Es7d_B3PgP6-M6X9XCY');

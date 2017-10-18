const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



client.on('ready', () => {
    client.channels.get('364081762688696322').send('Sanic has been updated! Say `=updates` to see updates!');
    client.user.setGame('say help for help.')
});

client.on("message", (message) => {
    if (message.content.startsWith("What's this")) {
      message.channel.send("This is a ROBLOX game which is still in development. Stick around!");
    } else

    if (message.content.startsWith("Ping")) {
        message.channel.send("pong!");
}else

    if (message.content.startsWith("What's this?")) {
        message.channel.send("This is a ROBLOX game which is still in development. Stick around!");
} else

if (message.content.startsWith("kick")){
    let myRole = message.guild.roles.get("364164722859442176");
    if(message.member.roles.has(myRole.id)) {

        let member = message.mentions.members.first();
        member.kick();
        message.channel.send("User has been kicked.")
        message.react("👍")
      } else {
        console.log(`Cannot kick. Reason; Insufficient permissions.`);
        message.channel.send("Cannot kick. Reason; Insufficient permissions.");
      }
}else
if (message.content.startsWith("dm ")){
    let myRole = message.guild.roles.get("364164722859442176");
    if(message.member.roles.has(myRole.id)) {
         message.delete();
        let member = message.mentions.members.first();
        member.sendMessage(message.content.substring(3));
      } else {
        console.log(`Cannot kick. Reason; Insufficient permissions.`);
        message.channel.send("Cannot DM. Reason; Insufficient permissions.");
      }
}else
    if (message.content.startsWith("Hi")){
    var Messages = ['Hello!', 'Hi!', 'ugh. Hi.', 'Henlo']
var rand = Messages [Math.floor(Math.random()*Messages.length)]
message.channel.send(rand)
    }
    else
        if (message.content.startsWith("-8ball ")){
    var Messages = ['It is certain' ,'It is decidedly so' ,'Without a doubt' ,'Yes definitely' ,'You may rely on it' ,'As I see it, yes' ,'Most likely' ,'Outlook good' ,'Yes' ,'Signs point to yes' ,'Reply hazy try again' ,'Ask again later' ,'Better not tell you now' ,'Cannot predict now' ,'Concentrate and ask again', 'Dont count on it' ,'My reply is no' ,'My sources say no' ,'Outlook not so good' ,'Very doubtful']
var rand = Messages [Math.floor(Math.random()*Messages.length)]
message.channel.send("I say **"+rand+"** to "+message.content.substring(7))
    }
    else
if (message.content.startsWith("ban")){
    let myRole = message.guild.roles.get("364164722859442176");
    if(message.member.roles.has(myRole.id)) {
        let member = message.mentions.members.first();
        member.ban();
        message.channel.send("Uh oh! "+member.displayName+" was banned!")
        message.react("👍")
      } else {
        console.log(`Cannot ban. Reason; Insufficient permissions.`);
        message.channel.send("Cannot ban. Reason; Insufficient permissions.");
      }
}else
if (message.content.startsWith("+=purge ")){
    let myRole = message.guild.roles.get("364164722859442176");
    if(message.member.roles.has(myRole.id)) {
       let numberofmessages = message.content.substring(8)
       let messagecount = parseInt(numberofmessages);
       message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
      }
}else
if (message.content.startsWith("=updates")){
    message.channel.send({embed: {
        color: 3447003,
        description: "Updates Include; - 'dm @user [msg]' command for mods only | - Bug Fixes | - say [string] (PUBLIC COMMAND) | +=purge [num] (MOD ONLY)"
      }});
}else
if (message.content.startsWith("say ")){
        message.channel.send(message.content.substring(4));
         message.delete();
}else
if (message.content.startsWith("help")){
    message.author.sendMessage("Commands; What is this? | help | leave | Ping | say [string]");
    message.channel.sendMessage("<@"+message.author.id+">, I have sent current commands to your DMs!");
    let myRole = message.guild.roles.get("364164722859442176");
    if(message.member.roles.has(myRole.id)) {
        message.author.sendMessage("Sanic has detected you have sufficient permissions to kick/ban. Commands [MOD ONLY]; kick [@p] | ban [@p] | dm [@p] [string] | +=purge [num]")
    }
}else
if (message.content.startsWith("leave")){
message.author.kick();
}
if (message.content.startsWith("Credits")){
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Credits Embed",
    description: "Credits can be found below.",
    fields: [{
        name: "Admins:",
        value: "Admins are **OverpoweredMasterMan#3121**, **TatGuyHyperTrix#9558**, **GeneratedScript#3909**, and **marcusi#8794**."
      },
      {
        name: "Bot:",
        value: "Sanic Bot was made by **GeneratedScript#3909**."
      },
      {
        name: "Discord:",
        value: "Discord Server was made by **Ice-Sama#6304**."
      },
    {
      name: "Website Creator(s)/Twitter Creator(s):",
      value: "Website Creator(s) and Twitter Creator(s) are as follow; **Johnny {Ghost Freak}#1072**, **『PALADIN OF THE BLACK LION』#8077 (btw he's thicc af)**"
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Sanic Says: Stay thicc"
    }
  }
});
}
    
  });

  client.on("guildMemberAdd", (member) => {
    client.channels.get('364081762688696322').send("<@"+member.id+">"+' has joined the server!');
  });

  client.on("guildMemberLeave", (member) => {
client.channels.get('364081762688696322').send(member.displayName+' has left the server!')

  });
  client.login(config.token);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">"
client.on('ready', () => {
 
  client.user.setGame(">help", "https://go.twitch.tv/generatedscript");
});


client.on("guildMemberAdd", member => {
  let guild = member.guild;
 guild.defaultChannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Member Joined!",
    url: "https://discord.gg/GwmHMfE",
    description: ${member.user}+" has joined Cyber!",
    fields: [{
        name: "Username",
        value: ${member.user}
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© GeneratedScript#3909"
    }
  }
});
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Member Joined!",
    url: "https://discord.gg/GwmHMfE",
    description: ${member.user}+" just left.",
    fields: [{
        name: "Username",
        value: ${member.user}
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© GeneratedScript#3909"
    }
  }
});
});

            client.login('NDI1NDUwNTIwMDkwNjQwMzk0.DZHnSA.-mvbi2-1Es7d_B3PgP6-M6X9XCY');

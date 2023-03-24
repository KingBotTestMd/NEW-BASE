/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const Config = require('./DATABASE/Config');
const events = require('./DATABASE/events');
const { default : makeWASocket, useSingleFileAuthState, DisconnectReason, delay, BufferJSON, WAConnection, makeInMemoryStore, makeBufferData } = require('@adiwajshing/baileys');
const { Boom } = ('@hapi/boom');
const Pino = require('pino');
const axios = require('axios');
const got = require('got');
const { err_msg } =  require("./err_msg");
const simpleGit = require('simple-git');
const git = simpleGit();
const { eventEmit } = require("cobra-event-emit").event_emit;

const Language = require('./DATABASE/language');
const Lang = Language.getString('updater');
var OWN = { ff: '94729352830,94787166875,0' }

// ════════════════════SQL🍁🍁




async function  fetchJson(url, options)  {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
  }
  const getVersionWaweb = () => {
    let version
    try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
    } catch {
        version = [2, 2204, 13]
    }
    return version
  }
const store = makeInMemoryStore({ logger: Pino().child({ level: 'silent', stream: 'store' }) })
 await Config.DATABASE.sync();
const Session = new StringSession();
async function ConnectToWhatsapp () {
   
    const KingBot = makeWASocket({
        logger: Pino({ level: 'silent' }),
        browser: ['SL-KING-X-MD','Chrome','1.0.0'],
        printQRInTerminal: false,
        auth: Session,
        version: getVersionWaweb() || [2, 2222, 11]
    })
    store.bind(KingBot.ev)
    
    
    
// ════════════════════WA CONNECTION🍁🍁🍁
        console.log(chalk.blueBright.italic('▷ Login information updated! ->'));
        
    KingBot.ev.on('connection.update', async(update) => {
     const { connection, lastDisconnect } = update
        if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
                if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again 🤕`); process.exit();
                } else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, Reconnecting...."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, Reconnecting..."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit();
                } else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session And Scan Again.`); process.exit();
                } else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); ConnectToWhatsapp ();
                } else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        } else if (connection === 'open') { 
        console.log(chalk.green.bold('✅️  Login successful! ▶'));
        console.log(chalk.blueBright.italic('⚙️ Installing Commands...'))
        fs.readdirSync('./Commands').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./Commands/' + plugin);
            }
        });
        
        
        
        
// ==================== Password Checking ====================
        console.log(chalk.blueBright.italic('❯❯❯ PASSWORD CHECKING ❮❮❮'));
        if (Config.PW == 'testpw') {
        console.log(chalk.green.bold('✅ Password is Correct !!!'));
         } else if (Config.PW !== 'testpw') {
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         console.log(chalk.red.bold('⚠⚠ Password Incorrect ⚠⚠'));
         throw new Error("Wrong password !!");
         return;
         }}});


// ============= Password Check Ended =============



            console.log(chalk.green.bold(' ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WHATSAPP BOT WORKING! ▷'));
            console.log(chalk.blueBright.italic('⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot V1.0.0'));  
            await KingBot.sendMessage(KingBot.user.id, { image: { url: './src/logo.jpg' }, caption: '🙋‍♂️️ Hellow !! ' + KingBot.user.name + '! \n\n*⚙️ Welcome To ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot  :│⚙️*\n\n\n Your Bot Working  As ' + Config.WORKTYPE + ' ⚙️\n\n*⚙️│⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WORKING Your Account*\n\n*⚙️▷ Use the 🚀 .menu command to get bot menu...*\n\n\n*⚙️ ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ is a powerfull WhatsApp robot developed by </> ШHłТΞ HΛϾКΞЯ (🎭) ->*\n\n*🚀 This is your LOG number. Avoid using the command here.\n\n⚙️ .update Command use for new items*\n\n'})
                await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await KingBot.sendMessage(KingBot.user.id, { text: Lang.UPDATE });    
    } else {
        var KingUpdater = Lang.NEW_UPDATE;
        commits['all'].map((commit) => {
                KingUpdater += '🍁 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' \nThis Update BY 🎭 ШHłТΞ HΛϾКΞЯ 🎭';
            })}
        
        await KingBot.sendMessage(KingBot.user.id, { text: KingUpdater + '```' });
        
        
        
        
        
        KingBot.ev.on('creds.update', saveState)
        KingBot.ev.on('messages.upsert', async(m) => {

//            await eventEmit(KingBot, m, err_msg, Config)





const msg = m.messages[0]
events.commands.map(async (command) =>  {
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
/*                    let sendMsg = false;
		            const chat = data.chatUpdates[message.key.remoteJid] || data.chatUpserts[message.key.remoteJid]
/                   var chat = KingBot.chats.get([msg.key])
                        
                    if ((Config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Config.SUDO.includes(',') ? Config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Config.SUDO || Config.SUDO.includes(',') ? Config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                     
                    if ((OWN.ff == "94729352830,94787166875,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }*/
// ════════════════════SUDO🍁🍁
                    if (sendMsg) {
                        if (Config.SEND_READ && command.on === undefined) {
 //---------------------->      await KingBot.chatRead(msg.key.remoteJid);
                        await KingBot.readMessages([msg.key])
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

                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (Config.LANG == 'EN') {
//  ------->   await KingBot.sendMessage(KingBot.user.jid, { text: '⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot,\n\n\nWORKING AS ' + Config.WORKTYPE + '!!\n\n▷ _This is your LOG number Dont Try Command here_\n🎭 Also You Can join Our Support group More Help.\n_🖲️Support 01▷ https://chat.whatsapp.com/\n\n*Error:* ```' + error + '```\n\n' });
                            } else if (Config.LANG == 'SI') {
                            console.log('එරර් ! 😂')
                             //  -------> await KingBot.sendMessage(KingBot.user.jid, fs.readFileSync("./src/cd6032c65c27e0510ddad.jpg"), MessageType.image, { caption: '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] WhatsApp User Bot   '+Config.WORKTYPE+' ලෙස ක්‍රියා කරයි!!\n\n▷ _මෙය ඔබගේ LOG අංකයයි මෙහි විධන භාවිතයෙන් වළකින්න_\n▷ඔබට යම් ගැටලුවක් ඇත්නම් අපගේ සහය සමූහට ලිවිය හැක.\nf_🖲️Support 01▷ https://chat.whatsapp.com/EmxfOklzLVIIyDEKPx4IYj\n\n*දෝෂය:* ```' + error + '```\n\n' });
                                
                            } else {
                            console.log('Error ! 😂')
                           //  -------> await KingBot.sendMessage(KingBot.user.jid, fs.readFileSync("./src/cd6032c65c27e0510ddad.jpg"), MessageType.image, { caption: '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] WhatsApp User Bot *  WORKING AS '+Config.WORKTYPE+'!!\n\n▷ _This is your LOG number Dont Try Command here_\n▷Also You Can join Our Support group More Help.\n_🖲️Support 01▷ https://chat.whatsapp.com/EmxfOklzLVIIyDEKPx4IYj\n\n*Error:* ```' + error + '```\n\n' });
                                    }
                               }
                          }
                     }
                })
           })
      };
  
  
  
  
  
ConnectToWhatsapp();
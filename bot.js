/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
βπ­ ππ» πΊπΈπ½πΆ π π­β  MD BOT
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

// ββββββββββββββββββββSQLππ




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
const { state, saveState } = useSingleFileAuthState('./session.json')
async function ConnectToWhatsapp () {
    await Config.DATABASE.sync();
    const KingBot = makeWASocket({
        logger: Pino({ level: 'silent' }),
        browser: ['SL-KING-X-MD','Chrome','1.0.0'],
        printQRInTerminal: false,
        auth: state,
        version: getVersionWaweb() || [2, 2222, 11]
    })
    store.bind(KingBot.ev)
    
    
    
// ββββββββββββββββββββWA CONNECTIONπππ
        console.log(chalk.blueBright.italic('β· Login information updated! ->'));
        
    KingBot.ev.on('connection.update', async(update) => {
     const { connection, lastDisconnect } = update
        if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
                if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again π€`); process.exit();
                } else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, Reconnecting...."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, Reconnecting..."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit();
                } else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session And Scan Again.`); process.exit();
                } else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); ConnectToWhatsapp ();
                } else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); ConnectToWhatsapp ();
                } else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        } else if (connection === 'open') { 
        console.log(chalk.green.bold('βοΈ  Login successful! βΆ'));
        console.log(chalk.blueBright.italic('βοΈ Installing Commands...'))
        fs.readdirSync('./Commands').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./Commands/' + plugin);
            }
        });
        
        
        
        
// ==================== Password Checking ====================
        console.log(chalk.blueBright.italic('β―β―β― PASSWORD CHECKING β?β?β?'));
        if (Config.PW == 'testpw') {
        console.log(chalk.green.bold('β Password is Correct !!!'));
         } else if (Config.PW !== 'testpw') {
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         console.log(chalk.red.bold('β β  Password Incorrect β β '));
         throw new Error("Wrong password !!");
         return;
         }}});


// ============= Password Check Ended =============



            console.log(chalk.green.bold(' βπ­ ππ» πΊπΈπ½πΆ π π­β  WHATSAPP BOT WORKING! β·'));
            console.log(chalk.blueBright.italic('βπ­ ππ» πΊπΈπ½πΆ π π­β  WhatsApp User Bot V1.0.0'));  
            await KingBot.sendMessage(KingBot.user.id, { image: { url: './src/logo.jpg' }, caption: 'πββοΈοΈ Hellow !! ' + KingBot.user.name + '! \n\n*βοΈ Welcome To βπ­ ππ» πΊπΈπ½πΆ π π­β  WhatsApp User Bot  :ββοΈ*\n\n\n Your Bot Working  As ' + Config.WORKTYPE + ' βοΈ\n\n*βοΈββπ­ ππ» πΊπΈπ½πΆ π π­β  WORKING Your Account*\n\n*βοΈβ· Use the π .menu command to get bot menu...*\n\n\n*βοΈ βπ­ ππ» πΊπΈπ½πΆ π π­β  is a powerfull WhatsApp robot developed by </> Π¨HΕΠ’Ξ HΞΟΎΠΞΠ― (π­) ->*\n\n*π This is your LOG number. Avoid using the command here.\n\nβοΈ .update Command use for new items*\n\n'})
                await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await KingBot.sendMessage(KingBot.user.id, { text: Lang.UPDATE });    
    } else {
        var KingUpdater = Lang.NEW_UPDATE;
        commits['all'].map((commit) => {
                KingUpdater += 'π [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' \nThis Update BY π­ Π¨HΕΠ’Ξ HΞΟΎΠΞΠ― π­';
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
// ββββββββββββββββββββVIDEO & IMAGE
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
// ββββββββββββββββββββSUDOππ
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
//  ------->   await KingBot.sendMessage(KingBot.user.jid, { text: 'βπ­ ππ» πΊπΈπ½πΆ π π­β  WhatsApp User Bot,\n\n\nWORKING AS ' + Config.WORKTYPE + '!!\n\nβ· _This is your LOG number Dont Try Command here_\nπ­ Also You Can join Our Support group More Help.\n_π²οΈSupport 01β· https://chat.whatsapp.com/\n\n*Error:* ```' + error + '```\n\n' });
                            } else if (Config.LANG == 'SI') {
                            console.log('ΰΆΰΆ»ΰΆ»ΰ· ! π')
                             //  -------> await KingBot.sendMessage(KingBot.user.jid, fs.readFileSync("./src/cd6032c65c27e0510ddad.jpg"), MessageType.image, { caption: '[π±π°π±π°π΄οΌ§ ππ―πͺπ€] WhatsApp User Bot   '+Config.WORKTYPE+' ΰΆ½ΰ·ΰ· ΰΆΰ·βΰΆ»ΰ·ΰΆΊΰ· ΰΆΰΆ»ΰΆΊΰ·!!\n\nβ· _ΰΆΈΰ·ΰΆΊ ΰΆΰΆΆΰΆΰ· LOG ΰΆΰΆΰΆΰΆΊΰΆΊΰ· ΰΆΈΰ·ΰ·ΰ· ΰ·ΰ·ΰΆ°ΰΆ± ΰΆ·ΰ·ΰ·ΰ·ΰΆ­ΰΆΊΰ·ΰΆ±ΰ· ΰ·ΰ·ΰΆΰ·ΰΆ±ΰ·ΰΆ±_\nβ·ΰΆΰΆΆΰΆ§ ΰΆΊΰΆΈΰ· ΰΆΰ·ΰΆ§ΰΆ½ΰ·ΰ·ΰΆΰ· ΰΆΰΆ­ΰ·ΰΆ±ΰΆΈΰ· ΰΆΰΆ΄ΰΆΰ· ΰ·ΰ·ΰΆΊ ΰ·ΰΆΈΰ·ΰ·ΰΆ§ ΰΆ½ΰ·ΰ·ΰ·ΰΆΊ ΰ·ΰ·ΰΆ.\nf_π²οΈSupport 01β· https://chat.whatsapp.com/EmxfOklzLVIIyDEKPx4IYj\n\n*ΰΆ―ΰ·ΰ·ΰΆΊ:* ```' + error + '```\n\n' });
                                
                            } else {
                            console.log('Error ! π')
                           //  -------> await KingBot.sendMessage(KingBot.user.jid, fs.readFileSync("./src/cd6032c65c27e0510ddad.jpg"), MessageType.image, { caption: '[π±π°π±π°π΄οΌ§ ππ―πͺπ€] WhatsApp User Bot *  WORKING AS '+Config.WORKTYPE+'!!\n\nβ· _This is your LOG number Dont Try Command here_\nβ·Also You Can join Our Support group More Help.\n_π²οΈSupport 01β· https://chat.whatsapp.com/EmxfOklzLVIIyDEKPx4IYj\n\n*Error:* ```' + error + '```\n\n' });
                                    }
                               }
                          }
                     }
                })
           })
      };
  
  
  
  
  
ConnectToWhatsapp();
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

const { Message, StringSession, Image, Video } = require('./KingBot/');
const { DataTypes } = require('sequelize');
const Language = require('./DATABASE/language');
const Lang = Language.getString('updater');
var OWN = { ff: '94729352830,94787166875,0' }


// ════════════════════ SQL ════════════════════


const KingBotDB = Config.DATABASE.define('KingBot', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

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
const Session = new StringSession();
async function ConnectToWhatsapp () {
   
   
   await Config.DATABASE.sync();
   var StrSes_Db = await KingBotDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
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



       };
ConnectToWhatsapp();
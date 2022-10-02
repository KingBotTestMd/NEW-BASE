/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const Config = require('./DATABASE/config');
const { default : makeWASocket, useSingleFileAuthState, DisconnectReason, delay, BufferJSON, WAConnection, makeInMemoryStore } = require('@adiwajshing/baileys');
const { Boom } = ('@hapi/boom');
const Pino = require('pino');
const axios = require('axios');
const got = require('got');
const {err_msg} =  require("./err_msg")
const simpleGit = require('simple-git');
const git = simpleGit();
const {eventEmit} = require("cobra-event-emit").event_emit

const Language = require('./DATABASE/language');
const Lang = Language.getString('updater');
fs.readdirSync('./Commands/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./Commands/sql/' + plugin);
    }
});

const plugindb = require('./Commands/sql/plugin')

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
const { state, saveState } = useSingleFileAuthState('./session.json')
async function ConnectToWhatsapp () {
    const KingBot = makeWASocket({
        logger: Pino({ level: 'silent' }),
        browser: ['SL-KING-X-MD','Chrome','1.0.0'],
        printQRInTerminal: false,
        auth: state,
        version: getVersionWaweb() || [2, 2222, 11]
    })
    store.bind(KingBot.ev)
// ════════════════════WA CONNECTION🍁🍁🍁
    KingBot.ev.on('connection.update', async(update) => {
        const { connection, lastDisconnect } = update
        console.log(chalk.blueBright.italic('▷ Login information updated! ->'));
            if (connection === 'close') { console.log('connection Error🤕 !!!')
                let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
                if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again 🤕`); process.exit(); }
                else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, Reconnecting...."); ConnectToWhatsapp (); }
                else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, Reconnecting..."); ConnectToWhatsapp (); }
                else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
                else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session And Scan Again.`); process.exit(); }
                else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); ConnectToWhatsapp (); }
                else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); ConnectToWhatsapp (); }
                else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        } else if (connection === 'open') { 
        console.log(chalk.green.bold('✅️  Login successful! ▶'));
        console.log(chalk.blueBright.italic('🚀 Installing Internel Commands... ▶')); 
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./Commands/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./Commands/' + plugin.dataValues.name + '.js', response.body);
                    require('./Commands/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        console.log(chalk.blueBright.italic('⚙️ Installing Commands...'))
        await git.fetch();
        var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
      if (commits.total === 0) {
        await KingBot.sendMessage(KingBot.user.id, { text: Lang.UPDATE });    
    } else {
            var KingUpdater = Lang.NEW_UPDATE;
            commits['all'].map((commit) => {
            KingUpdater += '🍁 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' \nThis Update BY 🎭 ШHłТΞ HΛϾКΞЯ 🎭';
            });
            await KingBot.sendMessage(KingBot.user.id, { text: KingUpdater + '```' })}
            await KingBot.sendMessage(KingBot.user.id, { text: '🙋‍♂️️ Hellow !! ' + KingBot.user.name + '! \n\n*⚙️ Welcome To ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot  :│⚙️*\n\n\n Your Bot Working  As ' + Config.WORKTYPE + ' ⚙️\n\n*⚙️│⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WORKING Your Account*\n\n*⚙️▷ Use the 🚀 .menu command to get bot menu...*\n\n\n*⚙️ ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ is a powerfull WhatsApp robot developed by </> ШHłТΞ HΛϾКΞЯ (🎭) ->*\n\n*🚀 This is your LOG number. Avoid using the command here.\n\n⚙️ .update Command use for new items*\n\n'})
        }
        
// ════════════════════PLUGGINS SUCCESS🍁🍁🍁
        console.log(chalk.green.bold(' ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WHATSAPP BOT WORKING! ▷'));
        console.log(chalk.blueBright.italic('⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot V1.0.0'));
        });
        KingBot.ev.on('creds.update', saveState)
        KingBot.ev.on('messages.upsert', async(m) => {
                          await eventEmit(KingBot, m, err_msg, Config)
                }
// ════════════════════LOGIN MESSAGE🍁🍁
        )
    };
 
ConnectToWhatsapp();

/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const { spawnSync } = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const {addCMD} = require('cobra-event-emit').events;

const Language = require('../DATABASE/language');
const Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {
addCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤟 I AM FINE 😜'}, type: 1},
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]
const btn = {
    image: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    caption: "👋Hey all\n🍂I am online now🍂\n\n🌳 HOW ARE YOU 🌳️",
    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn)
    } else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤟 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
    image: Config.AL ,
    caption:  Config.ALIVEMSG + '\n\n🌳 HOW ARE YOU 🌳',
    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn )
     }
    }));
addCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        if (message.jid === '393475528094-1415817281@g.us') {
            return;
        }
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(message.jid, { text: '```' + child + '```' });
    }));
addCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V}, (async (message, match) => {
        await message.client.sendMessage(message.jid, { text: `I am king bot` });
        }));
} else if (Config.WORKTYPE == 'public') {
addCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤟 I AM FINE 😜'}, type: 1},
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]
const btn = {
    image: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    caption: "👋Hey all\n🍂I am online now🍂\n\n🌳 HOW ARE YOU 🌳️",
    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn)
    } else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤟 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
    image: Config.AL ,
    caption:  Config.ALIVEMSG + '\n\n🌳 HOW ARE YOU 🌳',
    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn )
     }
    }));
addCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        if (message.jid === '393475528094-1415817281@g.us') {
            return;
        }
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(message.jid, { text: '```' + child + '```' });
    }));
addCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V}, (async (message, match) => {
        await message.client.sendMessage(message.jid, { text: `I am king bot` });
        }));
}

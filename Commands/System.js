/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
βπ­ ππ» πΊπΈπ½πΆ π π­β  MD BOT
*/

const { spawnSync } = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const {addCMD} = require('cobra-event-emit').events;
const KingBot = require('../DATABASE/events');

const Language = require('../DATABASE/language');
const Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {
KingBot.KingXCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'π€ I AM FINE π'}, type: 1},
  {buttonId: 'MNU', buttonText: {displayText: 'π₯Ί I  AM SAD π₯'}, type: 1},
 ]
const btn = {
    image: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    caption: "πHey all\nπI am online nowπ\n\nπ³ HOW ARE YOU π³οΈ",
    footer: '</> α΄α΄α΄‘α΄Κα΄α΄ ΚΚ α΄ΙͺΙ΄Ι’ Κα΄α΄ </>οΈ β·',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn)
    } else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'π€ I AM FINE π'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'π₯Ί I  AM SAD π₯'}, type: 1},
  ]
const btn = {
    image: Config.AL ,
    caption:  Config.ALIVEMSG + '\n\nπ³ HOW ARE YOU π³',
    footer: '</> α΄α΄α΄‘α΄Κα΄α΄ ΚΚ α΄ΙͺΙ΄Ι’ Κα΄α΄ </>οΈ β·',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn )
     }
    }));
KingBot.KingXCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        if (message.jid === '393475528094-1415817281@g.us') {
            return;
        }
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(message.jid, { text: '```' + child + '```' });
    }));
KingBot.KingXCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V}, (async (message, match) => {
        await message.client.sendMessage(message.jid, { text: `I am king bot` });
        }));
} else if (Config.WORKTYPE == 'public') {
KingBot.KingXCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'π€ I AM FINE π'}, type: 1},
  {buttonId: 'MNU', buttonText: {displayText: 'π₯Ί I  AM SAD π₯'}, type: 1},
 ]
const btn = {
    image: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    caption: "πHey all\nπI am online nowπ\n\nπ³ HOW ARE YOU π³οΈ",
    footer: '</> α΄α΄α΄‘α΄Κα΄α΄ ΚΚ α΄ΙͺΙ΄Ι’ Κα΄α΄ </>οΈ β·',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn)
    } else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'π€ I AM FINE π'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'π₯Ί I  AM SAD π₯'}, type: 1},
  ]
const btn = {
    image: Config.AL ,
    caption:  Config.ALIVEMSG + '\n\nπ³ HOW ARE YOU π³',
    footer: '</> α΄α΄α΄‘α΄Κα΄α΄ ΚΚ α΄ΙͺΙ΄Ι’ Κα΄α΄ </>οΈ β·',
    buttons: buttons,
    headerType: 1
}
        await message.client.sendMessage(message.jid, btn )
     }
    }));
KingBot.KingXCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        if (message.jid === '393475528094-1415817281@g.us') {
            return;
        }
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(message.jid, { text: '```' + child + '```' });
    }));
KingBot.KingXCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V}, (async (message, match) => {
        await message.client.sendMessage(message.jid, { text: `I am king bot` });
        }));
}

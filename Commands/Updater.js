/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const simpleGit = require('simple-git');
const git = simpleGit();
const {addCMD} = require("cobra-event-emit").events;
const Config = require('../DATABASE/config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })

const Language = require('../DATABASE/language');
const Lang = Language.getString('updater');


addCMD({pattern: 'update$', fromMe: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(message.jid, { text: Lang.UPDATE });    
    } else {
        var KingUpdater = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                KingUpdater += '🍁 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' \nThis Update BY 🎭 ШHłТΞ HΛϾКΞЯ 🎭';
            }
        );
        
        await message.client.sendMessage(message.jid, { text: KingUpdater + '```' }); 
                      }
}));

addCMD({pattern: 'update now$', fromMe: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(message.jid, { text: Lang.UPDATE });    
    } else {
        var guncelleme = await message.client.sendMessage(message.jid, { text: Lang.UPDATING });
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(message.jid, { text: Lang.INVALID_HEROKU });
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(message.jid, { text: Lang.IN_AF });
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace("https://", "https://api:" + Config.HEROKU.API_KEY + "@")
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(message.jid, { text: Lang.UPDATED });
            await message.client.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(message.jid, { text: Lang.UPDATED_LOCAL });
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(message.jid, { text: '*❌ Have a Error write our support group get more help*\n*Hata:* ```' + err + '```' });
                }
            }));
            await guncelleme.delete();
        }
    }
}));
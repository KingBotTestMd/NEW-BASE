/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/


const {MessageType, Presence, MessageOptions} = require('@adiwajshing/baileys');
const Base = require('./_Base');
const Message = require('./_Message');
const ReplyMessage = require('./_ReplyMessage');

class Image extends Base {
    constructor(KingBot, data) {
        super(KingBot);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.imageMessage.caption === null ? data.message.imageMessage.caption : '';
        this.url = data.message.imageMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.imageMessage.mimetype;
        this.height = data.message.imageMessage.height;
        this.width = data.message.imageMessage.width;
        this.mediaKey = data.message.imageMessage.mediaKey;
        this.data = data;
        
        if (data.message.imageMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.KingBot, data.message.imageMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

// MD
    async delete() {
        return await this.KingBot.sendMessage(this.jid, { delete: this.key });
    }
// MD
    async reply(text) {
        var message = await this.KingBot.sendMessage(this.jid, { text: text }, { quoted: this.data })
        return new Message(this.KingBot, message);
    }
// MD
    async sendMessage(text) {
        return await this.KingBot.sendMessage(this.jid, { text: text });
    }
// MD
    async sendTyping() {
        return await this.KingBot.sendPresenceUpdate(Presence.composing, this.jid);
    }
//Non MD
/*    async download(location = this.id) {
            const buffer = await downloadMediaMessage(m, 'buffer', { }, { logger, reuploadRequest: sock.updateMediaMessage })
        // save to file
        await writeFile('./my-download.jpeg', buffer)
    }


        await this.KingBot.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }*/
};

module.exports = Image;
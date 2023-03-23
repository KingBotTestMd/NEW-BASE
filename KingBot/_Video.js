/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/


const { MessageType, Presence, MessageOptions } = require('@adiwajshing/baileys');
const Base = require('./_Base');
const Message = require('./_Message');
const ReplyMessage = require('./_ReplyMessage');

class Video extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.videoMessage.caption === null ? data.message.videoMessage.caption : '';
        this.url = data.message.videoMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.videoMessage.mimetype;
        this.height = data.message.videoMessage.height;
        this.width = data.message.videoMessage.width;
        this.mediaKey = data.message.videoMessage.mediaKey;
        this.data = data;
        
        if (data.message.videoMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.client, data.message.videoMessage.contextInfo); }
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

/*    async download(location = this.id) {
        await this.client.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }*/
};

module.exports = Video;
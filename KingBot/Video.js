/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

KING BOT OFFICIAL - KING BOT MD
*/


const {MessageType, Presence, MessageOptions} = require('@adiwajshing/baileys');
const Base = require('./Base');
const Message = require('./Message');
const ReplyMessage = require('./ReplyMessage');

class Video extends Base {
    constructor(KingBot, data) {
        super(KingBot);
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
            this.reply_message = new ReplyMessage(this.KingBot, data.message.videoMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.KingBot.sendMessage(this.jid, { delete: this.id })
    }

    async reply(text) {
        var message = await this.KingBot.sendMessage(this.jid, { text: text }, { quoted: message });
        return new Message(this.KingBot, message)
    }
    
    async sendTyping() {
        return await this.KingBot.sendPresenceUpdate(this.jid, Presence.composing);
    }
    async sendMessage(content, type = MessageType.text, options) {
        return await this.KingBot.sendMessage(this.jid, { text: content });
    }

    async download(location = this.id) {
        if (this.image) {
            await this.KingBot.downloadAndSaveMediaMessage(this.data.quotedMessage.imageMessage, location);
            return this.id + '.' + this.mimetype.split('/')[1];    
    }
};

module.exports = Video;
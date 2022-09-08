/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const {MessageType, Presence, MessageOptions} = require('@adiwajshing/baileys');
const Base = require('./_Base');
const ReplyMessage = require('./_ReplyMessage');

class Message extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.message = data.message.extendedTextMessage === null ? data.message.conversation : data.message.extendedTextMessage.text;
        this.unreadCount = data.unreadCount;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.data = data;
        
        if (data.message.hasOwnProperty('extendedTextMessage') &&
                data.message.extendedTextMessage.hasOwnProperty('contextInfo') === true && 
                data.message.extendedTextMessage.contextInfo.hasOwnProperty('quotedMessage')) { 
            this.reply_message = new ReplyMessage(this.client, data.message.extendedTextMessage.contextInfo); } else {
                this.reply_message = false;
            }
        
        if (data.message.hasOwnProperty('extendedTextMessage') &&
        data.message.extendedTextMessage.hasOwnProperty('contextInfo') === true && 
        data.message.extendedTextMessage.contextInfo.hasOwnProperty('mentionedJid')) {
            this.mention = data.message.extendedTextMessage.contextInfo.mentionedJid;
        } else {
            this.mention = false;
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
};

module.exports = Message;
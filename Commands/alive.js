const {addCMD} = require('cobra-event-emit').events;
const KingBot = require('../DATABASE/events');

KingBot.KingXCMD({pattern: 'test$', desc: '', fromMe: true}, (async (message,  match) => {
          await message.client.sendMessage(message.jid, {text: "Hello Bot Is Working !!!😋"}, {quoted: message.data})

}))

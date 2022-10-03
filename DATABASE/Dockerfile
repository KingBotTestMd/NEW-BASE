FROM sisula/whatsapp_bot:alpine

RUN git clone https://github.com/KingBotTestMd/NEW-BASE /root/slkingx
WORKDIR /root/slkingx/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

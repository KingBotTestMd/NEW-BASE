FROM node:latest

RUN git clone https://github.com/KingBotTestMd/NEW-BASE /root/slkingx
WORKDIR /root/slkingx
RUN git clone https://github.com/KingBotTestMd/NEW-BASE
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "bot.js"]

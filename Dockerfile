FROM nethsaragimhan/kingbotmd:latest

RUN git clone https://github.com/KingBotTestMd/NEW-BASE /root/NEW-BASE
WORKDIR /root/NEW-BASE/
RUN git clone https://github.com/KingBotTestMd/NEW-BASE
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

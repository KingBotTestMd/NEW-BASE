FROM node:latest

RUN git clone https://github.com/nethsaragimhan/pluging-king-bot /root/pluging-king-bot
WORKDIR /root/pluging-king-bot/
RUN git clone https://github.com/nethsaragimhan/pluging-king-bot
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL || '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~a2531MouTfeb54ec2c0056adb042dce1b224', //your ssid to run bot
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    PORT: process.env.PORT || 3000,
    BASE_URL : "https://upper-romy-inrl-bot.koyeb.app/",
    REPO: "inrl-official/inrl-bot-md",
    BGM_URL : process.env.BGM_URL || "null",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'false'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : process.env.STATUS_VIEW || "true",
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "false"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "true"),
    DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
    DISABLE_GRP : toBool(process.env.DISABLE_GRP || "false"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "true"),
    AJOIN: toBool(process.env.AJOIN || 'false'),
    READ : process.env.READ ||  "false",//true, command
    CHATBOT : process.env.CHATBOT || "false",//true, pm, group
    REACT : process.env.REACT || "false",//true, command, emoji
    WARNCOUND : process.env.WARNCOUND || 5,
    BOT_INFO : process.env.BOT_INFO || "ABHIIXXN-BOT-MD;ABHIIXXN;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || "[.,!]",//both  .  and [.] equal, for multi prefix we use [] this
    LANG : process.env.LANG || "en",
    PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || "null",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "unavailable",
    AUDIO_DATA : process.env.AUDIO_DATA || "ABHIIXXN-BOT-MD;
 𝗡𝗼𝘄 𝗽𝗹𝗮𝘆𝗶𝗻𝗴:
"(Song-Music Artist)" 
01:23 ━━━━●───── 03:43
      ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ
   ---˖⁺. ༶ ⋆˙⊹❀♡❀˖⁺. ༶ ⋆˙⊹---
;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.STICKER_DATA || "ABHIIXXN🍓;
 𝗡𝗼𝘄 𝗽𝗹𝗮𝘆𝗶𝗻𝗴:
"(Song-Music Artist)" 
01:23 ━━━━●───── 03:43
      ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ
   ---˖⁺. ༶ ⋆˙⊹❀♡❀˖⁺. ༶ ⋆˙⊹---
",
    BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
    SUDO : process.env.SUDO || "+918089228037",
    RMBG_KEY: process.env.RMBG_KEY || 'VEKz4WCifN62S7v3Wb7dC5dc',
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    INRL_KEY: process.env.INRL_KEY || 'free50_inrl',
    OCR_KEY: (process.env.OCR_KEY || 'K84003107488957').trim(),
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};

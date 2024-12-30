//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243858487794";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhPemNtZ3Nob1NlSHRkazJrajl3Tmw1QUNQazVDQW0zdVVLYWx3WTVGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2cwZjdNcC9BUlJoQzlaRDJNdU85MTVsR3ZIbFcxMENwM0pUWEVFQnJqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQlFBVzdTcFNNRFFJcFBNRGJ6OHpQWm1EZ1RRMTRNUkMwUGdlMWgzYkc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscGxSU2Uyd2Z6b2tOV3p3Wkt2cWxkOHFPUlZ6TFJMK1grM1hjS0U0TFdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFS2tHVkt1OUhTVUlKaGtWeHc4L3liN1JyMXBQYS9LWkRiNnQvS25ibTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB6Q1U4MStCc0NGQ3JZWld1SHRKTTFTaWRXdnJXSEtxWCtWK2tDVlcwem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NxR21ZRGdXSU1ON0JZWlE2emRpQ2ZxamovWFIwS2JDV1NVd3dwVURrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWE2cVRYM0lvYUpBYkdGQ1NzeGJwNDA5UU1IZTBJdUlJbkFySml5ZXMyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWdTZFa2dnRm13RkE0WWdHZ3VQL2xoK0NpR1hPYVhlWEZYeHRQRTVFemFKTG5UWHZ1ZTl0b2J1RlZKOVFOY1RMY1BML2txYWs0cU9oOU5qdXVZOERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IjRLanVqbmJyZ0dsVEh6aS9UKzlGUENKZVczTGYrTGRTQy9mMjREdFRiQU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQzODU4NDg3Nzk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZBRTlGOTU5NDBBOUMzOUFGRTc3MTBEMkNERTVCREIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1MzU5NDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNJRnpvazhNUjNtdDFRWlNBdnk0cWciLCJwaG9uZUlkIjoiMjdmZWU1ODgtM2FkNC00YjMwLTlhMjUtZGJiMzk1NzI0MWRhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik51dVV5WVN5M1ZxdXRHODBlN2FsN0N2aE4rUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbWRMSXIyS3lTWnhFdmZUcXowSG16dE1KbmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzZITlc1M1QiLCJtZSI6eyJpZCI6IjI0Mzg1ODQ4Nzc5NDozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJha2FnaGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HQnBZTUVFTFhheUxzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNrQU9OcTJVNjkxdUYyeW5TblM0WGwrdC9pVHc5dzlKRTdIdzhsa2VneTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZUNHRJMWVxQlRMUHhTcmg3ZmlNN29lVnQ1cjZreHQvbGZkSXJrTWVibTRha1ZWSGN6ZmpGN2RBOGZqRFB1NU5HRXIxNE8ybUwvcStrTnk3a00wNkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRRHhudlFNSVg1UkN6ZjBaSkpyQ1VHUzcrKzBES2xhMTRMYWlMSlQ3MmNPZnY5SUtsWGpFR3BaeXdndEV0VjBnb3pHTHh5TWtMLzRMSFI5OEJUT3BCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg1ODQ4Nzc5NDozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSkFEamF0bE92ZGJoZHNwMHAwdUY1ZnJmNGs4UGNQU1JPeDhQSlpIb010In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NTM1OTM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVLUSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

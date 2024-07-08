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
global.owner = process.env.OWNER_NUMBER || "254758681644";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1MKytpQ0k5OTY1d0pma3hwU2tsNWtVOEZ5QXY3Q2xmSFhnVVRlVWtVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVZnbkxuQTYvZjN6N0VBeU84NkhUd1NkcjdVYUVPMnZkWmVSSjJ5cExrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmVldFJXMDVVczhpTkRBcmNoWDBDdHQvOTBTY2FNVGZCcUVnVDEya24wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMb0hRQkQ2Rm40TUVtb1hVWHZZalBXS2I2UGdlTlA4UVRzbHJudXVvRndnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndISEVsTjFvYi8rellwc2lPclBydlJGTHF2bFA0QXYreFNid0RhZ1g5MjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdCdGtESGlFbG1oV0FFSE5HUVc5cGZ0NTRBWndtb1QvRFBPbzNmdmREMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NhakFJY1RBNTRxSmlNbVFUU3phOGZwaHVnclhDMzhwR21BdndnbThXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRldsZDU2SnlNdVBKT2F3YjkrNDZwVk00a1JqRVg5cXB0R2RTK1F2MWpnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGSmZjUlUwZ29UcDI2TUcwWUtnYVY0YUQ1RU5oWUZCOFNuQ08zOGRjWWd0dThtTWZ6a0ZEUUVCZ0dsNXFEaGxrWjFzQVBRKzZQNzNUSnlDWmFEQ0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJqNUVZNTh5OUM5T3hWOXI0TlpaY1d2N1FsdE5CWWljNTM0eDJsY3E3NWNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiZEduaHp2MlFzbTlMNU5XczBacWxnIiwicGhvbmVJZCI6IjBlZjUwOTE0LTYzN2QtNGY2Ny05MzkzLTIwZWI3NjI3NGM4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4dTZUeWZSZUFlNmI0MHdvalBONGgxMkZUajg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTdSSFI2TVcyK1Jaam1wQnplaytoV01FR0hzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRHQ1hFUEZCIiwibWUiOnsiaWQiOiIyNTQ3NTg2ODE2NDQ6NTNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uazQ3RUhFS25ac0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ims4VG5Dd2pIRnlGcmI0NkFTRHVCUG1QRHNsRkw4RVpHWXlXRGNOTHpna3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZLSHNJVGJ6akRMR09DemZnckJaS0VRcVRGUnRXQVJwdnkza0w3TE1pMXRBNXZtZGhJR0U4eG16VmFRbmFDMDh1azZmai9Id2xlTXJ0cmwvcUkxeUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzeFhNZXhOakZJUXJXTCs5bTVJQk9QQmwzbWl3NGNRN21VZ3pSOFJoODYyM1dGN2FuVXcwRjRNTmNZL1V1M0NXZklJTUxhMGw2VnFaWXlIaDJLaHRDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODY4MTY0NDo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaUEU1d3NJeHhjaGEyK09nRWc3Z1Q1anc3SlJTL0JHUm1NbGczRFM4NEpMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDYyNTE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJTYyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "● ➳յօαզմíղαꨄ●",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "● ➳յօαզմíղαꨄ●",
  ownername: process.env.OWNER_NAME || "● ➳յօαզմíղαꨄ●",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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

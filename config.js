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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "923419159670";
global.sudo = process.env.SUDO || "923419159670";
global.owner = process.env.OWNER_NUMBER || "923419159670";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923xxxxxxxxx";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "923xxxxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "923xxxxxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU15QXBaUjlqNkZCeUo1c1Nwcm91VWw2OE5SNGRrcklGdUlxVEVUcHVFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHVyTzFvaVZacnZSem5rM3pBYXJ2UmIvUUhJS0l5YTExUm15a1J2ZnNrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1h6RFQ1Zi91dzk5bUY3K2VhRDBYKzlZNWNUK3FDU3MwOWcya1lYamtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrd3RBaVU1akNyeTZsWlE1aHZGTlVYN2N1UVQ4REtidGVhazFhbHRrT3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QaGVOeHVWMWFwQjJaNXdyaTNJK0ZkYWt6dG5yZ1JTSUdxWVJYQkhnSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFndkdkVlpWVGJ2bEpBUUwyNkhaSjFHMDBrQUV5Nzc3dzZMMXQ0NVVDM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ045UjZrekVsclZzTVNWa2NXWG5wdzNVV3A4dTBqY1ZqWSsxamRqNDUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWJ3Wkl5K3paaXJPNktScnduRnp6ZEFwSVdFQWlnWHVhMjFJQWNzamwzRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZMUmduTUxkMDVIRU5TR1IvRUFpTjJzY1N3NEFSSVBDeG00VUxvOUYwRWQrdHFxNGV0blZ1VUZJSkJwYjg1YnR6eUFSN0VHUUdJUlA1a1NsZWRZUkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJzdVJCNXpkWVBvc0dHaWJtS0ZDK1hJSHVNQkQ1cFhjMDd3Uk9Nc1djMXM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMQzNUbE9ucFQteW1ZczBId2FXVkV3IiwicGhvbmVJZCI6ImFhYzVlM2M3LWFkMzMtNDM3NC04OTk1LTFiNzkxNGQ2MjQxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzelB3dVhFZ2VsNW1NbzNUQTBtTmRFK0JIOWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGp6cHl0MnA1a3R3VGFQNFcwRFBQT2loRFo0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhHWVIyRDE2IiwibWUiOnsiaWQiOiI5MjMxODAzMzIwMTU6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2arfCdmq/wnZqu8J2aq/CdmrDwnZqpIPCdmq7wnZqr8J2QkvCdkJLwnZqr8J2atCDwnZCS8J2aq/CdmqrwnZCW8J2aq/CdmrQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhZXo4c0dFS1d5bHJJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJ5YUE4MlNaMEtSeVpZSlUxU2NScmphOXlyL1ZlTkN3b3N0ODJ6Q0g4MEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ing0dCtFcy91eTZuRWg4ZTJsaG5QbCtQTE9Uc1B1MVhPVVZCZnN6RWFYMHQ4bWZhYkxNTWlzcmpjQWY5Q0lvTUYrcXIrMVhXSWl3OExnYnAySVdhNEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRXcvQUw1MnZkaEVxVTVrMGdtR0xmMzZzTWQwa2pkT0pPeVByQ2pUb0p5dE9RWUZLS0Q2bkI5V1FneDNVYTR4Zmk1RE8wNGpXdzZJUVBMZm81NTBEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE4MDMzMjAxNToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXOG1nUE5rbWRDa2NtV0NWTlVuRWE0MnZjcS8xWGpRc0tMTGZOc3doL05BIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1ODM3MjMyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝛧𝛩𝛨𝛥𝛪𝐵 𝛨𝛥𝑆𝑆𝛥𝛮 ╠════ need support then thanks me ═════╣",
  author: process.env.PACK_AUTHER || "𝛧𝛩𝛨𝛥𝛪𝐵 𝛨𝛥𝑆𝑆𝛥𝛮",
  packname: process.env.PACK_NAME || "𝛧𝛩𝛨𝛥𝛪𝐵 𝛨𝛥𝑆𝑆𝛥𝛮",
  botname: process.env.BOT_NAME || "𝛧𝛩𝛨𝛥𝛪𝐵 𝛨𝛥𝑆𝑆𝛥𝛮",
  ownername: process.env.OWNER_NAME || "𝛧𝛩𝛨𝛥𝛪𝐵 𝛨𝛥𝑆𝑆𝛥𝛮",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "a0e25c3901a992c4afc2ccd14c87f9ec",
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

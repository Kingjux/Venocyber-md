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
global.owner = process.env.OWNER_NUMBER || "255742862266";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JnUlN0bllQQzVXOEIzcVExNE5YQjh1NXdpcnp1QklHRVdwNGs5Y0xXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWNoR3huck1yenhIbGI5V3FIb0ZhdWs0VU5WNWpZZ1lCcnZnc0Y0TkFuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTTNRN01qaWxiMG1hVklpY3d0djhhTjE5MWlrZGptSDJNV2dpTHBJdzNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT0dJL1ZoRkVsa3pwVVI3VExvTlhoV2lIS1Fqd21vOWx2M21WT3M0dGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ERlR1VTZnbE1YWEJxSlAyT2s3UGlucWo5alZNVHl1dlltc0ZkbHllRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd1OGh0bUtSWEpUNUwrY1BodHZkZTduaTF4UDRJL1ZSYlBlV1lWRm4vU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJzS25WckRGbzI3TnA1WTh1Z3E0RWVpZ3lVUjZhZGpVbm1zdHc2UmprTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VYUnRTeFUrNGRQL0ZWZGJzbXJoYUxjeTBMVEl2TEdmcUJCb0RHd01VTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMVEZ6YzV5M3dSOW5SbDFCRzJTUmI2WENHZWVzM3VrNkR6eXM0WUR5V3VMK3B4NmxweGhBV0RDZE9OcUZ2NXhRNzNVMkc0UkVJYU9KbHltVFQyRUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoieWNiVUtnS3REdS9OTVo1VU8zR3hhcVk4TW5sRHpyOXhmeXZWV1hlNFVnND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTExNjNFOUE4NjRBQTAzNDBGRTI0OUMwM0M2NDA1QjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjcxNjQ3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgxMjYzNzUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0RUE0RUNDRkQyRUZFMTUzM0UxODgyNTRBNzE5NDlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI3MTY0Nzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilc5anRENzFHU3dHeEZBRW9XWG5QRXciLCJwaG9uZUlkIjoiZDU4NjgzNTAtMWI5Ny00MDY4LTllZWYtNjI3MWI2MzRjMGYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ4ZmhKM280TVVDUStOYnZjNXM0VENYR2NZTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuQkQ3Z0RMcytiOEoxbE5OSG1pTjdRTWcvK0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0M5MVhCRlQiLCJtZSI6eyJpZCI6IjI1NDc4MTI2Mzc1MzoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNaXN0YWggWC4gQm90In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbVV3d1FRcktLNnRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCb1Z3U212NEh0SnpPT3dMVFQ1eGRHOXYyVGFUb0ttenNjREppaEFGZWpBPSIsImFjY291bnRTaWduYXR1cmUiOiJONVdNRDN6M3FUS2F5UmlYd1JjckNpM3ZoSFIvbVZtQ01vOXNENHdXYUJ4bmg5NkthVW9kcXZZQ3R2Z08yOEc4T05tOWtlY0RHQlZ1NFNLb1NLN3BEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiREFsVTNYb0xOY1dqbjJ5cm16RTJMbWtrb2tzcElKbnc3Zk9TUjRwaVF3MzNLLzFGeHNzMDFtaDZPZGFwSGw2cXpNY0R0Q1B4RG5FMXFETnhUVjZuQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODEyNjM3NTM6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWFGY0VwcitCN1NjempzQzAwK2NYUnZiOWsyazZDcHM3SEF5WW9RQlhvdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjcxNjQ3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCaXYifQ=="
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

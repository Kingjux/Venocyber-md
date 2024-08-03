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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUM3WnlPYUxybC9WRXl0MmFJVHZDc3FWL1ZQcFBsVWtrbUdHS3QzYjcyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2pJYTBhSStSQWtoQjU3ZFp4UWV6elVlUXZaZG0xOHk4eWJYMDEwZ0szdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTHZpKzV5elNTdFY3NWgwL0dmUFFWL0dvWVEyaVFydmlYdGpQemh0ZkVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bE9zTHM1c0dMdVVHMkw2bHhQRUNzdHhiUzYxM1BYYVYrZ0VGeGFSUVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNS1VOMVZEZzRMUzV6M0FNOHVVemdOUncydWVrQ2hGdEQwVGVBYnNQSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpaTHlrRGdTM0hEN2ZHaDduZ2ljWkcwbzg3MUFHSHAwckVvTE9oN0VGWE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZkZVd1N205UWY0NTdoV29uSUxsUXpsbkZsbTd0ZytPZllaZDAyRUZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUI0enFsMDNVelZ6YURyWllGNlhwSFBUc0dIV3hzVVAwZFA2cVB5MzBXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imdzc2EyR1dxSDVXOWhBeGoycjByK2ppdmozNmEvNEE0RDdpTys5UnBhMXE5VXNxb2s2OHQwUTZJVFNYZzlHZXpoQ2EyYjNsQ3BSM3lVa0dEdGxFbGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6InZ5OHB1dmZOZnhmTzZUVEEwM1ZpbFFyRGZUWmpzZWdjSUNKN01wczVmU2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgxMjYzNzUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5RDNCNDk3NTBFRkQ1QzdCMTU2MDVGQkY2NDVDNUU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2NzQ1NDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNTMwMTU2MzBEMjRCQUY5MkM4MzM3RTVEOEFBMkQ2NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjc0NTQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwRWFpZUtYSVN0VzBScUw4T2RZM2lRIiwicGhvbmVJZCI6IjQ2NWI3ODM0LTY0ZjUtNDdiZS05ZmIwLWIxMzA1YmFjOTVkMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGV3ZuKyt0SXl1RndzMWQ2bk9reGRmMFFzdEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFdRUHozd3c1cHZYZ3R6YVNEQXRPUXM1NVFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg3V1FKQ0JQIiwibWUiOnsiaWQiOiIyNTQ3ODEyNjM3NTM6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlzdGFoIFguIEJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEdVd3dRUTVOcTN0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQm9Wd1NtdjRIdEp6T093TFRUNXhkRzl2MlRhVG9LbXpzY0RKaWhBRmVqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaC9jTVpkVXY3K3BhcWZaSjlya0ZybHU3L0JOdWN5WU5TZkE1MnJTaVlubmx5NlNxaGc4YVFwRENWYXlmL1AvaFM4d2xGNUpyODgwbTlwQm04aDJKQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Iis5d0JYNk1HY2RhdzVmeXJFc1c1VmVVdHhNSHRzOXFyZWE5cXhqTWRPNlJFS3IyVnN0T2JrcTNmdDhmVTZRM1JOYk1HRVE1VjdGL1p1RzdxY1Y1K2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzgxMjYzNzUzOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFhRmNFcHIrQjdTY3pqc0MwMCtjWFJ2YjlrMms2Q3BzN0hBeVlvUUJYb3cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2NzQ1NDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFROIn0="
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

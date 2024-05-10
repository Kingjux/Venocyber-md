//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "anonymous303ruby@gmail.com";
global.location = "lagos, Nigeria.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacUebT1Hsq4YXwfCW0X";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacUebT1Hsq4YXwfCW0X";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/536728756740b9f9cba0c.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "2349157709672";
global.owner = process.env.OWNER_NUMBER || "2349157709672";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0M4TjgrUGVTNG9PdEV6cVRlQ1E3dDBPOUN2OEpaaG9aVFFXQytCYlZGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUY0Wk5VenNMdGZCeFJKY1ZYaHVmYTBucjZuaFR2QVlnK3V5eUZBZkwzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRHdlaHRFZzRqWWJ4bkFUUFIzWnUzM3NDaFNHNk1sUkdKRVd4eE90WFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubFZmMmNuK0F5SEI4bGcrTnpKMWFDNjNxNzhoc213V3EyaE5OcDFWMlNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCVzZXUTk2c0YvOHFTVlVHdElhR3RGVVhtZ3lZNUdPRmV0ZHRwNEc1bmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFRZWg2SmV5TEFHQVA2NExNb1dnMmowTTl5d1JBb3pzQ0ROdHZ5UGplU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUgzOFBTTVI2L0ZmbHA5N0dxUVJjd3FJOWNZRXZSVFVJY2gvMTdoeWVrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZJaytmdmlET2pJZ3VHZ0pFVWVFSmlXbjBJdXljQUhaRG5kOUJMK2tXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlllZkRnZ2VOU2R4NHVVb0VjekJFZ08wZTZ3ak5jR0RMTWpaVzY0enhSeEJiMFE2R3o5dmx2N2dTcGlvVWNsOTdCdm1meXVYb0xoRnZ2bVFUZWR3MWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJyNWJSOHFURUlBdlNNaCtUY3VGTnc0Z3F6RmlhRmVRcFlnZ1ZVa2NacXVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtY01IMzJKRlRQQ0Q5VDNHdnlwQ3JBIiwicGhvbmVJZCI6IjIwODQwMTI0LWM2YjEtNDQ4My05OWEwLTQ5YzAwNDg4MTIxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUTY5TEVVMmx5ZjdVL3dIeWN6WVZObmFGUGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2JoSklCN0o3VlpDa2RqTE0zN3dqd3hNQUc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNZMjFNM0FSIiwibWUiOnsiaWQiOiIyMzQ5MTM3OTI0MjQwOjUzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJeWxsYmNHRVBPdStMRUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5RUFIdnZMUWZkZ0M2VEc5R1FIQzJlZ0YxL015R0lpaWpHc2pLd1hJYUZZPSIsImFjY291bnRTaWduYXR1cmUiOiJoL2ZQanhGMGN0S3NteWlxbUZacDQ5M0lzNk8xbW5zblA4SEZrRldTN1JHMEtsRWt5QitWa2duclEzZjVXZVFhZ0pGam1sdldWN0VnWW5wTlh4MEhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieG9tRTg5aThnaFhsMk1JdUFRdUZPbWxpbnlTdFhCZElSdFp4cUxScGE4VVV6a1k2RGN0ejlLUlNSNkhseUtUdnJPcmVjYTFGeWxnQ3htclRsczg1aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM3OTI0MjQwOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNoQUI3N3kwSDNZQXVreHZSa0J3dG5vQmRmek1oaUlvb3hySXlzRnlHaFcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTUzNDUyODF9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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

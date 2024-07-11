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
global.owner = process.env.OWNER_NUMBER || "2348122886678";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUp5NXlMeXQ4Sk5mYjBxSEdSU1d2dGEwblNQbElHeVlRdXJRWENUUmVIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM01lOEh6bnBBYURUSUc3Y0hXdnZoL2RoWnQ4bUw3dDdSUG12ZVd5VDgwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRi9CdVRodDhjazNOT2xvSUdod1A5REpiVU9UMWd0bHJyU0hYUkp4cFd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiSUlER2dvNEgzQnJ2ODZ1OU5TZTFTMG1KVlJqZzdlWFpPb3U5SER0ejFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNcUtiQ3NrVktSbkkyQVc0Sk53UHk2Q2t5U1h2VlRUdjlJMXQwYkQ3Mk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJUTXJOUHVyNTFaYVVhVzVCY0hIc2xhWllrVUZ6VlNzdUF4MnJDTmZnam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdQbkFDaGUyYWtMMGtiWENxOEhIbXFHcDhvellPUllBenlQQ0QzbnBuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmNtaS9DenNuRDdUNzVWMmJOK2V6TkZONW9DVVVnK0E5WVFOT01xUUVCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJaeDZUV1RzT2Uzb3VYckt5NlF6SUpFNTlZazJkMVgzNFBDVEQxOWljWEc0WFJzNmQ3REpCeUFueEd0NjRxSHhBY3lPZkFwcXprSjVOU2N0d09lOEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImtBZ2RxWnJkZzFWWk9Iekh1STV6QXZuQkxESkczNHd1aGVLZWxoS2pxOUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyMjg4NjY3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTE0MEQwNERDOTcwNTZENTI1RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTExOTg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtTjVtUmduTlJpZXNVeFJUekhlbFdRIiwicGhvbmVJZCI6ImUzN2E0YWRjLTQ0ZGItNGQ4Yy1iNTI1LTJjNzc4ODYwZWYxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHcXNxS0dEODJtWkRIWjVZbVM0cFRjaWNybk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlpxd08xTGYyM3U1cUp3czdPclVIcWZsQVdBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpOSFJUVEJFIiwibWUiOnsiaWQiOiIyMzQ4MTIyODg2Njc4OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p2anIvUUdFT0hiczdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndBWGdYSUxrdFF2SFJaMjhpVXJQbGd5MXBqNUJvZElWQTB3TFhYem9mVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxMVmFnelFKMjRWR1B4Z25ISUVJbDFVQVVQeFUzSXRxcldpM0tuZWJ4VGJ1OWNadHQzZWF2NEJqQ0xvcnVXTzV0eXNHaEh0UkFlajR5TVhuaGN4QkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZb0haOTJCbk80T3ByQWtweDc0UE1xQWt0d1VmeW5jb05janZ3T1l2ekp6YkZnSlFYSGVnbm5DcE5RU1VWenRVWE1ydmVxZisrYUVWamh2SzhFTmFBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjI4ODY2Nzg6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjQUY0RnlDNUxVTHgwV2R2SWxLejVZTXRhWStRYUhTRlFOTUMxMTg2SDAwIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1MTE5ODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEV5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "‎🦍I_am_unruly💀☠️🦍",
  packname: process.env.PACK_NAME || "♥️‎🦍I_am_unruly💀☠️🦍",
  botname: process.env.BOT_NAME || "‎🦍I_am_unruly💀☠️🦍-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "‎🦍I_am_unruly💀☠️🦍",
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

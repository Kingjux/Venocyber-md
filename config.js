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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vadmcja7DAWrNxvSXj1f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254702700072";
global.sudo = process.env.SUDO || "25470200072";
global.owner = process.env.OWNER_NUMBER || "254702700072";
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
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0UzK3M3V2dGVTZpRS9ZWkxHZU1iOEs5ampYbUJTYWMrb0VwY1VMNjczST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYStFVURQNldJeFlsTXJZcnFwaHF3S2tGcGFKQVZMTDA0YWlyMWxvbEd6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTi9ibFF5QTVFTHpIaElobW1IdlF6T2E3ZGYzTkNVZlp3cFdSQ3ZFY1VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHeVNRNVd5bG1nVVB5S3dPZFl3MHorbkVvdFRqaTJXbWhuc3VDWVd5T1FVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGRVlqcWEva0NudUJ5c0lRMHpBRkZrWjE4Mm1UUmJSNmVvc3hyUzJkRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndVcEpjV0xHTGdxS3NIQy9xZ0VWNmU2Qk5zUmhGNXdjeHdlczcwWnlzbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU80NFB5aVZyUnQ3Sk9SNHBkRWZUTjBGSUVzdmxyeWVnTkswTG4vVENVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmFFSlRmcU9QTXJRdW9jMytkWG1QQkNZSkNsOEE1SkMrQUQrK0EvWGl4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLSVhSZWIwcnBWM1F5d1d5TTRKVTBmb0VINE9aSklCMis2MW9Nc0gxYTRzWnkwamhZcldpNnhNWWFjeW4rRnpESk9SRkNSMWpuUTJrNFF3ZndhR0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiUktJUEM4bVNEejFCNFk5M2w1cjJhVStYZ3VlbXhBQXBqa0ZsamJ1MkZkOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQW52UU1sNXFUNTZoSUR2SzBuMzFidyIsInBob25lSWQiOiI2YTJjMGNiNy0wNTNiLTQwZWYtOTY0NC00MzgxNTI5ZmIwNzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYy9LbGFOTW50aDMyRVJFSWdPRTJHd2hsbm4wPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRVYUF0dmloNzlEWDd1MXdSaTJmYzFzcmlXaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxQjg3TU4yWSIsIm1lIjp7ImlkIjoiMjU0NzAyNzAwMDcyOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlbnwnZaG8J2WjvCdlpfwnZaU8J2Wh/Cdlo7wnZaG8J2WkyDwnZaM8J2WlPCdlpTwnZaTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOUzYzS29ERU9TV3hiSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOV2w4UEcrd3VVbWRnWkhMakJLTlhiU2ROYVJ0Zm12dEpRZExBNWp6MldZPSIsImFjY291bnRTaWduYXR1cmUiOiJ4VDZDS0pIQ1NGUHpKakhOLy8vUTIybU84UWRUWlczdHdNNGhneUN4dmJwU0hRRVhpWEhXNFFwNngwRHUzODlVSjlLOUNyMVBTTXU0WXVSV2lmblVBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUDd2cGZaV05PVDIrOStTYTI4bFlFenVGSDR6T1FxNlFGcXliNDFOa2EweDEvWDRRbnpDTkZWRkM0Z3c2WEk3UnQ3Z0pDenRvNDBFcjZGay91RTY1Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDI3MDAwNzI6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFZwZkR4dnNMbEpuWUdSeTR3U2pWMjBuVFdrYlg1cjdTVUhTd09ZODlsbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjYwMzc2MX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝕹𝖆𝖎𝖗𝖔𝖇𝖎𝖆𝖓 𝖌𝖔𝖔𝖓-𝐌𝐃 ╠════ need support then ☞ https://www.instagram.com/_.nairobian_.goon ═════╣",
  author: process.env.PACK_AUTHER || "𝕹𝖆𝖎𝖗𝖔𝖇𝖎𝖆𝖓 𝖌𝖔𝖔𝖓",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝕹𝖆𝖎𝖗𝖔𝖇𝖎𝖆𝖓 𝖌𝖔𝖔𝖓-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝕹𝖆𝖎𝖗𝖔𝖇𝖎𝖆𝖓 𝖌𝖔𝖔𝖓",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-7DtNTtkKZjngfOLCOp97T3BlbkFJ84tk6PRKz2NJMyE3OPwC",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "7571c919f6fb05e2724e36c3c776a3bf",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "𝕹𝖆𝖎𝖗𝖔𝖇𝖎𝖆𝖓 𝖌𝖔𝖔𝖓").toUpperCase(),
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

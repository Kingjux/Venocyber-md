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
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "23432135566";
global.owner = process.env.OWNER_NUMBER || "2349017320329";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9KZXVGbXpQbzk3L1ByMFpRTHhqZE5qenRXYitnUlUrWkJySlpoZnJHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmdNYTNVTjIxMkZIUkZPaHhRZC9sUVVSS0VWMGZ6WG5ZcFpyeW9MV2t3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SWtLOEdRMmM3S0ZwSzBWbTlSUWw5VXowNmp6V29GVEc1K2ZmNmViVDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ckNyb0tYb2xnbno4VDhSR09rZGtiazdFdHR3QWVUS2Y1MFdDVU1sQUdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBYTVHeDBNbCs1OWlpU1hLSFk5Z2t4UDlOWDJXSjI5NmtocTZIOWpQWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFaWm9UOGdESWdIS0N2eXNmZXJlMlJyMlVEOGRUTGUwanJ1c3F4aDR4RTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dTMlJNdVNMaUQvWE5HQ0IwWE5rb3U4VDNuQU1tQWZQdFltMlNJTjJtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk14em1FVWtnNHhIcHc2QUVleXNSMDJURkV0ZlZxYjNHL3FLNllCbE8yYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHWHFFL3NiY2VsQ3U2TDFpcmlLdnQraW5RWmJCbWkvOUx1V1hxSDJtdS9FVmxPM01ZamptVTdNVzI5REQ2Mk9kWGhVR1ZZWmljM2Z5SFlkU2lCcUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJTVk1WSjNYZS9YVlg2a3dTaXNhQVhQWGNoQWpWVEhEK2F6b1FHbUZKTnNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTczMjAzMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0UwQ0ZGMDNENEVCNDRDMDAwOEJBMDIzNzlGMjlEOUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODY0OTIwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicVhFWGFYc0FTNktVMEJvRlZWQXJqZyIsInBob25lSWQiOiI5ZjIzN2IxMS1jMWMyLTRiZjMtOWMyNi1lOTdjYzg2OGFkODgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjVkS1lKTUNBSG5wdUd6bElzaGxyUjhaKzdZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFrOTV5WEFDS1NERlliVGhvVWtWZWxud1N2ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0MThEV1pINiIsIm1lIjp7ImlkIjoiMjM0OTAxNzMyMDMyOToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktFTlpaWSBQUk9NT1RFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTZEbllZQ0VPS0N3ck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVE9QOStzek9UTzFZemlhNkc3UzM0OThWSGthTGNVOERtT0VhZDJPR2gwWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZmprOG03TnBXYlAwaG9ucm81WGl1NGdwM1dXWjlNU1JDLzJDY3FuQUs1cTUxRVJIcFZCZWVsSW5GSndKSU9hc3cySDlFZVZZcHJHM3NCeGpsVzk2QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJmWGZMRjR5V3NSbVpycnlzWUtldjA5blhDcEZYRS9jeTduemdLczJYMHkxUnN1WlhtZEk3VWZJRlZuek4wS0pKbGNSak9uSzdPaWNhZWs1cVNYdUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxNzMyMDMyOToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV6ai9mck16a3p0V000bXVodTB0K1BmRlI1R2kzRlBBNWpoR25kamhvZEcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg2NDkxOTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHh5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "KENNYMD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-cfce2ed2-37ed-4fc8-a1aa-98a2ce3e791e",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "crypto",
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

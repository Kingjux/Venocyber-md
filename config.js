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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBYbnQ5TWp1UU9qbkVuODZKU1RFdzRCTEhxdTE4SWhHU0pjQmJZK2xHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpoQjVKaE8zT1Y0MVJyaE54M3VDR0pxMUVhem9LeWVSa2xidlB6ZjlVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSWh6MEdDdythN1JzNE5mbVF4V3NiZUVZbWtoQTdQeGNEeldUYXgrVW1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUW5UU0lyMG5Rc25pVzFFZHdkdDJOU1R6dCtDRisvOFNZeXJmZzZDTmkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKMlVzbU9LMGhaMDUvNFBFbkhBSCtNandFV2RvWTFHWXlHckcyR0dQbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9nSy9JakFvTW5XZjIrUXpKeXhHaWovaHFVWmhQY2g0TGVpNGo0ZWZPd1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBFcStwNitMN0cwMGVkRUppWUg4Y0p0bHdqSWJsNnBwYklWTEFYdkJHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzAyUS9XRkNHS2VMaCs4NGNOR3FndlV3SkhVN3IvUWtZN0dSNDlrdXhEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQNUxYMFBZNmtJdlZ4RHlzcEdCTGJIWVBwWk9kTXkxM2pLSDVWOHBvM2d1YThLN1MzYTNUVzQvSjNRSG9xbExUR1d3d3Z5RHhEWW1ZWTdKcEpYcGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJ2ZnBzOUVOcHcwN3kvV3FoQTVRd1ROQXRRMUZPbkZ5dTA2QmFEajFoanVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMjI3NDQyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QjE3QTRDMTcxODY4QjYwOEU4RDgyQkMwN0Y5Mzk1QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwODE3MTIxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFaFhFUVYxa1RaYVprWUpvZ3lIUFZ3IiwicGhvbmVJZCI6ImE4YTRkNGI2LWUwZTktNDg2NC04M2Y5LTgyZTY0ZWYyNTE3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Wm5ESHFUNTNzYkFydkRqT1RKNjJxTkRscGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXJjMGxzZVpwcE1HVkI2UzhSVEtxVGFkQnQ0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlcxUUtWOFhKIiwibWUiOnsiaWQiOiIyNTU3MTIyNzQ0MjY6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RgvCdkZPwnZGT8J2RlvCdkZDwnZGW8J2RjvCdkZlf8J2RmPCdkZLwnZGj8J2RnPCdkZwg8J2RofCdkacifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lVzJOSUdFTkNyeHJRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJ3L1J6aE1qSm9qUVIwZFVFYm0ranpyTGtpQ21RcW1Wck1NTkVQczZ5blU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkE0OW1yNW9QdVFrS0N3U0JlL3g2RWVlR25namhENmwxc1NGTXQwSDBXUWVPTzI5dXFkTzk4SmF1Tk9xTEdUNHBwUFdsTzdOZERGZnlwd3FETEJUTkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjVlV6ekh1RCt2dFN0VjhLb0FzRnRsbndJMERtNzVscHJ4aVFiYXp5WjFncnRncUpHOFp0dGp4NitvSXpGRzJHZ3FIeVg2S0F6NG5vR0cyUDBCQTdqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxMjI3NDQyNjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhOFAwYzRUSXlhSTBFZEhWQkc1dm84Nnk1SWdwa0twbGF6RERSRDdPc3AxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODE3MTE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUF0RCJ9"
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

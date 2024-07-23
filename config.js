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
global.owner = process.env.OWNER_NUMBER || "2349137594086";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JTazYwRVhqcWcwTUs0djZDWHNSR1ZzSmpFdzB5YnJYRkV2N2w2a0lHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmhma3Via3JYS3lxREpkcEtIbm1WMUZweUg3TVZnalEwZUticmpVZDhrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTVlmSkZVQ04rUFRldk94ZlFMcGliQzEzQVp4TUlPdGJZcWZTQjhPZFVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSzFnT09VYUd4OHpzZzRKVFBSNCtxQ201UElLT1NpQ0ZPTVpmMDk4WGtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PWHlLRnJWWEJockpWVVFsZkYySnZyN1dWZkc3T2NITFBoV1loVmM1RVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFuQ3Q4cmtDVkJrWnE5M0dNckR3NlJUZ1dTNTh0UFM2Vk1TMDlueVJmREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURQaHJNYWwvMWcrSVpGVTFVWTZXa2x1Z0Zmd0l1YVl2WlNXWHpFWTVHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVJSeTZyOFZNMjBVenhkcFNFNWNBQjJXMUd6OWk1Q2I5Z1F4aHUrUnpqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJvY05lUGVZeTUvK3hObGRrZmY1MS9wVnpZVWlva3lxb052QUMwYjlKb2NKUGhiM2FvSHVpWVlSODdQZXNjY1hqOWNFZmdmV3k3aWluQ2RJMmN5NWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJZZ2NtaVd1bE10eGJ5eklHR2ZPSHYxbEkzcTA2R2xKTXorQkN0UnNITlZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJSnFuSFIxclJybXFhZFc2SE10WkdBIiwicGhvbmVJZCI6Ijg0OTMzZWU2LTk3NGItNDYwZi05YmUyLTQ0Mjc4Yzk2YTYxMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6OGI1dDNCSml3YkdtQzJSM0VXUmRsK1I5TnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGliTXlJbEdtb3lNKzJVN0o5QTZ1WkhidXQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhCRVlXTFZDIiwibWUiOnsiaWQiOiIyMzQ5MTM3NTk0MDg2OjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVtbWFudWVsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQS2dpSUVIRUx1eS9MUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMYUJiYWpzbjBnSjZtcXNoZWliM1A1K1RTNG16V3A5WVNaem5JdFVMSWhVPSIsImFjY291bnRTaWduYXR1cmUiOiJmOENtdmdlQTIxemEwTzBlYUlKR0lvVmZVOXFLOEhhNFdsRGE4S1kwbzNTYVd1dDJkNjBFZGFjdnBHeENiaE4xc0lXYTRkZTdSR0hCK09JZmh3NEpEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYTRjTkhXZ3dvaHRWMHNnVExlcUUyaTc2c2RIUGtUNm9nbCtCeWtPVzdxNUV4VlZUY25ucmZ4ZEFSN0Irdmo1TVNvTVF2bkRmeDg3VjZQTHloTm5PaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM3NTk0MDg2OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMyZ1cybzdKOUlDZXBxcklYb205eitmazB1SnMxcWZXRW1jNXlMVkN5SVYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3MDI3MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVV0In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "KiRa",
  packname: process.env.PACK_NAME || "KiRa",
  botname: process.env.BOT_NAME || "KiRa-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "KiRa",
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

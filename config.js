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
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b7657985a0453085d4677.jpg";
global.devs = "2347041039367";
global.sudo = process.env.SUDO || "2347041039367";
global.owner = process.env.OWNER_NUMBER || "2347041039367";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b7657985a0453085d4677.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5Td1J3dmdFRzdhQm9RVHNta1pjWjhmN0Q2OUdRTG4vbXJVbVB5cEVWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzc1NGJPa2h2RWhFNlhUc3pUU3ZWWG5wOXBnbCtxUUljc0tuUlI1NVlWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR0syZWZibVpWQTN1V1dhRHRNbU1EVVBpeW1rQWlMZVFWOXVFUjdWYjJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvc1IxWGsrQjFhbmw5dGg5TXBqc0JxY0V1U3RIUFkwb0FuME5vZy9jSlZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLcjlFY2l4UVVkcjNZN2ZXRndhazVxNk1GSHNFYjBsbWxwV1FZcUloVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhkbzRsODJDRmJTaFdqYndEUmhqRFkrVUZMSTh2ZnRoenJURi9UQkpKUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5hNkRUMHQvUmZCbnNIYVJuckdkUktDd1RtTU9lVkxLTjlLK0k5U0ZGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUFwamIrdzlzSU9SQ3lwZFpPLy9LVlJGRWNYZmoxRHNYKzdydStkSnpIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhGQUtyamVOYjBzYUxRL3ZacmFTUlhEZFFSbE1sTkRxeFVBbGNkWlc4eHVmcFJmMGx1eitidVNUNFExa1VKQ1BHR0U3YktmZjh0T3JiVjM0RW1JTGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJqb1F4anpMVWtPbXBiemxRcEVFZHo2Y0Ivb2thS0xJTXlTNHczMlpMcXpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0SDdTU3BVdFRqcUwyTWJFMUwwLVpBIiwicGhvbmVJZCI6IjVjOTU5NjZiLTM0YzgtNDdkMC1hMDEzLTlkNWVjZGU3YTdkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTHpFb0JhNmpGZWYrK1U5VHhsc0FYUlk5UE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmpiM29QTzRzbWZ6c29GVFFFaDU3cFJTdXpBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdONUg1OE1DIiwibWUiOnsiaWQiOiIyMzQ3MDQxMDM5MzY3OjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJMVUUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05DWmtqa1FzSmEwdFFZWUJ5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlsdmJCRVFWS2VOYnpYTi9UQWdoNmpvVk8yWm0rRWhKMFVLQzRMUXJCVUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InF0RFRyTWtZSGl2TXFQbXdteWZIUDgxZTZIWFBFNzlPWkxyT0E0bjk1eTIvZTJzWjE4T1FmV0pIdkhaVXZiTG5tOHNYNnBEMitGa1pYOHRyRkhuQUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLUTBYc3pZNE9wMWU5S3ZrRythVnA1a2FiZjZkejU4aWRmdXA5dmJHSjkyRk96K09mWTZOendrdlRWaEJteFFpcDNUQzk4WFRyRERndHJjdXpsOXVpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDEwMzkzNjc6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3BiMndSRUZTbmpXODF6ZjB3SUllbzZGVHRtWnZoSVNkRkNndUMwS3dWQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYxNjYzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMDEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "| enjoy your time| this is *BLUE DEMON* 𝐌𝐃",
  author: process.env.PACK_AUTHER || "BLUE",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BLUE-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "BLUE DEMON",
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

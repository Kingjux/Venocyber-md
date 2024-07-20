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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BoYkJGTzNWOGV2dFJlR1U0WFV0RmtDTFJzT3dpckc0OUNMSTZ5VUIxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXovcDU3Qnk5ck4xTkw5Q2RkMU5CMWRZaHZ1NFlGZXBuUWx4ZEdlVXoybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSC9Ga0hoTXlhL2pYa2hIaE00K1hiUStNbUo3Zk5wSTM0Rk5ncWs3MTNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMHZPc0xpc0RZSUV6YjkyaWs3MCtjRFlkTzFndmo0b2VkVDdoZ1NjQVRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJMkRaQk9tZGJpMzVmSTF4RmVoTG14YjcvaHgwRExja29WY2xEV1dhbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF1aFlMRFp3ZCt4Z1dzdmMzb3JLZWQrNC9vczV4OWx1em85a2ZNQ1l6d2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkp2VGExM0tlZDhiYWV5OWpSa1lNYkZsNXJtdU85WitwUmp0MERkN0NVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibll2S3d0c2JtYmhqR0cvV09JV1dINFQ5SlNwclJDY1FMeXM4d2pQV21BQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FdmdjajlDUGRXeU95STkxdHI0MGxwV2Y3dXF6bnRoeTdTRTBraUZvUnZLaFdudWx3TFNUc0o0bExXbDg1RkdxclY1MTZBUFRyaUkzT1VKUkNBcERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJkakhaV0VpVWgxbkdNQmkxckZWOWdhdlN2MytGT0F0aWIxckVIeXpBY2JZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUzNjcyMDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA5RUZDOUJBQkVDMTI4MzM2MUJCNzI5MDZBMUMzNEY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0OTQ1OTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUzNjcyMDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNBOTEyMzU0N0E0RkE1MDQ2NUJFOUU4NUI1NTFEQzgyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0OTQ1OTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImwyVm9WYWFBU0RDZDhsVGhNdS1sQkEiLCJwaG9uZUlkIjoiNTEyMDQ1YzAtOTI3OS00N2QzLWIwMjktYTY3MTIxOGViMGFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5LY2hOYlhIYnhGdnBoV1dZS3NhdnZlUHNvRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQM2Q5U0hRYjBQQ3JQVXh0Q0JQS2lxK04rc1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzZKRjVCUTYiLCJtZSI6eyJpZCI6Ijk0NzUzNjcyMDc5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUlVTSCDwn4ex8J+HsCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVRQdGVRREVMSFk3N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXFDdDRKdmhadEhINUZKV1RaRFF1YW9qVkRnVXRtaDdwQkNiQlJLenBHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTnZUSU9xcmpOV1Ewc2RaRjUyUHVITXIzdjVyWWkwSCtqOVVLZEk1UGwwSWd6S0I0NTVtckh1NEkySlcyVk5TNVlod21iemkxOTVrV1paeFNuamJyQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjYxUk5pY2NVTnJCSFU1NzV2bXhCL25oRUl1YUdIWmMrTXFyUEl1cDA1RHJIbjlSdVcyZHpjU1NjaHhTb2hmb0VHQnZHM2xuQWN2QmpKWDhTUHFSbUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTM2NzIwNzk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacWdyZUNiNFdiUngrUlNWazJRMExtcUkxUTRGTFpvZTZRUW13VVNzNlJpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDk0NTkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdZdiJ9"
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

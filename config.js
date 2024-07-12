you//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENCdW9sWlcwRERSNG5WcjhHK1hGS3A0YVBjWlNwOHgrSnJuNXV1cHgzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09HQzFCOWJYWlVJM01kTW5MVWV3MEpMc3FnazVPRkg1N1I3TkcxcWhVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QklmZ1RDTWJkd3Y1bkNJMVV5SWhkTTNYdTFoWlJweXlMb2RzSFl4dzEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRblBoUjZWY0g4VW51YlFjUmorRnpLdXRiL09IdlNPL0gvWmVWemhnWFJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCcW1YWndGbFYzTitBelkvemdjMmxqTFpUcWZaczZSTkx2eURaZ1JEV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZhOHV0bmdxTVlKM2pGUDh6bWE5Y3hPZ29IUmFRM3FPVTJZbGMweVo3bWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVDYWd1Q2pyUWxoWDZzNHRxMDhpaWp6WGtWVkplaHpWdGJ1TjByVURVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHhvOWI2VDIzSlUyeThqOUJZOUNPU2xrSFBHd2QxWjY0ZUN0Zm9HVHhqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ3cDhWb2U3MmtHQ3dKeHBta0xIOGErbkdVdWh1YWFzNWdpRXd0MUlBeUxYeDBqZmpwRVp2N09rRURNUjRkakpSZFd5U2drZjJ3dktVR2gyMkpYWkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiIvR1lUTmpKTjVOK2Z5YVhYS1VDaFg5MThpdnA5eWFIRDZQRlpJN3Z6dXZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFN0FENjEwQTkyNjBCQTA0ODhDREZDNEZBQTU3MUNFMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNzg2MjI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTMwQ0FBQkM1RjVGREFCMTlBQzk0NEM2ODI4MTg3M0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDc4NjIyNn1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUWkydy1lQzRSNU9VOEFfRzQ4RGFFdyIsInBob25lSWQiOiI5MDQ5ZjA1OC1hNDYzLTRkOWUtYWQxNi0yZjRiZTRjZGYzM2YiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazV3UHc1TVA5a2h2VFMyd1dHalBkZStQeGhFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJRZkdLRGNQQ0VZWGw5SEZkcVVRYjdmemhTVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5OVhOUUU5RCIsIm1lIjp7ImlkIjoiMjU0MTEyMTkyMTE5OjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNhc2V5cmhvZGVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZm94ellRb2JyRXRBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTT2R3ZXlBeWxWSW5hKytCYUs5QUVlRFFCWDRoVEZJamowakNWWHIwakdBPSIsImFjY291bnRTaWduYXR1cmUiOiJRQ01sUW5IUU8yckNaL3VKaDl5ajJQVWE3M2lOeXpvWHFmVzJMRDVwMklNcml5WjJRQ2FRU3JGbmJTbkNuRFFnbjcvNjFDWUg2YXZsSE0vUTRPYWxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRkc2Z3NJNHRGYk5ySVJ4QVA0L0liNE1VRU5IS3F3UlM0WjdsWWE0VGljdkZWelN4c1dPUXY1REpsME5oRWcyWGI2TVhWKzcxZU84S24rWU16dnpDQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIxOTIxMTk6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWpuY0hzZ01wVlNKMnZ2Z1dpdlFCSGcwQVYrSVV4U0k0OUl3bFY2OUl4ZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDc4NjIyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZS8ifQ=="
global.SESSION_ID =
  process.env.SESSION_ID ||
  
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
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

const os = require("os");
const fs = require("fs");
const Config = require("../config");
const translatte = require("translatte");
const cron = require("node-cron");
var cronStart = false;
const cpuModel = os.cpus()[0].model;
const axios = require("axios");
let {
  fancytext,
  tlang,
  runtime,
  formatp,
  prefix,
  tiny,
  smd,
  bot,
} = require("../lib");
const util = require("util");
const { cmd } = require("../lib/plugins");
const astro_patch = require("../lib/plugins");
const events = astro_patch;
const { exec } = require("child_process");
let s_ser = true;
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const trend_usage = (() => {
  const trendNumber = ((min, max) => {
    const random = () => Math.random();
    const floor = (x) => Math.floor(x);
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const randomValue = multiply(random(), subtract(max, min + 1));
    const result = add(floor(randomValue), min);
    return result;
  })(1, 99);
  return trendNumber;
})();

const database_info = (() => {
  const dbNumber = ((min, max) => {
    const random = () => Math.random();
    const floor = (x) => Math.floor(x);
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const randomValue = multiply(random(), subtract(max, min + 1));
    const result = add(floor(randomValue), min);
    return result;
  })(1, 499);
  return dbNumber;
})();
// Execute dmidecode command
exec('dmidecode -t memory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing dmidecode: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }

  // Parse the output to extract RAM information
  const ramInfo = parseDmiDecodeOutput(stdout);
  console.log("RAM Information:", ramInfo);
});

// Function to parse dmidecode output
function parseDmiDecodeOutput(output) {
  const ramInfo = {};

  // Example parsing logic, adjust as needed based on the output format
  // Here, we're assuming each RAM module starts with "Memory Device"
  const memoryDevices = output.split('Memory Device');

  for (let i = 1; i < memoryDevices.length; i++) {
    const deviceInfo = memoryDevices[i];
    // Extract relevant information from deviceInfo and populate ramInfo object
    // Example: Extracting size, type, speed, etc.
  }

  return ramInfo;
}
/*
smd(
  {
    cmdname: "update",
    type: "owner",
    info: "Installs external modules or plugins from a provided URL or a predefined list.",
    fromMe: s_ser,
    filename: __filename,
    use: "<gist url>",
  },
  async (message, args) => {
    try {
      let pluginNames = [];
      let pluginUrls = {};
      let pluginExtensions = {};

      try {
        const { data: response } = await axios.get(
          "https://gist.githubusercontent.com/Astropeda/c87ac3fa5ce0017deb8080544de9bd26/raw"
        );
        pluginUrls = {
          ...(typeof response.external === "object" ? response.external : {}),
          ...(typeof response.plugins === "object" ? response.plugins : {}),
        };
        pluginNames = response.names;
        pluginExtensions =
          response.extension && typeof response.extension === "object"
            ? response.extension
            : {};
      } catch (error) {
        pluginUrls = {};
      }

      pluginNames = Array.isArray(pluginNames) ? pluginNames : [];

      if (bot && bot.plugins) {
        await send.message("Downloading Update");
        pluginUrls = { ...bot.plugins, ...pluginUrls };
      }

      let url = args ? args : message.quoted ? message.quoted.text : "";
      if (url.toLowerCase().includes("https")) {
        try {
          const { data: pluginCode } = await axios.get(url);
          const pluginName = url.split("/").pop().split(".")[0];
          const pluginFileName =
            pluginName +
            (pluginExtensions[pluginName] &&
            /.js|.smd/gi.test(pluginExtensions[pluginName])
              ? pluginExtensions[pluginName]
              : ".js");
          const pluginDir =
            plugin_dir +
            (pluginFileName.includes("/") ? pluginFileName.split("/")[0] : "");

          if (!fs.existsSync(pluginDir)) {
            fs.mkdirSync(pluginDir, { recursive: true });
          }

          fs.writeFileSync(plugin_dir + pluginFileName, pluginCode, "utf8");
          log(" " + pluginName + " ✔️");
        } catch (error) {
          log(" " + pluginName + " ❌");
        }
      } else if (Object.keys(pluginUrls || {}).length > 0) {
        const externalPlugins = pluginUrls;

        for (const pluginName in externalPlugins) {
          try {
            const pluginUrl = externalPlugins[pluginName].includes("raw")
              ? externalPlugins[pluginName]
              : externalPlugins[pluginName] + "/raw";
            const { data: pluginCode } = await axios.get(pluginUrl);

            if (pluginCode) {
              const pluginFileName =
                pluginName +
                (pluginExtensions[pluginName] &&
                /.js|.smd/gi.test(pluginExtensions[pluginName])
                  ? pluginExtensions[pluginName]
                  : ".js");
              const pluginDir =
                plugin_dir +
                (pluginFileName.includes("/")
                  ? pluginFileName.split("/")[0]
                  : "");

              if (!fs.existsSync(pluginDir)) {
                fs.mkdirSync(pluginDir, { recursive: true });
              }

              fs.writeFileSync(plugin_dir + pluginFileName, pluginCode, "utf8");

              if (!pluginNames.includes(pluginName)) {
                log(" " + pluginName + " ✔️");
              }
            }
          } catch (error) {
            if (!pluginNames.includes(pluginName)) {
              log(" " + pluginName + " ❌");
            }
          }
        }

        return await message.send("`wasi-MD UPDATE WAS SUCCESSFULL ✅`");
      } else {
        return await message.send(
          "*Auto Updated Failed, Unable to Download Update Please Manually Do It*"
        );
      }
    } catch (error) {
      log("❌ ERROR INSTALATION PLUGINS ", error);
    }
  }
); */
astro_patch.smd(
  {
    cmdname: "menu",
    desc: "Help list",
    react: "📁",
    desc: "To show all avaiable commands.",
    type: "user",
    filename: __filename,
  },
  async (message, input) => {
    try {
      const { commands } = require("../lib");
      if (input.split(" ")[0]) {
        let commandDetails = [];
        const foundCommand = commands.find(
          (cmd) => cmd.pattern === input.split(" ")[0].toLowerCase()
        );
        if (foundCommand) {
          commandDetails.push("*🔉Command:* " + foundCommand.pattern);
          if (foundCommand.category) {
            commandDetails.push("*💁Category:* " + foundCommand.category);
          }
          if (foundCommand.alias && foundCommand.alias[0]) {
            commandDetails.push("*💁Alias:* " + foundCommand.alias.join(", "));
          }
          if (foundCommand.desc) {
            commandDetails.push("*💁Description:* " + foundCommand.desc);
          }
          if (foundCommand.use) {
            commandDetails.push(
              "*〽️Usage:*\n ```" +
                prefix +
                foundCommand.pattern +
                " " +
                foundCommand.use +
                "```"
            );
          }
          if (foundCommand.usage) {
            commandDetails.push(
              "*〽️Usage:*\n ```" + foundCommand.usage + "```"
            );
          }
          await message.reply(commandDetails.join("\n"));
        }
      }

      let menuThemeType;
      let menuThemeHeader;
      let menuThemeFooter;
      let menuThemeCategoryHeader;
      let menuThemeCategoryFooter;
      let menuThemeCommandPrefix;
      let menuThemeCommandFooter;

      if (Config.menu === "") {
        menuThemeType = Math.floor(Math.random() * 4) + 1;
      }

      if (
        menuThemeType === 1 ||
        Config.menu.trim().startsWith("1") ||
        Config.menu.toLowerCase().includes("menu1")
      ) {
        menuThemeHeader = "╭━━━〔 *" + Config.botname + "* 〕━━━┈⊷";
        menuThemeCommandPrefix = "┃☆│";
        menuThemeFooter = "┃☆╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷";
        menuThemeCategoryHeader = "╭─────────────┈⊷\n│「";
        menuThemeCategoryFooter = "」\n╰┬────────────┈⊷";
        menuThemeCommandPrefix = "││◦☆";
        menuThemeCommandFooter = "│╰────────────┈⊷\n╰─────────────┈⊷";
      } else if (
        menuThemeType === 2 ||
        Config.menu.trim().startsWith("2") ||
        Config.menu.toLowerCase().includes("menu2")
      ) {
        menuThemeHeader = "╭═══ *" + Config.botname + "* ═══⊷\n┃☆╭──────────────";
        menuThemeCommandPrefix = "┃☆│";
        menuThemeFooter = "┃☆╰───────────────\n╰═════════════════⊷";
        menuThemeCategoryHeader = "╭─❏";
        menuThemeCategoryFooter = "❏";
        menuThemeCommandPrefix = "┃☆│";
        menuThemeCommandFooter = "┃☆╰───────────────\n╰═════════════════⊷";
      } else {
        menuThemeHeader = "╭〘  " + Config.botname + "  〙";
        menuThemeCommandPrefix = "│ │";
        menuThemeFooter = "╰═══════════════⊷";
        menuThemeCategoryHeader = "╭─❍";
        menuThemeCategoryFooter = "══⊷❍";
        menuThemeCommandPrefix = "│";
        menuThemeCommandFooter = "╰════════════─⊷";
      }

      const categorizedCommands = {};
      commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          if (!categorizedCommands[command.category]) {
            categorizedCommands[command.category] = [];
          }
          categorizedCommands[command.category].push(command.pattern);
        }
      });

      const currentTime = message.time;
      const currentDate = message.date;
      let menuText = `
${menuThemeHeader}
${menuThemeCommandPrefix} *ᴏᴡɴᴇʀ:* ${Config.ownername}
${menuThemeCommandPrefix} *ᴜᴘᴛɪᴍᴇ:* ${runtime(process.uptime())}
${menuThemeCommandPrefix} *ʀᴀᴍ ᴜsᴀɢᴇ:* ${formatp(os.totalmem() - os.freemem())}
${menuThemeCommandPrefix} *ᴛɪᴍᴇ:* ${currentTime}
${menuThemeCommandPrefix} *ᴅᴀᴛᴇ:* ${currentDate}
${menuThemeCommandPrefix} *ᴄᴏᴍᴍᴀɴᴅs:* ${commands.length}
${menuThemeCommandPrefix} *ᴜsᴀɢᴇ ᴛʀᴇɴᴅ:* ${trend_usage}
${menuThemeCommandPrefix} *ᴅᴀᴛᴀʙᴀsᴇ:* ${database_info}
${menuThemeFooter}                         
*𝚆𝙰𝚂𝙸-𝙼𝙳-𝚅2*
${readmore}`;

      for (const category in categorizedCommands) {
        menuText += `
        ${menuThemeCategoryHeader} *${tiny(
          category
        )}* ${menuThemeCategoryFooter}\n`;
        if (input.toLowerCase() === category.toLowerCase()) {
          menuText = `${menuThemeCategoryHeader} *${tiny(
            category
          )}* ${menuThemeCategoryFooter}\n`;
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${Config.HANDLERS} ${tiny(
              command,
              1
            )}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
          break;
        } else {
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${Config.HANDLERS} ${tiny(
              command,
              1
            )}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
        }
      }
      menuText += Config.caption;

      const messageOptions = {
        caption: menuText,
        ephemeralExpiration: 30,
      };
      return await message.sendUi(message.chat, messageOptions, message);
    } catch (error) {
      await message.error(error + "\nCommand: menu", error);
    }
  }
);
smd(
  {
    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (_0x22514a) => {
    try {
      let _0x20ed34 = (
        "\n*➮ᴜᴘ ᴛɪᴍᴇ :* " +
        runtime(process.uptime()) +
        "\n*➮ᴛᴏᴅᴀʏ ɪs :* " +
        _0x22514a.date +
        "\n*➮ɴᴏᴡ ᴛɪᴍᴇ :* " +
        _0x22514a.time +
        "\n\n➮Fᴏᴜɴᴅᴇʀ- Itxxwasi Team\n➮Oᴡɴᴇʀ - " +
        Config.ownername +
        "\n➮Nᴜᴍ - " +
        owner.split(",")[0] +
        "\n➮Mᴇᴍᴏ - " +
        formatp(os.totalmem() - os.freemem()) +
        "/" +
        formatp(os.totalmem()) +
        "\n\n *🧑‍💻 :* ᴡᴀsɪᴍᴅ-ᴠ2\n\n" +
        readmore +
        "\n╭──❰ *ALL MENU* ❱\n│🏮 Lɪꜱᴛ\n│🏮 Cᴀᴛᴇɢᴏʀʏ\n│🏮 Hᴇʟᴘ\n│🏮 Aʟɪᴠᴇ\n│🏮 Uᴘᴛɪᴍᴇ\n│🏮 Wᴇᴀᴛʜᴇʀ\n│🏮 Lɪɴᴋ\n│🏮 Cᴘᴜ\n│🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ\n╰─────────────⦁"
      ).trim();
      return await _0x22514a.bot.sendUi(_0x22514a.from, {
        caption: _0x20ed34,
      });
    } catch (_0x450fce) {
      await _0x22514a.error(_0x450fce + "\nCommand:menus", _0x450fce);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To check ping",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0x5d887, _0x291296, { Void: _0x43ee74 }) => {
    try {
      if (!_0x291296) {
        return await _0x5d887.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }
      let _0x584a9e = _0x291296.split(",");
      var _0x5b0dfd;
      var _0x3be11d;
      let _0x17bd8a = false;
      if (_0x5d887.quoted) {
        let _0x1f29ea = _0x5d887.quoted.mtype;
        if (_0x1f29ea == "stickerMessage" && _0x291296) {
          _0x17bd8a = true;
          _0x5b0dfd = _0x291296.split(" ")[0];
          _0x3be11d = "sticker-" + _0x5d887.quoted.msg.fileSha256;
        }
      }
      if (!_0x17bd8a && _0x584a9e.length > 1) {
        _0x3be11d = _0x584a9e[0].trim().toLowerCase();
        _0x5b0dfd = _0x584a9e[1].trim().toLowerCase();
      } else if (!_0x17bd8a) {
        return await _0x5d887.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }
      if (_0x3be11d.length < 1) {
        return await _0x5d887.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }
      if (global.setCmdAlias[_0x3be11d]) {
        return await _0x5d887.send(
          '*_"' +
            (_0x17bd8a ? "Given Sticker" : _0x3be11d) +
            '" Already set for "' +
            global.setCmdAlias[_0x3be11d] +
            '" Cmd, Please try another ' +
            (_0x17bd8a ? "Sticker" : "Name") +
            "_*"
        );
      }
      const _0x8e739e =
        astro_patch.commands.find(
          (_0xd9686c) => _0xd9686c.pattern === _0x5b0dfd
        ) ||
        astro_patch.commands.find(
          (_0x31fef3) => _0x31fef3.alias && _0x31fef3.alias.includes(_0x5b0dfd)
        );
      if (_0x8e739e) {
        global.setCmdAlias[_0x3be11d] = _0x8e739e.pattern;
        return await _0x5d887.send(
          '*_Cmd "' +
            global.setCmdAlias[_0x3be11d] +
            '" Succesfully set to "' +
            (_0x17bd8a ? "Sticker" : _0x3be11d) +
            '"._*\n*_These all names are reset, If bot restart_*'
        );
      } else {
        return await _0x5d887.send(
          "*_Provided Cmd( " +
            _0x5b0dfd +
            ") not found in bot cmds. Please Provide Valid cmd Name_*"
        );
      }
    } catch (_0x13e052) {
      await _0x5d887.error(_0x13e052 + "\nCommand:setcmd", _0x13e052);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To check ping",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0xcfb3ed, _0x5c72db, { Void: _0x5c00fc }) => {
    try {
      let _0xf7499f = _0x5c72db
        ? _0x5c72db.split(" ")[0].trim().toLowerCase()
        : "";
      let _0x5dd184 = false;
      if (_0xcfb3ed.quoted) {
        if (_0xcfb3ed.quoted.mtype == "stickerMessage") {
          _0x5dd184 = true;
          _0xf7499f = "sticker-" + _0xcfb3ed.quoted.msg.fileSha256;
        } else if (!_0x5c72db) {
          return await _0xcfb3ed.send(
            "*_Please reply to a Sticker that set for a Cmd_*"
          );
        }
      } else if (!_0x5c72db) {
        return await _0xcfb3ed.send(
          "*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }
      if (global.setCmdAlias[_0xf7499f]) {
        await _0xcfb3ed.send(
          '*_"' +
            (_0x5dd184 ? "Given Sticker" : _0xf7499f) +
            '" deleted Succesfully at "' +
            global.setCmdAlias[_0xf7499f] +
            '" cmd_*'
        );
        delete global.setCmdAlias[_0xf7499f];
        return;
      } else {
        return await _0xcfb3ed.send(
          '*_"' +
            (_0x5dd184 ? "Given Sticker" : _0xf7499f) +
            '" not Set for any cmd._*\n *_Please Provide Valid ' +
            (_0x5dd184 ? "Sticker" : "cmd Name") +
            " to delete_*"
        );
      }
    } catch (_0x2252fb) {
      await _0xcfb3ed.error(_0x2252fb + "\nCommand:delcmd", _0x2252fb);
    }
  }
);
astro_patch.smd(
  {
    pattern: "ping",
    desc: "To check ping",
    category: "user",
    filename: __filename,
  },
  async (context) => {
    const startTime = new Date().getTime();
    const { key: messageKey } = await context.reply("*hmm...*");
    const endTime = new Date().getTime();
    const pingTime = endTime - startTime;
    await context.send(
      `*𝘓𝘢𝘵𝘦𝘯𝘤𝘺.................🙆‍♂️: ${pingTime} ᴍs*`,
      { edit: messageKey },
      "",
      context
    );
  }
);
smd(
  {
    pattern: "LIV",
    desc: "Shows system status with different designs.",
    category: "general",
    filename: __filename,
    use: "LIV",
  },
  async (message, input) => {
    try {
      const start = new Date().getTime();
      const designs = [
        async () => {
          const imageBuffer = await axios.get(
            "https://telegra.ph/file/d9fb019f63ef3b1d47c6e.jpg",
            {
              responseType: "arraybuffer",
            }
          );

          const quoteResponse = await axios.get(
            "https://api.maher-zubair.tech/misc/quote"
          );
          const quote = quoteResponse.data;
          if (!quote || quote.status !== 200) {
            return await message.reply("*Failed to fetch a quote.*");
          }

          const quoteText = `\n\n*"${quote.result.body}"*\n_- ${quote.result.author}_`;
          const end = new Date().getTime();
          const pingSeconds = (end - start) / 1000;
          const captionText = `𝘞𝘈𝘚𝘐 𝘔𝘋 𝘝2\n\n*Ping:* ${pingSeconds} seconds${quoteText}\n\n𝚆𝙰𝚂𝙸 𝙼𝙳 𝚅𝟸`;

          return { image: imageBuffer.data, caption: captionText };
        },
        async () => {
          const imageBuffer = await axios.get(
            "https://telegra.ph/file/d9fb019f63ef3b1d47c6e.jpg",
            {
              responseType: "arraybuffer",
            }
          );

          const factResponse = await axios.get(
            "https://api.maher-zubair.tech/misc/fact"
          );
          const fact = factResponse.data;
          if (!fact || fact.status !== 200) {
            return await message.reply("*Failed to fetch a fact.*");
          }

          const end = new Date().getTime();
          const pingSeconds = (end - start) / 1000;
          const captionText = `𝚆𝙰𝚂𝙸 𝙼𝙳 𝚅𝟸 \n\n*Ping:* ${pingSeconds} seconds\n\n*Fact:*\n${fact.result.fact}\n\n𝚆𝙰𝚂𝙸 𝙼𝙳 𝚅𝟸`;

          return { image: imageBuffer.data, caption: captionText };
        },
        async () => {
          const imageBuffer = await axios.get(
            "https://telegra.ph/file/d9fb019f63ef3b1d47c6e.jpg",
            {
              responseType: "arraybuffer",
            }
          );

          const lineResponse = await axios.get(
            "https://api.maher-zubair.tech/misc/lines"
          );
          const line = lineResponse.data;
          if (!line || line.status !== 200) {
            return await message.reply("*Failed to fetch a line.*");
          }

          const end = new Date().getTime();
          const pingSeconds = (end - start) / 1000;
          const captionText = `𝘞𝘈𝘚𝘐-𝘔𝘋-𝘝2\n\n*Ping:* ${pingSeconds} seconds\n\n*Line:*\n${line.result}\n\n𝗕𝗬-𝗪𝗔𝗦𝗜-𝗦𝗘𝗥`;

          return { image: imageBuffer.data, caption: captionText };
        },
      ];

      const randomDesign = designs[Math.floor(Math.random() * designs.length)];
      const messageData = await randomDesign();

      const message_options = {
        quoted: message,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
        },
      };

      return await message.bot.sendUi(
        message.chat,
        messageData,
        message_options
      );
    } catch (error) {
      await message.error(
        error + "\n\nCommand: LIV",
        error,
        "*Failed to show status.*"
      );
    }
  }
);
smd(
  {
    pattern: "runtime",
    desc: "Show the uptime, RAM usage, and CPU name of the process.",
    category: "general",
    filename: __filename,
  },
  async (m) => {
    try {
      const uptime = process.uptime();
      const uptimeHours = Math.floor(uptime / 3600);
      const uptimeMinutes = Math.floor((uptime % 3600) / 60);
      const uptimeSeconds = Math.floor(uptime % 60);

      const ramUsage = process.memoryUsage().heapTotal / 1024 / 1024;

      const message = `*𝗪𝗔𝗦𝗜-𝗠𝗗-𝗩2-𝗜𝗡-𝗥𝗨𝗡𝗡𝗜𝗡𝗚-𝗙𝗥𝗢𝗠:* ${uptimeHours}h ${uptimeMinutes}ᴍ ${uptimeSeconds}s\n \t_ʜᴇʀᴇ's ᴍᴏʀᴇ ɪɴғᴏ_\n*ʀᴀᴍ ᴜsᴀɢᴇ:* ${ramUsage.toFixed(2)} MB\n*ᴄᴘᴜ ɴᴀᴍᴇ:* ${cpuModel}`;
      const contextInfo = {
        isForwarded: true,
        forwardingScore: 999,
        title: "wasi MD Running Since",
        body: message,
        footerText: "wasi MD 2024",
        isSendNotificationMsg: true,
        mentionedJid: [],
      };

      await m.bot.sendMessage(m.chat, { text: message, contextInfo }, { quoted: null });
    } catch (e) {
      await m.error(`${e}\n\ncommand: runtime`, e);
    }
  }
);
astro_patch.cmd({
    pattern: "list",
    desc: "list menu",
    category: "general",
    react: "📄"
  }, async _0x1d5ddc => {
    try {
      const {
        commands: _0x7cfe13
      } = require("../lib");
      let _0x95885d = "\n\t*𝗪𝗔𝗦𝗜-𝗠𝗗-𝗩2-𝗖𝗠𝗗-𝗜𝗡𝗙𝗢*  \n";
      for (let _0x2bd72c = 0; _0x2bd72c < _0x7cfe13.length; _0x2bd72c++) {
        if (_0x7cfe13[_0x2bd72c].pattern == undefined) {
          continue;
        }
        _0x95885d += "*" + (_0x2bd72c + 1) + " " + fancytext(_0x7cfe13[_0x2bd72c].pattern, 1) + "*\n";
        _0x95885d += "  " + fancytext(_0x7cfe13[_0x2bd72c].desc, 1) + "\n";
      }
      return await _0x1d5ddc.sendUi(_0x1d5ddc.chat, {
        caption: _0x95885d + Config.caption
      });
    } catch (_0x3e730d) {
      await _0x1d5ddc.error(_0x3e730d + "\nCommand:list", _0x3e730d);
    }
  });
astro_patch.smd(
  {
    pattern: "owner",
    desc: "To check ping",
    category: "user",
    filename: __filename,
  },
  async (_0x563719) => {
    try {
      const _0x389599 =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        Config.ownername +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        global.owner?.split(",")[0] +
        ":+" +
        global.owner?.split(",")[0] +
        "\nEND:VCARD";
      let _0x140248 = {
        contacts: {
          displayName: Config.ownername,
          contacts: [
            {
              vcard: _0x389599,
            },
          ],
        },
        contextInfo: {
          externalAdReply: {
            title: Config.ownername,
            body: "Touch here.",
            renderLargerThumbnail: true,
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 1,
            mediaUrl: "",
            sourceUrl:
              "https://wa.me/+" +
              global.owner?.split(",")[0] +
              "?text=Hii+" +
              Config.ownername,
          },
        },
      };
      return await _0x563719.sendMessage(_0x563719.jid, _0x140248, {
        quoted: _0x563719,
      });
    } catch (_0x26ce8b) {
      await _0x563719.error(_0x26ce8b + "\nCommand:owner", _0x26ce8b);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "trt",
    alias: ["translate"],
    category: "user",
    filename: __filename,
    use: "< text >",
    desc: "Translate's given text in desird language.",
  },
  async (_0x15cc76, _0xa38a39) => {
    try {
      let _0x4b3f03 = _0xa38a39 ? _0xa38a39.split(" ")[0].toLowerCase() : "en";
      if (!_0x15cc76.reply_text) {
        var _0x5eb566 = _0xa38a39.replace(_0x4b3f03, "")?.trim() || false;
      } else {
        var _0x5eb566 = _0x15cc76.reply_text;
      }
      if (!_0x5eb566) {
        return await _0x15cc76.reply(
          "*Please Give Me Text. Example: _" + prefix + "trt en Who are you_*"
        );
      }
      var _0x443df8 = await translatte(_0x5eb566, {
        from: "auto",
        to: _0x4b3f03,
      });
      if ("text" in _0x443df8) {
        return await _0x15cc76.reply(_0x443df8.text);
      }
    } catch (_0xfe5ca7) {
      await _0x15cc76.error(_0xfe5ca7 + "\n\ncommand trt", _0xfe5ca7);
    }
  }
);
const readDirectory = (_0x2ccc1f) => {
  return new Promise((_0x23d4da, _0x41ae43) => {
    fs.readdir(_0x2ccc1f, (_0x4adeb4, _0x1ec69) => {
      if (_0x4adeb4) {
        _0x41ae43("Error reading directory");
      } else {
        _0x23d4da(_0x1ec69);
      }
    });
  });
};
astro_patch.cmd(
  {
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0x1ec907, _0x3f7dbe) => {
    try {
      if (!_0x3f7dbe) {
        return _0x1ec907.reply("*Uhh PLease, Provide A Command/Directory*");
      }
      if (_0x3f7dbe.startsWith(".")) {
        let _0x4680aa = "*------------- FILE MANAGER -------------*\n";
        try {
          const _0x297689 = await readDirectory(_0x3f7dbe);
          _0x297689.forEach((_0x1709d6) => {
            _0x4680aa += _0x1709d6 + "\n";
          });
          await _0x1ec907.reply(_0x4680aa.toString());
        } catch (_0x311055) {
          _0x1ec907.reply(_0x311055);
        }
        return;
      }
      const { commands: _0x4f7532 } = require("../lib");
      let _0x2c8ec8 = [];
      let _0x4984d5 = _0x3f7dbe.split(" ")[0].toLowerCase().trim();
      let _0x1df566 =
        events.commands.find((_0x3d28be) => _0x3d28be.pattern === _0x4984d5) ||
        events.commands.find(
          (_0x14526a) => _0x14526a.alias && _0x14526a.alias.includes(_0x4984d5)
        );
      if (!_0x1df566) {
        return await _0x1ec907.reply("*❌No Such commands.*");
      }
      _0x2c8ec8.push("*🍁Command:* " + _0x1df566.pattern);
      if (_0x1df566.category) {
        _0x2c8ec8.push("*🧩Type:* " + _0x1df566.category);
      }
      if (_0x1df566.alias && _0x1df566.alias[0]) {
        _0x2c8ec8.push("*🧩Alias:* " + _0x1df566.alias.join(", "));
      }
      if (_0x1df566.desc) {
        _0x2c8ec8.push("*✨Description:* " + _0x1df566.desc);
      }
      if (_0x1df566.use) {
        _0x2c8ec8.push(
          "*〽️Usa:*\n ```" +
            prefix +
            _0x1df566.pattern +
            " " +
            _0x1df566.use +
            "```"
        );
      }
      if (_0x1df566.usage) {
        _0x2c8ec8.push("*〽️Usage:*\n ```" + _0x1df566.usage + "```");
      }
      if (_0x1df566.filename) {
        _0x2c8ec8.push("*✨FileName:* " + _0x1df566.filename);
      }
      try {
        if (
          _0x3f7dbe.includes("function") &&
          _0x1df566.function &&
          _0x1ec907.isAstro &&
          _0x1df566.pattern !== "file"
        ) {
          _0x2c8ec8.push("*🧩Function:* " + _0x1df566.function.toString());
        }
      } catch {}
      await _0x1ec907.reply(_0x2c8ec8.join("\n"));
    } catch (_0xe61d1f) {
      await _0x1ec907.error(_0xe61d1f + "\nCommand:file", _0xe61d1f);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "eval",
    alias: ["$"],
    category: "owner",
    filename: __filename,
    fromMe: true,
    desc: "Runs js code on node server.",
    use: "< run code >",
    dontAddCommandList: true,
  },
  async (
    _0x5a9ab6,
    _0x3b225e,
    { isCreator: _0x5aa140, cmdName: _0x83bdbc, Void: _0x4d5314 }
  ) => {
    try {
      if (!_0x3b225e) {
        return _0x5a9ab6.reply("*Provide A Query To Run Master*");
      }
      let _0x1cffc8 = eval("const a = async()=>{\n" + _0x3b225e + "\n}\na()");
      if (typeof _0x1cffc8 === "object") {
        await _0x5a9ab6.reply(JSON.stringify(_0x1cffc8));
      } else {
        await _0x5a9ab6.reply(_0x1cffc8.toString());
      }
    } catch (_0x1fb40e) {
      return await _0x5a9ab6.reply(_0x1fb40e.toString());
    }
  }
);
astro_patch.cmd(
  {
    pattern: "shell",
    category: "owner",
    filename: __filename,
    fromMe: true,
    desc: "Runs command in Heroku(server) shell.",
    use: "<shell cmds | ls,cd >",
    dontAddCommandList: true,
  },
  async (_0x32b2cc, _0x4c791b) => {
    try {
      if (!_0x32b2cc.isCreator) {
        return _0x32b2cc.reply(tlang().owner);
      }
      if (!_0x4c791b) {
        return _0x32b2cc.reply("*Uhh PLease, Provide A Command to Run Heroku*");
      }
      exec(_0x4c791b, (_0x44a722, _0x2688ce) => {
        if (_0x44a722) {
          return _0x32b2cc.reply(
            "----" + tlang().title + "----\n\n" + _0x44a722
          );
        }
        if (_0x2688ce) {
          return _0x32b2cc.reply(
            "----" + tlang().title + "----\n\n" + _0x2688ce
          );
        }
      });
    } catch (_0x2b0925) {
      await _0x32b2cc.error(_0x2b0925 + "\n\ncommand shell", _0x2b0925);
    }
  }
);
function _0x213c(_0x345a66, _0x1f74b8) {
  const _0x593b05 = _0x593b();
  _0x213c = function (_0x213cbe, _0x58c23c) {
    _0x213cbe = _0x213cbe - 353;
    let _0x3d37ed = _0x593b05[_0x213cbe];
    return _0x3d37ed;
  };
  return _0x213c(_0x345a66, _0x1f74b8);
}
function _0x593b() {
  const _0x579036 = [
    "6522QmnZgz",
    "readdir",
    "toFixed",
    "unlink",
    "*/15 * * * *",
    "category",
    "reply_message",
    "trim",
    "startsWith",
    "COMMANDS*",
    "forEach",
    "```\n\n",
    "toLowerCase",
    "help",
    "```",
    "57304VUSDcZ",
    "276864ouXpfJ",
    "7659558aRJrDI",
    "66413FlbkYf",
    "from",
    "includes",
    "sendUi",
    "28JDktra",
    "isPublic",
    "desc",
    "length",
    "replace",
    "use",
    "dontAddCommandList",
    "\n*🧩Info:* ```",
    "schedule",
    "_COMMANDS*  \n┗━━━━━━━━━━━━━━━━━━━━━━━\n\n\n",
    "text",
    "┏━━━━━━━━━━━━━━━━━━━━━━━\n┃\t𝘄𝗮𝘀𝗶-𝗠𝗱_",
    "2716190HSgAcg",
    "info",
    "endsWith",
    "find",
    "send",
    "1072iiXGaj",
    "pattern",
    "split",
    "../lib",
    "toUpperCase",
    "MENU*",
    "19523750lqZXVD",
    "ERROR : ",
    "826LaJjSA",
  ];
  _0x593b = function () {
    return _0x579036;
  };
  return _0x593b();
}
(function (_0x58691b, _0x4712be) {
  const _0x49221f = _0x213c;
  const _0x3831e3 = _0x58691b();
  while (true) {
    try {
      const _0x27411c =
        (parseInt(_0x49221f(360)) / 1) * (parseInt(_0x49221f(364)) / 2) +
        (-parseInt(_0x49221f(390)) / 3) * (-parseInt(_0x49221f(381)) / 4) +
        -parseInt(_0x49221f(376)) / 5 +
        -parseInt(_0x49221f(358)) / 6 +
        (parseInt(_0x49221f(389)) / 7) * (parseInt(_0x49221f(357)) / 8) +
        parseInt(_0x49221f(359)) / 9 +
        -parseInt(_0x49221f(387)) / 10;
      if (_0x27411c === _0x4712be) {
        break;
      } else {
        _0x3831e3.push(_0x3831e3.shift());
      }
    } catch (_0x41bdec) {
      _0x3831e3.push(_0x3831e3.shift());
    }
  }
})(_0x593b, 666953);
smd(
  {
    on: "text",
  },
  async (
    _0x460b55,
    _0x2fcc6c,
    {
      mek: _0x376ae1,
      body: _0x6c25b0,
      args: _0x213257,
      botNumber: _0x615ced,
      isCreator: _0x44cb69,
      icmd: _0x52773f,
      store: _0x1d9a76,
      budy: _0x1e9bcf,
      Suhail: _0x6ee677,
      Void: _0x43102c,
      proto: _0x5f14ef,
    }
  ) => {
    const _0x210c92 = _0x213c;
    try {
      if (!cronStart) {
        cron[_0x210c92(372)](_0x210c92(394), () => {
          const _0x529045 = _0x210c92;
          cronStart = true;
          fs[_0x529045(391)]("./temp", (_0x13ab05, _0x5b39ed) => {
            const _0x57a393 = _0x529045;
            if (_0x13ab05) {
              return;
            }
            _0x5b39ed[_0x57a393(400)]((_0x630e8) => {
              const _0x2da99b = _0x57a393;
              try {
                fs[_0x2da99b(393)]("./temp/" + _0x630e8);
              } catch {}
            });
          });
        });
      }
      if (
        !_0x460b55.reply_message ||
        !_0x2fcc6c ||
        !_0x460b55[_0x210c92(365)]
      ) {
        return;
      }
      const _0x1eb88a = _0x460b55[_0x210c92(396)][_0x210c92(374)].split("\n");
      let _0x56b5d3 = parseInt(_0x2fcc6c[_0x210c92(383)](" ")[0]);
      if (!isNaN(_0x56b5d3)) {
        if (
          _0x1eb88a[_0x210c92(367)] > 30 &&
          _0x1eb88a[1][_0x210c92(362)]("WASI-MD_FANCY_TEXT")
        ) {
          var _0x7b7a13 = _0x1eb88a[_0x210c92(379)]((_0x4377cc) =>
            _0x4377cc.startsWith(_0x56b5d3 + " ")
          );
          try {
            if (_0x7b7a13) {
              await _0x460b55[_0x210c92(380)](
                _0x7b7a13[_0x210c92(368)]("" + _0x56b5d3, "")[_0x210c92(397)](),
                {},
                "",
                _0x460b55
              );
            } else {
              ("");
            }
          } catch {}
        }
      }
      let _0x245187 = parseFloat(_0x2fcc6c.split(" ")[0]);
      if (isNaN(_0x245187)) {
        return;
      }
      let _0x5b0909 = _0x245187[_0x210c92(392)](1);
      var _0x42e09a = _0x1eb88a[_0x210c92(379)]((_0x34ef22) =>
        _0x34ef22[_0x210c92(398)]("*" + _0x5b0909 + " ")
      );
      if (
        _0x42e09a &&
        (_0x42e09a[_0x210c92(378)](_0x210c92(399)) ||
          _0x42e09a[_0x210c92(378)](_0x210c92(386)))
      ) {
        var _0x56c097 = _0x42e09a
          .replace("*" + _0x5b0909, "")
          [_0x210c92(368)]("|", "")
          [_0x210c92(368)](/COMMANDS\*/gi, "")
          [_0x210c92(368)](/MENU\*/gi, "")
          [_0x210c92(354)]();
        if (_0x56c097[_0x210c92(367)] > 0 && _0x56c097[_0x210c92(367)] < 20) {
          const { commands: _0x4f16cc } = require(_0x210c92(384));
          const _0x59e793 = {};
          _0x4f16cc[_0x210c92(400)]((_0xc3d8cc) => {
            const _0x20ed1a = _0x210c92;
            if (!_0xc3d8cc[_0x20ed1a(370)] && _0xc3d8cc.pattern !== undefined) {
              if (!_0x59e793[_0xc3d8cc[_0x20ed1a(395)]]) {
                _0x59e793[_0xc3d8cc.category] = [];
              }
              _0x59e793[_0xc3d8cc[_0x20ed1a(395)]].push({
                command: _0xc3d8cc.pattern,
                info: _0xc3d8cc[_0x20ed1a(366)],
                help:
                  prefix +
                  _0xc3d8cc[_0x20ed1a(382)] +
                  " " +
                  (_0xc3d8cc[_0x20ed1a(369)] ? _0xc3d8cc[_0x20ed1a(369)] : ""),
              });
            }
          });
          let _0x5cca14 = false;
          for (const _0x1af79d in _0x59e793) {
            let _0x37f2ac = "" + _0x1af79d.toLowerCase();
            if (_0x56c097.includes(_0x37f2ac)) {
              _0x5cca14 =
                _0x210c92(375) + _0x1af79d[_0x210c92(385)]() + _0x210c92(373);
              _0x59e793[_0x1af79d][_0x210c92(400)]((_0xf574fc) => {
                const _0x4231a3 = _0x210c92;
                _0x5cca14 +=
                  "*🍁Command:* ```" +
                  _0xf574fc.command +
                  "``` " +
                  (_0xf574fc[_0x4231a3(377)]
                    ? _0x4231a3(371) +
                      _0xf574fc[_0x4231a3(377)] +
                      _0x4231a3(356)
                    : "") +
                  "\n*〽️Help:* ```" +
                  _0xf574fc[_0x4231a3(355)] +
                  _0x4231a3(353);
              });
              _0x5cca14 += "\n\n" + Config.caption;
              break;
            }
          }
          if (_0x5cca14) {
            return await _0x460b55[_0x210c92(363)](_0x460b55[_0x210c92(361)], {
              caption: _0x5cca14,
            });
          }
        }
      }
    } catch (_0x3e9a32) {
      console.log(_0x210c92(388), _0x3e9a32);
    }
  }
);
/**MASTER */
smd(
  {
    on: "text",
  },
  async (msg, _text, { budy, Void }) => {
    const _0xd6a12a = _0x1571;
    function _0x2edb() {
      const _0x667561 = [
        "62454JBmitF",
        "react",
        "isCreator",
        "reply",
        "Provide me with a query to run Master!",
        "2618667xpRQLH",
        "2022148AUDBwx",
        "text",
        "1398Krkwgm",
        "15pWevhh",
        "format",
        "log",
        "16457KBRIAc",
        "20604213meAmhj",
        "slice",
        "includes",
        "chat",
        "\n}\na()",
        "6414720cwIFyR",
        "1471072FUlQDN",
        "ERROR FROM RUNNING QUERY WITH MASTER $\n",
      ];
      _0x2edb = function () {
        return _0x667561;
      };
      return _0x2edb();
    }
    (function (_0x3e0222, _0xfa3e8a) {
      const _0xe793f5 = _0x1571;
      const _0x1a4f58 = _0x3e0222();
      while (true) {
        try {
          const _0xf50973 =
            -parseInt(_0xe793f5(460)) / 1 +
            -parseInt(_0xe793f5(466)) / 2 +
            parseInt(_0xe793f5(465)) / 3 +
            (-parseInt(_0xe793f5(458)) / 4) * (parseInt(_0xe793f5(469)) / 5) +
            (-parseInt(_0xe793f5(468)) / 6) * (-parseInt(_0xe793f5(472)) / 7) +
            -parseInt(_0xe793f5(457)) / 8 +
            parseInt(_0xe793f5(473)) / 9;
          if (_0xf50973 === _0xfa3e8a) {
            break;
          } else {
            _0x1a4f58.push(_0x1a4f58.shift());
          }
        } catch (_0x556c40) {
          _0x1a4f58.push(_0x1a4f58.shift());
        }
      }
    })(_0x2edb, 731357);
    let citel = msg;
    function _0x1571(_0x262039, _0x151011) {
      const _0x2edb64 = _0x2edb();
      _0x1571 = function (_0x15719d, _0x45ddb3) {
        _0x15719d = _0x15719d - 455;
        let _0x347d5c = _0x2edb64[_0x15719d];
        return _0x347d5c;
      };
      return _0x1571(_0x262039, _0x151011);
    }
    const { send, reply, react, sendMessage } = msg;
    if (msg[_0xd6a12a(462)]) {
      if (
        !Config.HANDLERS[_0xd6a12a(475)](">") &&
        citel[_0xd6a12a(467)].startsWith(">")
      ) {
        let code = budy[_0xd6a12a(474)](1);
        if (!code) {
          return citel[_0xd6a12a(463)](_0xd6a12a(464));
        }
        try {
          let resultTest = eval(code);
          if (resultTest) {
            return citel[_0xd6a12a(463)](util[_0xd6a12a(470)](resultTest));
          }
        } catch (_0x75dc0b) {
          return citel[_0xd6a12a(463)](util[_0xd6a12a(470)](_0x75dc0b));
        }
      } else if (
        !Config.HANDLERS[_0xd6a12a(475)]("$") &&
        citel[_0xd6a12a(467)].startsWith("$")
      ) {
        let code = budy[_0xd6a12a(474)](1);
        if (!code) {
          return citel[_0xd6a12a(463)](_0xd6a12a(464));
        }
        try {
          let resultTest = await eval(
            "const a = async()=>{\n" + code + _0xd6a12a(456)
          );
          await citel[_0xd6a12a(461)]("🍁");
          if (resultTest) {
            return await citel.reply(util[_0xd6a12a(470)](resultTest));
          }
        } catch (_0x467251) {
          console[_0xd6a12a(471)](_0xd6a12a(459), _0x467251);
          return await citel.reply(util[_0xd6a12a(470)](_0x467251));
        }
      }
    }
  }
);
let pmtypes = ["videoMessage", "imageMessage"];

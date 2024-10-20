import config from '../../config.cjs';

const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '911111111';
const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['menu']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`suvi tech youtube  https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m 👋`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| menu |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*menu*: ${text}`;
    const teks2 = `\n\n*Hi ${m.pushName}, your request has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ menu. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
   }
};

export default report;

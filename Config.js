const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "18764156404"],
global.ownername = process.env.OWNER_NAME || "❤️Damion❤️",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "Damion"
global.location = "jamacis"

global.botname = process.env.BOTNAME || "group sdvisor",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "bot."

//theme link
global.link = 'https://chat.whatsapp.com/Ht4T5IY7VEP5NwjO926s2B'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "true", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages 
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.8764156404,
ownername: global,damion
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

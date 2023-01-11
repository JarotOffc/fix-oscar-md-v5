let fs = require('fs')
let handler = async (m) => {
conn.sendFile(m.chat, 'https://k.top4top.io/m_2538plh010.mp3', '', '', m, true)
}

handler.customPrefix = /^(jarot)$/i
handler.command = new RegExp


module.exports = handler

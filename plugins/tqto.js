let fetch = require('node-fetch')

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/f38f1ce61e1e674e20e94.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing*
*❉ Bochil Gaming*
*❉ BrunoSobrino*
*❉ Jarot Offc*
*❉ Kriz offc*
*❉ Zivfur*
*❉ Mursid*

*▸ - - - —「 Script 」— - - - ◂*
*❉ Kalo Mau Repload Kasih Base Ori Nya*
https://github.com/JarotOffc/fix-oscar-md-v5

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/Jarotr_",
    mediaType: "VIDEO",
    description: "https://Instagram.com/Jarotr_", 
    title: 'Oscar-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler

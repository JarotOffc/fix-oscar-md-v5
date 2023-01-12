//for +212 users, remove this feature so that it can be used by +212 users

let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
    await conn.updateBlockStatus(m.sender, "block") // hapus kalau ga mau pasang
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
    await conn.updateBlockStatus(m.sender, "block") // hapus kalau ga mau pasang
   }
 }

module.exports = handler

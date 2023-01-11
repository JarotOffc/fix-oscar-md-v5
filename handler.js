let util = require('util')

let simple = require('./lib/simple')

let { MessageType, makeOrderedDictionary, delay } = require('@adiwajshing/baileys')



async function matchArray(newArray, lastArray){

    let res = []

	for(let i = 0; i < newArray.length; i++){

		if(!lastArray.includes(newArray[i])) res.push(newArray[i]) 

	}

	return res

}



async function pushArray(array, type){

	if(!array.toString()) return

	switch(type){

		case 'owner':

		    for(let i=0; i<array.length;i++){

			    global.owner.push(array[i])

			}

		break

		case 'police':

		    for(let i=0; i<array.length;i++){

			    global.police.push(array[i])

			}

		break

		case 'prems':

		    for(let i=0; i<array.length;i++){

			    global.prems.push(array[i])

			}

		break

	}

}



const isNumber = x => typeof x === 'number' && !isNaN(x)

//const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

module.exports = {

  async handler(chatUpdate) {

    //console.log(conn.sender) 

    //if (chatUpdate.type == 'append')

    //console.log(chatUpdate)    

    let m = chatUpdate.messages[0]

    if (!m) return console.log('Undefined Message ' + m) 

    m = await simple.smsg(this, m)

    if(m == 'error') return

    try {

      switch (m.mtype) {

        case 'imageMessage':

        case 'videoMessage':

        case 'audioMessage':

          if (!m.key.fromMe) await delay(1000)

          if (!m.msg.url) await this.updateMediaMessage(m)

          break

      }

      m.exp = 0

      m.limit = false

      m.money = false

      m.spin = false

      m.uangkau = false

      try {

        let user = global.db.data.users[m.sender]

        if (typeof user !== 'object') global.db.data.users[m.sender] = {}

        if (user) {

          if (!isNumber(user.exp)) user.exp = 0

          if (! isNumber(user.spin)) user.spin = 10

          if (! isNumber(user.money)) user.money = 1000

          if (!isNumber(user.limit)) user.limit = 1000

          if (!user.acc) user.acc = false

          if (!user.acc) user.end = false

          if (!isNumber(user.lastclaim)) user.lastclaim = 0

          if (!isNumber(user.lastpremgift)) user.lastpremgift = 0

          if (!isNumber(user.lastpolicegift)) user.lastpolicegift = 0

          if (!isNumber(user.lastmembergift)) user.lastmembergift = 0

          if (!('registered' in user)) user.registered = false

          if (!user.registered) {

            if (!('name' in user)) user.name = this.getName(m.sender)

            if (!isNumber(user.age)) user.age = -1

            if (!isNumber(user.regTime)) user.regTime = -1

          }

          if(!user.raihan) user.raihan = false

          if (!isNumber(user.level)) user.level = 0

          if (! isNumber(user.hoki)) user.hoki = 1

          if (!isNumber(user.afk)) user.afk = -1

          if (!('afkReason' in user)) user.afkReason = ''

          if (!('banned' in user)) user.banned = false

          if (!('bannedReason' in user)) user.bannedReason = ''

          if (!isNumber(user.bannedDate)) user.bannedDate = 0

            if (!isNumber(user.bannedPoint)) user.bannedPoint = 0

          if (!isNumber(user.level)) user.level = 0

          if (!user.role) user.role = 'Biasa'

          if (!user.police) user.police = false

          if (!user.miningmode) user.miningmode = false

          if (!isNumber(user.warn)) user.warn = 0

          if (!user.huntmode) user.huntmode = false

          if (!user.rank) user.rank = ''

          if (!user.maxspin) user.maxspin = 0

          if (!isNumber(user.expired)) user.expired = -1

          if (!isNumber(user.expiredgroup)) user.expiredgroup = -1

          if (!user.id) user.id = ''

          if (!user.group) user.group = false

          if (!isNumber(user.joinlimit)) user.joinlimit = 100

          if (!('premium' in user) ) user.premium = false

          if (!('autolevelup' in user)) user.autolevelup = true

          if (!('owner' in user)) user.owner = false

          if(!('helper' in user)) user.helper = false

          if(!isNumber(user.verify)) user.verify = 0

          if(!('staff' in user)) user.staff = false

           if (!isNumber(user.health)) user.health = 100

                    if (!isNumber(user.healtmonster)) user.healtmonster = 100

                    if (!isNumber(user.armormonster)) user.armormonster = 0

                    if (!isNumber(user.potion)) user.potion = 0

                    if (!isNumber(user.tiketcoin)) user.tiketcoin = 0

                    if (!isNumber(user.healtmonster)) user.healtmonster = 0

                    if (!isNumber(user.pc)) user.pc = 0

                    if (!isNumber(user.spammer)) user.spammer = 0

                    if (!isNumber(user.limitspam)) user.limitspam = 0

                    if (!isNumber(user.expg)) user.expg = 0

                    if (!isNumber(user.trash)) user.trash = 0

                    if (!isNumber(user.sampah)) user.sampah = 0

                    if (!isNumber(user.wood)) user.wood = 0

                    if (!isNumber(user.rock)) user.rock = 0

                    if (!isNumber(user.string)) user.string = 0

                    if (!isNumber(user.petFood)) user.petFood = 0



                    if (!isNumber(user.emerald)) user.emerald = 0

                    if (!isNumber(user.diamond)) user.diamond = 0

                    if (!isNumber(user.berlian)) user.berlian = 0

                    if (!isNumber(user.emas)) user.emas = 0

                    if (!isNumber(user.gold)) user.gold = 0

                    if (!isNumber(user.iron)) user.iron = 0

                    if (!isNumber(user.string)) user.string = 0

                    

                    if (!isNumber(user.anggur)) user.anggur = 0

                    if (!isNumber(user.jeruk)) user.jeruk = 0

                    if (!isNumber(user.mangga)) user.mangga = 0

                    if (!isNumber(user.apel)) user.apel = 0

                    if (!isNumber(user.pisang)) user.pisang = 0

                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0

                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0

                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0

                    if (!isNumber(user.bibitapel)) user.bibitapel = 0

                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0

                    if (!isNumber(user.gardenboxs)) user.gardenboxs = 0

                    

                    if (!isNumber(user.botol)) user.botol = 0

                    if (!isNumber(user.kardus)) user.kardus = 0

                    if (!isNumber(user.kaleng)) user.kaleng = 0

                    if (!isNumber(user.aqua)) user.aqua = 0

                    if (!isNumber(user.kayu)) user.kayu = 0

                    if (!isNumber(user.batu)) user.batu = 0

                    if (!isNumber(user.kapak)) user.kapak = 0



                    if (!isNumber(user.common)) user.common = 0

                    if (!isNumber(user.cupon)) user.cupon = 0

                    if (!isNumber(user.boxs)) user.boxs = 0

                    if (!isNumber(user.uncommon)) user.uncommon = 0

                    if (!isNumber(user.mythic)) user.mythic = 0

                    if (!isNumber(user.legendary)) user.legendary = 0

                    if (!isNumber(user.pet)) user.pet = 0

                    if (!isNumber(user.ramuan)) user.ramuan = 0

                    

                    if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0

                    if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0

                    if (!isNumber(user.laststringclaim)) user.laststringclaim = 0

                    if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0

                    if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0

                    if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0

                    if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0

                    

                    if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0

                    if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0

                    if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0

                    if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0

                    if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0

                    if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0

                    if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0

                    if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0

                    if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0

                    if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0

                    

                    if (!isNumber(user.hero)) user.hero = 1

                    if (!isNumber(user.exphero)) user.exphero = 0

                    if (!isNumber(user.pillhero)) user.pillhero= 0

                    if (!isNumber(user.herolastclaim)) user.herolastclaim = 0

                    

                    if (!isNumber(user.paus)) user.paus = 0

                    if (!isNumber(user.kepiting)) user.kepiting = 0

                    if (!isNumber(user.cumi)) user.cumi = 0

                    if (!isNumber(user.gurita)) user.gurita = 0

                    if (!isNumber(user.buntal)) user.buntal = 0

                    if (!isNumber(user.dory)) user.dory = 0

                    if (!isNumber(user.lobster)) user.lobster = 0

                    if (!isNumber(user.lumba)) user.lumba = 0

                    if (!isNumber(user.hiu)) user.hiu = 0

                    if (!isNumber(user.ikan)) user.ikan = 0

                    if (!isNumber(user.udang)) user.udang = 0

                    if (!isNumber(user.orca)) user.orca = 0

                    if (!isNumber(user.umpan)) user.umpan = 0

                    if (!isNumber(user.pancingan)) user.pancingan = 1

                    if (!isNumber(user.anakpancingan)) user.anakpancingan = 0

                    if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0

                    if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0

                    if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0

                    if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0

                    

                    if (!isNumber(user.kucing)) user.kucing = 0

                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0

                    if (!isNumber(user.kuda)) user.kuda = 0

                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0

                    if (!isNumber(user.rubah)) user.rubah = 0

                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0

                    if (!isNumber(user.anjing)) user.anjing = 0

                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

                    if (!isNumber(user.serigala)) user.serigala = 0

                    if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0

                    if (!isNumber(user.naga)) user.naga = 0

                    if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0

                    if (!isNumber(user.phonix)) user.phonix = 0

                    if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0

                    if (!isNumber(user.kyubi)) user.kyubi = 0

                    if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0

                    if (!isNumber(user.griffin)) user.griffin = 0

                    if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0

                    if (!isNumber(user.centaur)) user.centaur = 0

                    if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0

                    

                    if (!isNumber(user.anakkucing)) user.anakkucing = 0

                    if (!isNumber(user.anakkuda)) user.anakkuda = 0

                    if (!isNumber(user.anakrubah)) user.anakrubah = 0

                    if (!isNumber(user.anakanjing)) user.anakanjing = 0

                    if (!isNumber(user.anakserigala)) user.anakserigala = 0

                    if (!isNumber(user.anaknaga)) user.anaknaga = 0

                    if (!isNumber(user.anakphonix)) user.anakphonix = 0

                    if (!isNumber(user.anakkyubi)) user.anakkyubi = 0

                    if (!isNumber(user.anakgriffin)) user.anakgriffin = 0

                    if (!isNumber(user.anakcentaur)) user.anakcentaur = 0

                    

                    if (!isNumber(user.makananpet)) user.makananpet = 0 

                    if (!isNumber(user.makanannaga)) user.makanannaga = 0

                    if (!isNumber(user.makananphonix)) user.makananphonix = 0

                    if (!isNumber(user.makanangriffin)) user.makanangriffin = 0

                    if (!isNumber(user.makanankyubi)) user.makanankyubi = 0

                    if (!isNumber(user.makanancentaur)) user.makanancentaur = 0



                    if (!isNumber(user.horse)) user.horse = 0

                    if (!isNumber(user.horseexp)) user.horseexp = 0

                    if (!isNumber(user.cat)) user.cat = 0

                    if (!isNumber(user.catexp)) user.catexp = 0

                    if (!isNumber(user.fox)) user.fox = 0

                    if (!isNumber(user.foxhexp)) user.foxexp = 0

                    if (!isNumber(user.dog)) user.dog = 0

                    if (!isNumber(user.dogexp)) user.dogexp = 0



                    if (!isNumber(user.horselastfeed)) user.horselastfeed = 0

                    if (!isNumber(user.catlastfeed)) user.catlastfeed = 0

                    if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0

                    if (!isNumber(user.doglastfeed)) user.doglastfeed = 0



                    if (!isNumber(user.armor)) user.armor = 0

                    if (!isNumber(user.armordurability)) user.armordurability = 0

                    if (!isNumber(user.weapon)) user.weapon = 0

                    if (!isNumber(user.weapondurability)) user.weapondurability = 0

                    if (!isNumber(user.sword)) user.sword = 0

                    if (!isNumber(user.sworddurability)) user.sworddurability = 0

                    if (!isNumber(user.pickaxe)) user.pickaxe = 0

                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0

                    if (!isNumber(user.fishingrod)) user.fishingrod = 0

                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

                    

                    if (!isNumber(user.kerjasatu)) user.kerjasatu = 0

                    if (!isNumber(user.kerjadua)) user.kerjadua = 0

                    if (!isNumber(user.kerjatiga)) user.kerjatiga = 0

                    if (!isNumber(user.kerjaempat)) user.kerjaempat = 0

                    if (!isNumber(user.kerjalima)) user.kerjalima = 0

                    if (!isNumber(user.kerjaenam)) user.kerjaenam = 0

                    if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0

                    if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0

                    if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0

                    if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0

                    if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0

                    if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0

                    if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0

                    if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0

                    if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0

                    if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0

                    if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0

                    if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0

                    if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0

                    if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0

                    if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0

                    if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0

                    if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0

                    if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0

                    if (!isNumber(user.kerjadualima)) user.kerjadualima = 0

                    if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0

                    if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0

                    if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0

                    if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0

                    if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0

          

                    if (!isNumber(user.judilast)) user.judilast = 0

                    if (!isNumber(user.reglast)) user.reglast = 0

                    if (!isNumber(user.unreglast)) user.unreglast = 0

                    if (!isNumber(user.snlast)) user.snlast = 0

                    if (!isNumber(user.spinlast)) user.spinlast = 0

                    

                    if (!isNumber(user.lastwarpet)) user.lastwarpet = 0

                    if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0

                    if (!isNumber(user.lastclaim)) user.lastclaim = 0

                    if (!isNumber(user.lastadventure)) user.lastadventure = 0

                    if (!isNumber(user.lastfishing)) user.lastfishing = 0

                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0

                    if (!isNumber(user.lastcrusade)) user.lastcrusade = 0

                    if (!isNumber(user.lastduel)) user.lastduel = 0

                    if (!isNumber(user.lastcode)) user.lastcode = 0

                    if (!isNumber(user.lastlink)) user.lastlink = 0

                    if (!isNumber(user.lastrob)) user.lastrob = 0

                    if (!isNumber(user.lastopen)) user.lastopen = 0

                    if (!isNumber(user.lasteasy)) user.lasteasy = 0

                    if (!isNumber(user.lastnambang)) user.lastnambang = 0

                    if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0

                    if (!isNumber(user.lastmining)) user.lastmining = 0

                    if (!isNumber(user.lasthunt)) user.lasthunt = 0

                    if (!isNumber(user.lastweekly)) user.lastweekly = 0

                    if (!isNumber(user.lastmonthly)) user.lastmonthly = 0

                    if (!isNumber(user.lastmulung)) user.lastmulung = 0

                    if (!isNumber(user.lastdagang)) user.lastdagang = 0

                    if (!isNumber(user.lastbisnis)) user.lastbisnis = 0

                    if (!isNumber(user.lastnebang)) user.lastnebang = 0

                    if (!isNumber(user.lastberkebon))user.lastberkebon = 0

                    if (!isNumber(user.lastadventure)) user.lastadventure = 0

                    if (!isNumber(user.lastlawan)) user.lastlawan = 0

                    if (!isNumber(user.lastlatih)) user.lastlatih = 0

                } else db.data.users[m.sender] = {

                      exp: 0,

                    limit: 100,

                    joinlimit: 100,

                    spammer: 0,

                    limitspam: 0,

                    hoki: 1,

                    acc: false, 

                    end: false, 

                    raihan: false,

                    maxspin: 0,

                    lastclaim: 0,

                    lastpremgift: 0,

                    lastpolicegift: 0,

                    lastmembergift: 0,

                    money: 10000,

                    bank: 10000,

                    health: 100,

                    tiketcoin: 0,

                    healtmonster: 100,

                    armormonster: 0,

                    lastclaim: 0,

                    registered: false,

                    name: this.getName(m.sender),

                    age: -1,

                    regTime: -1,

                    afk: -1,

                    id: '', 

                    afkReason: '',

                    pasangan: '',

                    banned: false,

                    bannedDate: 0,

                    bannedPoint: 0,

                    police: false, 

                    miningmode: false, 

                    huntmode: false, 

                    premium: false,

                    created: false,

                    warn: 0,

                    pc: 0,

                    expg: 0,

                    expired: -1,

                    expiredgroup: -1, 

                    owner: false,

                    premium: false, 

                    helper: false, 

                    rank: '', 

                    level: 0,

                    role: 'Beginner',

                    autolevelup: true,

                    spin: 10,

                    verify: 0,

                    staff: false, 

                    mt: false,



                    potion: 10,

                    trash: 0,

                    sampah: 0,

                    wood: 0,

                    rock: 0,

                    string: 0,



                    emerald: 0,

                    diamond: 0,

                    berlian: 0,

                    emas: 0,

                    gold: 0,

                    iron: 0,

                    

                    pisang: 0,

                    anggur: 0,

                    mangga: 0,

                    jeruk: 0,

                    apel: 0,

                    bibitpisang: 0,

                    bibitanggur: 0,

                    bibitmangga: 0,

                    bibitjeruk: 0,

                    bibitapel: 0,

                    gardenboxs: 0,

                    

                    botol: 0,

                    kardus: 0,

                    kaleng: 0,

                    aqua: 0,

                    kayu: 0,

                    batu: 0,

                    kapak: 0,



                    cupon: 0,

                    boxs: 0,

                    common: 0,

                    uncommon: 0,

                    mythic: 0,

                    legendary: 0,

                    pet: 0,

                    ramuan: 0,

                    

                    ramuannagalast: 0,

                    ramuankyubilast: 0,

                    ramuanphonixlast: 0,

                    ramuanserigalalast: 0,

                    ramuancentaurlast: 0,

                    ramuankudalast: 0,

                    ramuankucinglast: 0,

                    ramuanrubahlast: 0,

                    ramuangriffinlast: 0,

                    ramuanherolast: 0,



                    horse: 0,

                    horseexp: 0,

                    cat: 0,

                    catngexp: 0,

                    fox: 0,

                    foxexp: 0,

                    dog: 0,

                    dogexp: 0,

                    

                    hero: 1,

                    exphero: 0,

                    pillhero: 0,

                    herolastclaim: 0,

                    

                    udang: 0,

                    hiu: 0,

                    lobster: 0,

                    kumba: 0,

                    ikan: 0,

                    buntal: 0,

                    gurita: 0,

                    dory: 0,

                    cumi: 0,

                    kepiting: 0,

                    paus: 0,

                    orca: 0,

                    umpan: 0,

                    pancingan: 1,

                    anakpancingan: 0,

                    

                    anakkucing: 0,

                    anakkuda: 0,

                    anakrubah: 0,

                    anakanjing: 0,

                    anakserigala: 0,

                    anaknaga: 0,

                    anakphonix: 0,

                    anakkyubi: 0,

                    anakgriffin: 0,

                    anakcentaur: 0,

                    

                    kucing: 0,

                    kucinglastclaim: 0,

                    kuda: 0,

                    kudalastclaim: 0,

                    rubah: 0,

                    rubahlastclaim: 0,

                    serigala: 0,

                    serigalalastclaim: 0,

                    naga: 0,

                    nagalastclaim: 0,

                    phonix: 0,

                    phonixlastclaim: 0,

                    anjing: 0,

                    anjinglastclaim: 0,

                    kyubi: 0,

                    kyubilastclaim: 0,

                    griffin: 0,

                    griffinlastclaim: 0,

                    centaur: 0,

                    centaurlastclaim: 0,

                    

                    makananpet: 0,

                    makananphonix: 0,

                    makanannaga: 0,

                    makanangriffin: 0,

                    makanankyubi: 0,

                    makanancentaur: 0,



                    horselastfeed: 0,

                    catlastfeed: 0,

                    foxlastfeed: 0,

                    doglastfeed: 0,



                    armor: 0,

                    armordurability: 0,

                    weapon: 0,

                    weapondurability: 0,

                    sword: 0,

                    sworddurability: 0,

                    pickaxe: 0,

                    pickaxedurability: 0,

                    fishingrod: 0,

                    fishingroddurability: 0,

                    

                    judilast: 0,

                    reglast: 0,

                    unreglast: 0,

                    snlast: 0,

                    spinlast: 0,

                    

                    kerjasatu: 0,

                    kerjadua: 0,

                    kerjatiga: 0,

                    kerjaempat: 0,

                    kerjalima: 0,

                    kerjaenam: 0,

                    kerjatujuh: 0,

                    kerjadelapan: 0,

                    kerjasembilan: 0,

                    kerjasepuluh: 0,

                    kerjasebelas: 0,

                    kerjaduabelas: 0,

                    kerjatigabelas: 0,

                    kerjaempatbelas: 0,

                    kerjalimabelas: 0,

                    kerjaenambelas: 0,

                    kerjatujuhbelas: 0,

                    kerjadelapanbelas: 0,

                    kerjasembilanbelas: 0,

                    kerjaduapuluh: 0,

                    kerjaduasatu: 0,

                    kerjaduadua: 0,

                    kerjaduatiga: 0,

                    kerjaduaempat: 0,

                    kerjadualima: 0,

                    kerjaduaenam: 0,

                    kerjaduatujuh: 0,

                    kerjaduadelapan: 0,

                    kerjaduasembilan: 0,

                    kerjatigapuluh: 0, 

                    

                    lastramuanclaim: 0,

                    lastpotionclaim: 0,

                    laststringclaim: 0,

                    lastswordclaim: 0,

                    lastweaponclaim: 0,

                    lastsironclaim: 0,

                    lastsmancingclaim: 0,

                    

                    lastmancingeasy: 0,

                    lastmancingnormal: 0,

                    lastmancinghard: 0,

                    lastmancingextreme: 0,

                    lastwarpet: 0,

                    lastpekerjaan: 0,

                    lastclaim: 0,

                    lastadventure: 0,

                    lastfishing: 0,

                    lastdungeon: 0,

                    lastcrusade: 0,

                    lastduel: 0,

                    lastcode: 0,

                    lastlink: 0,

                    lastnambang: 0,

                    lastmining: 0,

                    lasthunt: 0,

                    lastweekly: 0,

                    lastmonthly: 0,

                    lastrob: 0,

                    lastbunuhi: 0,

                    lastopen: 0,

                    lasteasy: 0,

                    lastmulung: 0,

                    lastdagang: 0,

                    lastbisnis: 0,

                    lastnebang: 0,

                    lastberkebon: 0,

                    lastadventure: 0,

                    lastlawan: 0,

                    lastlatih: 0,

                }

        

        let invmenu = global.db.data.invmenu[m.sender] 

        if (typeof invmenu !== 'object') global.db.data.invmenu[m.sender] = {}

        if (invmenu) {

        	if(!isNumber(invmenu.xpfish)) invmenu.xpfish = 0

            if(!isNumber(invmenu.moneyfish)) invmenu.moneyfish = 0

        	if (!invmenu.normal) invmenu.normal = []

            if (!invmenu.rare) invmenu.rare = []

            if (!invmenu.legend) invmenu.legend = []

            if (!invmenu.mythic) invmenu.mythic = []

            if (!invmenu.rod) invmenu.rod = ['kayu']

            if (!isNumber(invmenu.levelbot)) invmenu.levelbot = 0

            if(!isNumber(invmenu.durability)) invmenu.durability = 100

            if(!isNumber(invmenu.salmon)) invmenu.salmon = 0

            if(!isNumber(invmenu.cod)) invmenu.cod = 0

            if(!isNumber(invmenu.sampah)) invmenu.sampah = 0

            if(!isNumber(invmenu.golden)) invmenu.golden = 0

            if(!isNumber(invmenu.puffer)) invmenu.puffer = 0

            if(!isNumber(invmenu.tropical)) invmenu.tropical = 0

            if (!invmenu.hancur) invmenu.hancur = false

            } else global.db.data.invmenu[m.sender] = {

            	xpfish: 0,

                moneyfish: 0,

                salmon: 0,

                cod: 0,

                tropical: 0,

                golden: 0,

                sampah: 0,

                puffer: 0,

                normal: [], 

                rare: [], 

                legend: [], 

                mythic: [], 

                levelbot: 0,

                rod: ['kayu'], 

                durability: 100,

                hancur: false

                }

        

        let pokemon = global.db.data.pokerole[m.sender] 

        if (typeof pokemon !== 'object') global.db.data.pokerole[m.sender] = {}

        if (pokemon) {

        	if(!pokemon.team) pokemon.team = ['']

                if(!pokemon.nameteam) pokemon.nameteam = ''

                if(!pokemon.room) pokemon.room = false

                if(!isNumber(pokemon.jumlah)) pokemon.jumlah = 0

        	if (!isNumber(pokemon.pokeball)) pokemon.pokeball = 10

                if (!isNumber(pokemon.greatball)) pokemon.greatball= 5

                if (!isNumber(pokemon.lupaanj)) pokemon.lupaanj = 0

                if (!isNumber(pokemon.attack)) pokemon.attack = 0

                if (!isNumber(pokemon.damage)) pokemon.damage = 0

                if (!pokemon.list) pokemon.list = ''

                if (!pokemon.item) pokemon.item = '' 

                if (!pokemon.item1) pokemon.item = ''

                if (!pokemon.item2) pokemon.item = ''

                if (!pokemon.item3) pokemon.item = ''

                if (!pokemon.pokemonxp1) pokemon.pokemonxp1 = ''

                if (!pokemon.pokemonxp2) pokemon.pokemonxp2 = ''

                if (!pokemon.pokemonxp3) pokemon.pokemonxp3 = ''

                if (!isNumber(pokemon.xppoke1)) pokemon.xppoke1 = 0

                if (!isNumber(pokemon.xppoke2)) pokemon.xppoke2 = 0

                if (!isNumber(pokemon.xppoke3)) pokemon.xppoke3 = 0

                if (!isNumber(pokemon.tierpoke1)) pokemon.tierpoke1 = 1

                if (!isNumber(pokemon.tierpoke2)) pokemon.tierpoke2 = 1

                if (!isNumber(pokemon.tierpoke3)) pokemon.tierpoke3 = 1

                if (!pokemon.claim) pokemon.claim = false

            } else global.db.data.pokerole[m.sender] = {

            	team: '',

                nameteam: this.getName(m.sender),

                pokeball: 10,

                greatball: 5,

                ball: 0,

                damage: 0,

                list: '',

                jumlah: 0,

                item: '', 

                item1: '', 

                item2: '', 

                item3: '', 

                pokemonxp1: '', 

                pokemonxp2: '', 

                pokemonxp3: '', 

                xppoke1: 0, 

                xppoke2: 0,

                xppoke3: 0, 

                tierpoke1: 1,

                tierpoke2: 1,

                tierpoke3: 1,

                claim: false, 

                room: false

                }

                

        //let ass = global.teks.data.promo

        //if (typeof ass !== 'object') global.teks.data.promo = {}

        //if (ass) {

         // if (!ass.texts) ass.texts= 'Tidak Ada Promo'

        //} else global.db.data.promo = {

          //texts: ''

        //}

        

        let chat = global.db.data.chats[m.chat]

        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}

        if (chat) {

          if (!('isBanned' in chat)) chat.isBanned = false

          if (!('jadibot' in chat)) chat.jadibot = false

          if (!('welcome' in chat)) chat.welcome = true

          if (!('detect' in chat)) chat.detect = true

          if (!('sWelcome' in chat)) chat.sWelcome = ''

          if (!('sBye' in chat)) chat.sBye = ''

          if (!('sPromote' in chat)) chat.sPromote = 'Kamu Dah Premi'

          if (!('sDemote' in chat)) chat.sDemote = 'Kasihan jadi member'

          if (!('warn' in chat)) chat.warn = false

          if (!('expired' in chat)) chat.expired = 0

          if (!('mining' in chat)) chat.mining = false

          if (!('delete' in chat)) chat.delete = true

          if(!isNumber(chat.maxwarns)) chat.maxwarn = 3

          if (!('antiLink' in chat)) chat.antiLink = false

        } else global.db.data.chats[m.chat] = {

          isBanned: false,

          welcome: false,

          detect: true, 

          sWelcome: '',

          sBye: '',

          maxwarn: 3,

          sPromote: '',

          expired: 0,

          sDemote: '',

          warn: false, 

          delete: true,

          antiLink: false,

          mining: false, 

        }

      } catch (e) {

        console.error(e)

      }

      if (opts['nyimak']) return

      if (!m.fromMe && opts['self']) return

      if (opts['pconly'] && m.chat.endsWith('g.us')) return m.reply('Private Chat Only')

      if (opts['gconly'] && !m.chat.endsWith('g.us')) return m.reply('Group Chat Only')

      if (opts['swonly'] && m.chat !== 'status@broadcast') return

      if (typeof m.text !== 'string') m.text = ''

      for (let name in global.plugins) {

        let results

        let plugin = global.plugins[name]

        if (!plugin) continue

        if (plugin.disabled) continue

        if (!plugin.all) continue

        if (typeof plugin.all !== 'function') continue

        try {

            await plugin.all.call(this, m, chatUpdate)

        } catch (e) {

          if (typeof e === 'string') continue

          console.error(e)

        }

      }

      if (m.isBaileys) return

      m.exp += Math.ceil(Math.random() * 10)



      let usedPrefix

      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]



      let userss = global.db.data.users[m.sender]

      

      //Push Owner in User

      let ownerG = Object.entries(global.db.data.users).filter(user => user[1].owner).map(([jid], i) => `${jid.split`@`[0]}`)

      let ownerL = await matchArray(ownerG, global.owner)

      if(typeof ownerL === 'object') await pushArray(ownerL, 'owner')

      

      let policeG = Object.entries(global.db.data.users).filter(user => user[1].police).map(([jid], i) => `${jid.split`@`[0]}`)

      let policeL = await matchArray(policeG, global.police)

      if(typeof policeL === 'object') await pushArray(policeL, 'police')

      

      let premsG = Object.entries(global.db.data.users).filter(user => user[1].premium).map(([jid], i) => `${jid.split`@`[0]}`)

      let premsL = await matchArray(premsG, global.prems)

      if(typeof premsL === 'object') await pushArray(premsL, 'prems')

      let isROwner = [global.conn.user.jid, ...global.rowner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

      let isOwner = isROwner || userss.owner || [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

      let isMods = isOwner || isROwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

      let groupMetadata = m.isGroup ? await this.groupMetadata(m.chat) : {} || {} //this.chats.get(m.chat).metadata

      let participants = m.isGroup ? groupMetadata.participants : [] || []

      let user = m.isGroup ? participants.find(u => u.id === m.sender) : {} // User Data

      let isPolice = isROwner || isOwner || userss.police

      let isPrems = isROwner || isOwner || isPolice || userss.premium

      let bot = m.isGroup ? participants.find(u => u.id == this.user.jid) : {} // Your Data

      let isAdmin = (user.admin === 'admin') || false // Is User Admin?

      let isBotAdmin = (bot.admin === 'admin') || false // Are you Admin?

      let isAcc = userss.acc

      for (let name in global.plugins) {

        let plugin = global.plugins[name]

        if (!plugin) continue

        if (plugin.disabled) continue

        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue

        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix

        let match = (_prefix instanceof RegExp ? // RegExp Mode?

          [[_prefix.exec(m.text), _prefix]] :

          Array.isArray(_prefix) ? // Array?

            _prefix.map(p => {

              let re = p instanceof RegExp ? // RegExp in Array?

                p :

                new RegExp(str2Regex(p))

              return [re.exec(m.text), re]

            }) :

            typeof _prefix === 'string' ? // String?

              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :

              [[[], new RegExp]]

        ).find(p => p[1])

        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {

          match,

          usedPrefix, 

          conn: this,

          participants,

          groupMetadata,

          user,

          bot,

          isROwner,

          isOwner,

          isAdmin,

          isBotAdmin,

          isPrems,

          isPolice, 

          chatUpdate,

          isAcc, 

        })) continue

      if (typeof plugin !== 'function') continue

                if ((usedPrefix = (match[0] || '')[0])) {

                    let noPrefix = m.text.replace(usedPrefix, '')

                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)

                    args = args || []

                    let _args = noPrefix.trim().split` `.slice(1)

                    let text = _args.join` `

                    command = (command || '').toLowerCase()

                    let fail = plugin.fail || global.dfail // When failed

                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?

                        plugin.command.test(command) :

                        Array.isArray(plugin.command) ? // Array?

                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?

                                cmd.test(command) :

                                cmd === command

                            ) :

                            typeof plugin.command === 'string' ? // String?

                                plugin.command === command : 

                                false                

          if (!isAccept) continue

          m.plugin = name

          if (name === 'menu.js' && (m.sender === '6285850539404@s.whatsapp.net' || m.sender === '6285850539404@s.whatsapp.net')) m.reply('Hai Jarot!')

          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {

            let chat = global.db.data.chats[m.chat]

            let user = global.db.data.users[m.sender]

            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this

            if (name != 'unbanuser.js' && user && (user.banned && (user.owner === false))) return // || user.police === false

          }         

          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner

            fail('owner', m, this)

            continue

          }

          if (plugin.rowner && !isROwner) { // Real Owner

            fail('rowner', m, this)

            continue

          }

          if (plugin.owner && !isOwner) { // Number Owner

            fail('owner', m, this)

            continue

          }

          if (plugin.mods && !isMods) { // Moderator

            fail('mods', m, this)

            continue

          }

          if (usedPrefix && user.banned == true) {

          	fail('ban', m, this) 

              continue

              }

          if (plugin.premium && isPrems == false) { // Premium

            fail('premium', m, this)

            continue

          }

          if (plugin.police && isPolice == false) {

          	

          fail('police', m, this) 

          continue

          }

          if (plugin.group && !m.isGroup) { // Group Only

            fail('group', m, this)

            continue

          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin

            fail('botAdmin', m, this)

            continue

          } else if (plugin.admin && !isAdmin) { // User Admin

            fail('admin', m, this)

            continue

          }

          if (plugin.private && m.isGroup) { // Private Chat Only

            fail('private', m, this)

            continue

          }

          if (plugin.register == true && _user.registered == false) { // Butuh daftar?

            fail('unreg', m, this)

            continue

          }

          

          m.isCommand = true

          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command

          if (xp > 200) m.reply('Ngecit -_-') // Hehehe

          else m.exp += xp

          if (opts['staffonly'] && !m.fromMe && !isROwner && !global.db.data.users[m.sender].staff){

          	this.reply(m.chat, `Staff Only`, m) 

              continue

          }

          

          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {

            this.sendButton(m.chat, `Limit anda habis, silahkan chat Owner atau beli melalui *${usedPrefix}buy*`, '©Oscar-bot', { 'button[0]': 'Owner', 'row[0]': '.owner', 'button[1]': 'Buy', 'row[1]': '.buy', 'button[2]': 'Buy All', 'row[2]': '.buyall' }, m)

            continue // Limit habis

          }

          if (plugin.level > _user.level) {

            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)

            continue // If the level has not been reached

          }

          let extra = {

            match,

            usedPrefix,

            noPrefix,

            _args,

            args,

            command,

            text,

            conn: this,

            participants,

            groupMetadata,

            user,

            bot,

            isROwner,

            isOwner,

            isAdmin,

            isBotAdmin,

            isPrems,

            isPolice, 

            chatUpdate,

          }

          try {

            results = await plugin.call(this, m, extra)

            if (!isPrems) m.limit = m.limit || plugin.limit || false

          } catch (e) {

            // Error occured

            m.error = e

            console.error(e)

            if (e) {

              let text = util.format(e)

              for (let key of Object.values(global.APIKeys))

                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')

              m.reply(text)

            }

          } finally {

            // m.reply(util.format(_user))

            if (typeof plugin.after === 'function') {

              try {

                results = await plugin.after.call(this, m, extra)

              } catch (e) {

                console.error(e)

              }

            }

            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')

          }

          break

        }

      }

    } finally {

      //console.log(global.db.data.users[m.sender])

      let user, stats = global.db.data.stats

      if (m) {

        if (m.sender && (user = global.db.data.users[m.sender])) {

          user.exp += m.exp

          user.limit -= m.limit * 1

          user.money -= m.money * 1

          user.spin -= m.spin

        }



        let stat

        if (m.plugin) {

          let now = + new Date

          if (m.plugin in stats) {

            stat = stats[m.plugin]

            if (!isNumber(stat.total)) stat.total = 1

            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1

            if (!isNumber(stat.last)) stat.last = now

            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now

          } else stat = stats[m.plugin] = {

            total: 1,

            success: m.error != null ? 0 : 1,

            last: now,

            lastSuccess: m.error != null ? 0 : now

          }

          stat.total += 1

          stat.last = now

          if (m.error == null) {

            stat.success += 1

            stat.lastSuccess = now

          }

        }

      }



      try {

        require('./lib/print')(m, this)

      } catch (e) {

        console.log(m, m.quoted, e)

      }

      if (opts['autoread']) await this.chatRead(m.chat).catch(() => { })

    }

  },

  async onCall(info) {

    console.log(info)

    let [data] = info

    let { from, isGroup, isVideo } = data


    let callList = JSON.parse(file)

    callList = JSON.stringify(callList)

    let users = global.users[from] || {}

    if (users.whitelist || users.rowner || users.owner || users.police || isGroup) return

    let user = callList[from]

    if(typeof user !== 'object') {

        callList[from] = {}

        user = callList[from]

        if(!isNumber(user.call)) user.call = 0

    }

    if(user.call < 3){

    	user.call += 1

        fs.writeFileSync('./call.json', user)

    	return this.sendMessage(from, { text: `Peringatan! Anda telah menelpon bot, ini adalah peringatan ke ${user.call}`})

    }

    await this.sendMessage(from, { text: 'Maaf, karena anda menelfon bot sebanyak 3 kali. anda diblokir otomatis' })

    await this.updateBlockStatus(from, 'block')

    if(opts['clearCallWhereAutoBlock']) user.call = 0

  }, 

// if (id in conn.chats) return // First login will spam

     async onGroupUpdate(info){

      let { id, participants, action } = info

        let chat = db.data.chats[id] || {}

        let text = ''

        switch (action) {

            case 'add':

            case 'remove':

                if (chat.welcome) {

                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata

                    for (let user of participants) {

                        let pp = './src/avatar_contact.png'

                        try {

                            pp = await this.profilePictureUrl(user)

                        } catch (e) {

                        } finally {

                    text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc.toString()) :

                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])

                            this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })

                        }

                    }

                }

                break

        case 'promote':

            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')

        case 'demote':

            if (!text)

                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')

            text = text.replace('@user', '@' + participants[0].split('@')[0])

            if (chat.detect)

                this.sendMessage(id, { text, mentions: this.parseMention(text) })

            break

        }

    },

    async delete(message) {

        try {

            const { fromMe, id, participant } = message

            if (fromMe) return

            let chats = Object.entries(conn.chats).find(([_, data]) => data.messages?.[id])

            if (!chats) return

            let msg = chats instanceof String ? JSON.parse(chats[1].messages[id]) : chats[1].messages[id]

            let chat = db.data.chats[msg.key.remoteJid] || {}

            if (chat.delete) return

            await this.reply(msg.key.remoteJid, `

Terdeteksi @${participant.split`@`[0]} telah menghapus pesan

Untuk mematikan fitur ini, ketik

*.enable delete*

`.trim(), msg, {

                mentions: [participant]

            })

            this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))

        } catch (e) {

            console.error(e)

        }

    }

},



conn.ws.on('CB:call', async function callUpdatePushToDb(json) {

        let call = json.tag

        let callerId = json.attrs.from

        console.log({ call, callerId })

        let users = db.data.users

        let user = users[callerId] || {}

        if (user.whitelist) return

        if (!db.data.settings[conn.user.jid].anticall) return

        switch (conn.callWhitelistMode) {

          case 'mycontact':

            if (callerId in conn.contacts && 'short' in conn.contacts[callerId])

            return

          break

        }

        const data = global.owner.filter(([id, isCreator]) => id && isCreator)

        let sentMsg = await conn.reply(callerId, `Sistem otomatis block, jangan menelepon bot silahkan hubungi owner untuk dibuka!`)

        await conn.sendContact(callerId, data.map(([id, name]) => [id, name]), sentMsg)

        await conn.updateBlockStatus(callerId, 'block')

        await conn.reply(owner[0]+'@s.whatsapp.net', `*NOTIF CALLER BOT!*\n\n@${callerId.split`@`[0]} telah menelpon *${conn.user.name}*\n\n ${callerId.split`@`[0]}\n`, null, { mentions: [callerId] })

        conn.delay(10000) // supaya tidak spam

    })



global.dfail = (type, m, conn) => {

  let msg = {

    rowner: 'Perintah ini hanya dapat digunakan oleh _*Real Owner*_',

    owner: 'Perintah ini hanya dapat digunakan oleh _*Owner Bot*_!',

    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_ !',

    premium: 'Perintah ini hanya untuk member _*Premium*_ !',

    group: 'Perintah ini hanya dapat digunakan di grup!',

    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',

    police: 'Perintah ini hanya untuk Police Bot', 

    admin: 'Perintah ini hanya untuk *Admin* grup!',

    ban: 'Maaf kamu sedang di banned', 

    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',

    unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Manusia.16*'

  }[type]

  if (msg) return m.reply(msg)

  }

  global.dfails = (jid, buffer, content, footer, button1, row1, button2, row2, quoted) => {

          conn.sendButton(m.chat, fetch(fla + 'Kamu Belum Terima Rules Bot!').buffer(), `Rules Undefined Bot

          1. Dilarang spam

          2. Dilarang untuk menggunakan command 18+ berlebihan (ketahuan = ban) 

          3. Dilarang memasukkan bot Tanpa izin Owner ataupun Police

          4. Bot harus admin jika ingin menggunakan fitur admin! 

          5. enable restrict untuk mengaktifkan fitur admin

          

          Rules Pengguna Undefined Bot

          1. Dilarang spam & telpon bot

          2. Dilarang share nomor bot

          3. Dilarang menggunakan bot untuk hal yang tidak berguna

          4. Dilarang untuk membandingkan Undefined bot dengan yang lain

          5. Lapor bug ke Owner dan Police jika ditemukan

          

          Rules Admin & Group Undefined Bot

          1. Gunakan end group dengan otak di kepala jangan otak di dengkul

          2. Jangan spam invite dan kick menggunakan fitur bot

          3. Jika ada yang spam, bantu group close (untuk menghindari Overload) 

          4. Gk suka sama Undefined bot? kick aja bodoh

          

          Owner & Police bot berhak banned permanen / sementara dan leave group jika ada yang melanggar! 

          Hormat kami Staff Undefined Bot

          `, '©Undefined Bot', 'Terima', '.terima', 'Tidak', '.tidak', m)

  	

}



let fs = require('fs')

let chalk = require('chalk')

let file = require.resolve(__filename)

fs.watchFile(file, () => {

  fs.unwatchFile(file)

  console.log(chalk.redBright("Update 'handler.js'"))

  delete require.cache[file]

  if (global.reloadHandler) console.log(global.reloadHandler())

})


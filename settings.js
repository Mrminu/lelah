/*
{
⥁ thanks to : 
⥁ Allah SWT
⥁ Ortu
⥁ lenwy [ base ]
⥁ ErerexID Chx [ Recode/Contribution ]
⥁ Adrian/xyzen [ Fixed ]
⥁ Kyuurz [ Fixed ]
⥁ All Created And Pengguna
Note : jangan hapus thanks to di atas ya para creator :) 
Utamakan Baca Text yang di sampaikan!!!!! 
}
*/
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

//apikey paydisini
global.paydisini = {
api: ""
}

//apikeymu
global.api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "Bell409"
  }
};

//Ambil apikey di maupedia.com
global.maupedia = {
  key: "nNI7Hg288dHqwK6YoSEQHJqoHLDBkC1nhB3aExH8oQzrcB4383iPnH84uihSM8H0",
  signature: "792413f9e53f40a5bf85e421eb4c465663fbc1bd",
  secret: "Mewing",
};

global.grup = 'https://chat.whatsapp.com/JBMxhUhobcaAkmB1lxkPsV'
global.ig = 'ramzy_chx'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'luwibuu1@gmail.com'
global.region = 'Private'

global.owner = ['62895342022385','254774710755']
global.ownername = 'ErerexID Chx'

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'
global.sherly= '66a4afa9509d747f4ac3' //vvip
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

global.botname = 'Yori Chan Multi Device'
global.packname = 'ErerexID Chx'
global.author = `ErerexID Chx`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Session Yori'
global.anticall = true
//Server crete panel egg biasa
global.domain = 'https://panel.rieeestore.my.id' // Isi Domain Lu jangan kasih tanda / di akhir link
global.apikey = 'ptla_jn6Cwis1RyBZcL2L0NEpC5n2tdqc48vp6awe1XXlO8D' // Isi Apikey Plta Lu
global.capikey = 'ptlc_wrknu0wowImGj7GtpWWnPZ9g6TFjKz5nYKvf3eXrp5v' // Isi Apikey Pltc Lu
//===========================//
//Server create panel egg pm2
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.domain2 = '-' // Isi Domain Lu
global.docker2 = "ghcr.io/cekilpedia/vip:sanzubycekil" //jangan di ubah

global.eggsnya2 = '15' // id eggs yang dipakai
global.location2 = '1' // id location
//===========================//
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
global.eggsnya = '15' // id eggs yang dipakai
global.location3 = '1' // id location
//===========================//
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
global.eggsnya = '15' // id eggs yang dipakai
global.mess = {
    success: '☘️ *Selesai*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur ini cuma bisa buat owner*😘',
    prem: '⚠️ *Fitur ini cuma bisa buat member premium*😘',
    group: '⚠️ *Fitur Ini cuma bisa digunakan di grup friend😊*',
    wait: '⌛ *Dalam Proses (*∩_∩*)*',
    error: '⚠️ *Kayaknya Ada Error Nih ╥﹏╥*',
    
    // Fitur Store & Report
    owner2: '62895342022385',
    qris: 'https://telegra.ph/file/997314a7d00d3fc850bff.jpg',
    format: '🎁 *Pembayaran*\n📣 *All Payment Bisa Scan Qr Diatas(ERROR)*\n\n📃 *Metode Lain*\n🏷️ *Dana : 62895339369871*\n🏷️ *Gopay : 62895342022385*\n\n⚠️ *Dimohon Untuk Mengirim Bukti Pembayaran*\n\n❤️ *Terimakasih*',
}

global.limitawal = {
    premium: 9999999999 ,
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
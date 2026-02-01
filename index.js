// GiyuTomiokaBot-MD 

// Base 100% Editable creditos a Naufrabot 

// Página oficial naufrabot.com

// Sígueme en todas mis redes para estar informados con las novedades de la base

// Propietario: Gabriel-V (El Patrón) 🌊

//Modulos
const { default: makeWASocket,
  DisconnectReason, JulsBotIncConnect, getAggregateVotesInPollMessage, delay, makeCacheableSignalKeyStore, useMultiFileAuthState,
 fetchLatestBaileysVersion, 
 generateForwardMessageContent,
 prepareWAMessageMedia, 
 generateWAMessageFromContent, 
 generateMessageID,
  downloadContentFromMessage, 
  jidDecode,
   proto } = require("baileys")
const fs = require('fs')
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const fetch = require('node-fetch')
const pino = require('pino')
const util = require("util")
const speed = require("performance-now");
const mimetype = require('mime-types')
const { exec, spawn, execSync } = require("child_process")
let phoneNumber = "5199999999"; // cambiar número
const axios = require("axios")
 const ffmpeg = require('fluent-ffmpeg')
 
 //color
const chalk = require('chalk')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
 
 //baner
const banner = cfonts.render("GIYU| TOMIOKA| BOT", {
  font: 'pallet',
  align: 'center',
  colors: ["blue"]
})
      // FUNCIONES DESCARGA 
const { fetchJson , getBuffer ,fetchBuffer } = require('./fuction/download/gets.js')


const {getExtension, getRandom } =require('./fuction/settings/fuctions.js')

 //Stickers (Calcomanías digitales)
const { sendVideoAsSticker, sendImageAsSticker } = require('./fuction/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./fuction/sticker/rename2.js');

;
 
 //Grupos js
const { MoneyOfSender, addkoin, delkoin, AddReg, checkOfReg , addLevel, addXp,levelOfsender , xpOfsender ,checkOfRegM ,addkoinM , delkoinM , MoneyOfM,Rxp, addRxp ,addRep , delRep , repUser  } = require('./settings/Grupo/Js/reg.js')
     
           // GAMES
const  { addClaim , checkClaim , timeClaim ,expiredClaim } = require('./Games/Js/claim.js')
const { checkCasino,checkAttp,checkEmoji,checkEve, addClaimTraga, checkClaimTraga, timeClaimTraga, checkRuleta,checkMinar,addCasino,addAttp,addEmoji,addEve,addRuleta ,addMinar,expiredCasino,expiredMinar,expiredAttp,expiredEmoji,expiredEve,expiredRuleta,timeAttp,timeEmoji,timeEve,timeRuleta,timeMinar,timeCasino,expiredDayli,JsonDayli,addDayli,timeDayli,checkDayli,checkPescar,timePescar,addPescar,expiredPescar}
 = require('./Games/Js/mining.js')


      
    // Menu bot js
const Menu = require ('./settings/Bot/Js/menu.js')

 //configurar ggrupos
const welkom = JSON.parse(fs.readFileSync('./settings/Grupo/Json/welkom.json')) 
const antilink = JSON.parse(fs.readFileSync('./settings/Grupo/Json/antilink.json'))
const bngp = JSON.parse(fs.readFileSync('./settings/Grupo/Json/grupo.json'))
const Antipv = JSON.parse(fs.readFileSync('./settings/Grupo/Json/chat.json'))
const registro = JSON.parse(fs.readFileSync('./settings/Grupo/Json/registros.json')) 
const Exportion = JSON.parse(fs.readFileSync('./Games/Json/exportion.json'))
const Exportion1 = JSON.parse(fs.readFileSync('./Games/Json/exportion1.json'))
const Cuestions = JSON.parse(fs.readFileSync('./Games/Json/cuestions.json'))
              
   // 𝚃𝙸𝙼𝙴
const moment = require("moment-timezone") 
const time = moment.tz('America/Caracas').format('DD/MM HH:mm:ss')
const horap = moment().format('HH')
var timeFt ='Saludos 🌊'
if (horap >= '01' && horap <= '05') {
  timeFt = '𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨 🌊'
} else if (horap >= '05' && horap <= '12') {
  timeFt = '𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨 ☀️'
} else if (horap >= '12' && horap <= '18') {
  timeFt = '𝘽𝙪𝙚𝙣𝙖𝙨 𝙩𝙖𝙧𝙙𝙚𝙨 ⛅'
} else if (horap >= '18' && horap <= '23') {
  timeFt = '𝙗𝙪𝙚𝙣𝙖𝙨 𝙣𝙤𝙘𝙝𝙚𝙨 🌑'
}



 //Configuraciones 
var { creador, owner, Bot, JpgBot, API_KEY_NAUFRA } = require("./settings/settings.json");        
const prefixo = ['#','/','•','.','!','?','*']// @ Prefijos



const pairingCode = true;

const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

async function startProo() {
  console.clear();
  console.log(banner.string);
  console.log(chalk.cyanBright("🌊GiyuTomiokaBot-MD"));

  // Estado de sesión
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  // Crear socket
  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false, // Desactivado para no mostrar QR
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }))
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    syncFullHistory: false,
  });

  // 🟢 Si no hay sesión registrada, generar el código de vinculación de 8 dígitos
  if (!sock.authState.creds.registered) {
    let number = await question(
      chalk.blue("🌊 Ingrese el número del dispositivo para la Sede (con código de país): ")
    );
    rl.close();
    number = number.replace(/[^0-9]/g, "");

    if (!number) {
      console.log(chalk.red("❌ Error lógico: El número es inexistente."));
      process.exit(1);
    }

    console.log(chalk.cyan("⏱️  Solicitando sello de vinculación a los servidores..."));
    try {
      const code = await sock.requestPairingCode(number);
      console.log(chalk.bgBlue.white("🌊 SELLO DE VINCULACIÓN:"), chalk.bold.white(code));
    } catch (err) {
      console.error(chalk.red("❌ El flujo ha sido interrumpido:"), err.message);
      process.exit(1);
    }
  }


  // 🔄 Monitorear el estado de conexión
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("❌ El flujo ha sido cortado: Sesión cerrada. Elimine la carpeta 'session' para restaurar la conexión."));
      } else {
        console.log(chalk.yellow("⚠️ La marea está agitada: Conexión cerrada, reconectando..."));
        startProo();
      }
    } else if (connection === "open") {
      console.log(chalk.blueBright("✅ GiyuTomiokaBot-MD: Conexión establecida con éxito en la sede."));
      exec("rm -rf tmp && mkdir tmp");
    }
  });


  // Guardar credenciales cuando se actualicen
  sock.ev.on("creds.update", saveCreds);



    
               // 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 
        // 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚈 𝙳𝙴𝚂𝙿𝙴𝙳𝙸𝙳𝙰 
sock.ev.on("group-participants.update", async (anu) => {
if(!welkom.includes(anu.id)) return
try {
const metadata = await sock.groupMetadata(anu.id)
  participants = anu.participants
  for (let num of participants){
 
if(anu.action == 'add') {
const grup = metadata.subject
const num = anu.participants[0]
const mem = metadata.participants.length
const descr = metadata.desc
const sol = `
🌊 *𝐆𝐈𝐘𝐔 𝐓𝐎𝐌𝐈𝐎𝐊𝐀: 𝐒𝐄𝐃𝐄*

Bienvenido a *${grup}*, @${num.split('@')[0]}. Yo soy **Giyu Tomioka**.

Cumple las normas de esta sede con disciplina. Quienes causen desorden serán eliminados de inmediato. Si tienes voluntad, sobrevivirás.

『 👥 Ya somos ${mem} cazadores 』
`

await sock.sendMessage(anu.id, {
  image: { url: "https://i.postimg.cc/CxCb7HjH/9d10aafef18b9f6c83ad841de1bee9cb.jpg" },
  caption: sol,
  mentions: [num]
})
}

if (anu.action == 'promote') {
    num = anu.participants[0]    
    teks = `
🌊 *𝐑𝐄𝐂𝐎𝐍𝐎𝐂𝐈𝐌𝐈𝐄𝐍𝐓𝐎*

🪪 **Nombre:** @${num.split('@')[0]}
🌐 **Sede:** ${metadata.subject}

Has demostrado ser digno. A partir de ahora eres un **Pilar (Administrador)**. Mantén la calma y protege el orden.
`
  await sock.sendMessage(anu.id,{image : { url : "https://i.postimg.cc/CxCb7HjH/9d10aafef18b9f6c83ad841de1bee9cb.jpg" }, caption : teks, mentions: [num]})
    }


} 
}catch(e) {
console.log('Error: %s', color(e, "red"))
}
})

//Bienvenida y despedidas

sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const numerodono = [
  `${owner}`
];


const verificarN = async(sla) => {
const [result] = await sock.onWhatsApp(sla)
if(result == undefined) {
enviar("Este usuário no existe en WhatsApp")
} else {
enviar(`${sla} Número existente en WhatsApp con  id: ${result.jid}`)
}
}
    
// Constantes is
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant: from
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants || [] : [];
const nome = info.pushName ? info.pushName : ''
const groupAdmins = groupMembers.filter(p => p.admin);
const Sadm = isGroup ? getGroupAdmins(groupAdmins) :''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const text = args.join(' ')
const isCmd = body.startsWith(prefixo)
              
  // MULTIPREFIJO 
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const prefixes = prefixo ? prefixo.map(prefix => prefix.toLowerCase()) : [];
const lowerBudy = budy.toLowerCase();
const hasPrefix = prefixes.some(prefix => lowerBudy.startsWith(prefix));
const commandArgs = hasPrefix ? lowerBudy.slice(prefixes.find(prefix => lowerBudy.startsWith(prefix)).length).trim().split(' ') : lowerBudy.trim().split(' ');
const comando = removeAccents(commandArgs[0]);
  // MULTIPREFIJO
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const senderNumber = sender.split("@")[0]
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isOwner =  numerodono.includes(sender)


const isGroupAdmins = groupAdmins.some(admin => admin.id?.includes(sender));
const isBotGroupAdmins = esAdminFlexible(sock, groupAdmins.map(p => p.id));

function esAdminFlexible(sock, listaDeAdmins = []) {
  if (!sock?.authState?.creds?.me) return false;

  const botId = sock.authState.creds.me.id;   // ej: 51916525000:26@lid
  const botLid = sock.authState.creds.me.lid; // ej: 51916525000@lid

  const clean = (jid) => jid?.split(':')[0]; // elimina el ":26" si existe

  return listaDeAdmins.some(adminJid => {
    const adminBase = clean(adminJid);
    return (
      adminJid === botId ||
      adminJid === botLid ||
      adminJid === botId.replace(/:\d+/, '') || // compara sin ":xx"
      adminJid === botLid.replace(/:\d+/, '') ||
      adminBase === clean(botId) ||
      adminBase === clean(botLid)
    );
  });
}

const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 

           // Constantes if nuevas
  const iswelkom = isGroup ? welkom.includes(from) : false
const isBanGp = isGroup ? bngp.includes(from) : false
const isAntipv = Antipv.includes('activo')
const isReg = checkOfReg(sender)
 const isAntiLink = isGroup ? antilink.includes(from) : false 
const coins = MoneyOfSender(sender)
 
 // 🟢 Sistema de encendido/apagado global del bot

const estadoPath = './settings/estadoBot.json'


if (!fs.existsSync(estadoPath)) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: true }, null, 2))
}
let botActivo = JSON.parse(fs.readFileSync(estadoPath)).activo
function guardarEstadoBot(estado) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: estado }, null, 2))
  botActivo = estado
}

//

//MODO ADMIN 

const modoAdminPath = './settings/Grupo/Json/modo_admin.json';
const modoAdminList = fs.existsSync(modoAdminPath) ? JSON.parse(fs.readFileSync(modoAdminPath)) : [];
const isModoAdmin = isGroup ? modoAdminList.includes(from) : false;



 //Funciones nuevas
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
} 
function DLT_FL(file) {
        try {
            fs.unlinkSync(file);
        } catch (error) {
            return;
        }
    }
    
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
 //rangos
const rangos = JSON.parse(fs.readFileSync('./settings/rangos.json'))
const YouN = levelOfsender(sender)
const Mlevel = rangos[YouN] || 'Cazador sin Rango'

 
 

 
 const Rrxp = Rxp(sender)
 const Crxp = xpOfsender(sender)
 var Mrxp ;
 if(Crxp <= Rrxp + 50){
 var Mrxp = '▒▒▒▒▒▒▒▒▒▒ 0%'
 }else if(Crxp <= Rrxp + 100){
 var Mrxp = '█▒▒▒▒▒▒▒▒▒ 10%'
 }else if(Crxp <= Rrxp + 200){
 var Mrxp = '██▒▒▒▒▒▒▒▒ 20%'
 }else if(Crxp <= Rrxp + 300){
 var Mrxp = '███▒▒▒▒▒▒▒ 30%'
 } else if(Crxp <= Rrxp + 400){
 var Mrxp = '████▒▒▒▒▒▒ 40%'
 }else if(Crxp <= Rrxp + 500){
 var Mrxp = '█████▒▒▒▒▒ 50%'
 }else if(Crxp <= Rrxp + 600){
 var Mrxp = '██████▒▒▒▒ 60%'
 }else if(Crxp <= Rrxp + 700){
 var Mrxp = '███████▒▒▒ 70%'
 }else if(Crxp <= Rrxp + 800){
 var Mrxp = '████████▒▒ 80%'
 }else if(Crxp <= Rrxp + 999){
 var Mrxp = '█████████▒ 90%'
 } else if(Crxp >= Rrxp + 1000){
 var Mrxp = '██████████ 100%'
 }
 
             // 𝙽iveles
 // Constantes if
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")


const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}



//funcion para mencionar 

const obtenerMencionado = (info) => {
    const context = info.message?.extendedTextMessage?.contextInfo
        || info.message?.contextInfo
        || null;

    if (context?.mentionedJid && context.mentionedJid.length > 0) {
        return context.mentionedJid[0];
    }

    if (context?.participant) {
        return context.participant;
    }

    return null;
};

     //  Time
const runtime = function(seconds) {
    seconds = Number(seconds);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Utilizando Math.floor() para asegurar que los segundos sean enteros
    const parts = [];    
    if (days > 0) {
        parts.push(days + (days === 1 ? " 𝙳𝙸𝙰" : " 𝙳𝙸𝙰𝚂"));
    }
    if (hours > 0) {
        parts.push(hours + (hours === 1 ? " 𝙷𝙾𝚁𝙰" : " 𝙷𝙾𝚁𝙰𝚂"));
    }
    if (minutes > 0) {
        parts.push(minutes + (minutes === 1 ? "  𝙼𝙸𝙽𝚄𝚃𝙾" : " 𝙼𝙸𝙽𝚄𝚃𝙾𝚂"));
    }
   if (remainingSeconds > 0) {
    parts.push(remainingSeconds + (remainingSeconds === 1 ? " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾" : " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂"));
    }    
    return parts.join(', ');
}

  // Respuesta
     const respuesta = {
  admin: "『 🚫 No eres un Pilar (Administrador) 』",
  botadmin: "『 ⚠️ El bot requiere rango de Pilar para ejecutar esto 』",
  grupos: "『 💬 Comando disponible solo en la Sede 』",
  vacio: "『 ❓ Falta información para procesar el reporte 』",
  miowner: "『 ⛔ Solo el Patrón Gabriel-V tiene acceso a esto 』",

  registro: `
╔═════ 🌊 𝐒𝐄𝐃𝐄 🌊 ═════╗
  No apareces en nuestros registros.
  Para ser un cazador oficial, escribe:
  
  🔹 .reg
╚════════════════════╝
`,

  yaregistro: `
╔═════ 🌊 𝐒𝐄𝐃𝐄 🌊 ═════╗
  Tu nombre ya está grabado en los 
  archivos de la organización.
╚════════════════════╝
`,

  coins: `『 ¥ Yenes insuficientes para esta transacción @${sender.split('@')[0]} 』`
}


 
   // Verificados
 const SvnC = {key : {participant : '0@s.whatsapp.net'},message : {contactMessage : {displayName : `${pushname}`}}};
 
  // Funciones para crear códigos de 6 Digitos
  
  function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }
    return codigo;
}


 // MENSAJES EN CONSOLA
 
// comando pv
if  (!isGroup && isCmd) console.log( '\n  ╔─━━━━ ', color(' CMD 「 USUARIO 」','blue'), '━━━━─╗','\n',
color(' GRUPO :','blue'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','blue'),color(pushname,'cyan'),'\n',
color(' COMANDO :','blue'),color(comando,'cyan'),'\n',
color(' HORA :','blue'),color(hora,'cyan'),'\n',
color(' DATOS :','blue'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('GIYU-TOMIOKA','blue'), '━━━━━─╝')

//pv
if (!isCmd && !isGroup) console.log( '\n  ╔─━━━━━', color(' CHAT 「 BOT 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','blue'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','blue'),color(pushname,'cyan'),'\n',
color(' MENSAJE :','blue'),color(budy,'cyan'),'\n',
color(' HORA :','blue'),color(hora,'cyan'),'\n',
color(' DATOS :','blue'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━ '),color ('【✔】 ','blue'), '━━━━━━━━━─╝')

//comando grupo
if (isCmd && isGroup) console.log( '\n  ╔─━━━ ', color('  CMD 「 USUARIO 」','blue'), '━━━─╗','\n',
color(' GRUPO :','blue'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','blue'),color(pushname,'cyan'),'\n',
color(' COMANDO :','blue'),color(comando,'cyan'),'\n',
color(' HORA :','blue'),color(hora,'cyan'),'\n',
color(' DATOS :','blue'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('GIYU-TOMIOKA','blue'), '━━━━━─╝')

//mensaje grupo
if (!isCmd && isGroup) console.log( '\n  ╔─━━━━━', color(' CHAT 「 BOT 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','blue'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','blue'),color(pushname,'cyan'),'\n',
color(' MENSAJE :','blue'),color(budy,'cyan'),'\n',
color(' HORA :','blue'),color(hora,'cyan'),'\n',
color(' DATOS :','blue'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━━ '),color ('【✔】 ','blue'), '━━━━━━━━━─╝')
   
  
   expiredClaim();
 expiredMinar()
expiredAttp()
expiredEmoji()
expiredEve()
expiredDayli()
expiredPescar()
expiredRuleta()
//ban grupo
if(isBanGp) {
return
}
      // antiprivado
if(isAntipv && !isGroup && !isOwner){
sock.updateBlockStatus(sender, 'block')
}

// INICIO DE COMANDOS
//solo funciona si está activado el bot
// Si el grupo está en modo admin y el usuario no es admin ni owner, se bloquea su acceso
if (isModoAdmin && !isGroupAdmins && !isOwner) return;
if (!botActivo && !isOwner) return

switch(comando) {

//Comandos owner


  

  
  
  case 'menu':
case 'help': {
    if (!isGroup) return;
    if (!isReg) return enviar(respuesta.registro);

    const Mnu = Menu(timeFt, Bot, sender, groupName, groupMembers);

    // Enviar imagen del menú completa
    await sock.sendMessage(from, {
        image: { url: JpgBot },
        caption: Mnu,
        mentions: [sender]
    }, { quoted: info });
}
break;

case 'boton': 
case 'botonon':
case 'encender':
  if (!isOwner) return enviar(respuesta.miowner)
  if (botActivo) return enviar('El sistema ya está operativo. No hay perturbaciones, patrón.')
  guardarEstadoBot(true)
  enviar('🌊 Giyu Tomioka presente. La guardia ha comenzado y estoy listo para la batalla, patrón.')
break

case 'botoff':
case 'apagar':
case 'offbot':
  if (!isOwner) return enviar(respuesta.miowner)
  if (!botActivo) return enviar('La sede ya se encuentra en calma absoluta, patrón.')
  guardarEstadoBot(false)
  enviar('Vigilancia desactivada. Entrando en estado de meditación por orden suya, patrón.')
break



case 'antiprivado':
case 'antipv':{
if(!isOwner) return enviar(respuesta.miowner)
if(args[0]=== 'on' ){
if(isAntipv) return enviar('La barrera ya está alzada por órdenes de usted, patrón.')
Antipv.push('activo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('🌊 Todo aquel que escriba a mi privado será bloqueado de inmediato por órdenes de usted, patrón.')
} else if(args[0] === 'off'){
if(!isAntipv) return enviar('La barrera ya estaba abajo por órdenes de usted, patrón.')
Antipv.splice('desactivo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('Defensa desactivada. El acceso al privado ha sido restaurado por órdenes de usted, patrón.')
} else {
enviar('Indique la orden: on para activar o off para desactivar la barrera, patrón.')
}
}
break 



case 'rvisu': case 'revelarvisu': case 'open':
    if(!isOwner) return enviar(respuesta.miowner)
    enviar('🌊 Concentración: Respiración de Agua. Nada escapará de mi vista, patrón...')
    try{    
        if(JSON.stringify(info).includes("videoMessage")) {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
            viewVideo.viewOnce = false
            viewVideo.video = {url: viewVideo.url}
            viewVideo.caption = "⚔️ Video revelado. El flujo del tiempo no borrará este rastro por órdenes de usted, patrón."
            sock.sendMessage(from, viewVideo)
        } else {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
            viewImage.viewOnce = false
            viewImage.image = {url: `${viewImage.url}`}
            viewImage.caption = "💧 Calma absoluta. La imagen ha sido expuesta por órdenes de usted, patrón."
            sock.sendMessage(from, viewImage)
        }
    } catch(e){
        console.log(e)
        enviar("La técnica ha fallado. El rastro se ha disuelto como la espuma, patrón.")
    }
    break
    
case 'reiniciar': {
    if (!isOwner) return enviar(respuesta.miowner);
    
    enviar(`🌊 *Por órdenes de usted, patrón, voy a reiniciar mi presencia...*`);
    
    console.log("=== REINICIO DE SISTEMA: ORDEN DEL PATRÓN ===");
    
    setTimeout(async () => {
        process.exit(0);
    }, 1500);
}
break;


//información 

case 'infobot': case 'ping': {
if (!isGroup) return
let timestamp = speed()
let latensi = speed() - timestamp
uptime = process.uptime()
botinfo = `
╔═【 🌊 𝑬𝒔𝒕𝒂𝒅𝒐 𝒅𝒆 𝒍𝒂 𝑺𝒆𝒅𝒆 】═╗
⏰  𝐇𝐎𝐑𝐀 »  ${time}
📅  𝐅𝐄𝐂𝐇𝐀 »  ${data}
🤖  𝐏𝐈𝐋𝐀𝐑 »  Giyu Tomioka
⚡  𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 »  ${latensi.toFixed(4)} ms
⏳  𝐆𝐔𝐀𝐑𝐃𝐈𝐀 »  ${runtime(uptime)}
💾  𝐄𝐍𝐄𝐑𝐆𝐈́𝐀 »  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
🌊  𝐄𝐒𝐓𝐀𝐃𝐎 »  Listo para la batalla
╚══❖═══════❖══╝
`
sock.sendMessage(from, { image: { url: JpgBot }, caption: botinfo }, { quoted: info })
}
break 

case 'botcompleto':
case 'bot':
enviar(`🌊 *El Pilar del Agua está en su puesto. El sistema opera bajo disciplina.*`);
break

case 'grupos':
case 'grupo':
enviar(`⚔️ *Vigilancia activa. Todos los sectores bajo control de la Sede.*`);
break

case 'serdueño':
case 'sercreador':
case 'owner':
case 'serowner':
enviar(`🌊 *Mi lealtad es inquebrantable. Este sistema solo reconoce la autoridad de el patrón.*`);
break

case 'canal':
case 'canales':
enviar(`*No hay rutas de suministros abiertas por ahora.*`)
break



case 'serbot':
    try {
        const moneybot = `🌊 *Acceso denegado.*

No está permitido generar sub-bots bajo esta jurisdicción. Permitir más presencias comprometería los recursos y la velocidad de respuesta de la Sede. 

*Por órdenes de el patrón, mantendremos la disciplina y el flujo del sistema sin interferencias.*`;

        // Enviar el mensaje final
        await enviar(moneybot);

    } catch (e) {
        console.error(e);
        enviar("La técnica de comunicación ha fallado, patrón.");
    }
break;


//AJUSTES DEL GRUPO

case 'welcome' : 
case 'bienvenida' :
if (!isGroup) return 
if(args.length<1) return enviar('Indique 1 para activar o 0 para desactivar el protocolo de recepción.')
if(!isGroupAdmins) return enviar(respuesta.admin)
if(!isBotGroupAdmins) return enviar('El sistema requiere rango de administrador en este sector.') 
if(Number(args[0])=== 1) {
if(iswelkom) return enviar('🌊 El protocolo de bienvenida ya se encuentra operativo.')
welkom.push(from)
fs.writeFileSync('./settings/Grupo/Json/welkom.json',JSON.stringify(welkom))
enviar('✅ Protocolo de bienvenida activado exitosamente.')
} else if (Number(args[0])=== 0 ) {
if (!iswelkom) return enviar('El protocolo de bienvenida no está activo.')
welkom.splice(from,1)
fs.writeFileSync('./settings/Grupo/Json/welkom.json',JSON.stringify(welkom))
enviar('❌ Protocolo de bienvenida desactivado.')
} else {
enviar('Debe usar 1 o 0 para configurar la técnica.')
}
break

case 'bang':{
  if (!isGroup) return  
  // Si no es usted, lo rechaza sin llamarlo patrón
  if(!isOwner) return enviar('🌊 Solo recibo órdenes directas de el patrón. Usted no tiene autoridad.')
  
  if(!isBanGp) {
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp.push(from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ Sector bloqueado. El grupo ha sido baneado por órdenes de usted, patrón.')
  } else {
    enviar('Este sector ya se encuentra bajo restricción, patrón.')
  }
}
break

case 'desbangp':{
  if (!isGroup) return  
  if(!isOwner) return enviar('🌊 Usted no es el patrón. No interfiera con las restricciones de la Sede.')
  
  if(isBanGp) {
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp = bngp.filter(g => g !== from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ Restricción levantada. Acceso restaurado por órdenes de usted, patrón.')
  } else {
    enviar('Este sector no presenta restricciones activas, patrón.')
  }
}
break

case 'invocar':
case 'revivir':
if(!isReg) return enviar(respuesta.registro)
if(!isGroup) return enviar('Esta técnica solo es funcional dentro de los sectores de la Sede.')
if(!isGroupAdmins) return enviar(respuesta.admin) 
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `\n🌊 *RECUENTO TOTAL:* ${groupMembers.length}\n`
nu = 0
for (let mem of groupMembers) {
nu += 1
teks += ` ➫[${nu.toString()}] @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(`
🌊 ❝ *CONVOCATORIA GENERAL* ❞ 
*Presencia obligatoria en el sector inmediatamente.*

${teks}
`, members_id, true)
break


case 'anuncio':{
if(!isGroup) return enviar('Esta técnica de comunicación solo es válida dentro de los sectores de la Sede.')
if(!isGroupAdmins) return enviar('Solo los Pilares (administradores) tienen autoridad para emitir anuncios generales.') 
if(!q) return enviar('Debe proporcionar el mensaje para el anuncio.')
men = []
num = 0
teks = `
🌊 ❝ *AVISO DE LOS PILARES (ADMINISTRADORES)* ❞
 👉 ❝ ${q} ❞ 👈 
\n`
for(let m of groupMembers){
num +=1 
teks += `• [${num.toString()}] @${m.id.split('@')[0]}\n`
men.push(m.id)
}
mentions(teks,men,true)
}
break 

case 'modoadmin': {
  if (!isGroup) return enviar("Esta restricción solo puede aplicarse en sectores de grupo.");
  if (!isGroupAdmins) return enviar("Esta técnica está reservada exclusivamente para los Pilares (administradores).");
  
  const JsonModoAdmin = './settings/Grupo/Json/modo_admin.json';
  let modoAdmin = JSON.parse(fs.readFileSync(JsonModoAdmin));
  const estado = args[0];

  if (!estado) return enviar("Especifique el estado:\n\n*modoadmin 1* → Restringir a Pilares (administradores)\n*modoadmin 0* → Permitir acceso general");

  if (estado === "1") {
    if (!modoAdmin.includes(from)) {
      modoAdmin.push(from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar(`🌊 *Modo administrativo activado.* Solo los Pilares (administradores) podrán usar mis técnicas en este sector${isOwner ? ', patrón' : '.'}`);
    } else {
      enviar(`Este sector ya se encuentra bajo la protección de los Pilares (administradores)${isOwner ? ', patrón' : '.'}`);
    }
  } 
  
  else if (estado === "0") {
    if (modoAdmin.includes(from)) {
      modoAdmin = modoAdmin.filter(g => g !== from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar(`🟢 *Modo administrativo desactivado.* Los integrantes tienen permiso de uso nuevamente${isOwner ? ', patrón' : '.'}`);
    } else {
      enviar(`No hay restricciones de Pilares (administradores) activas en este sector${isOwner ? ', patrón' : '.'}`);
    }
  } 
  
  else {
    enviar("Use *1* para activar o *0* para desactivar.");
  }
}
break;

case 'etiquetar' :
case 'notify' :
  if(!isReg) return enviar(respuesta.registro)
  if(!isGroupAdmins) return enviar("Solo los Pilares (administradores) pueden convocar a las filas de esta manera.")
  if(!isGroup) return enviar('Esta acción no puede ejecutarse en un chat privado.')
  if(!q) return enviar('Debe escribir el mensaje para que los Pilares (administradores) notifiquen a las filas.')
  
  var group = await sock.groupMetadata(from)
  var member = group['participants']
  var mem = []
  member.map(async adm => {
    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
  })
  
  var optionshidetag = {
    text : `🌊 *NOTIFICACIÓN DE LOS PILARES (ADMINISTRADORES):*\n\n${q}`,
    contextInfo: { mentionedJid: mem },
    quoted: m
  }
  sock.sendMessage(from, optionshidetag)
break


case 'kick' :
case 'ban' :
case 'muere' :{
if (!isGroup) return  
if(!isGroupAdmins) return enviar('Solo los Pilares (administradores) tienen autoridad para expulsar a un integrante.')
if(!isBotGroupAdmins) return enviar (respuesta.botadmin)
let mentioned = obtenerMencionado(info);

if (!mentioned) return enviar("⚠️ Debe etiquetar a un integrante para ser eliminado por mi.");

if(mentioned === BotNumber || mentioned === owner) return enviar(`🤨 No seas ridículo. Jamás osaría eliminar al patrón Gabriel-V`)
await sock.groupParticipantsUpdate(from, [mentioned] , 'remove')
enviar(`🌊 El objetivo ha sido eliminado por mi bajo las órdenes del patrón.`)
}
break 
     
case 'antilink':
  if (!isGroupAdmins) return enviar('Solo los Pilares (administradores) pueden gestionar las barreras del sector.')
  if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
  if (args.length < 1) return enviar(`Indique 1 para activar o 0 para desactivar la técnica.`)

  if (Number(args[0]) === 1) {
    const msgActivo = `✅ *TÉCNICA DE DETECCIÓN ACTIVADA:* Cualquier demonio que intente infiltrar enlaces (spamer) será eliminado de inmediato por mi${isOwner ? ',' : '.'}`;
    if (isAntiLink) return enviar(msgActivo)
    antilink.push(from)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar(msgActivo)
  } 
  else if (Number(args[0]) === 0) {
    const msgDesactivo = `❌ *BARRERA DESACTIVADA:* La vigilancia ha cesado. El flujo de enlaces ha sido restaurado bajo su responsabilidad`;
    if (!isAntiLink) return enviar(msgDesactivo)
    const index = antilink.indexOf(from)
    antilink.splice(index, 1)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar(msgDesactivo)
  } 
  else {
    enviar(`Use 1 para activar o 0 para desactivar.`)
  }
break;

case 's':
case 'sticker':
  if(!isReg) return enviar(respuesta.registro)
  if(coins < 1) return enviar(`Su tesorería no cuenta con los **Yenes** suficientes para esta técnica.`)

  // Primero detectamos si hay un mensaje citado
  var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  
  // Modificado: Ahora el bot mira el mensaje actual ANTES que el citado para permitir enviar foto + s
  var boij2 = info.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
  var boij = info.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage

  var pack = `🌊 𝐒𝐞𝐝𝐞 𝐂𝐞𝐧𝐭𝐫𝐚𝐥 🌊\n𝐏𝐚𝐭𝐫𝐨́𝐧: 𝐆𝐚𝐛𝐫𝐢𝐞𝐥-𝐕\n⭐ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n ${pushname} `
  var author2 = `🤖 𝐆𝐢𝐲𝐮𝐓𝐨𝐦𝐢𝐨𝐤𝐚𝐁𝐨𝐭-𝐌𝐃 🤖\n𝐏𝐢𝐥𝐚𝐫 𝐝𝐞𝐥 𝐀𝐠𝐮𝐚\n🗺️ 𝐒𝐞𝐜𝐭𝐨𝐫:\n${groupName} `

  if(boij2){
    enviar(`🌊 *Iniciando proceso de sellado...* GiyuTomiokaBot-MD está procesando su solicitud.`)
    owgi = await getFileBuffer(boij2, 'image')
    let encmediaa = await sendImageAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
    await DLT_FL(encmediaa)
    await addXp(sender,1)
    await delkoin(sender,1)
  } else if(boij && boij.seconds < 11){
    enviar(`Capturando esencia visual para ${pushname}...`)
    owgi = await getFileBuffer(boij, 'video')
    let encmedia = await sendVideoAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
    await DLT_FL(encmedia)
    await addXp(sender,1)
    await delkoin(sender,1)
  } else {
    return enviar(`Marque una imagen o un vídeo (máximo 10 segundos). No me haga perder el tiempo.`)
  }
break

case 'attp': 
case 'attp2': 
case 'attp3': 
try {
    if (!q.trim()) return enviar(`Escriba el texto que desea plasmar en el pergamino.`);
    enviar('*🌊 Transcribiendo texto en la Sede...*');

    var Fontes = commandArgs === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono";

    let axios = require("axios");
    let res = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_NAUFRA}`, {
        responseType: 'arraybuffer'
    });

    // Enviar el sticker desde el buffer
    await sock.sendMessage(from, { sticker: res.data }, { quoted: info });

} catch (e) {
    console.error(e);
    return enviar("Error..");
}
break;



                
                
                case 'emojimix': {
    if (!isReg) return enviar(respuesta.registro);
    if (coins < 1) return enviar(`No posee suficientes **Yenes** para realizar esta mezcla en la Sede.`);

    if (!q) return enviar(`
🌊 *TÉCNICA DE MEZCLA:* Combine dos emojis para crear una nueva esencia.
👉 *Uso:* !emojimix 😊+😂`);

    enviar('`🌊 Mezclando esencias...`');

    try {
        let [emoji1, emoji2] = q.split`+`;
        var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&
            contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
        
        for (let res of em.results) {
            let templateMessage = {
                image: { url: `${res.url}`, quoted: info }
            };
            sock.sendMessage(from, templateMessage, { quoted: info });

            // Reducir 1 Yen y agregar 1 de experiencia
            await delkoin(sender, 1);
            await addXp(sender, 1);
        }
        
    } catch (err) {
        enviar('❌ La mezcla ha fallado. Intente con una combinación de emojis válida.');
        console.log(err);
    }
}
break;;


///////////////////HERRAMIENTAS///////////

case 'amp3':
case 'tomp3':
  if(!isReg) return enviar(respuesta.registro)
  if(!isQuotedVideo) return enviar(`Marque un video para extraer su esencia sonora. No me haga perder el tiempo.`)
  enviar('`🌊 Extrayendo audio en la Sede...`')
  tomp = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage , 'video')
  sock.sendMessage(from,{audio :  tomp, mimetype: 'audio/mpeg'},{ quoted: info })		
  await addXp(sender,6)
  await delkoin(sender,3)
break 
				
case 'toimg':
  if(!isReg) return enviar(respuesta.registro)
  if(!isQuotedSticker) return enviar('Debe etiquetar un sticker para revelar su imagen original.')
  try {
    enviar('`🌊 Revelando imagen...`')
    buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
    sock.sendMessage(from, {image: buff , caption : `*${pushname}*, aquí tiene el resultado de la técnica.`},{quoted : info }).catch(e => {
      console.log(e);
      enviar('La técnica falló. Asegúrese de que sea un sticker estático y no un movimiento (GIF).')
    })
    await addXp(sender,3)
    await delkoin(sender,2)
  } catch {
    enviar('Ocurrió un error inesperado en la Sede.')
  }
break;

case 'calcular':
case 'cal':
  if (!isReg) return enviar(respuesta.registro)
  if(args.length == 0) return enviar(`🌊 *SISTEMA DE CÁLCULO DE LA SEDE*\n\nUse los símbolos: + (Suma), - (Resta), / (División), * (Multiplicación).\n\n*Ejemplo:* !cal 4+4`)
  try {
    const resultzx = eval(q)
    await sleep(1000)
    enviar(`🌊 *RESULTADO:* \n${q} = *${resultzx}*`)
  } catch {
    enviar('La operación es inválida. Mantenga el orden.')
  }
break;
            
//Nesecita clave API ////
case 'nik': case 'nic':
case 'generarnick': case 'nick':
try {
  if(!q.trim()) return enviar(`Escriba el nombre que desea plasmar con caligrafía especial. Ejemplo: !nick ${pushname}`);
  enviar('`🌊 Transcribiendo pergaminos...`');
  ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=${encodeURI(q)}&apikey=${API_KEY_NAUFRA}`)
  AB = `*📜 CALIGRAFÍA DE LA SEDE*\nEscoja la fuente que represente mejor su espíritu:\n\n`;
  for ( i of ABC) {
    AB += `${i}\n\n`;
  }
  enviar(AB);
} catch (e) {
  return enviar("La transcripción ha fallado. Error en la Sede.");
}
break;

case 'ia': case 'openai': case 'gpt': case 'chatgpt':
  enviar("*GiyuTomiokaBot-MD dictamina:* \n\nLa respuesta se perdió en la corriente. La IA no está disponible en este momento");
  return;
break

;;


//Economía niveles y experiencia 

case 'perfil' : case 'cartera' :
case 'nivel' : case 'minivel' :{
if(!isReg) return enviar(respuesta.registro)
var saldo = MoneyOfSender(sender)
const Xp = xpOfsender(sender)
const Mnv = levelOfsender(sender)
const Rxxp = Rxp(sender)
const myrep2 = repUser(sender)
const Xpnull = Rxxp - 1000
if(Xp === null) return addXp(sender,Xpnull)
const Mp = `
╔══✦❖✦══【 𝑷𝒆𝒓𝒇𝒊𝒍 𝒅𝒆𝒍 𝑪𝒂𝒛𝒂𝒅𝒐𝒓 】══✦❖✦══╗
🏷️  𝐍𝐨𝐦𝐛𝐫𝐞      »  @${sender.split('@')[0]}
⚔️  𝐑𝐚𝐧𝐠𝐨       »  ${Mlevel}
👑  𝐑𝐞𝐩𝐮𝐭𝐚𝐜𝐢𝐨́𝐧  »  ${myrep2}
💰  𝐓𝐞𝐬𝐨𝐫𝐞𝐫𝐢́𝐚  »  ¥${saldo} 𝐘𝐞𝐧𝐞𝐬
📈  𝐍𝐢𝐯𝐞𝐥       »  ${Mnv} ➜ ${Mnv + 1}
📚  𝐄𝐗𝐏         »  ${Xp} / ${Rxxp + 1000}
╚══✦❖✦══【 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐨 】══✦❖✦══╝
▰▰ ${Mrxp} ▰▰
`
   sock.sendMessage(from,{text : Mp, mentions : [sender]},{quoted : info})        
}
break 

//comando tragamonedas 
case 'tragamonedas':
case 'tragamoneda':
if (!isReg) return enviar("Debe registrarse en la Sede para participar.");
const apuestas = 1; // Coste en Yenes
if (coins < apuestas) return enviar("No posee suficientes **Yenes** para apostar.");

const ahora = Date.now();
const tiempoGuardado = timeClaimTraga(sender) || 0;
const tiempoRestante = tiempoGuardado - ahora;

if (tiempoRestante > 0) {
    return await enviar(`🌊 El Pilar del Agua le ordena esperar ${runtime(tiempoRestante / 1000)} para volver a probar su suerte.`);
} else {
    const espera = 8 * 60 * 60 * 1000; // 8 horas
    await addClaimTraga(sender, espera);
}

// Restar un Yen por jugar
await delkoin(sender, apuestas);

const simbolos = ['🌊', '⚔️', '👺', '🔥', '🦋', '⚡', '🐗', '🐍', '💖', '🌑'];

const obtenerFila = () => [
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)]
];

const filaArriba = obtenerFila();
const filaAbajo = obtenerFila();
let filaCentro;
const probabilidad = Math.random(); 

if (probabilidad < 0.6) {
    const simboloGanador = simbolos[Math.floor(Math.random() * simbolos.length)];
    filaCentro = [simboloGanador, simboloGanador, simboloGanador]; 
} else {
    filaCentro = obtenerFila(); 
}

const esGanador = filaCentro[0] === filaCentro[1] && filaCentro[1] === filaCentro[2];

let resultadoMensaje = "😢 Su técnica ha fallado... Regrese en 8 horas.";
let premioTexto = "";

if (esGanador) {
    const premioCantidad = Math.floor(Math.random() * 6) + 5; 
    const tipoPremio = Math.random() < 0.5 ? 'coins' : 'exp'; 

    if (tipoPremio === 'coins') {
        await addkoin(sender, premioCantidad);
        premioTexto = `🎉 Ha obtenido ${premioCantidad} **Yenes** para su tesorería.`;
    } else {
        await addXp(sender, premioCantidad);
        premioTexto = `📚 Ha ganado ${premioCantidad} de experiencia.`;
    }
    resultadoMensaje = "🎉 ¡Victoria en el campo de batalla! 🎉";
}

const mensajeCasino = `
         *༻  🎰 𝙏𝙍𝘼𝙂𝘼𝙈𝙊𝙉𝙀𝘿𝘼𝙎 𝙎𝙀𝘿𝙀 🎰 ༺*
            ┏━━━━┛🔱┗━━━━┓
             ||   【${filaArriba[0]}】【${filaArriba[1]}】【${filaArriba[2]}】   ||
           ◢◞───────────◟◣
        █ ||   【${filaCentro[0]}】【${filaCentro[1]}】【${filaCentro[2]}】   || █
           ◥◝───────────◜◤
             ||   【${filaAbajo[0]}】【${filaAbajo[1]}】【${filaAbajo[2]}】   ||
            ┗━━━━┓🔱┏━━━━┛
   🌊◆━━━━━━━▣✦▣━━━━━━━━◆🌊
Inversión: ${apuestas} Yen.
${resultadoMensaje}
${premioTexto}
`;

setTimeout(() => {
    enviar(mensajeCasino);
}, 3000);
break;



case "dayli": case "daily":
if(!isGroup) return
if(!isReg) return 
const dayli = checkDayli(sender)
if(dayli) {
    const ahora = Date.now()
    const time = timeDayli(sender)
    const result = ahora - time
    const resultado = (0 - result) / 1000;
    return sock.sendMessage(from,{text : `🌊 El Pilar del Agua le ordena esperar ${runtime(resultado)} para recibir nuevos suministros del Cuerpo de Cazadores.`},{quoted : info})
} else {
    const time = 24* 60* 60* 1000
    await addDayli(sender,time)
    const montoExperiencia = 5
    const monto = 1
    enviar(`
⏳🌊 𝐒𝐔𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐎𝐒 𝐃𝐈𝐀𝐑𝐈𝐎𝐒 🌊⏳

El Cuerpo de Cazadores le ha otorgado ${monto} **Yen** y ${montoExperiencia} de experiencia por su servicio.
`)
    await addkoin(sender,monto)
    await addXp(sender,montoExperiencia)
}
break

case 'reg': case 'registrarme': case 'registrame': case 'rg':
    if (isReg) return enviar(respuesta.yaregistro)
    const nombre = pushname
    await AddReg(sender, nombre)
    sock.sendMessage(from, {
        image: { url: JpgBot },
        caption: `★━━━━★━━━━★★━━━━★
         *༻  𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎  ༺*
📜 Recluta aceptado: *${nombre}*
💴 Has recibido *50 Yenes* de parte del Cuerpo de Cazadores como equipo inicial.
🌊 Bajo la supervisión de el patrón.
◆━━━━━━━▣✦▣━━━━━━━━◆`
    }, { quoted: info })
    break

case 'levelup': {
    const XpR = xpOfsender(sender)
    const Rxxp = Rxp(sender)
    if(XpR >= Rxxp + 1000) {
        await addLevel(sender , 1)
        sleep(100)
        await addkoin(sender,10)
        sleep(100)
        await addXp(sender,100)
        sleep(100)
        await addRxp(sender,1000)
        const Mup = ` 
        ★━━━ 𝐀𝐒𝐂𝐄𝐍𝐒𝐎 𝐃𝐄 𝐑𝐀𝐍𝐆𝐎 ━━━★
✪ @${sender.split('@')[0]}
🌊 El Cuerpo de Cazadores reconoce su nuevo rango. Siga entrenando para no decepcionar a el patrón.
`
        sock.sendMessage(from,{text : Mup , mentions : [sender]},{quoted : info})
    } else {
        enviar(`
❌ Experiencia insuficiente. *${pushname}*, el Cuerpo de Cazadores exige que entrene con más rigor.
`)
    }
}
break




case 'mision': case 'misión': case 'cazar': case 'minar': {
    if(!isReg) return enviar(respuesta.registro)
    if(!isGroup) return enviar(respuesta.grupos)
    const isMin = checkMinar(sender)
    if(isMin) {
        const ahora = Date.now()
        const time = timeMinar(sender)
        const result = ahora - time
        const resultado = (0 - result) / 1000;
        return enviar(`🌊 Se encuentra en recuperación tras la batalla... espere ${runtime(resultado)} para la siguiente misión.`)
    } else {
        const time = 1 * 60 * 1000 // 1 minuto de espera
        await addMinar(sender,time)
        const numbeR = [5, 6, 7, 8, 9, 10];
        const randomIndex = Math.floor(Math.random() * numbeR.length);
        const monto = numbeR[randomIndex];
        enviar(`
               ★━━━ 𝐌𝐈𝐒𝐈𝐎́𝐍 𝐃𝐄 𝐂𝐀𝐙𝐀 ━━━★
🌊 Tras un arduo enfrentamiento, ha exterminado a un grupo de demonios menores.
💰 El Cuerpo de Cazadores le otorga una recompensa de *${monto} Yenes*.
💬 ❝ La Sede garantiza un pago mínimo de *5 Yenes* por mantener los sectores seguros. ❞

⏳ Descanse, recibirá nuevas órdenes en 1 minuto.
`)
        await addkoin(sender,monto)
    }
}
break 

case "duelo": case "enfrentar": case "ruleta": {
    if (!q) return enviar(`Indique la cantidad de Yenes que está dispuesto a arriesgar en batalla.`);
    if (!isReg) return enviar(respuesta.registro)
    const monto = parseInt(q)
    if (isNaN(monto) || monto <= 0) return enviar(`Indique un monto válido en Yenes.`);
    if (monto > MoneyOfSender(sender)) return enviar(`No posee esa cantidad de Yenes en su tesorería.`);
    if (monto > 5) return enviar('No se permite arriesgar más de 5 Yenes en un duelo de alto rango.');

    const isMinxxx = checkRuleta(sender)
    if(isMinxxx) {
        const ahora = Date.now()
        const time = timeRuleta(sender)
        const result = ahora - time
        const resultado = (0 - result) / 1000;
        return enviar(`🌊 Su espíritu está agotado por el duelo previo. Espere ${runtime(resultado)} para volver a pelear.`)
    } else {
        const time = 1 * 60 * 1000 // 1 minuto de espera
        await addRuleta(sender,time)
        const ppt = ["muere", "vive"]; 
        const pptb = ppt[Math.floor(Math.random() * ppt.length)];  
        let vit;

        if (pptb === "muere") {
            vit = `👹 「Una Luna Demoniaca aparece frente a ${pushname}...」
⚔️ 「¡La técnica de sangre es demasiado poderosa!」
💀 「${pushname} ha sido **devorado** y el Cuerpo de Cazadores retira ${monto} Yenes para cubrir los gastos de su funeral.」`;
            await delkoin(sender, monto);
        } else if (pptb === "vive") {
            vit = `👹 「Una Luna Demoniaca aparece frente a ${pushname}...」
🌊 「¡Respiración de Agua, Undécima Postura: Calma!」
🏆 「El demonio se desintegra. ${pushname} sobrevive y gana ${monto} Yenes de botín.」`;
            await addkoin(sender, monto);
        }

        const datatt = `
╭━━━╾⭑✦ 🌊 ✦⭑╼━━━╮
      ⌬ 𝐄𝐍𝐅𝐑𝐄𝐍𝐓𝐀𝐌𝐈𝐄𝐍𝐓𝐎 ⌬
${vit}
⌛ Siguiente informe de avistamiento en 1 minuto...
╰━━━╾⭑✦ ⚔️ ✦⭑╼━━━╯
`;
        enviar(datatt);
    }
}
break



case "explorar": case "incursion": case "pescar": {
    if (q) return enviar(`No ponga ninguna palabra, solo use el comando para iniciar la exploración.`);
    if (!isReg) return enviar(respuesta.registro)
    
    const isMinxxx = checkPescar(sender)
    if(isMinxxx) {
        const ahora = Date.now()
        const time = timePescar(sender)
        const result = ahora - time
        const resultado = (0 - result) / 1000;
        return enviar(`🌊 Sus heridas están sanando... espere ${runtime(resultado)} para volver a explorar nuevas rutas.`)
    } else {
        const time = 1 * 60 * 1000; // 1 minuto de espera
        await addPescar(sender, time)
        
        const escenarios = ["medicina", "amuleto", "mapa", "katana_rota", "veneno", "trampa"];
        const evento = escenarios[Math.floor(Math.random() * escenarios.length)];
        let vit;

        // Lógica de Exploración de la Sede
        if (evento === "medicina") {
            vit = `🍱 「Durante la exploración encontraste suministros médicos. Al entregarlos a la **Unidad de Apoyo**, obtienes 20 de EXP 📚」`;
            await addXp(sender, 20);
        } else if (evento === "amuleto") {
            vit = `🏮 「Explorando un santuario recuperaste un amuleto antiguo. La **Logística de la Sede** te otorga 8 Yenes 💴 por el hallazgo.」`;
            await addkoin(sender, 8);
        } else if (evento === "mapa") {
            vit = `📜 「Localizaste un mapa de guaridas enemigas. Recibes 4 Yenes 💴 y 5 de EXP 📚 de la **Unidad de Apoyo**.」`;
            await addkoin(sender, 4);
            await addXp(sender, 5);
        } else if (evento === "katana_rota") {
            vit = `⚔️ 「En el camino encontraste una katana dañada. Los herreros te dan 3 Yenes 💴 y 3 de EXP 📚 por el acero recuperado.」`;
            await addkoin(sender, 3);
            await addXp(sender, 3);
        } else if (evento === "veneno") {
            vit = `🧪 「Exploraste un laboratorio abandonado y recuperaste veneno. Recibes 1 Yen 💴 y 2 de EXP 📚 para la Sede.」`;
            await addkoin(sender, 1);
            await addXp(sender, 2);
        } else if (evento === "trampa") {
            vit = `🏮 「¡Descuido! Caíste en una trampa durante la exploración. La **Unidad de Apoyo** tuvo que rescatarte... qué vergüenza. 🤣」`;
        }

        const datatt = `
╔════ ⭑✦.  🌊  ✦⭑ ════╗
     ❖ 𝐄𝐗𝐏𝐋𝐎𝐑𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐑𝐔𝐓𝐀𝐒 ❖
${vit}
⌛ Nuevos sectores disponibles en 1 minuto...
╚════ ⭑✦ ⚔️ ✦⭑ ════╝
`;

        enviar(datatt);
    }
}
break



case 'listreg': case 'censocazadores': {
    if (!isGroup) return enviar("⚠️ Solo los Pilares pueden ver el censo en el grupo.");
    let R_ = []
    let teks = '🌊 *𝐂𝐄𝐍𝐒𝐎 𝐃𝐄 𝐂𝐀𝐙𝐀𝐃𝐎𝐑𝐄𝐒 𝐃𝐄 𝐋𝐀 𝐒𝐄𝐃𝐄* ⚔️\n\n'
    for(let R of registro){
        teks += `• 🛡️ @${R.id.split('@')[0]}\n`
        R_.push(R.id)
    }
    teks += `\n*Total de efectivos:* ${registro.length} reclutas.`
    mentions(teks, R_, true)
}
break 

case 'regalar':
case 'enviar':
case 'donar':
case 'enviaryenes': {
  if (!isGroup) return enviar("⚠️ Este comando solo funciona en la Sede (grupos).");

  (async () => {
    try {
      const mencionado = obtenerMencionado(info); 
      const emisor = sender; 
      const monto = Number(args[1]);

      if (!mencionado) return enviar("🌊 Debe mencionar a un cazador para enviarle suministros.\nEj: .enviar @usuario 10");
      if (mencionado === emisor) return enviar("🌊 No puede enviarse suministros a sí mismo.");
      if (isNaN(monto) || monto <= 0) return enviar("🌊 Ingrese una cantidad válida de Yenes.");

      const saldoEmisor = await MoneyOfSender(emisor);
      if (saldoEmisor < monto) return enviar("❌ No posee suficientes **Yenes** en su tesorería para este envío.");

      // Realizar transferencia de suministros
      await delkoin(emisor, monto);
      await addkoin(mencionado, monto);
      await sleep(100);

      enviar(`✅ **𝐒𝐔𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐎𝐒 𝐄𝐍𝐕𝐈𝐀𝐃𝐎𝐒**\n\nHas enviado *${monto} Yenes* 💴 al receptor. El intercambio ha sido registrado por la Unidad de Apoyo.`, {
        mentions: [emisor, mencionado]
      });
    } catch (e) {
      enviar('❌ Error en los registros: ' + e.message);
    }
  })();
}
break;



case 'rep': case 'mirep': case 'reputacion': case 'reputación':
if(!isReg) return enviar(respuesta.registro)
const myrep = repUser(sender)

// Definimos el mensaje base con el estilo del Cuerpo de Cazadores
const msmReputacion = (rango, mensaje) => `
╭━━━╾⭑✦ 𝑪𝑼𝑬𝑹𝑷𝑶 𝑫𝑬 𝑪𝑨𝒁𝑨𝑫𝑶𝑹𝑬𝑺 ✦⭑╼━━━╮
  ⚔️ **𝑼𝒔𝒖𝒂𝒓𝒊𝒐:** ${pushname}
  📊 **𝑹𝒆𝒑𝒖𝒕𝒂𝒄𝒊𝒐𝒏:** ${myrep}
  🎖️ **𝑹𝒂𝒏𝒈𝒐:** ${rango}
  
  ${mensaje}
╰━━━╾⭑✦ 𝑩𝒀: 𝑮𝒊𝒚𝒖𝑩𝒐𝒕 ✦⭑╼━━━╯
`

if (myrep < 20) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/g2zMRRvR/87905f1b91e0ed02a0636a40a9f41481.jpg" },
        caption: msmReputacion("Novato (Mizunoto) 🍢", "*¡Ánimo! Sigue entrenando duro para no morir en tu primera misión.*")
    }, { quoted: info });
} else if (myrep >= 21 && myrep <= 40) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/t4nsBvdr/aba4f266c80eb1412fe04db6d9352c98.jpg" },
        caption: msmReputacion("Aprendiz Avanzado (Kanoe) ⚔️", "*Se nota el progreso, pero tus movimientos aún son lentos. ¡No bajes la guardia!*")
    }, { quoted: info });
} else if (myrep >= 41 && myrep <= 60) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/P5dtw63w/8303ab76f11fad7e1460d01e8cdf40a9-(1).jpg" },
        caption: msmReputacion("Cazador Experimentado (Tsuchinoto) ⚡", "*¡Bien hecho! Ya eres capaz de enfrentar demonios con confianza.*")
    }, { quoted: info });
} else if (myrep >= 61 && myrep <= 80) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/T33zxBNs/c7a65455224afd2f1db92d9d535b3a58.jpg" },
        caption: msmReputacion("Cazador de Élite (Kinoe) 🔥", "*Tu fuerza es admirable. Estás a un paso de la grandeza.*")
    }, { quoted: info });
} else {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/TwgSQxhn/58742dd24488f2bbb717708adc891496.jpg" },
        caption: msmReputacion("Hashira (Pilar) ✨", "*¡Increíble! Has alcanzado la cima. Eres una leyenda viviente para el Patrón.*")
    }, { quoted: info });
}
break 

case 'rank': case 'rankrep': 
    if(!isGroup) return 
    if(!isGroupAdmins) return enviar(respuesta.admin)
    let teks2 = `╭━━━╾⭑✦ 𝑹𝑨𝑵𝑲 𝑫𝑬 𝑯𝑶𝑵𝑶𝑹 ✦⭑╼━━━╮\n  *⚔️ TOP 10 CAZADORES CON MÁS REPUTACIÓN*\n\n`;
    registro.sort((a, b) => b.rep - a.rep)
           .slice(0, 10)
           .forEach((usuario, indice) => {
               teks2 += `  ${indice + 1}. *${usuario.nombre}* ➫ _${usuario.rep}_ de Reputación\n`;
           });
    teks2 += `╰━━━╾⭑✦ 𝑮𝒊𝒚𝒖𝑻𝒐𝒎𝒊𝒐𝒌𝒂𝑩𝒐𝒕-𝑴𝑫 ✦⭑╼━━━╯`
    enviar(teks2)
break 

case 'rankcoins': {
    if (!isGroup) return;
    if(!isGroupAdmins) return enviar(respuesta.admin)
    const pathi = './settings/Grupo/Json/registros.json';
    const registro = JSON.parse(fs.readFileSync(pathi, 'utf8'));

    let rankingMensaje = `╭━━━╾⭑✦ 𝑹𝑨𝑵𝑲 𝑫𝑬 𝑹𝑰𝑸𝑼𝑬𝒁𝑨 ✦⭑╼━━━╮\n  *💴 TOP 10 MILLONARIOS DEL CUERPO*\n\n`;

    const rankingArray = Array.isArray(registro)
      ? registro
      : Object.entries(registro).map(([jid, data]) => ({
          nombre: data.nombre || jid.split('@')[0],
          dinero: data.dinero || 0,
        }));

    rankingArray
      .sort((a, b) => b.dinero - a.dinero)
      .slice(0, 10)
      .forEach((usuario, index) => {
        rankingMensaje += `  ${index + 1}. *${usuario.nombre}* ➫ _${usuario.dinero}_ Yenes\n`;
      });
    
    rankingMensaje += `╰━━━╾⭑✦ 𝑮𝒊𝒚𝒖𝑻𝒐𝒎𝒊𝒐𝒌𝒂𝑩𝒐𝒕-𝑴𝑫 ✦⭑╼━━━╯`
    enviar(rankingMensaje);
}
break;

case 'ranknivel': {
    if(!isGroup) return 
    if(!isGroupAdmins) return enviar(respuesta.admin)
    let teks = `╭━━━╾⭑✦ 𝑹𝑨𝑵𝑲 𝑫𝑬 𝑷𝑶𝑫𝑬𝑹 ✦⭑╼━━━╮\n  *🆙 TOP 10 CAZADORES POR NIVEL*\n\n`
    registro.sort((a,b) => b.nivel - a.nivel)
           .slice(0, 10) // Agregué el slice para que no sea infinito
           .forEach((usuario,index) => {
               teks += `  ${index + 1}. *${usuario.nombre}* ➫ Nivel _*${usuario.nivel}*_\n`
           });
    teks += `╰━━━╾⭑✦ 𝑮𝒊𝒚𝒖𝑻𝒐𝒎𝒊𝒐𝒌𝒂𝑩𝒐𝒕-𝑴𝑫 ✦⭑╼━━━╯`
    enviar(teks)
}
break 

case "tienda":
if (!q) return enviar(`
╭━━━╾⭑✦ 𝑴𝑬𝑹𝑪𝑨𝑫𝑶 𝑫𝑬 𝑲𝑨𝑵𝑨𝑶 ✦⭑╼━━━╮
  🏯 "Bienvenido, cazador. Prepárate bien."
━━━━━━━━━━━━━━━━━━━━━━
⚔️ **𝑨𝒓𝒕𝒊𝒄𝒖𝒍𝒐 1:**
👉 \`.tienda 1\`
🏷️ 50 𝒀𝒆𝒏𝒆𝒔 💴 🔁 200 𝑬𝑿𝑷 🧪
*(Aumenta tu fuerza de entrenamiento)*

🏷️ **𝑨𝒓𝒕𝒊𝒄𝒖𝒍𝒐 2:**
👉 \`.tienda 2 [nivel] [nombre]\`
🏷️ 50 𝒀𝒆𝒏𝒆𝒔 💴 🔁 𝑵𝒖𝒆𝒗𝒐 𝑹𝒂𝒏𝒈𝒐 🎖️
*(Cambia el nombre de los rangos oficiales)*

🌀 **𝑨𝒓𝒕𝒊𝒄𝒖𝒍𝒐 3:**
👉 \`.emojimix 😇+😈\`
🏷️ 1 𝒀𝒆𝒏 💴 🔁 𝑪𝒐𝒎𝒃𝒊𝒏𝒂𝒓 𝑬𝒎𝒐𝒋𝒊𝒔

🎨 **𝑨𝒓𝒕𝒊𝒄𝒖𝒍𝒐 4:**
👉 \`.sticker\` (en imagen/video)
🏷️ 1 𝒀𝒆𝒏 💴 🔁 𝑪𝒓𝒆𝒂𝒓 𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔
╰━━━╾⭑✦ 𝑩𝒀: 𝑮𝒊𝒚𝒖𝑩𝒐𝒕 ✦⭑╼━━━╯
`);

// COMPRA DE EXP
if (q.startsWith("1")) {
    if (coins < 50) return enviar("❌ No tienes suficientes Yenes. Necesitas al menos 50 💴 para este entrenamiento.");
    await delkoin(sender, 50);
    await addXp(sender, 200);

    return enviar(`⚔️ ¡Excelente, ${pushname}! Has invertido 50 Yenes en entrenamiento intenso. Ganaste 200 EXP.`);
}

// CAMBIO DE RANGO
if (q.startsWith("2")) {
    const args = q.split(" ");
    const nivel = parseInt(args[1]);
    const nuevoNombre = args.slice(2).join(" ");

    if (isNaN(nivel) || !nuevoNombre) {
        return enviar("❌ Formato incorrecto, cazador. Usa: .tienda 2 <nivel> <nuevo nombre>\nEjemplo: .tienda 2 5 Los Hashiras");
    }

    if (coins < 50) {
        return enviar("❌ No tienes suficientes Yenes para proponer un nuevo decreto de rangos. Necesitas 50 💴.");
    }

    const path = './settings/rangos.json';
    let rangosData;

    try {
        rangosData = JSON.parse(fs.readFileSync(path));
    } catch (e) {
        return enviar("⚠️ Error en los registros del Cuerpo. El archivo de rangos no responde.");
    }

    rangosData[nivel] = nuevoNombre;

    try {
        fs.writeFileSync(path, JSON.stringify(rangosData, null, 2));
        await delkoin(sender, 50);

        return enviar(`✅ ¡Decreto actualizado, ${pushname}!\nEl rango del nivel *${nivel}* ahora es:\n✨ *${nuevoNombre}* ✨\nSe han cobrado 50 Yenes por el trámite.`);
    } catch (e) {
        return enviar("⚠️ El cuervo mensajero se perdió. No se pudo guardar el cambio.");
    }
}

break;

//DESCARGAS
//nesecitas api
case 'play': case 'p':
    if (!q) return enviar(`- Ejemplo: !play nombre de la canción\nLa canción se descargará, solo elige audio o video. Si no se descarga, es posible que YouTube haya restringido la descarga, o algo similar.`);
    try {
        // Realizar la solicitud a la nueva API
        const response = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb`, {
            params: {
                nome: q,
                apikey: API_KEY_NAUFRA
            }
        });
        const data = response.data;

        // Verificar si el video es demasiado largo
        if (data[0]?.tempo?.length >= 7) return enviar("Lo siento, este video o audio es demasiado largo, no puedo realizar esta solicitud. Pide otra canción de menos de una hora.");

        // Crear el mensaje de respuesta
        const N_E = " No encontrado.";
        const caption = `
        ▧⃯⃟📝• 𝐓𝐢𝐭𝐮𝐥𝐨: ${data[0]?.titulo || N_E}
        ▧⃯⃟⏱️• 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧: ${data[0]?.tempo || N_E}
        ▧⃯⃟🎚• 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨: ${data[0]?.postado || N_E}
        ▧⃯⃟🛠• 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧: ${data[0]?.desc || N_E}

        ■■■■■ 100% 

        εรρε૨ε µɳ ρσ૮σ...

        Si deseas descargar el video, usa !playvideo ${q.trim()}
        `;

        // Enviar la imagen con la información del video
        await sock.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: caption}, {quoted: info});
        
        // Enviar el audio
        await sock.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_NAUFRA}`}, mimetype: "audio/mpeg", fileName: data[0]?.titulo || "play.mp3"}, {quoted: info}).catch(e => {
            return enviar("Error...");
        });

    } catch (e) {
        console.log(e);
        return enviar("No se pudo encontrar con tan poca información... / Error");
    }
break;


//nesecitas api
case 'playvideo': case 'pvid': case 'playmp4': 

{
    try {
        if (!q.trim()) return enviar(`- Ejemplo: !play nombre de la música\nLa música será descargada, solo debes elegir audio o video. Si no se descarga, es posible que YouTube haya restringido la descarga o haya algún otro problema.`);
        
        // Llamada a la nueva API del vendedor para buscar el video
        let data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_NAUFRA}`);
        
        if (data[0]?.tempo?.length >= 7) return enviar("Lo siento, este video o audio es demasiado largo. No puedo procesar esta solicitud. Por favor, elige otra música que dure menos de una hora.");

        var N_E = " No encontrado.";
        var bla = `
🎙️⃤𝐓𝐢𝐭𝐮𝐥𝐨: ${data[0]?.titulo || N_E}
⏰⃤𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧: ${data[0]?.tempo || N_E}
📹⃤𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨: ${data[0]?.postado || N_E}
🗞️⃤𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧: ${data[0]?.desc || N_E}

■■■■■ 100% 

Espere un poco...

Si deseas descargar el audio, usa !play ${q.trim()}
        `;
        
        // Enviar información sobre el video al usuario
        sock.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info});
        
        // Enviar el video al usuario
        sock.sendMessage(from, {
            video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_NAUFRA}`},
            mimetype: "video/mp4",
            fileName: data[0]?.titulo || "play.mp4"
        }, {quoted: info}).catch(e => {
            return enviar("Error al intentar descargar el video.");
        });

    } catch (e) {
        console.log(e);
        return enviar("No se pudo encontrar el contenido con la información proporcionada o hubo un error en la solicitud.");
    }
}
break;



//nesecitas api      
case 'tiktokvideo':
try {
    if(!q) return enviar('Por favor, proporciona un enlace de TikTok válido.');
    
    enviar("Procesando el video...");
    
    // Realiza la solicitud a la API
    let response = await fetch(`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=${API_KEY_NAUFRA}`);
    
    // Verifica si la respuesta es JSON válida
    let contentType = response.headers.get("content-type");
    
    if(contentType && contentType.includes("application/json")) {
        // Procesa la respuesta como JSON
        let ABC = await response.json();
        enviar("No se pudo descargar el video. Por favor, intenta nuevamente.");
    } else {
        // Procesa la respuesta como un archivo binario
        let buffer = await response.buffer();
        sock.sendMessage(from, { video: buffer, mimetype: 'video/mp4' }, { quoted: info });
    }
} catch (e) {
    enviar("Ocurrió un error al intentar descargar el video.");
}
break;



//nesecitas api
case 'tiktokaudio':
try {
if(!q.includes("tiktok")) return enviar(`!tiktokaudio link de Tiktok`);
enviar("Realizando acción..");
sock.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=${API_KEY_NAUFRA}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
console.log(e)
return enviar("Error..")
})
} catch (e) {
console.log(e)
return enviar("Error...");
}
break;


//nesecitas api
case 'buscarapk': 
; // Verificación si el usuario es premium
if (!q.trim()) return enviar(`Ejemplo: !buscarapk WhatsApp`); // Asegurarse de que haya una búsqueda

try {
    enviar('Espera un momento estoy enviando'); // Mensaje de espera
    let abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide_pesquisa?pesquisa=${q.trim()}&apikey=${API_KEY_NAUFRA}`); // Llamada a la API
    enviar(abc.aptoide || 'No se encontró ninguna información.'); // Respuesta con la información o mensaje de error
} catch (e) {
    console.log(e);
    return enviar(mess.error()); // Mensaje de error en caso de fallo
}
break;

//nesecitas api

case "descargarapk":
;
if (!q.trim().includes("aptoide.com")) return enviar(`Ejemplo: !descargarapk link de la aplicación\n\nUse el comando !buscarapk Ejemplo: whatsapp, y usted recibirá una url, pegue la url despues del comando para descargarla.`);
enviar('Espera un momento estoy enviando tu apk');
try {
    abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide?url=${q.trim()}&apikey=${API_KEY_NAUFRA}`);
    sock.sendMessage(from, {
        document: { url: abc.link },
        mimetype: "application/vnd.android.package-archive",
        fileName: abc.titulo
    }, { quoted: info }).catch((e) => console.log(e));
} catch (e) {
    console.log(e);
    return enviar("Error...");
}
break;



//Parejas


case 'alea': case 'casar' : case 'parejas': {
    if(!isReg) return enviar(respuesta.registro)
    const men1 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
    const men3 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
    const men2 = men1.id
    const men4 = men3.id
    
    const rmen = `✨ **𝑫𝑬𝑪𝑹𝑬𝑻𝑶 𝑫𝑬 𝑨𝑴𝑶𝑹** ✨\n\n🌸 @${men4.split('@')[0]} tiene una conexión con @${men2.split('@')[0]}.\n\n*¡El Cuerpo de Cazadores celebra esta unión! Deberían casarse y fortalecer su linaje.* 💍`
    
    sock.sendMessage(from, { text: rmen, mentions: [men4, men2] }, { quoted: info })
}
break 

// COMANDOS SIN PREFIJO
default:

/// 🚫 ANTILINK DEL CUERPO DE CAZADORES
const { jidNormalizedUser } = require("baileys")
const texto = (budy || "").toLowerCase()

if (isGroup && isAntiLink && !isGroupAdmins && !isOwner) {
  // Enlaces prohibidos (Intactos según su orden, el patrón)
  if (texto.includes("https://chat.whatsapp.com") || texto.includes("pornhub.com") || texto.includes("xvideos.com") || texto.includes("xnxx.com") || texto.includes("hentaihaven.red") || texto.includes("redtube.com") || texto.includes("hentaihaven.red") || texto.includes("brazzers.com") || texto.includes("onlyfans.com") || texto.includes("https://t.me")) {
    
    if (!isBotGroupAdmins) return enviar("⚠️ No soy un Pilar (Admin), no puedo ejecutar el castigo.")

    const Kick = jidNormalizedUser(sender)

    try {
      // Eliminación de rastro
      await sock.sendMessage(from, { 
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } 
      })

      // Ejecución (Expulsión)
      await sock.groupParticipantsUpdate(from, [Kick], "remove")

      await enviar(`🚫 ¡𝑪𝑶𝑹𝑻𝑬 𝑫𝑬 𝑹𝑬𝑮𝑼𝑬𝑹𝑶! @${sender.split("@")[0]} ha sido ejecutado por enviar enlaces prohibidos. Aquí no queremos basura.`, { mentions: [sender] })

    } catch (err) {
      console.log("❌ Error en Antilink:", err)
    }
  }
}

// Eval para el Dueño
if (budy.startsWith('=>Duueño')) {
    if (!isOwner) return enviar(respuesta.miowner)
    try {
        enviar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        enviar(String(e))
    }
}

} // Cierre del switch principal

} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
        console.log('Error detectado por GiyuBot: %s', color(e, 'red'))
    }
}

})
}

/////////// MONITOREO DEL ARCHIVO
startProo()
fs.watchFile('./index.js', (curr, prev) => {
    if (curr.mtime.getTime() !== prev.mtime.getTime()) {
        console.log(color('  [❗] ¡Atención Patrón! El archivo Index fue modificado. Reiniciando...',"blue"));
        process.exit()
    }
})
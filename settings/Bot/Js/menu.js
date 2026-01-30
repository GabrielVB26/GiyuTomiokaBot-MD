const Menu = ( timeFt , Bot , sender , groupName  , groupMembers ) => {  
return `
*MENU PRINCIPAL*
*HECHO EN VENEZUELA 🇻🇪*

¡Hola @${sender.split('@')[0]}! Soy ${Bot} [ ${timeFt} ]
Este es mi menú de comandos:

❄️ MENU ADMIN
⚡ welcome 1/0
⚡ antilink 1/0      
⚡ modoadmin 1/0
⚡ invocar
⚡ anuncio
⚡ ban
⚡ kick
⚡ etiquetar
⚡ rankrep
⚡ rankcoins
⚡ ranknivel

❄️ MENU CREADOR
⚡ sercreador
⚡ antiprivado            
⚡ revelarvisu
⚡ reiniciar
⚡ bangp
⚡ desbang
⚡ encender
⚡ apagar
      
❄️ MENU INFO
⚡ ping
⚡ perfil
⚡ botcompleto        
⚡ grupos
⚡ canales 
⚡ serbot 
                  
❄️ MENU FIGUS
⚡ s
⚡ attp
⚡ attp2
⚡ attp3
⚡ emojimix           
      
❄️ MENU HERRAMIENTAS
⚡ toimg
⚡ tomp3      
⚡ calc
⚡ nick      
⚡ ia
⚡ chatgpt

❄️ MENU ECONOMIA
⚡ nivel
⚡ perfil
⚡ cartera
⚡ reg
⚡ listreg
⚡ ruleta 
⚡ levelup
⚡ minar
⚡ regalar
⚡ mireputacion
⚡ tragamonedas
⚡ dayli   
⚡ pescar         
⚡ tienda     
⚡ casar 
          
`}
module.exports = Menu

import { WAConnection, MessageType, Mimetype  } from '@adiwajshing/baileys' 
import fs from 'fs-extra'
import execSh  from 'exec-sh';
import figlet from 'figlet';
import moment from 'moment-timezone';
import broadcast from './lib/broadcast.js';
import { menu_number } from './lib/menu_number.js';
import { db_menu } from './lib/db_menu.js';
const client = new WAConnection()

console.log(figlet.textSync('Bot Adhkar'));
console.log("                  Start " + moment.tz("Asia/Riyadh").format('LT'))
console.log("                Telegram @BinAttia ")
console.log("")


broadcast(client, MessageType, Mimetype);    


async function start() {

    fs.existsSync('./BotAdhkar.json') && client.loadAuthInfo('./BotAdhkar.json') 
    await client.connect({timeoutMs: 30*1000}) 
    fs.writeFileSync('./BotAdhkar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))


    client.on('chat-update', async (msg) => {
        
        if (msg.messages && msg.count && msg.hasNewMessage && client.contacts[msg.messages.all()[0].key.remoteJid] != undefined) {

            const Menufrom = getMenu({ from: msg.messages.all()[0].key.remoteJid });
                
            menu_number[Menufrom].menu_name.exec({

                messages: msg.messages.all()[0].message,
                download_msg: msg.messages.all()[0],
                Mimetype: Mimetype ,
                from: msg.messages.all()[0].key.remoteJid,
                body: msg.messages.all()[0].message.conversation,
                MessageType: MessageType,
                isGroup: msg.messages.all()[0].key.remoteJid.endsWith('@g.us'),
                pushname: client.contacts[msg.messages.all()[0].key.remoteJid].name || client.contacts[msg.messages.all()[0].key.remoteJid].notify,
                client: client,            

            });   

        }

    });

    client.on('group-participants-update', async (msg) => {

        const group_user = fs.readJsonSync('./db/group_user.json');

        if (msg.jid && msg.action === 'remove' && msg.participants.includes(client.user.jid)){

            let del = group_user.indexOf(msg.jid);
            group_user.splice(del, 1)
            fs.writeJsonSync('./db/group_user.json', group_user)
            
        }  

    });
    
}

function getMenu({ from }) {
    
    if (db_menu[from]){

        return db_menu[from].menu_name;
    }

    else {

        db_menu[from] = { menu_name: 0 };
        return db_menu[from].menu_name;

    }

}

start()
.catch((error) => {

    if (error == 'BaileysError: Unexpected error in login'){
        fs.removeSync('./BotAdhkar.json')
        execSh("npm start", { cwd: "./" });
    }

    else { execSh("npm start", { cwd: "./" }); }

})
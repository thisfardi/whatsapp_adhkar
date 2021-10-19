import { db_menu } from '../lib/db_menu.js';
import { qurantext } from './qurantext.js';

export const quran_mahar = {

  async exec({ from, client, pushname, body, MessageType, Mimetype }) {

    switch (body) {

      case 'الفاتحة':
      case '1':
      
      await client.sendMessage(from, qurantext.q1, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/001.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      
      break;
      case 'البقرة':
      case '2':

      await client.sendMessage(from, qurantext.q2, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/002.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'آل عمران':
      case '3':  

      await client.sendMessage(from, qurantext.q3, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/003.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'النساء':
      case '4':
                
      await client.sendMessage(from, qurantext.q4, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/004.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المائدة':
      case '5':  

      await client.sendMessage(from, qurantext.q5, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/005.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأنعام':
      case '6':  

      await client.sendMessage(from, qurantext.q6, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/006.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأعراف':
      case '7': 
      
      await client.sendMessage(from, qurantext.q7, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/007.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأنفال':
      case '8': 
      
      await client.sendMessage(from, qurantext.q8, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/008.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'التوبة':
      case '9': 
      
      await client.sendMessage(from, qurantext.q9, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/009.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'يونس':
      case '10': 
      
      await client.sendMessage(from, qurantext.q10, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/010.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'هود':
      case '11':
      
      await client.sendMessage(from, qurantext.q11, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/011.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'يوسف':
      case '12':
      
      await client.sendMessage(from, qurantext.q12, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/012.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));         
      break;
      case 'الرعد':
      case '13':
      
      await client.sendMessage(from, qurantext.q13, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/013.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'إبراهيم':
      case '14':
      
      await client.sendMessage(from, qurantext.q14, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/014.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحجر':
      case '15':
      
      await client.sendMessage(from, qurantext.q15, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/015.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النحل':
      case '16':
      
      await client.sendMessage(from, qurantext.q16, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/016.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الإسراء':
      case '17':
      
      await client.sendMessage(from, qurantext.q17, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/017.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الكهف':
      case '18':
      
      await client.sendMessage(from, qurantext.q18, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/018.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'مريم':
      case '19':
      
      await client.sendMessage(from, qurantext.q19, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/019.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'طه':
      case '20':
      
      await client.sendMessage(from, qurantext.q20, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/020.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأنبياء':
      case '21':
      
      await client.sendMessage(from, qurantext.q21, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/021.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الحج':
      case '22':
      
      await client.sendMessage(from, qurantext.q22, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/022.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المؤمنون':
      case '23':
      
      await client.sendMessage(from, qurantext.q23, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/023.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النور':
      case '24':
      
      await client.sendMessage(from, qurantext.q24, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/024.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الفرقان':
      case '25':
      
      await client.sendMessage(from, qurantext.q25, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/025.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الشعراء':
      case '26':
      
      await client.sendMessage(from, qurantext.q26, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/026.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'النمل':
      case '27':
      
      await client.sendMessage(from, qurantext.q27, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/027.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'القصص':
      case '28':
      
      await client.sendMessage(from, qurantext.q28, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/028.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'العنكبوت':
      case '29':
      
      await client.sendMessage(from, qurantext.q29, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/029.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الروم':
      case '30':
      await client.sendMessage(from, qurantext.q30, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/030.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'لقمان':
      case '31':
      
      await client.sendMessage(from, qurantext.q31, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/031.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'السجدة':
      case '32':

      await client.sendMessage(from, qurantext.q32, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/032.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأحزاب':
      case '33':
      
      await client.sendMessage(from, qurantext.q33, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/033.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'سبأ':
      case '34':
      
      await client.sendMessage(from, qurantext.q34, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/034.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'فاطر':
      case '35':
      
      await client.sendMessage(from, qurantext.q35, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/035.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'يس':
      case '36':
      
      await client.sendMessage(from, qurantext.q36, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/036.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الصافات':
      case '37':
      
      await client.sendMessage(from, qurantext.q37, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/037.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'ص':
      case '38':
      
      await client.sendMessage(from, qurantext.q38, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/038.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الزمر':
      case '39':
      
      await client.sendMessage(from, qurantext.q39, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/039.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'غافر':
      case '40':
      
      await client.sendMessage(from, qurantext.q40, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/040.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'فصلت':
      case '41':
      
      await client.sendMessage(from, qurantext.q41, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/041.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الشورى':
      case '42':
      
      await client.sendMessage(from, qurantext.q42, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/042.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الزخرف':
      case '43':
      
      await client.sendMessage(from, qurantext.q43, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/043.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الدخان':
      case '44':
      
      await client.sendMessage(from, qurantext.q44, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/044.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجاثية':
      case '45':
      
      await client.sendMessage(from, qurantext.q45, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/045.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الأحقاف':
      case '46':
      
      await client.sendMessage(from, qurantext.q46, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/046.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'محمد':
      case '47':
      
      await client.sendMessage(from, qurantext.q47, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/047.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الفتح':
      case '48':
      
      await client.sendMessage(from, qurantext.q48, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/048.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الحجرات':
      case '49':
      
      await client.sendMessage(from, qurantext.q49, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/049.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'ق':
      case '50':
      
      await client.sendMessage(from, qurantext.q50, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/050.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الذاريات':
      case '51':
      
      await client.sendMessage(from, qurantext.q51, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/051.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الطور':
      case '52':
      
      await client.sendMessage(from, qurantext.q52, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/052.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'النجم':
      case '53':

      
      await client.sendMessage(from, qurantext.q53, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/053.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'القمر':
      case '54':
      
      await client.sendMessage(from, qurantext.q54, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/054.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الرحمن':
      case '55':
      
      await client.sendMessage(from, qurantext.q55, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/055.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الواقعة':
      case '56':
      
      await client.sendMessage(from, qurantext.q56, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/056.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحديد':
      case '57':
      
      await client.sendMessage(from, qurantext.q57, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/057.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المجادلة':
      case '58':
      
      await client.sendMessage(from, qurantext.q58, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/058.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الحشر':
      case '59':
      
      await client.sendMessage(from, qurantext.q59, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/059.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الممتحنة':
      case '60':
      
      await client.sendMessage(from, qurantext.q60, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/060.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'الصف':
      case '61':
      
      await client.sendMessage(from, qurantext.q61, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/061.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجمعة':
      case '62':
      
      await client.sendMessage(from, qurantext.q62, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/062.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المنافقون':
      case '63':
      
      await client.sendMessage(from, qurantext.q63, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/063.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));     
      break;
      case 'التغابن':
      case '64':
      
      await client.sendMessage(from, qurantext.q64, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/064.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الطلاق':
      case '65':
      
      await client.sendMessage(from, qurantext.q65, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/065.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'التحريم':
      case '66':
      
      await client.sendMessage(from, qurantext.q66, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/066.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الملك':
      case '67':
      
      await client.sendMessage(from, qurantext.q67, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/067.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'القلم':
      case '68':
      
      await client.sendMessage(from, qurantext.q68, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/068.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الحاقة':
      case '69':
      
      await client.sendMessage(from, qurantext.q69, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/069.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المعارج':
      case '70':
      
      await client.sendMessage(from, qurantext.q70, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/070.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'نوح':
      case '71':
      
      await client.sendMessage(from, qurantext.q71, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/071.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الجن':
      case '72':
      
      await client.sendMessage(from, qurantext.q72, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/072.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'المزمل':
      case '73':
      
      await client.sendMessage(from, qurantext.q73, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/073.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المدثر':
      case '74':
      
      await client.sendMessage(from, qurantext.q74, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/074.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'القيامة':
      case '75':
      
      await client.sendMessage(from, qurantext.q75, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/075.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الإنسان':
      case '76':
      
      await client.sendMessage(from, qurantext.q76, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/076.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'المرسلات':
      case '77':
   
      await client.sendMessage(from, qurantext.q77, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/077.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'النبأ':
      case '78':
      
      await client.sendMessage(from, qurantext.q78, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/078.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'النازعات':
      case '79':
      
      await client.sendMessage(from, qurantext.q79, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/079.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'عبس':
      case '80':
      
      await client.sendMessage(from, qurantext.q80, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/080.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'التكوير':
      case '81':
      
      await client.sendMessage(from, qurantext.q81, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/081.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الانفطار':
      case '82':
      
      await client.sendMessage(from, qurantext.q82, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/082.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'المطففين':
      case '83':
      
      await client.sendMessage(from, qurantext.q83, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/083.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الانشقاق':
      case '84':
      
      await client.sendMessage(from, qurantext.q84, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/084.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'البروج':
      case '85':
      
      await client.sendMessage(from, qurantext.q85, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/085.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الطارق':
      case '86':
      
      await client.sendMessage(from, qurantext.q86, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/086.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الأعلى':
      case '87':
      
      await client.sendMessage(from, qurantext.q87, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/087.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الغاشية':
      case '88':
      
      await client.sendMessage(from, qurantext.q88, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/088.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الفجر':
      case '89':
      
      await client.sendMessage(from, qurantext.q89, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/089.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'البلد':
      case '90':
      
      await client.sendMessage(from, qurantext.q90, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/090.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الشمس':
      case '91':
      
      await client.sendMessage(from, qurantext.q91, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/091.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'الليل':
      case '92':
      
      await client.sendMessage(from, qurantext.q92, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/092.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الضحى':
      case '93':
      
      await client.sendMessage(from, qurantext.q93, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/093.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'الشرح':
      case '94':
      
      await client.sendMessage(from, qurantext.q94, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/094.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));   
      break;
      case 'التين':
      case '95':
      
      await client.sendMessage(from, qurantext.q95, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/095.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'العلق':
      case '96':
      
      await client.sendMessage(from, qurantext.q96, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/096.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'القدر':
      case '97':
      
      await client.sendMessage(from, qurantext.q97, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/097.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));    
      break;
      case 'البينة':
      case '98':
      
      await client.sendMessage(from, qurantext.q98, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/098.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الزلزلة':
      case '99':
      
      await client.sendMessage(from, qurantext.q99, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/099.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'العاديات':
      case '100':
      
      await client.sendMessage(from, qurantext.q100, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/100.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'القارعة':
      case '101':
      
      await client.sendMessage(from, qurantext.q101, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/101.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'التكاثر':
      case '102':
      
      await client.sendMessage(from, qurantext.q102, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/102.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'العصر':
      case '103':
      
      await client.sendMessage(from, qurantext.q103, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/103.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الهمزة':
      case '104':
      
      await client.sendMessage(from, qurantext.q104, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/104.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الفيل':
      case '105':
      
      await client.sendMessage(from, qurantext.q105, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/105.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'قريش':
      case '106':
      
      await client.sendMessage(from, qurantext.q106, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/106.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الماعون':
      case '107':
      
      await client.sendMessage(from, qurantext.q107, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/107.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'الكوثر':
      case '108':
      
      await client.sendMessage(from, qurantext.q108, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/108.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الكافرون':
      case '109':
      
      await client.sendMessage(from, qurantext.q109, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/109.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'النصر':
      case '110':
      
      await client.sendMessage(from, qurantext.q110, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/110.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
      case 'المسد':
      case '111':
      
      await client.sendMessage(from, qurantext.q111, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/111.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro)); 
      break;
      case 'الإخلاص':
      case '112':
      
      await client.sendMessage(from, qurantext.q112, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/112.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الفلق':
      case '113':
      
      await client.sendMessage(from, qurantext.q113, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/113.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));  
      break;
      case 'الناس':
      case '114':
      
      await client.sendMessage(from, qurantext.q114, MessageType.text).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: "http://bot.rn0x.com/media/quran_mp3/quran_mahar/114.mp3" }, MessageType.audio, { mimetype: Mimetype.mp4Audio }).catch((erro) => console.log(erro));
      break;
       
        
    }

    if (body === "*"){

      db_menu[from].menu_name = 1;

      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n\n\n'
      quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
      
      await client.sendMessage(from, quran_menu, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

      db_menu[from].menu_name = 0;

      let mesg = `${pushname} مرحباً بك 👋 \n\n`
      mesg += 'من فضلك قم بإرسال *رقم* الخدمة ✉️ \n\n\n'
      mesg += '1- قائمة القرآن الكريم 📖 \n'
      mesg += '2- قائمة الأذكار 📿 \n'
      mesg += '3- فيديو عشوائي 🎥 \n'
      mesg += '4- صورة عشوائية 🖼️ \n'
      mesg += '5- قائمة الملصقات 🪧 \n\n\n'
      mesg += '🚩 للأشتراك في خدمة البرودكاست أرسل كلمة إشتراك و لإلغاء الإشتراك أرسل كلمة إلغاء \n\n'
      mesg += '⚠️ ملاحظة / خدمة البرودكاست للقروبات مفعله بشكل تلقائي ولايمكن إلغائها'
      
     
      await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));


    }

  }
};

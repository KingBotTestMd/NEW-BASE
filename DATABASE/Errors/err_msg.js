/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const config = require('../config');

async function err_msg(error, message){
if (config.LANG == 'SI') {
    await message.client.sendMessage(message.user, {text: '*🔐 දෝෂ වාර්තාව ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
        '\n*⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ දෝෂයක් සිදු වී ඇත!*'+
        '\n_මෙම දෝශ ලඝු සටහනෙහි ඔබේ අංකය හෝ සගයෙකුගේ අංකය ඇතුළත් විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_' +
        '\n_දෝෂය පිළීබඳ Admin දැනුවත් කරන්න._' +
        '\n_උදව් සඳහා ඔබට අපගේ Whatsapp කණ්ඩායමට ලිවිය හැකිය._' +
        '\n_ඔබට දෝෂය මෙම කණ්ඩායමට යොමු කළ හැකිය https://chat.whatsapp.com/JDbBAyvjtuiJ4SLAiUhlbt ._\n\n' +
        '*සිදුවන දෝෂය:* ```' + error + '```\n\n'
    } , {detectLinks: true});

    if (error.message.includes('URL')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _සහය දක්වන්නේ නියත වශයෙන්ම URL පමණි_' +
            '\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, ස්ටිකර් ..) භාවිතය._' +
            '\n*විසඳුම:* _විධානය LOG අංකය හැර වෙනත් ඕනෑම කතාබහක භාවිතා කළ හැකිය._'
            }
        );
    }
    else if (error.message.includes('SSL')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _SQL දත්ත සමුදාය දෝෂය_' +
            '\n*හේතුව:* _දත්ත සමුදාය දූෂණය වීම._ ' +
            '\n*විසඳුම:* _දන්නා විසඳුමක් නැත. ඔබට නැවත ස්ථාපනය කිරීමට උත්සාහ කළ හැකිය._'
            }
        );
    }
    else if (error.message.includes('split')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _නිර්වචනය නොකළ බෙදීම_' +
            '\n*හේතුව:* _කණ්ඩායම් පරිපාලකයින්ට භාවිතා කළ හැකි විධානයන්ට බෙදීමේ ක්‍රියාකාරකම වරින් වර දැක ගැනීමට නොහැකි වේ._ ' +
            '\n*විසඳුම:* _නැවත පණ ගැන්වීම ප්‍රමාණවත්.._'
            }
        );                               
    }
    else if (error.message.includes('Ookla')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*Ana Hata:* _Ookla සේවාදායක සම්බන්ධතාවය_' +
            '\n*හේතුව:* _සේවාදායකයට වේගවත්ම දත්ත සම්ප්‍රේෂණය කිරීමට නොහැකි වීම._' +
            '\n*විසඳුම:* _ඔබ එය නැවත වරක් භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
            }
        );
    }
    else if (error.message.includes('params')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _ඉල්ලූ ශ්‍රව්‍ය පරාමිතීන්_' +
            '\n*හේතුව:* _ලතින් හෝඩියේ පිටත TTS විධානය භාවිතා කිරීම._' +
            '\n*විසඳුම:* _ඔබ ලතින් අකුරින් විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
            }
        );
    }
    else if (error.message.includes('unlink')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _එවැනි ගොනුවක් හමු නොවීය.' +
            '\n*හේතුව:* _Plugin වැරදි කේතීකරණය._' +
            '\n*විසඳුම:* _කරුණාකර ඔබේ Plugin කේත පරීක්‍ෂා කරන්න._'
            }
        );
    }
    else if (error.message.includes('404')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _දෝෂ 404 HTTPS_' +
            '\n*හේතුව:* _හෙරෝකු Plugin යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකය සමඟ සන්නිවේදනය කිරීමට නොහැකි විය._' +
            '\n*විසඳුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ මෙහෙයුම සිදු කරන්න.._'
            }
        );
    }
    else if (error.message.includes('reply.delete')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _පිළිතුර මකන්න කාර්යය_' +
            '\n*හේතුව:* _IMG හෝ විකි විධානයන් භාවිතා කිරීම._' +
            '\n*විසඳුම:* _මෙම දෝෂයට විසඳුමක් නොමැත. එය ලොකු වරදක් නොවේ._'
            }
        );
    }
    else if (error.message.includes('load.delete')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _පිළිතුර මකන්න කාර්යය_' +
            '\n*හේතුව:* _IMG හෝ විකි විධානයන් භාවිතා කිරීම._' +
            '\n*විසඳුම:* _මෙම දෝෂයට විසඳුමක් නොමැත. එය ලොකු වරදක් නොවේ._'
            }
        );
    }
    else if (error.message.includes('400')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _Bailyes Action Error_ ' +
            '\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප කිහිපයක්ම මෙම දෝෂය ඇති කිරීමට හේතු වන්නට ඇත._' +
            '\n*විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කරන්නේ නම්, එය නිවැරදි කළ හැකිය. දෝෂය පවතින්නේ නම්, ඔබට නැවත ආරම්භ කිරීමට උත්සාහ කළ හැකිය.._'
            }
        );
    }
    else if (error.message.includes('decode')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ 🔐*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _පෙළ හෝ මාධ්‍ය විකේතනය කළ නොහැක_' +
            '\n*හේතුව:* _Plugin වැරදි ලෙස භාවිතා කිරීම._' +
            '\n*විසඳුම:* _Plugin විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
            }
        );
    }
    else if (error.message.includes('unescaped')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _Word Character Usage_' +
            '\n*හේතුව:* _ලතින් අකාරාදියෙන් TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
            '\n*විසඳුම:* _ඔබ ලතින් හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
            }
        );
    }
    else if (error.message.includes('conversation')) {
        return await message.client.sendMessage(message.user, {text:'* 🔐 දෝෂ විසඳුම ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```දෝෂය කියවන්න!``` ==========' +
            '\n\n*ප්‍රධාන දෝෂය:* _Deleting Plugin_' +
            '\n*හේතුව:* _මැකීමට Plugin නම වැරදි ලෙස ඇතුළත් කිරීම._' +
            '\n*විසඳුම:* _කරුණාකර ඔබට මැකීමට අවශ්‍ය Plugin ආරම්භ කරන්න.a_ *__* _නැතිව උත්සාහ කරන්න. ඔබ තවමත් දෝෂය ලබා ගන්නේ නම්_ ```?(.*) / $``` _වැනි සම්පූර්ණ ප්‍රකාශන ඇතුළත් කරන්න._'
            }
        );
    }
    else {
        return await message.client.sendMessage(message.user, {text:'*🙇🏻 කණගාටුයි මට මෙම දෝෂය කියවීමට නොහැකි වුනා! 🙇🏻*' +
            '\n_වැඩිදුර උදව් සඳහා ඔබට අපේ කණ්ඩායමට ලිවිය හැකිය._'
            }
        );
    }
}
else {
    await message.client.sendMessage(message.user, {text:'*-- ERROR REPORT ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ --*' + 
        '\n*COBRABOT an error has occurred!*'+
        '\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
        '\n_You can write to our Telegram group for help._' +
        '\n_Aslo you can join our support group:_ https://chat.whatsapp.com/JDbBAyvjtuiJ4SLAiUhlbt' +
        '\n_This message should have gone to your number (saved messages)._\n\n' +
        '*Error:* ```' + error + '```\n\n'
    } ,  {detectLinks: true}
    );
    if (error.message.includes('URL')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
            '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
            '\n*Solution:* _You can use commands in any chat, except the LOG number._'
            }
        );
    }
    else if (error.message.includes('conversation')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Deleting Plugin_' +
            '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
            '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
            }
        );
    }
    else if (error.message.includes('split')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Split of Undefined_' +
            '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
            '\n*Solution:* _Restarting will be enough._'
            }
        );
    }
    else if (error.message.includes('SSL')) {
        return await message.client.sendMessage(message.user,{text: '*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _SQL Database Error_' +
            '\n*Reason:* _Database corruption._ ' +
            '\n*Solution:* _There is no known solution. You can try reinstalling it._'
            }
        );
    }
    else if (error.message.includes('Ookla')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Ookla Server Connection_' +
            '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
            '\n*Solution:* _If you use it one more time the problem will be solved._'
            }
        );
    }
    else if (error.message.includes('params')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Requested Audio Params_' +
            '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
            '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
            }
        );
    }
    else if (error.message.includes('unlink')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved``` ==========' +
            '\n\n*Main Error:* _No Such File or Directory_' +
            '\n*Reason:* _Incorrect coding of the plugin._' +
            '\n*Solution:* _Please check the your plugin codes._'
            }
        );
    }
    else if (error.message.includes('404')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Error 404 HTTPS_' +
            '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
            '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
            }
        );
    }
    else if (error.message.includes('reply.delete')) {
        return await message.client.sendMessage(message.user,{text: '*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Reply Delete Function_' +
            '\n*Reason:* _Using IMG or Wiki commands._' +
            '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
            }
        );
    }
    else if (error.message.includes('load.delete')) {
        return await message.client.sendMessage(message.user,{text: '*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Reply Delete Function_' +
            '\n*Reason:* _Using IMG or Wiki commands._' +
            '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
            }
        );
    }
    else if (error.message.includes('400')) {
        return await message.client.sendMessage(message.user,{text: '*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Bailyes Action Error_ ' +
            '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
            '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
            }
        );
    }
    else if (error.message.includes('decode')) {
        return await message.client.sendMessage(message.user,{text: '*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Cannot Decode Text or Media_' +
            '\n*Reason:* _Incorrect use of the plug._' +
            '\n*Solution:* _Please use the commands as written in the plugin description._'
            }
        );
    }
    else if (error.message.includes('unescaped')) {
        return await message.client.sendMessage(message.user, {text:'*🔐 ERROR ANALYSIS ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ [⚙️]*' + 
            '\n========== ```Error Resolved!``` ==========' +
            '\n\n*Main Error:* _Word Character Usage_' +
            '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
            '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
            }
        );
    }
    else {
        return await message.client.sendMessage(message.user, {text:'*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
            '\n_You can write to our support group for more help._'
                }
            )
        }                    
    }
}
module.exports = {err_msg}

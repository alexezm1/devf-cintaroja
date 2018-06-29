// fb access token EAADXHXmUzqgBAHgai8GUdz1ymolG29ysuiXa3nMq3yj55ffODXSucoKg9hrYgaGarkMjE6ox3UwuCZAAGrXvR9tPMsebPg9W4ZAXHAOk3tuKqMrQsEKT5005st1uzBCivjK9GQZAiBcZA2VAcdHTZAVOs49aqZBpiZCiBeMeosjZBAZDZD

const Bootbot = require('bootbot')

const bot = new Bootbot({
    accessToken: 'EAADXHXmUzqgBAHgai8GUdz1ymolG29ysuiXa3nMq3yj55ffODXSucoKg9hrYgaGarkMjE6ox3UwuCZAAGrXvR9tPMsebPg9W4ZAXHAOk3tuKqMrQsEKT5005st1uzBCivjK9GQZAiBcZA2VAcdHTZAVOs49aqZBpiZCiBeMeosjZBAZDZD',
    verifyToken: 'botswana',
    appSecret: 'ca77a8c1fdb0c6cf4abf22c20f681da9'
})
// bot.on('message', (payload, chat) =>{
//     console.log(payload)
//     chat.say('Hola soy tu papu')
// })

// { sender: { id: '1567327733377713' },
//   recipient: { id: '1742403615866589' },
//   timestamp: 1529720802231,
//   message:
//    { mid: 'mid.$cAAZqR4ubBcJqW7xTt1kKncO9uL3D',
//      seq: 74818,
//      text: 'aiuda' } }


//Escuchar saludos
bot.hear(['Hola','Que onda'], (payload, chat) =>{
    chat.say('Kepex kbron')
})

bot.hear(['adios','hasta luego'], (payload, chat) =>{
    chat.say('adios ue')
})

//Enviar mensaje con botones
bot.hear('aiuda', (payload,chat)=>{
    console.log(payload)
    chat.say({
        text: 'En que puedo ayudarte',
        buttons: [
            {type: 'postback', title: 'Ayuda', payload: 'Help'},
            {type: 'postback', title: 'Faq', payload: 'Help_faq'},
            {type: 'postback', title: 'Hablar con un humano', payload: 'Help_talk'}
        ]
    })
})
//mensaje con quickreplies
bot.hear('comida', (payload,chat)=>{
    chat.say({
        text: 'Que quieres de comer?',
        quickReplies: ['Tacos', 'Dogos', 'Burritos']
    })
})

bot.on('postback', (payload,chat)=>{
    console.log(payload)
    if(payload.postback.payload == 'Help_talk'){
        chat.say('Habla a este numero: 12312433')
    }
    else if(payload.postback.payload == 'Help_faq'){
        chat.say('NotesChingando')
    }
    else{
        chat.say('Puraverga teaiudo compa')
    }
})

bot.start()
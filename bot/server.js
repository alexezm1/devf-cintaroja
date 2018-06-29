// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()
// const facebook_service = require('./config')
// const Bot = require('./botnuevo')

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// app.get('/index', (req,res)=>{
//     res.send('Hola desde express')
// })

// app.post('/webhook',(req,res)=> {
//     console.log(req.body.entry[0].messaging[0].message.nlp.entities.intent[0])
//     const bot = new Bot(facebook_service.accessToken)
//     const senderId = req.body.entry[0].messaging[0].sender.id
//     const value = req.body.entry[0].messaging[0].message.nlp.entities.intent[0].value
//     const confidence = req.body.entry[0].messaging[0].message.nlp.entities.intent[0].confidence
//     bot.getUserProfile(senderId).then(profile=>{
//         if(confidence >= 0.80){

//             if(value == 'saludo'){
//                 bot.sendTextMessage(senderId, 'Hola '+ profile.first_name + ' en que te puedo ayudar?')
//             }
            
//             if(value == 'despedida'){
//                 bot.sendTextMessage(senderId, 'Adios '+ profile.first_name + ' que tengas un buen dia')
//             }
            
//             if(value == 'querer'){
//                 bot.sendTextMessage(senderId, 'Okay '+ profile.first_name)
//             }

//             if(value == 'hora'){
//                 bot.sendTextMessage(senderId, 'hora: ' + new Date().toLocaleTimeString() + '\n'+ 'fecha: ' + new Date().toLocaleDateString())
//             }
        
//         else{
//             bot.sendTextMessage(senderId, 'Lo siento '+ profile.first_name + ', no entendi tu pregunta')
//         }

//         }

        
//     })
    

//     res.send('ok')
// })

// app.get('/webhook', (req,res)=>{
//     console.log(req.query)
//     if (req.query['hub.mode'] === 'subscribe' &&
//       req.query['hub.verify_token'] === facebook_service.verifyToken) {
//       console.log("Validating webhook");
//     res.status(200).send(req.query['hub.challenge']);
//       }    
//       else {
//     console.error("Failed validation. Make sure the validation tokens match.");
//     res.sendStatus(403);          
//       }
// })

// app.listen(3000, ()=>{
//     console.log('Server on 3000')
// })
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const facebook_service = require('./config')
const Bot = require('./botnuevo')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/index', (req,res)=>{
    res.send('Hola desde express')
})

app.post('/webhook', (req,res)=>{
    const bot = new Bot(facebook_service.accessToken)
    const senderID = req.body.entry[0].messaging[0].sender.id
    const value = req.body.entry[0].messaging[0].message.nlp.entities.intent[0].value
    const confidence = req.body.entry[0].messaging[0].message.nlp.entities.intent[0].confidence
    bot.getUserProfile(senderID).then(profile =>{
        if(confidence > 0.65){
            if(value == 'saludo'){
                bot.sendTextMessage(senderID, 'Hola '+ profile.first_name + ' en que te puedo ayudar?')
            }
            
            if(value == 'despedida'){
                bot.sendTextMessage(senderID, 'Adios '+ profile.first_name + ' que tengas un buen dia')
            }

            if(value == 'estadodeanimo'){
                bot.sendTextMessage(senderID, 'Que es lo que pasa '+ profile.first_name + '?')
            }

            if(value == 'feliz'){
                bot.sendTextMessage(senderID, 'Me alegra que estes feliz  '+ profile.first_name)
            }

            if(value == 'triste'){
                bot.sendTextMessage(senderID, 'No estes triste '+ profile.first_name + ', ven, dejame darte un abrazo')
            }

            if(value == 'cansancio'){
                bot.sendTextMessage(senderID, 'Deberias de descansar un poco '+ profile.first_name)
            }

            if(value == 'confundido'){
                bot.sendTextMessage(senderID, 'Te invito a que reflexiones la situacion '+ profile.first_name)
            }

            if(value == 'enojado'){
                bot.sendTextMessage(senderID, 'Suelta tu coraje '+ profile.first_name + ' y luego respira hondo')
            }


        }
        else{
            bot.sendTextMessage(senderID, 'Lo siento ' + profile.first_name + 'no entendi bien tu pregunta')
        }
    })
    res.send('ok')
})


app.get('/webhook', (req,res)=>{
    console.log(req.query)
    if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === facebook_service.verifyToken) {
      console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
      }    
      else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
      }
})


app.listen(3000, ()=>{
    console.log('Server on 3000')
})
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
//Lineas de codigo que siempre deben de ir cuando usas la libreria de body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) =>{
	res.send("Hola desde express")
});

app.get("/user", (req,res) =>{
	res.send({message:"Nodemon"})
});

//Este GET debe de traer la informacion del usuario con el id
app.get("/user/:uid", (req, res) =>{
	let {uid} = req.params
	res.send("message: El id que escribiste fue: " + uid)
});

app.get("/busqueda", (req,res) =>{
	let {q,nombre} = req.query
	res.send({q,nombre})
});

app.get("/suma/:num1/:num2", (req,res) =>{
	let {num1,num2} = req.query
	let suma = parseInt(num1) + parseInt(num2)
	res.send("message: La suma es" + suma)
})

app.get("/multiplicacion", (req,res) =>{
	let {num1,num2} = req.query
	let multiplicacion = parseInt(num1) * parseInt(num2)
	res.send("message: El resultado de la multiplicacion es: " + multiplicacion)
})

app.post("/create/user", (req,res) =>{
	let {nombre,apellido} = req.body
	res.status(201).send({id:1,nombre,apellido})
});

app.listen(3000, ()=>{
	console.log("Server on 3000")
});
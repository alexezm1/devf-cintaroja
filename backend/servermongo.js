const express = require("express")
const app = express() //ejecucion de express
const bodyParser = require("body-parser")

// const Alumno = require("./mongooseCliente")
// const Facturas = require("./mongooseCliente")
// const Articulos = require("./mongooseCliente")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// //---------------------CRUD------------------------

// //Crear estudiantes

// app.post("/api/v1/user/create", (req,res)=>{
// 	const {nombre,apellido,age} = req.body

// 	let nuevoAlumno = Alumno({
// 		nombre,
// 		apellido,
// 		age
// 	});
// 	nuevoAlumno.save((err,alumno)=>{
		// if(err) throw err;
		// res.status(201).send(alumno)
// 	});

// });

// //Elimina usuario

// app.delete("/api/v1/alumnos/:uid", (req,res) =>{
// 	const {uid} = req.params
// 	Alumno.findByIdAndRemove(uid).exec()
// 		.then(res =>{
// 			res.status(204).send()
// 		})
// 		.catch(err =>{
// 			res.status(404).send(err)
// 		})
// })

// //Actualiza el usuario

// app.put("/api/v1/alumnos/:uid", (req,res) =>{
// 	const {uid} = req.params

// 	Alumno.findByIdAndUpdate(uid, {$set:req.body}, {new:true}).exec()
// 		.then(alumno =>{
// 			res.status(200).send(alumno)
// 		})
// 		.catch(err =>{
// 			res.status(400).send(err)
// 		})
// })

// //GET a todos los alumnos

// app.get("/api/v1/alumnos", (req,res) =>{
// 	Alumno.find().exec()
// 		.then(alumnos =>{
// 			res.send(alumnos)
// 		})
// 		.catch(err =>{
// 			res.status(400).send(err)
// 		})
// })

// //GET alumnos por id
// //localhost:3000/api/v1/alumnos/

// app.get("/api/v1/alumnos/:uid", (req,res)=>{
// 	const {uid} = req.params
// 	Alumno.findById(uid).exec()
// 		.then(alumno=>{
// 			res.send(alumno)
// 		})
// 		.catch(err =>{
// 			res.status(404).send(err)
// 		})
// })

//------------------------------------------------------------
//Conectar al servidor local
app.listen(3000, ()=>{
	console.log("Server on 3000")
});
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://prueba:prueba123@ds255930.mlab.com:55930/devf_alexzam')
// // console.log(mongoose.connection.readyState)
// const Schema = mongoose.Schema,
// 	ObjectId = Schema.ObjectId //genera id de manera automatica

// const alumnoSchema = new Schema({
// 	alumno: ObjectId,
// 	nombre: String,
// 	apellido: String,
// 	age: Number,
// 	email: String,
// 	city: String
// });

// var Alumno = mongoose.model("Alumno", alumnoSchema)

// module.exports = Alumno

// const articulosSchema = new Schema({
// 	articulo: ObjectId,
// 	name: String,
// 	price: Number,
// 	available: Number,
// 	description: String
// });

// var Articulos = mongoose.model("Articulos", articulosSchema)

// const facturaSchema = new Schema({
// 	factura: ObjectId,
// 	rfc: String,
// 	articulos_comprados:{
// 		 type: [{
// 			 type: Schema.ObjectId,
// 			 ref: Articulos
// 		 }]
// 	},
// 	subtotal:{
// 		type: Number,
// 		default: 0
// 	},
// 	iva: {
// 		type: Number,
// 		default: 0
// 	},
// 	total: {
// 		type: Number,
// 		default: 0
// 	}
// });

// var Facturas = mongoose.model("Facturas", facturaSchema)

// module.exports = Articulos
// module.exports = Facturas
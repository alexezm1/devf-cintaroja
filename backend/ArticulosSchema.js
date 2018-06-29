const mongoose = require('mongoose')
mongoose.connect('mongodb://prueba:prueba123@ds255930.mlab.com:55930/devf_alexzam')
// console.log(mongoose.connection.readyState)
const Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId //genera id de manera automatica

const articulosSchema = new Schema({
	articulo: ObjectId,
	name: String,
	price: Number,
	available: Number,
	description: String
});

var Articulos = mongoose.model("Articulos", articulosSchema)
module.exports = Articulos
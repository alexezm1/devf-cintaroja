const mongoose = require('mongoose')
mongoose.connect('mongodb://prueba:prueba123@ds255930.mlab.com:55930/devf_alexzam')
// console.log(mongoose.connection.readyState)
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId //genera id de manera automatica

var Articulos = require('./ArticulosSchema')

const facturaSchema = new Schema({
	factura: ObjectId,
	rfc: String,
	articulos_comprados:{
		 type: [{
			 type: Schema.ObjectId,
			 ref: Articulos
		 }]
	},
	subtotal:{
		type: Number,
		default: 0
	},
	iva: {
		type: Number,
		default: 0
	},
	total: {
		type: Number,
		default: 0
	}
});

var Facturas = mongoose.model("Facturas", facturaSchema)
module.exports = Facturas
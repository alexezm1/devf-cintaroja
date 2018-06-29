const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Facturas = require("./FacturasSchema")
const Articulos = require("./ArticulosSchema")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// app.get("/",(req,res)=>{
// 	res.send("Arriba")
// })

//--------------------CRUD ARTICULOS-------------------------

//CREATE ARTICULO

app.post("/api/articulos/create", (req,res) =>{
	const{name,price,available,description} = req.body

	let nuevoArticulo = Articulos({
		name,
		price,
		available,
		description
	});

	nuevoArticulo.save((err,articulo) =>{
		if(err) throw err;
		res.status(201).send(articulo)
	});
});

//READ ARTICULOS

app.get("/api/articulos", (req,res)=>{
	Articulos.find().exec()
		.then(articulos =>{
			res.send(articulos)
		})
		.catch(err =>{
			res.status(404).send(err)
		})
})

//READ ARTICULOS BY ID

app.get("/api/articulos/:uid", (req,res) =>{
	const {uid} = req.params

	Articulos.findById(uid).exec()
		.then(articulo =>{
			res.send(articulo)
		})
		.catch(err =>{
			res.status(404).send(err)
		})

});

//UPDATE ARTICULOS

app.put("/api/articulos/:uid", (req,res) =>{
	const {uid} = req.params

	Articulos.findByIdAndUpdate(uid, {$set:req.body}, {new:true}).exec()
		.then(articulo =>{
			res.status(200).send(articulo)
		})
		.catch(err =>{
			res.status(400).send(err)
		})
})

//DELETE ARTICULOS

app.delete("/api/articulos/:uid", (req,res) =>{
	const {uid} = req.params

	Articulos.findByIdAndRemove(uid).exec()
		.then(articulo =>{
			res.status(200).send()
		})
		.catch(err =>{
			res.status(404).send(err)
		})
});

//-----------------------CRUD FACTURA ---------------------------------
//CREATE FACTURA

app.post("/api/facturas/create", (req,res) =>{
	const{rfc,articulos_comprados} = req.body

	let nuevaFactura = Facturas({
		rfc,
		articulos_comprados
	});

	nuevaFactura.save((err,factura) =>{
		if(err) throw err;
		res.status(201).send(factura)
	});
});

//READ FACTURA

app.get("/api/facturas", (req,res)=>{
	Facturas.find().exec()
		.then(facturas =>{
			res.send(facturas)
		})
		.catch(err =>{
			res.status(404).send(err)
		})
})

//READ FACTURAS BY ID

app.get("/api/facturas/:uid", (req,res) =>{
	const {uid} = req.params

	Facturas.findById(uid, {}, (err,Facturas)=>{
		Articulos.populate(Facturas, {path: "articulos_comprados"}, (err, facturas)=>{
			var listas = Facturas.articulos_comprados
			var subt = 0

			listas.map(x,y,z =>{
				subt = x.precio + subt
			})
			Facturas.subtotal = subt
			Facturas.iva = (subt * .16)
			Facturas.total = facturas.subtotal + facturas.iva
			if(err) throw err;
			res.status(200).send(facturas)
		})
	})
		

});

//UPDATE FACTURAS

app.put("/api/facturas/:uid", (req,res) =>{
	const {uid} = req.params

	Facturas.findByIdAndUpdate(uid, {$set:req.body}, {new:true}).exec()
		.then(articulo =>{
			res.status(200).send(articulo)
		})
		.catch(err =>{
			res.status(400).send(err)
		})
})

//DELETE FACTURAS

app.delete("/api/facturas/:uid", (req,res) =>{
	const {uid} = req.params

	Facturas.findByIdAndRemove(uid).exec()
		.then(articulo =>{
			res.status(200).send()
		})
		.catch(err =>{
			res.status(404).send(err)
		})
})

app.listen(3000, ()=>{
	console.log("Server on 3000")
});
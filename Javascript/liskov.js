class Largometraje{

	constructor(nombre, duracion){
		this.nombre = nombre
		this.duracion = duracion
	}

	getNombre(){
		return this.nombre
	}

	getDuracion(){
		return this.duracion
	}
}

class Pelicula extends Largometraje{

	constructor(nombre, duracion, genero){

		super(nombre, duracion)
		this.genero = genero
	}
}

class Documental extends Largometraje{

	constructor(nombre, duracion, director){

		super(nombre, duracion)
		this.director = director
	}
}

class Cine{
	constructor(largometraje){
		this.largometraje = largometraje
	}

	reproducir(){
		return `Reproduciendo... ${this.largometraje.getNombre()}`
	}
}

// var doc = new Documental("stiv jobs", 130, "jonny")
// var peli = new Pelicula("hola", 210, "accion")

// var cine = new Cine(doc)
// console.log(cine.reproducir())

// ----------------------------------------------


class Construccion{

	constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){

		this.num_puertas = num_puertas
		this.num_ventanas = num_ventanas
		this.num_piso = num_piso
		this.direccion = direccion
		this.altura = altura
		this.largo = largo
		this.ancho = ancho
	}

	getMetroCuadrado(){
		return this.largo*this.ancho
	}

	getDireccion(){
		return this.direccion
	}

	setDireccion(direccion){
		this.direccion = direccion
		return `La nueva direccion es ${this.direccion}`
	}
}

class Casa extends Construccion{

	constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
		super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho)
	}
}

class Edificio extends Construccion{

	constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
		super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho)
	}
}

var casita = new Casa(5, 6, 2, "aiusgduagsd", 5, 5, 5)
var edifi = new Edificio(20, 50, 10, "jnjnnnas", 20,40,25)

console.log(casita.getMetroCuadrado())
console.log(casita.setDireccion("lolololl"))


console.log(edifi.getMetroCuadrado())
console.log(edifi.setDireccion("ayudaaaaaa"))

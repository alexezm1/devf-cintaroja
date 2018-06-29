class Animal{

	constructor(nombre, peso){
		this.nombre = nombre
		this.peso = peso
	}

	getNombre(){
		return this.nombre
	}

	comida(comida){
		return `Esta comiendo ${comida}`
	}

}

class Perro extends Animal{

	constructor(nombre, peso, raza, color){
		super(nombre, peso)
		this.raza = raza
		this.color = color
	}

	ladrar(){
		return "guau"
	}
}

// var firulais = new Perro("firulais", "20kg", "labrador", 
// 	"blanco")
// console.log(firulais.comida("croquetas"))

class Figura{

	constructor(nombre, numlados){
		this.nombre = nombre
		this.numlados = numlados
	}

	getNombre(){
		return this.nombre
	}

	getLados(){
		return this.numlados
	}
}

class Triangulo extends Figura{

	constructor(nombre, numlados, tipo, base, altura){
		super(nombre, numlados)
		this.tipo = tipo
		this.base = base
		this.altura = altura
	}
}

class Rectangulo extends Figura{

	constructor(nombre, numlados, lado, ancho){
		super(nombre, numlados)
		this.lado = lado
		this.ancho = ancho 
	}
}

// var tri = new Triangulo("Triangulo", 3, 
// 	"Triangulo Equilatero", 2, 4)
// console.log(tri.getLados())

// var rect = new Rectangulo("Rectangulo", 4, 2, 4)
// console.log(rect.getNombre())

class Electrodomestico{


	constructor(precio, color, peso, consumo_energetico){
		this.precio = precio
		this.color = color
		this.peso = peso
		this.consumo_energetico = consumo_energetico
	}

	setConsumoEnergetico(){
		return this.consumo_energetico
	}

}

class Lavadora{

	constructor(carga, precio, color, peso, consumo_energetico){
		super(precio, color, peso, consumo_energetico)
		this.carga = carga
	}

	precioFinal(){
		return (this.consumo_energetico*this.carga)
	}
}

// var lava = new Lavadora()


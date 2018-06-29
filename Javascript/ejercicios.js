class Triangulo{
	constructor(base, altura){
		this.base = base
		this.altura = altura
	}

	calcArea(){
		var resultado = (this.base*this.altura)/2
		console.log(resultado)
	}

	calcPerimetro(){
		var resultado = this.base*3
		console.log(resultado)
	}
}

//var equilatero = new Triangulo(2,3)
// equilatero.calcArea()
// equilatero.calcPerimetro()

class Cuadrado{

	constructor(base){
		this.base = base
	}

	calcArea(){
		var resultado = this.base**2
		console.log(resultado)
	}

	calcPerimetro(){
		var resultado = this.base*4
		console.log(resultado)
	}
}

// var cuadr = new Cuadrado(2)
// cuadr.calcArea()
// cuadr.calcPerimetro()

class Rectangulo{

	constructor(largo, ancho){
		this.largo = largo
		this.ancho = ancho
	}

	calcArea(){
		var resultado = (this.largo*this.ancho)
		console.log(resultado)
	}

	calcPerimetro(){
		var resultado = (this.largo*2) + (this.ancho*2)
		console.log(resultado)
	}
}

// var rect = new Rectangulo(3,4)
// rect.calcArea()
// rect.calcPerimetro()

class Persona{

	constructor(nombre, edad, sexo, peso, altura){
		this.nombre = nombre
		this.edad = edad
		this.sexo = sexo
		this.peso = peso
		this.altura = altura
	}

	calcularIMC(){
		var imc = (this.peso/(this.altura**2))
		console.log(imc)
	}

	esMayorDeEdad(){
		var mayor = false
		if(this.edad >= 18){
			mayor = true
		}
		else{
		 mayor = false
		}
		console.log(mayor)
	}
	
	RFC(){
		console.log(this.nombre + this.edad + this.sexo)
	}
}

// var alex = new Persona("Alejandro", 21, "masculino", 70, 1.74)
// alex.calcularIMC()
// alex.esMayorDeEdad()
// alex.RFC()

//---------------------------------------------------
//Ejercicio2

class Cuenta{

	constructor(titular, cantidad){
		this.titular = titular
		this.cantidad = cantidad
	}

	ingresar(ingreso){
		this.ingreso = ingreso
		var cantidadTotal = this.cantidad + this.ingreso
		console.log("Has depositado $" + this.ingreso + 
			". Tu saldo actual es " + cantidadTotal)
	}

	retirar(retiro){
		var cantidadTotal = this.cantidad + this.ingreso
		this.retiro = retiro
		console.log("Has retirado $" + this.retiro + 
			". Tu saldo actual es " + (cantidadTotal -
			 this.retiro))
	}
}

// var asd = new Cuenta("Alejandro Zamora", 5000)
// asd.ingresar(30000)
// asd.retirar(4000)



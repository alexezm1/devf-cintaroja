class Perro{
	constructor(nombre, color, pelaje, size, raza){
		this.color = color
		this.pelaje = pelaje
		this.size = size
		this.raza = raza
		this.nombre = nombre
	}

	nacer(){
		console.log("Hola soy " + this.nombre)
	}

	ladrar(){
		console.log("GuauGuau")
	}


}

var chato = new Perro("kelvin", "cafe", "fino", "grande", "Pug")
var bonnie = new Perro("bonnie", "gris", "fino", "mediano", "huskey")

chato.nacer()
bonnie.nacer()

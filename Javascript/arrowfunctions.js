var conversion = celsius => {
	var farenheit = (celsius*1.8) + 32
	return farenheit
}

console.log("Conversion de Celsius a Farenheit")
console.log(conversion(0))

//----------------------------------------------------
var tablax = numero => {
	console.log(`Tabla de multiplicar de ${numero}`)
	for (var i = 1; i < 11; i++) {
		var multiplicacion = numero*i
		console.log(multiplicacion)
	}
}

tablax(3)

//----------------------------------------------------

//----------------------------------------------------

var param = (...params) => {
	return params
}

console.log("Retorna los parametros de mi funcion")
console.log(param(1,2,3,4,5))

//----------------------------------------------------

var media = (...x) =>{
	console.log(`Media de ${x}`)
	var suma = 0
	for (var i = 0; i < x.length; i++) {
		 var suma = suma + x[i]
	}
	var media = suma/x.length
	return media
}

console.log(media(1,2,3,4,5))
//Programacion funcional
//Usando fors con map para que sea mas optimo por medio de callbacks
//y filter para hacer fors con ifs mas optimos y bonitos

var lista = [1,6,3,7,9,2,4,5,0,8]

var obj = [
	{data:"Hola", nombre: "Pedro"},
	{data:"Holi", nombre: "Juan"},
	{data:"Holo", nombre: "Jorge"}
]

// lista.map((x,y,z) =>{
// 	console.log(z)
// })
 let listanueva = obj.map((x,y,z) =>{
 	return x.nombre
 })
 // console.log(listanueva)

 var tasks = [
 	{
 		name:"hola",
 		duration: 120
 	},
 	{
 		name:"hasdasd",
 		duration: 60
 	},
 	{
 		name:"jkasuhas",
 		duration: 240
 	}

 ];

 let nuevaLista = tasks.filter((x,y,z) =>{
 	return x.duration > 90
 })

 //console.log(nuevaLista)

 var hola = ["Hola","Como","estas"]

let holaLC = hola.map((x,y,z) =>{
	return x.toUpperCase()
})

// console.log(holaLC)

var ex2 = [ "Hola amigos", "cinta roja cdmx y gdl","yei" ]

function ejercicio2(lista){
	let ex2Nuevo = lista.map((x,y,z) =>{ //x = elemento, y = indice, z = arreglo
		let splits = x.split(" ")
		splits = splits.map((a,b,c) =>{
			return (b % 2)
			? a.toUpperCase()
			: a.toLowerCase()

			

		})	
		let splitsFinal = splits.join(" ")

		return splitsFinal
	})
	console.log(splitsFinal)
}

ejercicio2(ex2)
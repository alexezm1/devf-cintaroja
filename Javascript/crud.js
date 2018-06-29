//Create, Read, Update, Delete

const request = require("request")

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/"

// function getAllAuthors (){
// 	const URI = "authors/"
// 	var url = URL_BASE + URI

// 	return new Promise((resolve,reject) =>{
// 		request.get(url, (err,response,body) =>{
// 			var json = JSON.parse(body)
// 			response.statusCode == 200
// 				? resolve(json)
// 				: reject("Error en la peticion")
// 		});
// 	});
// }

function getSpecifiedAuthor (id){
	const URI = "authors/"
	var url = URL_BASE + URI

	return new Promise((resolve,reject) =>{
		request.get(url+id, (err,response,body) =>{
			var json = JSON.parse(body)
			response.statusCode == 200
				? resolve(json)
				: reject("Error en la peticion")
		});
	});
}

function createAuthor(nombre, apellido, biografia, genero, edad){
	const URI = "authors/"
	var url = URL_BASE + URI

	let jsonSend = {
		"name": nombre,
		"last_name": apellido,
		"nacionalidad": "MX",
		"biography": biografia,
		"gender": genero,
		"age": edad
	}

	return new Promise((resolve,reject) =>{
		request.post({url:url, form:jsonSend}, (err, response, body) =>{
			var json = JSON.parse(body)
			response.statusCode == 201
				? resolve(json)
				: reject("Error en la peticion")
		});
	});

}

function updateAuthor(id, name, last_name, biography, gender, age, is_alive){
	const URI = "authors/"
	var url = URL_BASE + URI
	

let jsonUpdate = {
		"name": name,
		"last_name": last_name,
		"nacionalidad": "MX",
		"biography": biography,
		"gender": gender,
		"age": age,
		"is_alive": is_alive
	}

	return new Promise((resolve,reject) =>{
		request.put({ url:url+id, form:jsonUpdate}, (err,response,body) =>{
			var json = JSON.parse(body)
			response.statusCode == 200
				? resolve(json)
				: reject("Error en la peticion")
		});
	});
		
}





// getAllAuthors()
// 	.then(response =>{
// 		console.log(response)
// 	})
// 	.catch(err =>{
// 		console.log(err)
// 	})

getSpecifiedAuthor(823)
	.then(response =>{
		console.log(response)
	})
	.catch(err =>{
		console.log(err)
	})

// createAuthor("PruebaCrud", "Prueba", "ola k ase", "M", 21)
// 	.then(response =>{
// 		console.log(response)
// 	})
// 	.catch(err =>{
// 		console.log(err)
// 	})

updateAuthor(823, "Alejandro", "Zamora", "olaaaa", "M", "21", false )
	.then(response =>{
		console.log(response)
	})
	.catch(err =>{
		console.log(err)
	})
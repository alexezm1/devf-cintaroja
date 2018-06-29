const request = require("request")


function peticionPromesa(){
	return new Promise((resolve,reject)=>{
		request.get("https://swapi.co/api/people/1/", (err, response, body) =>{
			if(response.statusCode == 200){
				resolve(JSON.parse(body))
			}
			else{
				reject("Error en la peticion")
			}
		});
	});
}

function peticionPromesa2(url){
	return new Promise((resolve,reject) =>{
		request.get(url, (err, response, body)=>{
			if(response.statusCode == 200){
				resolve(JSON.parse(body))
			}
			else{
				reject("Error en la peticion")
			}
		});
	});
}

peticionPromesa()
	.then(response => {
		console.log("Primera promesa exitosa")
		console.log(response.name)
		return peticionPromesa2(response.films[0])

	})
	.then(response =>{
		console.log("Segunda promesa exitosa")
		console.log(response.title)
	})
	.catch(err => {
		console.log(err)
		
	})

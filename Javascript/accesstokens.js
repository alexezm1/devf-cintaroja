//access token nasa api : gnLlnCTs5W6AciQHGY2TcIvjM7EbT3DwnUtGi1jZ


const request = require("request")



function peticionLibro(nombre_libro){
	return new Promise((resolve,reject)=>{
		request.get("http://openlibrary.org/search.json?q=" + nombre_libro, (err, response, body) =>{
			var body1 = JSON.parse(body)
			if(response.statusCode == 200){
				var res = []
				for (var i = 0; i < body1.docs.length; i++) {
					if(nombre_libro == body1.docs[i].title){
						res.push(body1.docs[i].title)					}
					
				}
				resolve(res)
				
			}
			else{
				reject("Error en la peticion")
			}
		});
	});

}

peticionLibro("I, robot")
	.then(response =>{
		console.log(response.title)
		console.log(response.author_name)
	})
	.catch(err =>{
		console.log(err)
	})
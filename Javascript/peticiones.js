const request = require("request")

request.get("https://swapi.co/api/people", 
			(error,response,body) =>{
				// console.log(`Error -> ${error}`)
				// console.log(`Response -> ${response.statusCode}`)
				// console.log(`Body -> ${JSON.parse(body)}`)

				var body1 = JSON.parse(body)
				if(response.statusCode == 200){
					console.log("Peticion exitosa")
					for (var i = 0; i < body1.results.length; i++) {
						if(body1.results[i].name == "Luke Skywalker"){
							request.get("https://swapi.co/api/films", 
									(error,response,body) =>{
										var body2 = JSON.parse(body)
										if(response.statusCode == 200){
											console.log("Peticion exitosa")
											for (var i = 0; i < body2.results.length; i++) {
												for (var j = 0; j < body2.results[i].characters.length; j++) {
													if(body2.results[i].characters[j].name == "Luke Skywalker"){ //CHECAR CODIGO
														console.log(body2.results.title)
													}
												}
												// if(body2.results[i].characters[i].name == "Luke Skywalker"){ //CHECAR CODIGO
												// 	console.log(body2.results[i].title)
												// }
												
											}
										}
									}
								
							);

										
						}
					}
					
				}
				else{
					console.log("Error")
				}
			});
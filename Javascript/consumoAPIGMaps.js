//access token google maps api : AIzaSyALIcURgrbcUOS41eilxsB_5wKRfnst6U8


const request = require("request")


function peticionGoogleMaps(direccion){
	 var dir = direccion.replace(" ", "+")
	return new Promise((resolve, reject) =>{
		request.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + dir +"&key=AIzaSyALIcURgrbcUOS41eilxsB_5wKRfnst6U8",
		(err,response,body) =>{
			var body = JSON.parse(body)
			if(response.statusCode == 200){
				resolve(body.results[0].address_components[4].long_name)
				
			}
			else{
				reject("Peticion incorrecta")
			}
		});
	});

	
}
// peticionGoogleMaps("Mision de Buquivaba 15")
// 	.then(response =>{
// 		console.log(response)
// 	})
// 	.catch(err =>{
// 		console.log(err)
// 	})


var googleMapsClient = require("@google/maps").createClient({
	key: "AIzaSyALIcURgrbcUOS41eilxsB_5wKRfnst6U8"
});

googleMapsClient.geocode({
	address: "Mision de Buquivaba 15"
}, (err, response) => {
	if(!err){
		console.log(response.json.results)
	}
	else{
		console.log(err)
	}
});	

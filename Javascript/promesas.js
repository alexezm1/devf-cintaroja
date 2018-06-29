//Declaracion de la promesa
const promesa = new Promise((resolve, reject) =>{
	const numero = 6
	setTimeout(()=>{
		numero > 5
			? resolve("Si es mayor")
			: reject("No es mayor")
	},2000);
}); 

promesa
	.then(data => console.log(data))
	.catch(err => console.log(err))
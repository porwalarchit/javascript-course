const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function(){
	console.log("First Request Worked!!!");
	const data = JSON.parse(this.responseText);
	// for(let planet of data.results){
	// 	console.log(planet.name); 
	// }
	const filmUrl = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function(){
		console.log("Second Request Worked!!!");
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	})
	filmReq.addEventListener('error', function(e){
		console.log('ERROR!!', e);
	})
	filmReq.open('GET', filmUrl);
	filmReq.send();
});
firstReq.addEventListener('error', ()=>{
	console.log('Error');
})

firstReq.open('GET', 'https://swapi.dev/api/planets');
firstReq.send();
console.log("First Request Sent!!");
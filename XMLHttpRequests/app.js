const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', ()=>{
	console.log("It worked!!!");
	const data = JSON.parse(firstReq.responseText);
	for(let planet of data.results){
		console.log(planet.name); 
	}
});
firstReq.addEventListener('error', ()=>{
	console.log('Error');
})

firstReq.open('GET', 'https://swapi.dev/api/planets');
firstReq.send();
console.log("Request Sent!!");
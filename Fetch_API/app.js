// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request Sent!');


fetch('https://swapi.dev/api/planetsf')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Error, Status Code: ', response.status);
		}
		response.json().then((data) => {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log("Something went wrong with fetch!!");
		console.log(err);
	})

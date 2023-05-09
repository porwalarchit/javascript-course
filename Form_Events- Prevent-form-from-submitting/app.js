const form = document.querySelector('#signup-form')

const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	alert("Submitted the form");

	console.log('Credit Card Input:', creditCardInput.value);
	console.log('Terms Input: ', termsCheckbox.checked);
	console.log('Veggie Input: ', veggieSelect.value);

})
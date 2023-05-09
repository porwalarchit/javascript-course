const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};

creditCardInput.addEventListener('input', (e)=>{
	console.log('Credit Card data changed', e);
	formData['cc'] = e.target.value;
})

termsCheckbox.addEventListener('input', (e)=>{
	console.log('Checkbox data changed', e);
	formData['agreeToTerms'] = e.target.checked;
})

veggieSelect.addEventListener('input', (e)=>{
	console.log('Veggie data changed', e);
	formData['veggie'] = e.target.value;
})


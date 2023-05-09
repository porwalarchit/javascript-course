const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
for(let input of [creditCardInput, termsCheckbox, veggieSelect]){
	input.addEventListener('change', ({target})=>{
		const {name, type, value, checked} = target;
		formData[name] = type === 'checkbox' ? checked : value;
		// formData[e.target.name] = e.target.value;
	})
}


// creditCardInput.addEventListener('input', (e)=>{
// 	console.log('Credit Card data changed', e);
// 	formData['cc'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', (e)=>{
// 	console.log('Checkbox data changed', e);
// 	formData['agreeToTerms'] = e.target.checked;
// })

// veggieSelect.addEventListener('input', (e)=>{
// 	console.log('Veggie data changed', e);
// 	formData['veggie'] = e.target.value;
// })


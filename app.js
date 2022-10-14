window.onload = function(){
const form = document.getElementById('form');
const first = document.getElementById('fname');
const last = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});
function checkInputs(){
	const firstValue = first.value.trim();
	const lastValue = last.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

if(firstValue === ''){
	setErrorFor(first, 'First Name cannot be blank');
}else{
	setSuccesFor(first, '');
	}
if(lastValue === ''){
	setErrorFor(last, 'Last Name cannot be blank');
}else{
	setSuccesFor(last, '');
	}
if(emailValue === ''){
	setErrorFor(email, 'Email cannot be blank');
}else if(!isEmail(emailValue)) {
	setErrorFor(email,'This is not a valid email adress');
}else{
	setSuccesFor(email, '');
	}
if(passwordValue === ''){
	setErrorFor(password, 'Password cannot be blank');
}else{
	setSuccesFor(password, '');
	} 
}
function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('.small');
	small.innerText = message
	formControl.className = 'form-control error';
	}

function setSuccesFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('.small');
	small.innerText = message
	formControl.className = 'form-control succes'
    }
 function isEmail(email){
 	return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
 }
}

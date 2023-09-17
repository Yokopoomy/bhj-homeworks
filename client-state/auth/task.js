const loginForm = document.getElementById('signin')
const form = document.getElementById('signin__form')
const welcome = document.getElementById('welcome')
const user = document.getElementById('user_id')
const logout = document.getElementById('logout')

if(localStorage.id){
	welcome.classList.add('welcome_active')
	loginForm.classList.remove('signin_active')
	user.textContent = localStorage.id
	logout.classList.add('logout_active')
}

logout.addEventListener('click', function(){
	delete localStorage.id
	welcome.classList.remove('welcome_active')
	loginForm.classList.add('signin_active')
	logout.classList.remove('logout_active')
})

form.addEventListener('submit', function(event){
	event.preventDefault()

	let body = new FormData(document.getElementById('signin__form'))
	let requestOptions = {
		method: 'POST',
		body: body
	};

	fetch(form.action, requestOptions)
	.then(response => response.json())
	.then(result => {
		if(result.success == true){
			localStorage.id = result.user_id
			welcome.classList.add('welcome_active')
			user.textContent = result.user_id
			loginForm.classList.remove('signin_active')
			logout.classList.add('logout_active')
			form.reset()
		}else{
			alert('Неверный логин/пароль')
			form.reset()
		}
	})
	.catch(error => {
		console.log('error', error)
	})
})
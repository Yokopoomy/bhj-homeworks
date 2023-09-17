const message = document.getElementById('editor');
const btnClear = document.getElementById('clear');
if(localStorage.message){
	message.value = localStorage.message;
}

message.addEventListener('keyup', function(e) {
	localStorage.message = message.value;
})

btnClear.addEventListener('click', function(e) {
	delete localStorage.message;
	message.value = '';
})
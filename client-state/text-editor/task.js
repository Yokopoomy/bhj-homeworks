const message = document.getElementById('editor');
const btnClear = document.getElementById('clear');
message.value = localStorage.getItem('messageStorage')

message.addEventListener('keyup', function(e) {
	localStorage.messageStorage = message.value;
})

btnClear.addEventListener('click', function(e) {
	delete localStorage.messageStorage;
	message.value = '';
})
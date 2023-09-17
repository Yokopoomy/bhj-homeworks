document.addEventListener("DOMContentLoaded", function() {
	const popup = document.getElementById('subscribe-modal');
	const close = popup.querySelector('.modal__close');
	if(document.cookie.indexOf("popup") !== 0){
		popup.classList.add('modal_active');
	}
		
	close.addEventListener('click', function(){
		document.cookie = 'popup=closed';
		popup.classList.remove('modal_active');
	})
});
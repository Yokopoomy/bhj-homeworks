document.querySelector('.dropdown__value').onclick = function() {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

const linkClick = document.querySelectorAll('.dropdown__link');
linkClick.forEach((el) => {
	el.addEventListener('click', function(e) {
		document.querySelector('.dropdown__value').textContent = this.textContent;
		document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
		e.preventDefault();
	})
}, false)
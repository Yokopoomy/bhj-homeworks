const divBlock = document.querySelectorAll('.reveal');

function IsVisible(el) {
	const { top, bottom } = el.getBoundingClientRect();
	if (bottom < 0) {
		return false;
	}
	if (top > window.innerHeight) {
		return false;
	}
	return true;
}

window.addEventListener("scroll", () => {
	for (el of divBlock){
		if (IsVisible(el)) {
			el.classList.add('reveal_active');
		}
	}
});

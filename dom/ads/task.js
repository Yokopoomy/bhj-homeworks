const card = document.querySelectorAll('.rotator__case');

let currentIndex = 0;

function timer() {
	card[currentIndex].classList.remove('rotator__case_active');
	currentIndex = (currentIndex + 1) % card.length;
	card[currentIndex].classList.add('rotator__case_active');
	card[currentIndex].style.color = card[currentIndex].dataset.color;
	setTimeout(timer, card[currentIndex].dataset.speed);
}

window.onload = timer();
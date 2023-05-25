const card = document.querySelectorAll('.rotator__case');

let i = 0;

function timer() {
	if(i < card.length - 1) {
		card[i+1].classList.add('rotator__case_active');
		card[i].classList.remove('rotator__case_active');
		card[i+1].style.color = card[i+1].dataset.color;
		i++;
		setTimeout(timer, card[i].dataset.speed);
	}else	if(i === card.length - 1) {
		card[0].classList.add('rotator__case_active');
		card[0].style.color = card[0].dataset.color;
		card[card.length - 1].classList.remove('rotator__case_active');
		i = 0;
		setTimeout(timer, card[i].dataset.speed);
	}
}

window.onload = timer()
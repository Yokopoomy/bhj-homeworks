let dSelector = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

dSelector.forEach((hole) => {
  hole.onclick = function() {
		if(hole.className.includes( 'hole_has-mole' )){
			dead.textContent++;
		}else{
			lost.textContent++;
		}
		if(parseInt(lost.textContent) === 5){
			alert('Вы проиграли!');
			lost.textContent = 0;
			dead.textContent = 0;
		}else if(parseInt(dead.textContent) === 10){
			alert('Вы выйграли!');
			lost.textContent = 0;
			dead.textContent = 0;
		}
	}
	
});
let start = 1000;
let cookie = document.getElementById('cookie');
let stringNumber = document.getElementById('clicker__counter');

cookie.onclick = function () {
	

	clicks = parseInt(stringNumber.textContent);
	stringNumber.textContent = clicks + 1;
	cookie.width = 250;
	setTimeout (() => cookie.width = 200 , 100)

	let count = 1 / ((new Date()) - start) * 1000;
	start = new Date();
	
	let speed = document.getElementById('clicker__speed');
	speed.textContent = count.toFixed(2);
}

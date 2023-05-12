let timer = document.getElementById('timer');

function countdown () {
	let time = new Date("2001-01-01 00:00:59");
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	const interval = setInterval(() => {
		if(seconds == 0){
			clearInterval(interval);
			alert('Вы выйграли Аааааааавтомобиль!');
			return;
		}
		seconds -= 1;
		let time = new Date(2001, 01, 01, hours, minutes, seconds).toLocaleTimeString("ru-Ru", {
			hours: "2-digit",
			minutes: "2-digit",
			seconds: "2-digit",
		});
		timer.textContent = (time);
	}, 1000)
}

countdown();
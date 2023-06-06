const items = document.getElementById('items') ;
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE) {
		document.getElementById('loader').classList.remove('loader_active');
		const json = JSON.parse(xhr.responseText);
		for(let key in json.response.Valute) {
			const item = `
			<div class="item">
			<div class="item__code">${json.response.Valute[key].CharCode}</div>
			<div class="item__value">${json.response.Valute[key].Value}</div>
			<div class="item__currency">руб.</div>
			</div>
			`
			items.insertAdjacentHTML("beforeEnd", item);
		}
	}
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
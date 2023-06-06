const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const xhrQuestion = new XMLHttpRequest();

xhrQuestion.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhrQuestion.send();

xhrQuestion.addEventListener('readystatechange', () => {
	if(xhrQuestion.readyState === xhrQuestion.DONE) {
		const json = JSON.parse(xhrQuestion.responseText);
		title.insertAdjacentHTML("beforeEnd", json.data.title);
		for(item of json.data.answers) {
			const itemBtn = `
			<button class="poll__answer">${item}</button>
			`
			answers.insertAdjacentHTML("beforeEnd", itemBtn);
		}
		const answer = answers.querySelectorAll('.poll__answer');
		for(item of answer) {
			item.addEventListener('click', (element) => {
				alert('«Спасибо, ваш голос засчитан!»');
				const index = json.data.answers.findIndex(item => item.includes(element.target.textContent));
				const xhrVotes = new XMLHttpRequest;
				xhrVotes.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
				xhrVotes.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
				xhrVotes.send( `vote=${json.id}&answer=${index}` );
				xhrVotes.addEventListener('readystatechange', () => {
					if(xhrVotes.readyState === xhrVotes.DONE) {
						const json = JSON.parse(xhrVotes.responseText);
						answers.innerHTML = '';
						let sum = 0;
						for(item of json.stat) {
							sum	+= Number(item.votes);
						}
						for(item of json.stat) {
							const itemStat = `
							<div class='poll__votes'>${item.answer}: <span class='poll__votes__bold'>${((item.votes/sum)*100).toFixed(2)}%</span></div>
							`
							answers.insertAdjacentHTML("beforeEnd", itemStat);
						}
					}
				})
			})
		}
	}
})
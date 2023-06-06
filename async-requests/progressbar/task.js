const progress = document.getElementById('progress');
const form = document.forms.form;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const xhr = new XMLHttpRequest();

	xhr.open('POST', form.getAttribute("action"));
	xhr.upload.addEventListener('progress', function(event) {
		const percent = (event.loaded / event.total).toFixed(2);
  	progress.value = percent;
	})
	xhr.addEventListener('load', () => {
		alert('Файл успешно загружен на сервер!');
		form.querySelector('.input__wrapper-desc').textContent = '';
		progress.value = '0.0';
	})
	xhr.send(formData);
})
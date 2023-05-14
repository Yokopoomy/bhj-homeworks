const tabs = [].slice.call(document.querySelectorAll('.tab'));
const tabContents = [].slice.call(document.querySelectorAll('.tab__content'));


tabs.forEach((el, index) => {
	el.addEventListener('click', function(e) {

		const tabIndex = tabs.findIndex( item => item.className.includes('tab_active'));
		tabs[tabIndex].classList.remove('tab_active');
		el.classList.toggle('tab_active');

		tabContents[tabIndex].classList.remove('tab__content_active');
		tabContents[index].classList.toggle('tab__content_active');

	})
}, false)
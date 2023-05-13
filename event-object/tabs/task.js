const tabs = [].slice.call(document.querySelectorAll('.tab'));
const tabContents = [].slice.call(document.querySelectorAll('.tab__content'));
console.log(tabContents);

tabs.forEach((el, index) => {
	el.addEventListener('click', function(e) {
		//tabs.findIndex( item => item.classname.includes('tab_active'))
		const index1 = tabs.findIndex( item => item.className == 'tab tab_active');
		tabs[index1].classList.remove('tab_active');
		el.classList.toggle('tab_active');

		const index2 = tabContents.findIndex( item => item.className == 'tab__content tab__content_active');
		tabContents[index2].classList.remove('tab__content_active');
		tabContents[index].classList.toggle('tab__content_active');
		console.log(tabContents[index].className);

	})
}, false)
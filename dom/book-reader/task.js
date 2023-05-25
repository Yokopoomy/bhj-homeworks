const bookSize = [].slice.call(document.querySelector('.book__control_font-size').children);
const bookTextColor = [].slice.call(document.querySelector('.book__control_color').children, 1);
const bookBgColor = [].slice.call(document.querySelector('.book__control_background').children, 1);
const bookContent = document.querySelector('.book');

let oldSize;
let newSize;

bookSize.forEach((el) => {
	el.addEventListener('click', function(e) {
		const bookIndex = bookSize.findIndex(item => item.className.includes('font-size_active'))
		bookSize[bookIndex].classList.remove('font-size_active');
		el.classList.add('font-size_active');
		newSize = 'book_fs-' + el.dataset.size;
		bookContent.classList.remove(oldSize);
		bookContent.classList.add(newSize);
		oldSize = newSize;
		e.preventDefault();
	})
})

let oldColor;
let newColor;

bookTextColor.forEach((el) => {
	el.addEventListener('click', function(e) {
		const bookTextIndex = bookTextColor.findIndex(item => item.className.includes('color_active'))
		bookTextColor[bookTextIndex].classList.remove('color_active');
		el.classList.add('color_active');
		newColor = 'book_color-' + el.dataset.textColor;
		bookContent.classList.remove(oldColor);
		bookContent.classList.add(newColor);
		oldColor = newColor;
		e.preventDefault();
	})
})

let oldBg;
let newBg;

bookBgColor.forEach((el) => {
	el.addEventListener('click', function(e) {
		const bookBgIndex = bookBgColor.findIndex(item => item.className.includes('color_active'))
		bookBgColor[bookBgIndex].classList.remove('color_active');
		el.classList.add('color_active');
		newBg = 'book_bg-' + el.dataset.bgColor;
		bookContent.classList.remove(oldBg);
		bookContent.classList.add(newBg);
		oldBg = newBg;
		e.preventDefault();
	})
})
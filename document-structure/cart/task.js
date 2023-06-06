const controls = Array.from(document.querySelectorAll('.product__quantity-control'));
const btnAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');
cart.style.display = 'none';

for(item of controls) {
	item.addEventListener('click', function() {
		let value;
		if(this.classList.contains('product__quantity-control_dec')) {
			value = Number(this.nextElementSibling.textContent) - 1;
			if(value < 2) {
				this.nextElementSibling.textContent = ' 1 ';
			}else{
				this.nextElementSibling.textContent = ` ${value} `;
			}
		}else if(this.classList.contains('product__quantity-control_inc')) {
			value = Number(this.previousElementSibling.textContent) + 1;
			this.previousElementSibling.textContent = ` ${value} `;
		}
	})
}

for(item of btnAdd) {
	item.addEventListener('click', function(element) {
		const dataId = element.target.closest('.product').dataset.id;
		const toCart = `
		<div class="cart__product" data-id="${dataId}">
      <img class="cart__product-image" src="${element.target.closest('.product').querySelector('.product__image').src}">
      <div class="cart__product-count">${Number(element.target.closest('.product').querySelector('.product__quantity-value').textContent)}</div>
			<div class="product__del">Удалить</div>
    </div>`
		const cards = Array.from(document.querySelectorAll('.cart__product'));
		const productInCart = cards.find(item => item.dataset.id == dataId);
		if(productInCart) {
			productInCart.querySelector('.cart__product-count').textContent = Number(productInCart.querySelector('.cart__product-count').textContent) + Number(element.target.closest('.product').querySelector('.product__quantity-value').textContent);
		} else {
			cartProducts.insertAdjacentHTML("beforeEnd", toCart);
			cart.style.display = 'block';
			cartProducts.lastElementChild.querySelector('.product__del').addEventListener('click', function() {
				this.parentElement.remove();
				if(cartProducts.querySelectorAll('.product__del').length == 0) {
					cart.style.display = 'none';
					}
			})
		}
	});
}

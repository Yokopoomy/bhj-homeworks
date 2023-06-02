const withTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for(item of withTooltip) {
	item.addEventListener('click', function(element) {
		element.preventDefault();
		if((this.nextSibling.classList) && (this.nextSibling.classList.contains('tooltip'))) {
			removeTooltip()
		}else{
			removeTooltip()
			this.insertAdjacentHTML("afterEnd",`<div class="tooltip tooltip_active" style="left:${element.target.offsetLeft}px;">${this.title}</div>`);
		}
	})
}

function removeTooltip() {
	const tooltip = Array.from(document.querySelectorAll('.tooltip'));
	for (item of tooltip) {
		item.remove();
	}
}
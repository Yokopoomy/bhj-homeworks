const addBtn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

addBtn.addEventListener('click', function(element) {
	element.preventDefault();
	const task = `<div class="task">
		<div class="task__title">
			${taskInput.value}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>`
	if((taskInput.value) && (taskInput.value.trim() != '')) {
		taskList.insertAdjacentHTML("beforeEnd",task);
		taskInput.value = '';
		taskList.lastElementChild.querySelector('a').addEventListener('click', function() {
			this.parentElement.remove();
		})
	}
})
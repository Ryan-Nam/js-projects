//Selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.querySelector('#clearAll').addEventListener('click', handleClearAll);

//Event Handler 
function handleSubmitForm(e){
	e.preventDefault();
	let input = document.querySelector('input');
	if(input.value != '') {
		addTodoItem(input.value);
	}
	input.value = '';
}

function handleClickDeleteOrCheck(e){
	if(e.target.name == 'checkButton'){
		checkTodo(e);
	}
	if(e.target.name == 'deleteButton'){
		deleteTodo(e);
	}
}

function handleClearAll(e){
	document.querySelector('ul').innerHTML = '';
}

function addTodoItem(todo) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');

	li.innerHTML = `
		<span class="todo-item">${todo}</span>
		<button name="checkButton">Check</button>
		<button name="deleteButton">Delete</button>
	`;

	// add class name into li tags
	li.classList.add('todo-list-item');
	ul.appendChild(li);
}


function checkTodo(e){
	let item = e.target.parentNode;
	if(item.style.textDecoration == 'line-through'){
		item.style.textDecoration = 'none';
	} else {
		item.style.textDecoration = 'line-through';
	}
}

function deleteTodo(e){
	let item = e.target.parentNode;

	// item.addEventListener('transitionend', function (){
	// 	item.remove();
	// });
	// item.classList.add('todo-list-item-fall');
	item.remove();
}
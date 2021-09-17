const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

const deleteAll = document.querySelector('.clearAll');

function onAdd(){
    // logics
    // 1. get input text
    const text = input.value;
    if (text === ''){
        input.focus();
        return;
    }
    // console.log(text);

    // 2. make new item (text + delete btn)
    const item = createItem(text);
    
    // 3. add new item in items
    items.appendChild(item);

    //4 Scrolling to new item..
    item.scrollIntoView({blick: 'center'});

    // 5 initialize input  ('');= auto focus
    input.value = '';
    input.focus();
    
}



function createItem(text){
    
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = `<i class = "fas fa-trash-alt"></i>`;

    deleteBtn.addEventListener('click', () =>{
        items.removeChild(itemRow);
    });

    // const checkBtn = document.createElement('button');
    // checkBtn.setAttribute('class', 'item__check');
    // checkBtn.innerHTML = `<i class = "fas fa-trash-alt"></i>`;
    // checkBtn.addEventListener('click', () =>{
	// if(itemRow.style.textDecoration == 'line-through'){
	// 	itemRow.style.textDecoration = 'none';
	// } else {
	// 	itemRow.style.textDecoration = 'line-through';
	// }
    // });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);
    // item.appendChild(checkBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;

    // itemRow.innerHTML = `
    //     <div class="item">
	// 	    <span class="item_name">${todo}</span>
	// 	    <button class="item__delete"><i class = "fas fa-trash-alt"></i></button>
    //     </div>
    //     <div class="item__divider"></div>
	// `;
}


function handleClearAll(){
    items.innerHTML = '';
    input.focus();
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter'){
        onAdd();
    }
})

deleteAll.addEventListener('click', () => {
    handleClearAll();
});

// document.querySelector('.footer__button').addEventListener('click', addItem);

// function addItem(e){
//     e.preventDefault();
//     let input = document.querySelector('.footer__input');

//     if(input.value != '') {
// 		addTodoItem(input.value);
// 	}
// 	input.value = '';
// }

// function addTodoItem(todo) {
// 	let ul = document.querySelector('ul');
// 	let li = document.createElement('li');

// 	li.innerHTML = `
//         <div class="item">
// 		    <span class="item_name">${todo}</span>
// 		    <button class="item__delete"><i class = "fas fa-trash-alt"></i></button>
//         </div>
//         <div class="item__divider"></div>
// 	`;

// 	// add class name into li tags
// 	li.classList.add('item_row');
// 	ul.appendChild(li);
// }
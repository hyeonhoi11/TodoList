const createBtn = document.getElementById('create-btn');
const list = document.getElementById('list');

let todos=[];

createBtn.addEventListener('click', createNewTodo)

function createNewTodo(){
    const item = {
        id : new Date().getTime(),
        text:'',
        complete: false
    }

    todos.unshift(item);

    const {
        itemEl,
        inputEl,
        editBtnEl,
        removeBtnEl,
        checkboxEl
    } = createTodoElement(item)

    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');

    inputEl.focus();
}

function createTodoElement(item){
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl=document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked=item.complete;

    if(item.complete){
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute("disabled", "");

    const actionsEl = document.createElement('div');
    actionsEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circle';

    checkboxEl.addEventListener('change', ()=>{
        item.complete=checkboxEl.checked;
        if(item.complete){
            itemEl.classList.add('complete');
        } else{
            itemEl.classList.remove('complete');
        }
    })

    inputEl.addEventListener('input', () =>{
        item.text = inputEl.value;
    })

    actionsEl.append(checkboxEl);
    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return{
        itemEl,
        inputEl,
        editBtnEl,
        removeBtnEl,
        checkboxEl
    };
}
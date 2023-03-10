// MODEL - represents the data, creating and deleting
// If localstorage has a todos array, then use it
// Otherwise, use the default array.
let todos;

// Retrieve localstorage, then check if it's an array
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// Check if it's an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    let todos = [
        {
            title: 'Get groceries',
            dueDate: '2021-03-21',
            id: 'id1'
        }, {
            title: 'Wash car',
            dueDate: '2021-03-22',
            id: 'id2'
        }, {
            title: 'Make dinner',
            dueDate: '2021-03-23',
            id: 'id3'
        }
    ];
}

// Creates a todo
function createTodo(title, dueDate) {
    let id = new Date().getTime();
    id = id.toString();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}

// Deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        // If the id of this todo matches idToDelete, return false, removes that element/id from array
        // For everything else, return true

        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });

    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// VIEW - responsible for rendering the data
function render() {
    //resets the list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + " | " + todo.dueDate;

        const delButton = document.createElement('button');
        delButton.innerText = 'Delete';
        delButton.style = 'margin-left: 10px'
        delButton.onclick = deleteTodo;
        delButton.id = todo.id;
        const todoList = document.getElementById('todo-list');
        element.appendChild(delButton);
        todoList.appendChild(element);
    });
}

render();

// CONTROLLER - an intermediary between the Model and View to handle user interactions
function addTodo() {
    //This code tells the computer to get an element by its id
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const dateBox = document.getElementById('date-picker');
    const dueDate = dateBox.value;

    createTodo(title, dueDate)

    render();
}


function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);

    render();
}
document.getElementById('todoform').addEventListener('submit', addTask);

const toDoListElement = document.getElementById('todoList');

const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

function addTask(event) {
    event.preventDefault();

    const newtask = event.target.task.value.trim();

    if (newtask !== '') {
        todos.push({
            isChecked: false,
            value: newtask,
        })

        saveTodos();
        drawTodos();

        event.target.task.value = '';
    }
}

function drawTodos() {
    toDoListElement.innerHTML = '';

    if (todos.length === 0) {
        toDoListElement.innerHTML += `
            <li class="list-group-item px-0">No tasks</li>
        `;
    }

    todos.forEach((task) => {
        let checked = '';

        if (task.isChecked) {
            checked = 'checked';
        }
        
        toDoListElement.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <input type="checkbox" class="me-2" ${checked} />
                    ${task.value}
                </div>
                <a href="#" class="text-primary text-decoration-none fw-bold">✕</a>
            </li>
        `;
    });

    const allCheckboxes = Array.from(document.querySelectorAll('#todoList input[type=checkbox]'));
    const allDeletes = Array.from(document.querySelectorAll('#todoList a'));

    allCheckboxes.forEach((checkboxElement, index) => {
        checkboxElement.addEventListener('click', () => {
            toggleCheckbox(index);
        })
    });

    allDeletes.forEach((deletesElement, index) => {
        deletesElement.addEventListener('click', () => {
            deleteTask(index);
        })
    })
}

function toggleCheckbox(index) {
    todos[index].isChecked = !todos[index].isChecked;

    saveTodos();
    drawTodos();
}

function deleteTask(index) {
    todos.splice(index, 1);

    saveTodos();
    drawTodos();
}

function saveTodos() {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

drawTodos()
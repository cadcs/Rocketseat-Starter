let ListE = document.querySelector('#app ul')
let InputE = document.querySelector('#app input')
let buttonE = document.querySelector('#app button')

let todos =JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
    ListE.innerHTML = ''

    for(todo of todos) {
        let todoE = document.createElement('li')
        let todoT = document.createTextNode(todo)

        let LinkE = document.createElement('a')

        LinkE.setAttribute('href', '#')

        let pos = todos.indexOf(todo)
        LinkE.setAttribute('onclick', 'deleteTodo(' + pos + ')') 

        let LinkT = document.createTextNode('Excluir')
        
        LinkE.appendChild(LinkT)

        todoE.appendChild(todoT)
        todoE.appendChild(LinkE)

        ListE.appendChild(todoE)
    }
}

renderTodos()


function addTodo() {
    let todoT = InputE.value

    todos.push(todoT)
    InputE.value = ''
    renderTodos()
    saveToStorage()
}

buttonE.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
    
}
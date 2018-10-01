const form = document.getElementById('form-tasks')
const taskList = document.getElementById('list-tasks')
const classDone = 'list-item--done'

function classToggle(listItem) {
    listItem.addEventListener('click', function(){
        if (listItem.classList.contains(classDone)) {
            listItem.classList.remove(classDone)
        } else {
            listItem.classList.add(classDone)
        }
    })
}

function isValid(texto) {
    const regex = /\S/
    const notEmpty = regex.test(texto)

    if (texto.length > 0 && notEmpty) {
        return true
    } else {
        return false
    }
}

function buildMarkUp(input) {
    const newListItem = document.createElement('li')
    const taskContent = input.value
    newListItem.textContent = taskContent

    classToggle(newListItem)

    return function addToList() {
        taskList.appendChild(newListItem)
    }
}

function cleanFormField() {
    const input = document.getElementById('form-text-input')
    input.value = ''
}

function executeViewChange(input) {
    buildMarkUp(input)()
    cleanFormField()
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const input = document.getElementById('form-text-input')

    if(isValid(input.value)) {
        executeViewChange(input)
    } else {
        alert('Tarefa inválida!')
    }
})
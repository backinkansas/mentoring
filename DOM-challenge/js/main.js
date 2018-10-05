const form = document.getElementById('form-tasks')
const taskList = document.getElementById('list-tasks')
const CLASS_DONE = 'list-item--done'

function classToggle(listItem) {
    listItem.addEventListener('click', function(){
        if (listItem.classList.contains(CLASS_DONE)) {
            listItem.classList.remove(CLASS_DONE)
        } else {
            listItem.classList.add(CLASS_DONE)
        }
    })
}

function isValid(text) {
    const regex = /\S/
    const notEmpty = regex.test(text)

    if (text.length > 0 && notEmpty) {
        return true
    } else {
        return false
    }
}

function addToList(newItem) {
    return taskList.appendChild(newItem)
}

function buildMarkUp(input) {
    const newListItem = document.createElement('li')
    const taskContent = input.value
    newListItem.textContent = taskContent

    classToggle(newListItem)

    return newListItem
}

function cleanFormField() {
    const input = document.getElementById('form-text-input')
    input.value = ''
}

function executeViewChange(input) {
    addToList(buildMarkUp(input))
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
const form = document.getElementById('form-tasks')
const taskList = document.getElementById('list-tasks')

function classToggle(listItem) {

    if (listItem.classList.contains('list-item--done')) {
        listItem.classList.remove('list-item--done')
    } else {
        listItem.classList.add('list-item--done')
    }

}

function modifyListAndCleanForm() {
    const input = document.getElementById('form-text-input')
    const newListItem = document.createElement('li')
    const taskContent = input.value
    newListItem.textContent = taskContent

    taskList.appendChild(newListItem)

    input.value = ''

    newListItem.addEventListener('click', function() {

        classToggle(newListItem)

    })
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    modifyListAndCleanForm()

})


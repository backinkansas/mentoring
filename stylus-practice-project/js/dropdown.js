const triggerGroup = document.querySelectorAll(".dropdown-trigger__container")
const menuGroup = document.querySelectorAll(".dropdown__content")
const classNameShow = 'visible'

triggerGroup.forEach((trigger, index) => {
    trigger.addEventListener('click', function(){
        if (menuGroup[index].classList.contains(classNameShow)) {
            menuGroup[index].classList.remove(classNameShow)
        } else {
            menuGroup[index].classList.add(classNameShow)
        }
    })
})
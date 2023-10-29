const addTodoInput = document.getElementById('addToDo')
const addButton = document.getElementById('addButton')
const list = document.getElementById('list')


addButton.addEventListener('click', function () {
    const todoText = addTodoInput.value

    if(todoText.trim() === ''){
        alert('Ediləcəklər siyahısına nəsə əlavə edin')
        return;
    }

    const li = document.createElement('li')
    li.innerText = todoText
    
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Sil'
    deleteButton.addEventListener('click', function () {
        list.removeChild(li)
    })
    
    li.appendChild(deleteButton)
    list.appendChild(li)

    addTodoInput.value = ''

})
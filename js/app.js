// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add
// an empty todo into the list
// Also add a search bar to search throygh the todo-list
const input = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
todoBtn.addEventListener('click', function (event) {
  event.preventDefault()
  const div = document.createElement('div')
  div.classList.add('todo')
  const li = document.createElement('li')
  if (input.value == '') {
    alert('Input field cannot be empty !! ')
  } else {
    li.innerText = input.value
    li.classList.add('todo-item')
    div.appendChild(li)

    //complete button
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add('check')
    div.appendChild(completeBtn)
    //delete btn

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('trash')
    div.appendChild(deleteBtn)
    todoList.appendChild(div)
    input.value = ''
  }
})
todoList.addEventListener('click', function (event) {
  const target = event.target
  if (target.classList[0] == 'trash') {
    const div = target.parentElement
    div.classList.add('drop-effect')
    div.addEventListener('transitionend', function () {
      div.remove()
    })
  } else if (target.classList[0] == 'check') {
    const div = target.parentElement
    div.classList.add('completed')
    target.remove()
  }
})

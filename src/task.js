
document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded!')

  // find form
  const formTag = document.querySelector('#create-task-form');
  const listTag = document.querySelector('#list');
  const deleteTag = document.querySelector('#delete_task')

  //helper method to create task LIs
  function createTask(input) {
    return `<li>${input} <button id="delete_task">X</button></li>`
  }

  // listen for user input and add it to the DOM
  formTag.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = event.target.querySelector('input').value
    listTag.innerHTML += createTask(input)
  })

// delete tasks from the list
  listTag.addEventListener('click', function(e) {
    if (event.target.id === 'delete_task') {
      event.target.parentElement.remove();
    }
  })


formTag.addEventListener('click', function(e) {
  if (event.target.id === 'sort-button') {
    // debugger
    let tasks = grabTasks()
    let sortedTasksArr = sortTasks(tasks);
    listTag.innerHTML = "<h2>My Todos</h2>";
    sortedTasksArr.forEach(function(task) {

      listTag.innerHTML += createTask(task);
    })
  }
})

function grabTasks() {

  let nodeList = document.querySelectorAll('#list li');
  let nodeArray = [];

  nodeList.forEach(function(node) {
    nodeArray.push(node.innerText.split('X')[0])
  });

  return nodeArray;
  }

function sortTasks(arr) {
  arr.sort();
  return arr;
}


})

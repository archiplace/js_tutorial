// Set local storage item
// localStorage.setItem('name', 'John');
// Remove
// localStorage.removeItem('name');

// Set session storage item
// sessionStorage.setItem('name', 'Bath');

// const name = localStorage.getItem('name');

// clear local storage
// localStorage.clear();

// console.log(name);

const form = document.querySelector('form');

form.addEventListener('submit', addTask);

function addTask(e){

  const task = document.getElementById('task').value;
  let tasks;

  if(localStorage.getItem('tasksArray') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasksArray'));
  }

  tasks.push(task);

  localStorage.setItem('tasksArray', JSON.stringify(tasks));

  alert('Tasked saved');

  e.preventDefault();
}

const tasks = JSON.parse(localStorage.getItem('tasksArray'));

tasks.forEach(function(task) {
  console.log(task);
});


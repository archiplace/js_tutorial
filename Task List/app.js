// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Small functions - blocks
  // Create li element for tasks
  function createListPoint(arg){
    //Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(arg));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  }
  // Check for Local Storage
  function checkForLocalStorage(arg){
    if(localStorage.getItem('lsTasks') === null) {
      arg = [];
    } else {
      arg = JSON.parse(localStorage.getItem('lsTasks'));
    }
    return arg;
  }

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event - DELEGATION
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks
function getTasks(e){
  let tasks

  // check if anything is in the LS
  tasks = checkForLocalStorage();

  tasks.forEach(function(task) {
    createListPoint(task);
  });
}

// Add Task
function addTask(e){

  if(taskInput.value === '') {
    alert('Add a task');
  }

  createListPoint(taskInput.value);

  // Store in LS(Local Storage)
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;

  tasks = checkForLocalStorage();

  tasks.push(task);

  localStorage.setItem('lsTasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }

  e.preventDefault();
}
  // Remove Task From Local Storage
  function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    tasks = checkForLocalStorage();
    
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('lsTasks', JSON.stringify(tasks));
  }

// Clear all tasks
function clearTasks(e){

  // taskList.innerHTML = '';

  // Faster
  // https://jsperf.com/innerhtml-vs-removechild/47
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage();

  e.preventDefault();
}
  // Clear Tasks From Local Storage
  function clearTasksFromLocalStorage(){
    localStorage.clear();
  }

// Filter tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );

  console.log(text);
}

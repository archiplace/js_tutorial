// let val;

// val = document;
// val = document.all;
// val = document.all[12];
// val = document.all.length;
// val = document.body;
// val = document.domain;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;


// val = document.links;
// val = document.links[2];
// val = document.links[2].className;
// val = document.links[2].classList[0];

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script){
//   console.log(script.getAttribute('src'));
// });

// console.log(val);


/**
 * DOM SELECTORS
 */

// // Single element selector
// // document.getElementById()
// console.log(document.getElementById('task-title'));

// // get things fromthe element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // Change content
// taskTitle.textContent = 'Task list';
// taskTitle.innerText = 'My task';
// taskTitle.innerHTML = '<span style="color: red;">task list</span>';


// // document.querySelector()
// console.log(document.querySelector('#task-title'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'red';

// // Multiple elemenent selector

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName

// let lis = document.getElementsByTagName('li');

// // Convert html Collesction into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//   console.log(li);
// });

// console.log(lis);

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, innaa){
//   item.textContent = `${innaa}: Hello World!`;
//   console.log(item);
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li){
//   li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// // TRAVERSING The DOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// /**
//  * Node types
//  * 1 - Element
//  * 2 - Attribute (deprecated)
//  * 3 - Text node
//  * 8 - Comment
//  * 9 - Document itself
//  * 10 - Doctype
//  */

// // Get children element nodes

// val = list.children;
// val = list.children[0];

// // Children of children
//  val = list.children[3].children;

// //  first child
// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Parents get parent node

// val = listItem.parentNode;
// val = listItem.parentElement;

// val = listItem.parentElement.parentElement;


// // Get next Sibiling
// val = listItem.nextSibling; // node
// val = listItem.nextElementSibling; // next element


// // Get prev Dibilinet
// val = listItem.previousSibling; // node
// val = listItem.previousElementSibling; // next element

// console.log(val);

// // create the element
// const li = document.createElement('li');
// // Add class
// li.className = 'collection-item';
// // Add id
// li.id = 'new-item';

// // Addtribute
// li.setAttribute('title', 'New Item');

// // create a text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // create new link element
// const link = document.createElement('a');
// link.className = ('delete-item secondary-content');
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);


// console.log(li);

// /**
//  * REMOVE AND REPLACE ELEMNTS
//  * 
//  * 
//  */

// // REPLACE ELEMENT
// // Create element
// const newHeading = document.createElement('h2');
// //Add id
// newHeading.id = 'task-title';
// // new text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // Get the old headding
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[2]);

// //classes and atributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // classes
// val = link.className;
// val = link.classList;
// link.classList.add('test');
// link.classList.remove('test');

// val = link;

// // attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', '//google.com');
// val = link.hasAttribute('href');
// val = link.removeAttribute('href');

// val = link;


// console.log(val);

// /**
//  * Evvent listener
//  */

// // document.querySelector('.clear-tasks').addEventListener('click', function(e){
// //   e.preventDefault();
// //   console.log('Hello World');
// // });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   e.preventDefault();
//   // console.log('Clicked!!!');

//   let val;

//   val = e;

//   // Element target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;
//   val = e.target.innerHTML = 'Clicked';
//   val = e.target.style.backgroundColor = '#ccc';

//   // Event type
//   val = e.type;

//   //Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

  


//   console.log(val);
// }

// /**
//  * Mouse Event
//  */

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);
// // Double clikc
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouse Enter
// // card.addEventListener('mouseenter', runEvent);
// // Mouse leave
// // card.addEventListener('mouseleave', runEvent);
// // Mouse Over
// // card.addEventListener('mouseover', runEvent);
// // Mouse Out
// // card.addEventListener('mouseout', runEvent);
// // Mouse move
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   e.preventDefault();
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// /**
//  * Keybord & Input Events
//  */

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const select = document.querySelector('select');
// let capture;

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE:${e.type}`);
//   console.log(taskInput.value);

//   e.preventDefault();
// }

// // KeyDown
// // taskInput.addEventListener('keydown', runEventForInput);
// // Keyup
// // taskInput.addEventListener('keyup', runEventForInput);
// // Keypress
// // taskInput.addEventListener('keypress', runEventForInput);
// // Focus
// // taskInput.addEventListener('focus', runEventForInput);
// // Blur
// // taskInput.addEventListener('blur', runEventForInput);
// // cut
// // taskInput.addEventListener('cut', runEventForInput);
// // Copy
// // taskInput.addEventListener('copy', runEventForInput);
// // Paste
// // taskInput.addEventListener('paste', runEventForInput);
// // Input - all events above except focus and blur
// // taskInput.addEventListener('input', runEventForInput);

// // Change
// select.addEventListener('change', runEventForInput);


// function runEventForInput(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   capture += e.target.value;
//   console.log(capture);
// }


/**
 * Event Bubbling and Delegation
 */

// EVENT BUBBILING

const cardTitle = document.querySelector('.card-title');

cardTitle.addEventListener('click',
function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',
function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',
function(){
  console.log('card');
});

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // console.log('delete item')
  // console.log(e.target);
  // if(e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('now you delete');
  // }
  console.log('delete item')
  console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('now you delete');
    e.target.parentElement.parentElement.remove();
  }
}
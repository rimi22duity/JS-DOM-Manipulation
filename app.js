//DOM Manipulation

//styling elements:

// const title = document.querySelector('#main-heading');

// title.style.color = 'red'; //the most direct method


// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// for (i=0; i<listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

//creating elements:

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Element:

ul.append(li);

//Modifying Text:

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML); //this attribute got some security issue though

li.innerText = 'X-Men';

//Modifying Attributes & Classes:



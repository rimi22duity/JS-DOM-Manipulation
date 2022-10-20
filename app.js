/**************DOM Manipulation*************/

/*********Styling elements:************/

// const title = document.querySelector('#main-heading');

// title.style.color = 'red'; //the most direct method


// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// for (i=0; i<listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

/*********Creating Elements:**********/

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

/*********Adding Element:*************/

// ul.append(li);

/*********Modifying Text:**************/

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML); //this attribute got some security issue though

// li.innerText = 'X-Men';

/*********Modifying Attributes & Classes:**********/

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

//li.classList.add('list-items');
// li.classList.add('list-items');

// console.log(li.classList.contains('list-items'));

/**********Remove Elements***************/
// li.remove();


/***********Traverse the DOM********/
/***********Parent Node Traversal */

let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement); //It is null


/***********Child Node Traversal */

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[3].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

/***********Sibling Node Traversal */
const div = document.querySelector('div');

console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
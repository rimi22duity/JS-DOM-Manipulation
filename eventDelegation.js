// DOM Manipulation

/**********Event Delegation****/

/****
 * It allows users to append a SINGLE event
 * Listener to a parent element that adds it 
 * to all of its present AND future descendants
 * that match a selector.
 */

//  document.querySelector("#football").addEventListener(
//     "click", function(e) {
//         console.log("Football is clicked");

//         const target = e.target;

//         if (target.matches('li')) {
//             target.style.backgroundColor = 'red';
//         }
//     }
//  );


//  document.querySelector("#basketball").addEventListener(
//     "click", function(e) {
//         console.log("Basketball is clicked!");

//         const target = e.target;

//         if (target.matches('li')) {
//             target.style.backgroundColor = 'blue';
//         }
//     }
//  );

//  document.querySelector('#boxing').addEventListener(
//     "click", function(e) {
//         console.log('Boxing is clicked!');

//         const target = e.target;

//         if (target.matches('li')) {
//             target.style.backgroundColor = 'blue';
//         }
//     }
//  );


document.querySelector('#sports').addEventListener(
    "click", function(e) {
        console.log(e.target.getAttribute('id') + ' is clicked!');

        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
);

/**With Event Delegation we can also create some new
 * elements with less codes.
 */
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);

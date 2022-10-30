// DOM Manipulation

/**
 **********Event Propagation 
 3 phases : 
    1) Event Capturing
    2) Target
    3) Event Bubbling
 */ 


window.addEventListener("click", function() {
    console.log('Window');
}, false);

document.addEventListener("click", function() {
    console.log('Document');
}, false);

document.querySelector(".div2").addEventListener(
    "click", function () {
        //e.stopPropagation();
        console.log("DIV 2");
    }, {once: true}
);

document.querySelector(".div1").addEventListener(
    "click", function() {
        console.log("DIV 1");
    }, false
);

// document.querySelector("button").addEventListener(
//     "click", function(e) {
//         //console.log(e);
//         // console.log(e.target);
//         console.log(e.target.innerText = 'clicked!')
//     }, false
// );

document.querySelector(".button").addEventListener(
    "click", function(e) {
        //console.log(e);
        // console.log(e.target);
        e.preventDefault();
        console.log(e.target.innerText = 'clicked!')
    }, false
);

/**
When the browser event system was first designed, there were two conflicting ways of modelling how it worked. They were called event capture and event bubbling.

Take for instance, this HTML:

<html>
    <body>
        <a href="#">Content</a>
    </body>
</html>
If an event (e.g. a click) happens on the a element, should the ancestor elements know? It was widely accepted that they should. But the question was in what order they should be notified. The Microsoft and Netscape developers (this should give you an idea of quite how historical we're talking!) had differing opinions.

One model was event capture (advocated by the Netscape developers). This notified the html element first and worked its way down the tree:

html
body
a
The other model was event bubbling (advocated by the Microsoft developers). This notified the target element first, and worked its way up the tree:

a
body
html
The eventual compromise was that it should do both.

html (capture phase)
body (capture phase)
a (capture phase)
a (bubbling phase)
body (bubbing phase)
html (bubbling phase)
So the event works its way down the tree and then back up again.

This is a long-winded way of getting to addEventListener. addEventListener listens for both capture phase and bubbling phase events. The third parameter (called useCapture in the specification) allows the programmer to specify which phase they want to use.

In modern browsers, this defaults to false. You will probably never come across a circumstance where you want to use the capturing phase, especially as Internet Explorer still doesn't support it. But old browsers need the false to be explicit, so it is generally provided for backwards-compatibility.
 */
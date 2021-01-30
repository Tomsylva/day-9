// // DOM IS A TREE LIKE REPRESENTATION OF HTML USING JS

// // Body down - access elements using functions that query the DOM and look for element
// // uses CSS style selectors in brackets and quotation marks
// // document.querySelector("CSS SELECTOR") - first occurance - returns an element
// // document.querySelectorAll("CSS SELECTOR") - all occurances - returns an array
// // element.querySelector("CSS SELECTOR") - nested selectors

// const firstH1 = document.querySelector("h1"); //selects first occurance of H1
// firstH1.innerText = "Something acceptable for class"; //dynamically changes the content of the HTML

// const myList = document.querySelector("ul");
// const button = document.querySelector("button");

// // event listeners - JS listens for user interactions or events on a page and edits the elements accordingly

// // click on button
// // calculate exact moment button was clicked
// // display information on page and not just console
// // i need to add an li in the ul
// // create dynamically an li and add to ul

// button.addEventListener("click", function () {
//     const d = new Date(); //calculates date
//     const today = d.toLocaleString(); //converts to string readable for humans

//     const newLi = document.createElement("li");
//     newLi.innerText = today; //changes innerText to value of TODAY
//     myList.appendChild(newLi); //adds child as defined
// });

// // list of all tasks
// // input for tasks
// // write text in input
// // click a button
// // the input gets cleared and the task gets added to the ul (HTML)

// const toDoInput = document.getElementById("todo-input"); // gets element using an ID
// const toDoButton = document.getElementById("todo-button");
// const toDoList = document.querySelector("#todo"); // same as above syntax

// toDoButton.addEventListener("click", function () {
//     const newLi = document.createElement("li");
//     newLi.classList.add("list-item");
//     newLi.innerText = toDoInput.value; // takes the value of the text input 
//     newLi.addEventListener("click", function (event) {
//         event.target.classList.toggle("line"); // adds strikethrough functionality (see below)
//     })
//     toDoList.appendChild(newLi);
//     toDoInput.value = "";
// })

// // NODE LIST IS AN ARRAY LIKE STRUCTURE - snapshot of all things at one point in time
// // HTMLCollection = live tracker - still array like structure, allows for loops but not other array methods
// // nodeList also allows for each
// // getElementsByClassName is sometimes problematic, if you want a list of things, do querySelectorAll instead

// // GENERAL RULE TO FOLLOW

// // get element by id - document.getElementById
// // everything else - qeurySelector, or querySelectorAll (when list required)

// // CROSS OFF ITEMS IN LIST

// const allListItems = document.querySelectorAll(".list-item");

// allListItems.forEach(function (listItem){

// // SOLUTION 1

// //     listItem.addEventListener("click", function () {
// //         listItem.style.textDecoration = "line-through";
// //     });

// // SOLUTION 2

// listItem.addEventListener("click", function (event) {
//         event.target.classList.toggle("line")
//     });
// });




// CALCULATOR

const input = document.querySelector("input");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multiBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const eqBtn = document.getElementById("equals");

let total = 0;

// add event listener to addBtn - take total, add value to input, clear input after
// add event listener to subBtn - take total, subtract value in input, clear
// add click listener to multiBtn - take total, mulitply value, clear
// add listener divBtn - taken total, divide value, clear
// add listener eqBtn - display total in input

addBtn.addEventListener("click", function () {
    total += Number(input.value);
    input.value = 0;
});

subBtn.addEventListener("click", function () {
    total -= input.value;
    input.value = 0;
});

multiBtn.addEventListener("click", function () {
    total *= Number(input.value);
    input.value = 0;
});

divBtn.addEventListener("click", function () {
    total /= Number(input.value);
    input.value = 0;
});

eqBtn.addEventListener("click", function () {
    input.value = total;
});
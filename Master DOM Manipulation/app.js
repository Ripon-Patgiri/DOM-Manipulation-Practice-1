// DOM Manipulation

//To Manipulate an Element in a DOM we have to be
// able to select that Element.
//We can do that by the following Methods.

// GetElementById()

const title = document.getElementById("sports");
console.log("By ID");
console.log(title);

// GetElementByClassName()
 
const listItem = document.getElementsByClassName("list-items");
console.log("By Class Name");
console.log(listItem);
 
// GetElementsByTagName()
 
const items = document.getElementsByTagName("li");
console.log("By Tag Name");
console.log(items);
 
// querySelector()
 
// Matches the first item with the selector it has been given
// Can be used with any Selector
 
const list = document.querySelector("ul");
console.log("querySelector : ");
console.log(list);
 
// querySelectorAll()
 
const lists = document.querySelectorAll("ul");
console.log("querySelectorAll : ");
console.log(lists);
// Returns a NodeList of all matching elements that matches that specific selector.
 
// --------------------

// Styling an Element
 
const title = document.querySelector("#sports");
console.log(title);
 
title.style.color = "red";
 
const heading = document.querySelector("#main-heading");
heading.style.color = "orangered";
heading.style.fontSize = "4rem";

console.log(heading);

const listItems = document.querySelectorAll(".list-items");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "3rem";
}

// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

//Adding Elements

ul.append(li); //Adding or Appending li to ul

// Modifying the Text

const firstListItem = document.querySelector(".list-items");
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = "Cricket";

Modifying Elements Attributes and Classes

li.setAttribute("class", "main-heading");
li.removeAttribute("class");

const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

li.classList.add("list-items");
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));
li.classList.add("list-items");
console.log(li.classList.contains("list-items"));

// Remove Elements

li.remove();

// Traversing the DOM

// Parent Node Traversal

let ul = document.querySelector("ul");

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = "grey";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// Event Listeners

// Directly in HTML. eg : <button onclick="alert('I am learning JavaScript')">Enter</button>

// element.addEventListener("click", function); - Syntax

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I am also learning HTML And CSS");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = "cyan";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal Event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

// Event Propagation : Refers to how a event travels through the DOM Tree.
// 3 Phases -
// 1. Event Capturing : Travels from Document Node to the desired Target
// 2. Target : Reached the Target and doing its thing.
// 3. Event Bubbling : Travels from the target to the Document Node.

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.log("DIV 2");
  },
  { once: true }
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  false
);

document.querySelector(".btn").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  false
);

// Event Delegation : It allows users to append a SINGLE event listener to a
// parent element that adds it to all of its present AND future
// descendants that match a selector.

document.querySelector("#football").addEventListener("click", function (e) {
  console.log("football is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#basketball").addEventListener("click", function (e) {
  console.log("basketball is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#boxing").addEventListener("click", function (e) {
  console.log("boxing is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#tennis").addEventListener("click", function (e) {
  console.log("tennis is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#golf").addEventListener("click", function (e) {
  console.log("golf is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

// With Event Delegation

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSports = document.createElement("li");

newSports.innerText = "Cricket";
newSports.setAttribute("id", "cricket");
newSports.setAttribute("class", "list-items");

sports.appendChild(newSports);

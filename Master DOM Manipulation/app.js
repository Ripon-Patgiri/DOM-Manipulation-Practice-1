// // DOM Manipulation

// //To Manipulate an Element in a DOM we have to be
// // able to select that Element.
// //We can do that by the following Methods.

// // GetElementById()

// const title = document.getElementById("sports");
// console.log("By ID");
// console.log(title);

// // GetElementByClassName()

// const listItem = document.getElementsByClassName("list-items");
// console.log("By Class Name");
// console.log(listItem);

// // GetElementsByTagName()

// const items = document.getElementsByTagName("li");
// console.log("By Tag Name");
// console.log(items);

// // querySelector()

// // Matches the first item with the selector it has been given
// // Can be used with any Selector

// const list = document.querySelector("ul");
// console.log("querySelector : ");
// console.log(list);

// // querySelectorAll()

// const lists = document.querySelectorAll("ul");
// console.log("querySelectorAll : ");
// console.log(lists);
// // Returns a NodeList of all matching elements that matches that specific selector.

// --------------------

//Styling an Element

// const title = document.querySelector("#sports");
// console.log(title);

// title.style.color = "red";

// const heading = document.querySelector("#main-heading");
// heading.style.color = "orangered";
// heading.style.fontSize = "4rem";

// console.log(heading);

// const listItems = document.querySelectorAll(".list-items");

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "3rem";
// }

// Creating Elements

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// //Adding Elements

// ul.append(li); //Adding or Appending li to ul

// // Modifying the Text

// // const firstListItem = document.querySelector(".list-items");
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);

// li.innerText = "Cricket";

// // Modifying Elements Attributes and Classes

// // li.setAttribute("class", "main-heading");
// // li.removeAttribute("class");

// // const title = document.querySelector("#main-heading");
// // console.log(title.getAttribute("id"));

// li.classList.add("list-items");
// li.classList.remove("list-items");
// console.log(li.classList.contains("list-items"));
// li.classList.add("list-items");
// console.log(li.classList.contains("list-items"));

// // Remove Elements

// li.remove();

// Traversing the DOM

// Parent Node Traversal

//let ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// Child Node Traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = "grey";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

// const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

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
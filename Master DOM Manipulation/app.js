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

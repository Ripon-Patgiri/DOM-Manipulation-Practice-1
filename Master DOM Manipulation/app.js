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

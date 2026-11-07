const myList = document.getElementById("myList");

myList.children[0].textContent = "A new first item";

const newItem = document.createElement("li");
newItem.textContent = "Item 4";
myList.appendChild(newItem);

console.log("ID:", myList.id);
console.log("Text in the list:", myList.textContent);
console.log("List items:", myList.children);
console.log("Number of items:", myList.children.length);

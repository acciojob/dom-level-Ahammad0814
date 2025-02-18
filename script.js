//your JS code here. If required.
// Get the target element with the id "level"
const targetElement = document.getElementById('level');

// Initialize the level counter
let level = 0;

// Traverse up the DOM tree starting from the target element
let currentElement = targetElement;
while (currentElement !== null) {
  level++;
  currentElement = currentElement.parentElement;
}

// Display the level of the element
alert(`The level of the element is: ${level}`);

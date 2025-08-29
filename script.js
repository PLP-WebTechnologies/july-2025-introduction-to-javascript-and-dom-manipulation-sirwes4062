const form = document.getElementById("myForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = form.username.value;
  if (userInput) {
    result.textContent = `Welcome, ${userInput}!`;
  } else {
    result.textContent = "Please enter your name.";
  }
});

a = 5;
b = 10;
function sum(a, b) {
  return a + b;
}
console.log(sum(a, b));

const name = "John";

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet(name));

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`I like ${fruits[i]}`);
}

let count = 5; // Countdown start
const display = document.getElementById("countdown");
const button = document.getElementById("startBtn");

function animateCountdown() {
  if (count > 0) {
    display.textContent = count;
    count--;
    setTimeout(animateCountdown, 1000); // Repeat every 1 second
  } else {
    display.textContent = "Go!";
  }
}

// onclick action on a button that starts the countdown
button.onclick = () => {
  count = 5;
  animateCountdown();
};

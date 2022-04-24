const sayHelloTo = function (name) {
  alert("Hello," + name + "!");
};

sayHelloTo("guys");

const button = document.getElementById("buttonA");

let count = 0;

button.onclick = function () {
  button.textContent = "Thank you!";
};

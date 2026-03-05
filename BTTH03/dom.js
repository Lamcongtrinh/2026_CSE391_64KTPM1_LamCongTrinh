
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

btnHello.onclick = function() {
  statusEl.textContent = "Xin chào!";
};
btnRed.onclick = function() {
  document.body.style.backgroundColor = "red";
};
nameInput.oninput = function() {
  greeting.textContent = "Xin chào, " + nameInput.value;
};

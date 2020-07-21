window.addEventListener('load', start);

let box = document.querySelector('#box');
let rangeRed = document.querySelector('#rangeRed');
let rangeGreen = document.querySelector('#rangeGreen');
let rangeBlue = document.querySelector('#rangeBlue');
let textRed = document.querySelector('#textRed');
let textGreen = document.querySelector('#textGreen');
let textBlue = document.querySelector('#textBlue');

function start() {
  startChange();
}
function startChange() {
  textRed.value = rangeRed.value;
  rangeRed.style.backgroundColor = `rgb(${rangeBlue.value}, 0, 0)`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;

  textGreen.value = rangeGreen.value;
  rangeGreen.style.backgroundColor = `rgb(0, ${rangeBlue.value}, 0)`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;

  textBlue.value = rangeBlue.value;
  rangeBlue.style.backgroundColor = `rgb(0, 0, ${rangeBlue.value})`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
}

rangeRed.addEventListener('input', function changeRed() {
  textRed.value = this.value;
  rangeRed.value = this.value;
  rangeRed.style.backgroundColor = `rgb(${this.value}, 0, 0)`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
});

rangeGreen.addEventListener('input', function changeGreen() {
  textGreen.value = this.value;
  rangeGreen.value = this.value;
  rangeGreen.style.backgroundColor = `rgb(0, ${this.value}, 0)`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
});

rangeBlue.addEventListener('input', function changeBlue() {
  textBlue.value = this.value;
  rangeBlue.value = this.value;
  rangeBlue.style.backgroundColor = `rgb(0, 0, ${this.value})`;
  box.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
});

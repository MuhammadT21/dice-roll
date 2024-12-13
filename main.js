// COIN FLIP SIMULATOR
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

//count vars
let numHeads = 0;
let numTails = 0;

document.getElementById("btn1").addEventListener("click", btnClicked);
function btnClicked() {
  let randNum = Math.random();

  // simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}
let outputE2 = document.getElementById("output2");
let num1roll = document.getElementById("1-rol");
let num2roll = document.getElementById("2-rol");
let num3roll = document.getElementById("3-rol");
let num4roll = document.getElementById("4-rol");
let num5roll = document.getElementById("5-rol");
let num6roll = document.getElementById("6-rol");

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

document.getElementById("btn2").addEventListener("click", dicebtn);
function dicebtn() {
  let randNum2 = Math.random();

  if (randNum2 < 0.16) {
    outputE2.innerHTML = "<img src='img/1.png' />";
    num1 += 1;
    num1roll.innerHTML = num1;
  } else if (randNum2 < 0.32) {
    outputE2.innerHTML = "<img src='img/2.png' />";
    num2 += 1;
    num2roll.innerHTML = num2;
  } else if (randNum2 < 0.48) {
    outputE2.innerHTML = "<img src='img/3.png' />";
    num3 += 1;
    num3roll.innerHTML = num3;
  } else if (randNum2 < 0.64) {
    outputE2.innerHTML = "<img src='img/4.png' />";
    num4 += 1;
    num4roll.innerHTML = num4;
  } else if (randNum2 < 0.8) {
    outputE2.innerHTML = "<img src='img/5.png' />";
    num5 += 1;
    num5roll.innerHTML = num5;
  } else if (randNum2 < 0.96) {
    outputE2.innerHTML = "<img src='img/6.png' />";
    num6 += 1;
    num6roll.innerHTML = num6;
  }
}

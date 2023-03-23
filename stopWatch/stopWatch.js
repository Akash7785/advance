let timer = document.querySelector("#timer");
let save = document.querySelector("#save").addEventListener("click", saveFun);
let start = document
  .querySelector("#start")
  .addEventListener("click", startFun);
let stop = document.querySelector("#stop").addEventListener("click", stopFun);
// let resume = document
//   .querySelector("#resume")
//   .addEventListener("click", resumeFun);
// let pause = document
//   .querySelector("#pause")
//   .addEventListener("click", pauseFun);

let id;
// timer.innerText = "HEllo";
miliSec = 1;
sec = 0;
let saved = 1;

function startFun() {
  console.log("Clicked Start");
  document.querySelector("#start").disabled = true;
  id = setInterval(function () {
    timer.innerText = `${sec} sec ${miliSec} ms`;
    miliSec++;
    if (miliSec === 60) {
      sec++;
      miliSec = 0;
    }
  }, 100);
  console.log("Start ID", id);
}

// function resFun(id) {
//   document.querySelector("#resume").disabled = true;
//   console.log("clicked resume");
//   id = setInterval(function () {
//     timer.innerText = `${sec} sec ${miliSec} ms`;
//     miliSec++;
//     if (miliSec === 60) {
//       sec++;
//       miliSec = 0;
//     }
//   }, 100);
//   console.log("ID resume", id);
// }

function saveFun() {
  let head = document.createElement("h3");
  head.innerText = `${saved} saved`;
  saved++;
  let savedTime = document.createElement("p");

  savedTime.innerText = `${sec} sec ${miliSec} ms`;
  document.querySelector("body").append(head, savedTime);
  console.log("Clicked save");
}

function stopFun() {
  sec = 0;
  miliSec = 0;
  clearInterval(id);
  console.log("STOP");
}

// function resumeFun() {
//   console.log("resCAlling ID", id);
//   resFun(id);
// }

// function pauseFun() {
//   console.log("Clicked Pause");
//   console.log("PAUSED ID", id);
//   clearInterval(id);
// }

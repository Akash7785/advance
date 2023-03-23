let timer = document.querySelector("#timer");
// let start = document
//   .querySelector("#start")
//   .addEventListener("click", startFun);
// let stop = document.querySelector("#stop").addEventListener("click", stopFun);

milisec = 1;
sec = 0;
function myStopWatch() {
  timer.innerText = `${sec} sec ${milisec} ms`;
  milisec++;
  if (milisec === 60) {
    milisec = 0;
    sec++;
    console.log(sec);
  }
}

let id = setInterval(myStopWatch, 100);

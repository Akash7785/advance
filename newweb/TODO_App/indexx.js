document.querySelector("form").addEventListener("submit", myFunction);
let taskArr = [];
function myFunction(event) {
  event.preventDefault();
  let taskName = document.querySelector("#task").value;

  let priority = document.querySelector("#priority").value;

  let taskObj = {
    name: taskName,
    prior: priority,
  };

  taskArr.push(taskObj);

  for (let i = taskArr.length - 1; i < taskArr.length; i++) {
    row = document.createElement("tr");

    col1 = document.createElement("td");
    col1.innerText = taskArr[i].name;

    col2 = document.createElement("td");
    let pri = (col2.innerText = taskArr[i].prior);
    if (pri == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }

    col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.style.color = "red";
    col3.addEventListener("click", function (event) {
      // console.log(event.target.parentNode);
      event.target.parentNode.remove();
    });

    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  }
}
// console.log(taskArr);

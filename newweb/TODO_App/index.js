document.querySelector("form").addEventListener("submit", todoApp);

let taskArr = JSON.parse(localStorage.getItem("TableData"));
if (localStorage.getItem("TableData") == null) {
  taskArr = [];
} else {
  tableDisplay(taskArr);
}
function todoApp(event) {
  event.preventDefault();
  let taskName = document.querySelector("#task").value;
  let prior = document.querySelector("#priority").value;
  let taskObj = { taskName: taskName, priority: prior };
  taskArr.push(taskObj);
  localStorage.setItem("TableData", JSON.stringify(taskArr));
  tableDisplay(taskArr);
}

function tableDisplay(taskArr) {
  document.querySelector("tbody").innerHTML = "";
  taskArr.forEach(function (ele) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.taskName;
    let col2 = document.createElement("td");
    col2.innerText = ele.priority;
    if (ele.priority == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.addEventListener("click", function (index) {
      deleteRow(index);
    });
    col3.style.color = "red";
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}

function deleteRow(index) {
  taskArr.splice(index, 1);
  tableDisplay(taskArr);
}

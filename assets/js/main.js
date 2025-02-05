// # local storage
const saveToLocalStorage = () => {
  localStorage.setItem("taskLocalStore", JSON.stringify(taskData));
};
const taskData = JSON.parse(localStorage.getItem("taskLocalStore")) || [];

// # display tasks when the page gets loaded
document.addEventListener("DOMContentLoaded", function () {
  displayTasks();
});

// # variables for the elements
const taskInput = document.getElementById("add-task"); // input element
const taskList = document.getElementById("task-list"); // section element for the list
const taskCount = document.getElementById("counter"); // span element for the counter
const deleteBtn = document.getElementsByClassName("delete-task-btn"); // button to delete the task

// # enable enter key press to add task
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

// # function onclick for the add-task-btn
function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask) {
    taskData.push({
      task: newTask,
      checked: false,
    });
    saveToLocalStorage();
    taskInput.value = "";
    displayTasks();
  } else {
    alert("Please, write your task.");
  }
}

// # display tasks on the page
const displayTasks = () => {
  taskList.innerHTML = ""; // prevents duplication everytime a new task is added
  taskData.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-container";
    div.innerHTML = `
        <input type="checkbox"
        id="input-${index}"
        class="checkbox-task"
        ${item.checked ? "checked" : ""}>

        <label 
        for="input-${index}" onclick="editTask(${index})"
        class="${item.checked ? "checked" : ""}">
        ${item.task}
        </label>

        <button class="delete-task-btn"><img src="assets/img/delete.svg" alt=""></button>
    `;
    /*
    ${item.checked ? "checked" : ""}

    for the checkbox: if the key checked for that item is true, the checkbox state will become checked

    for the label: if it's true it will add the class .checked
    */

    if (item.checked) {
      div.style.borderColor = "#808080";
    }

    div.querySelector(".checkbox-task").addEventListener("change", () => {
      checkedTask(index);
    });

    taskList.appendChild(div);
  });
  taskCount.innerHTML = taskData.length;
};

// # changes the value (true or false) of the checked key if the task is checked or not
const checkedTask = (i) => {
  taskData[i].checked = !taskData[i].checked; // default is false
  saveToLocalStorage();
  displayTasks();
};

// # enable task edit
function editTask(i) {}

// # function and event listener for the delete button
function deleteTask() {
  alert("Deleted.");
}

deleteBtn.addEventListener("click", deleteTask());

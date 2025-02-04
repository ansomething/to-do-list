// array for local storage
// const taskArray = [];
const taskData = JSON.parse(localStorage.getItem("taskArray")) || [];

const taskInput = document.getElementById("add-task"); // input element
const taskList = document.getElementById("task-list"); // div element
const taskCount = document.getElementById("counter"); // span for the counter
const addBtn = document.getElementById("add-task-btn"); // button to add new task
const deleteBtn = document.getElementById("delete-task-btn"); // button to add new task

// document.addEventListener("DOMContentLoaded", function () {
//   addBtn.addEventListener("click", addTask());
//   newTask.addEventListener("keydown",)
// });

// const taskValidation = () => {
//   let newTaskValue = newTask.value;
//   if (!newTaskValue) {
//     return "Please, add your task.";
//   } else {
//     return addTask();
//   }
// };

function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask) {
    taskData.push({
      task: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    taskInput.value = "";
    displayTasks();
  } else {
    alert("Please, write your task.");
  }
}

const saveToLocalStorage = () => {
  localStorage.setItem("localToDo", JSON.stringify(taskData));
};

const displayTasks = () => {
  taskList.innerHTML = "";
  taskData.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="task-list" class="item-container">
        <input type="checkbox" name="list-item" id="list-item">
        <label class="" for="list-item">${item}
        </label>
    </div>
    `;
  });
};

let newTask = document.getElementById("add-task");
let taskList = document.getElementById("task-list");

// const taskValidation = () => {
//   let newTaskValue = newTask.value;
//   if (!newTaskValue) {
//     return "Please, add your task.";
//   } else {
//     return addTask();
//   }
// };

function addTask() {
  if (!newTask.value) {
    alert("Please, write your task.");
  } else {
    let newItem = document.createElement("li");
    // newItem.className = "unchecked::before checked::before";
    newItem.innerHTML = newTask.value;
    taskList.appendChild(newItem);

    let spanNewItem = document.createElement("span");
    spanNewItem.appendChild(newItem);
    spanNewItem.classList.add("delete-task");
  }
}

// DOM ELEMENT SELECTION
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// EVENT: ADD TASK
addTaskBtn.addEventListener("click", function () {

    // Get input value
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // CREATE ELEMENT
    const li = document.createElement("li");
    li.textContent = taskText;

    // EVENT: TOGGLE HIGHLIGHT
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // EVENT: REMOVE TASK (Right Click)
    li.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        li.remove();
    });

    // ADD TO DOM
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});

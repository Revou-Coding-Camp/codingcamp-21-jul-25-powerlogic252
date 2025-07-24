// File: js/script.js
// This is a simple Todo application script
let tasks = [];

function addTask() {
    //function to add a task
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');

    // Check if the task and date inputs are not empty
    if (taskInput.value === "" || dateInput.value === "") {
        // Alert the user to enter both task and date
        alert("Please enter a task and a date.");
    } else {
        // Add the task to the tasks array
        tasks.push({
            title: taskInput.value,
            date: dateInput.value,
            completed: false,
        });

        renderTasks(); // Call renderTasks to update the UI
    }

}


function removeAllTask() {
    //function to remove a task
    tasks = []; // Clear the tasks array

    renderTasks(); 
}

function toggleFilter() {
    //function to toggle filter
}

function completeTask(index) {
    //function to mark a task as completed
    tasks[index].completed = true;
}

function renderTasks() {
    // Function to render tasks on the page
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
        <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
                    <span>${task.title}</span>
                    <div>
                        <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
                        <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md">Delete</button>
                    </div>
                </li>
        `;
    });
}

let tasks = [];
let currentFilter = "all";

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const dateInput = document.getElementById("date-input");

  if (taskInput.value.trim() === "" || dateInput.value === "") {
    alert("Please enter a task and a date.");
    return;
  }

  tasks.push({
    title: taskInput.value.trim(),
    date: dateInput.value,
    completed: false,
  });

  taskInput.value = "";
  dateInput.value = "";

  renderTasks();
}

function removeAllTask() {
    /// Remove all tasks from the list
  tasks = [];
  renderTasks();
}

function completeTask(index) {
    // Tandai tugas sebagai selesai
    tasks[index].completed = true;

    // Render ulang daftar tugas
    renderTasks();
}

function removeTask(index) {
    /// Remove a task from the list
  tasks.splice(index, 1);
  renderTasks();
}

function toggleFilter() {
  const menu = document.getElementById("filter-menu");
  menu.classList.toggle("hidden"); // Menampilkan atau menyembunyikan dropdown
}

function setFilter(type) {
  currentFilter = type; // Set the current filter
  document.getElementById("filter-menu").classList.add("hidden"); // Hide the dropdown
  renderTasks(); // Reload the task list based on the selected filter
}

document.addEventListener("click", function (e) {
  const btn = document.getElementById("filter-btn");
  const menu = document.getElementById("filter-menu");

  // Tutup dropdown jika klik di luar tombol atau menu
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

function renderTasks() {
  const taskList = document.getElementById("todo-list");
  taskList.innerHTML = "";

  // Filter tasks based on the current filter
  let filteredTasks = tasks;
  if (currentFilter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed); // Only pending tasks
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed); // Only completed tasks
  }

  // If no tasks match the filter, show a message
  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<p class="text-center text-gray-500">No task found</p>`;
    return;
  }

  // Render the filtered tasks
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${task.title} - ${task.date}</span>
      <div>
        ${
          !task.completed
            ? `<button class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index})">Done</button>`
            : ""
        }
        <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="removeTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}
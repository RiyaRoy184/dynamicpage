// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    // Create the task text
    li.innerHTML = `
        <span>${taskValue}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Event listener for the delete button
    li.querySelector('.delete-btn').onclick = function () {
        taskList.removeChild(li);
    };

    // Event listener for the edit button
    li.querySelector('.edit-btn').onclick = function () {
        const newTaskValue = prompt("Edit your task:", taskValue);
        if (newTaskValue) {
            li.querySelector('span').textContent = newTaskValue;
        }
    };

    taskList.appendChild(li);
    taskInput.value = ""; // Clear the input field
}

// Event listener for the add task button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Allow Enter key to add tasks
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

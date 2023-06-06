// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const maxLength = 50;
const counter = document.getElementById('char');


taskInput.addEventListener('input', function () {
    const text = this.value;
    const remainingChars = maxLength - text.length;

    counter.textContent = `${remainingChars}`;


});

// Add click event listener to the "Add Task" button
addButton.addEventListener('click', addTask);



function addTask() {
    const taskText = taskInput.value;

    if (taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('tasks');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        // Create a delete button for each task
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete'; // Set the text content of the delete button
        deleteButton.addEventListener('click', deleteTask); // Add click event listener to the delete button

        taskItem.appendChild(deleteButton); // Append the delete button to the task item
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement; // Get the parent element (task item) of the delete button
    taskList.removeChild(taskItem); // Remove the task item from the task list
}




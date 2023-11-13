function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var task = document.createElement('li');
    task.className = 'task';

    var taskText = document.createElement('span');
    taskText.textContent = taskInput.value.trim();

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-task';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(task);
    };

    task.appendChild(taskText);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = '';
}

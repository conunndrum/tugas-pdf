const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Muat tugas dari localStorage saat halaman dimuat
window.onload = function () {
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(text => createTaskItem(text));
};

function addTask() {
const text = taskInput.value.trim();
if (text === "") {
    alert("Input tidak boleh kosong!");
    return;
}
createTaskItem(text);
saveToLocalStorage();
taskInput.value = "";
}

function createTaskItem(text) {
const li = document.createElement('li');
li.textContent = text;}

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Hapus';
deleteBtn.onclick = function () {
    taskList.removeChild(li);
    saveToLocalStorage();
};


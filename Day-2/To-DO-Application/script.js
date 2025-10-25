let tasks = [];
let currentFilter = 'all';

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text === '') return;
  tasks.push({ text, completed: false });
  input.value = '';
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function filterTasks(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-box button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-box button[onclick="filterTasks('${filter}')"]`).classList.add('active');
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  let filtered = tasks;
  if (currentFilter === 'active') filtered = tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') filtered = tasks.filter(t => t.completed);

  filtered.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
      <span>${task.text}</span>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

renderTasks();

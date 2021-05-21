document.addEventListener ("DOMContentLoaded", () => {
  loadEvents();

function loadEvents() {
  document.getElementById('create-task-form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  document.getElementById('tasks').addEventListener('click', deleteOrCheck)
}

function submit(e) {
  e.preventDefault();
  let input = document.getElementById('new-task-description').value;

  if (input != '') {
    addTask(input);
    input = '';
  }
}

function addTask(task) {
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
}

function clearList(e) {
  let ul = document.getElementById('tasks').innerHTML = '';
}

function deleteOrCheck(e) {
  if (e.target.className == 'delete'){
    deleteTask(e);
  }
  else {
    checkTask(e);
  }
}

function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function checkTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
  }
}

});
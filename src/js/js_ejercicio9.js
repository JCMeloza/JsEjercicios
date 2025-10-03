  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const clearCompletedBtn = document.getElementById("clearCompleted");

  // Cargar tareas desde localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Renderizar tareas en la lista
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
      taskList.innerHTML += `
        <li>
          <input type="checkbox" ${task.completed ? "checked" : ""} 
                 onchange="toggleTask(${i})">
          <span style="text-decoration:${task.completed ? "line-through" : "none"}">
            ${task.text}
          </span>
        </li>`;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Añadir tarea
  function addTask() {
    if (taskInput.value.trim() === "") return;
    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = "";
    renderTasks();
  }

  // Alternar completada/no completada
  function toggleTask(i) {
    tasks[i].completed = !tasks[i].completed;
    renderTasks();
  }

  // Eliminar tareas completadas
  function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
  }

  // Eventos
  addTaskBtn.onclick = addTask;
  clearCompletedBtn.onclick = clearCompleted;
  taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
  });

  // Inicializar
  renderTasks();
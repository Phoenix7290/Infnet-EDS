document.addEventListener("DOMContentLoaded", () => {
    const selectForm = document.getElementById("formTask");
    const taskList = document.getElementById("taskList");
  
    selectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.getElementById("title").value.trim();
      const description = document.getElementById("description").value.trim();
  
      if (title && description) {
        addTask(title, description);
        selectForm.reset();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  
    function addTask(title, description) {
      const task = document.createElement("div");
      task.classList.add("task");
  
      const taskTitle = document.createElement("h2");
      taskTitle.textContent = title;
      taskTitle.contentEditable = false;
      // taskTitle.addEventListener("blur", () => {
      //   editTask(taskTitle, taskDescription);
      // });
  
      const taskDescription = document.createElement("p");
      taskDescription.textContent = description;
      taskDescription.contentEditable = false;
      // taskDescription.addEventListener("blur", () => {
      //   editTask(taskTitle, taskDescription);
      // });
  
      const editButton = document.createElement("button");
      editButton.className = "edit";
      editButton.textContent = "Editar";
      editButton.addEventListener("click", () => {
        if (editButton.textContent === "Editar") {
          enableEditing(taskTitle, taskDescription, editButton);
        } else {
          saveEditing(taskTitle, taskDescription, editButton);
        }
      });
  
      const deleteButton = document.createElement("button");  
      deleteButton.className = "delete";
      deleteButton.textContent = "Excluir";
      deleteButton.addEventListener("click", () => {
        deleteTask(task);
      });
    
      task.appendChild(taskTitle);
      task.appendChild(taskDescription);
      task.appendChild(editButton);
      task.appendChild(deleteButton);
      
      taskList.appendChild(task);
  
      verifyTask();
    }
  
    function enableEditing(taskTitle, taskDescription, editButton) {
      taskTitle.contentEditable = true;
      taskDescription.contentEditable = true;
      taskTitle.focus();
      editButton.textContent = "Salvar";
    }
    
    function saveEditing(taskTitle, taskDescription, editButton) {
      const newTitle = taskTitle.textContent.trim();
      const newDescription = taskDescription.textContent.trim();
  
      if (!newTitle || !newDescription) {
        alert("Os campos não podem estar vazios!");
        taskTitle.textContent = newTitle || "Título da tarefa";
        taskDescription.textContent = newDescription || "Descrição da tarefa";
      } else {
        taskTitle.contentEditable = false;
        taskDescription.contentEditable = false;
        editButton.textContent = "Editar";
      }
    }
  
    function deleteTask(task) {
      task.remove();
      verifyTask();
    }
  
    function verifyTask() {
      if (taskList.children.length === 0) {
        taskList.innerHTML = `<p id="noTask">Nenhuma tarefa adicionada</p>`
      } else {
        const noTaskMessage = taskList.querySelector("#noTask");
        if (noTaskMessage) {
          noTaskMessage.remove();
        }
      }
    }
    
    verifyTask();
  });
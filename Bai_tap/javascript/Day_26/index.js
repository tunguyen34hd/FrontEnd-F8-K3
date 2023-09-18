var newTaskInput = document.getElementById("new-task");
var addTaskButton = document.getElementById("add-task");
var taskList = document.getElementById("tasks");

function addTask() {
   var taskText = newTaskInput.value.trim();
   if (taskText === "") {
      return;
   }

   var taskItem = document.createElement("li");
   taskItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <div class="actions">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash"></i></button>
          <button class="save" hidden>Add Task</button>
        </div>
      `;

   var editButton = taskItem.querySelector(".edit");
   editButton.addEventListener("click", function () {
      editTask(taskItem);
      taskItem.style.justifyContent = "center";
      taskItem.style.background = "none";
      taskItem.style.padding = "0";
   });

   var deleteButton = taskItem.querySelector(".delete");
   deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
   });

   taskList.appendChild(taskItem);

   newTaskInput.value = "";
}

function editTask(taskItem) {
   var taskTextElement = taskItem.querySelector(".taskText");
   var editButton = taskItem.querySelector(".edit");
   var deleteButton = taskItem.querySelector(".delete");
   var saveButton = taskItem.querySelector(".save");

   var originalText = taskTextElement.innerText;

   editButton.style.display = "none";
   deleteButton.style.display = "none";
   saveButton.style.display = "inline-block";

   var inputElement = document.createElement("input");

   inputElement.classList.add("text-edit");
   inputElement.type = "text";
   inputElement.value = originalText;

   taskItem.replaceChild(inputElement, taskTextElement);

   inputElement.focus();

   saveButton.addEventListener("click", function () {
      taskItem.style.background = "#8758ff";
      taskItem.style.padding = "5px 16px";

      var updatedText = inputElement.value.trim();

      if (updatedText === "") {
         alert("Please enter a task!");
         return;
      }

      taskTextElement.innerText = updatedText;

      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";
      saveButton.style.display = "none";

      taskItem.replaceChild(taskTextElement, inputElement);
   });
}

addTaskButton.addEventListener("click", addTask);

newTaskInput.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
      event.preventDefault();
      addTask();
   }
});

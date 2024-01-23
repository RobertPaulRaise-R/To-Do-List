const taskList = document.querySelector(".task-list");

const taskInput = document.querySelector(".add-task-input");

// Buttons
const addBtn = document.querySelector(".add-btn");

const completedTask = function () {
  document.querySelectorAll(".checkbox-icon").classList.toggle("clicked");
};

addBtn.addEventListener("click", function () {
  let taskHtml = `
  <div class="taskEl">
    <div class='checkbox'>
        <ion-icon name="checkmark-outline" class="icon checkbox-icon"></ion-icon>
    </div>

    <div class="task-lable">
      <p class="task-name">${taskInput.value}</p>
    </div>

    <div>
      <button class="edit-btn btn">
        <ion-icon name="create-outline" class="icon edit-icon"></ion-icon>
        </button>

      <button class="delete-btn btn">
        <ion-icon name="trash-outline" class="icon delete-icon"></ion-icon>
        </button>
        </div>
        </div>`;

  taskInput.value === ""
    ? alert("Please enter a task")
    : taskList.insertAdjacentHTML("afterbegin", taskHtml);

  taskInput.value = "";

  // Checkbox Event
  const checkbox = document.querySelector(".checkbox");
  const checkboxIcon = document.querySelector(".checkbox-icon");
  const taskEl = document.querySelector(".taskEL");

  checkbox.addEventListener("click", function (e) {
    const target = e.target;

    if (target === checkboxIcon) {
      target.classList.toggle("clicked");

      // console.log(target.parentNode.parentNode);
      setTimeout(() => {
        target.parentNode.parentNode.remove();
      }, 500);
    }
  });

  // Edit Event
  const editBtn = document.querySelector(".edit-btn");
  const editIcon = document.querySelector(".edit-icon");
  const taskName = document.querySelector(".task-name");
  const taskLable = document.querySelector(".task-lable");

  editBtn.addEventListener("click", function (e) {
    const target = e.target;
    // console.log(target);
    if (target === editIcon) {
      taskName.innerHTML =
        '<input class="task-name-input" name="task-input"  value="' +
        taskName.innerText +
        '">';
      const taskNameInput = document.querySelector(".task-name-input");

      const doneBtn = document.createElement("button");
      doneBtn.classList.add("done-btn");
      doneBtn.textContent = `✔`;

      taskLable.appendChild(doneBtn);

      const end = taskNameInput.value.length;
      console.log(end);
      setTimeout(() => {
        taskNameInput.setSelectionRange(end, end);
        taskNameInput.focus();
      }, 0);

      doneBtn.addEventListener("click", function (e) {
        taskName.innerHTML = `<p class="task-name">${taskNameInput.value}</p>`;

        doneBtn.remove();
      });
    }
  });

  // DELETE EVENT
  const delBtn = document.querySelector(".delete-btn");
  delBtn.addEventListener("click", function (e) {
    const target = e.target;
    target.parentNode.parentNode.parentNode.remove();
  });
});

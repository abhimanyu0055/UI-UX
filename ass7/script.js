document.getElementById("addTaskBtn").addEventListener("click", function() {
    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDescription").value.trim();

    if (title === "" || description === "") {
        alert("Please enter both title and description.");
        return;
    }

    // Create task container
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create elements for title and description
    const taskTitle = document.createElement("div");
    taskTitle.textContent = title;

    const taskDescription = document.createElement("div");
    taskDescription.textContent = description;

    // Buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as Completed";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Mark as Completed button functionality
    completeBtn.addEventListener("click", function() {
        taskTitle.classList.toggle("completed");
        taskDescription.classList.toggle("completed");

        if (completeBtn.textContent === "Mark as Completed") {
            completeBtn.textContent = "Mark as Incomplete";
        } else {
            completeBtn.textContent = "Mark as Completed";
        }
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", function() {
        taskDiv.remove();
    });

    // Edit button functionality
    editBtn.addEventListener("click", function() {

        if (editBtn.textContent === "Edit") {
            const editTitle = document.createElement("input");
            editTitle.value = taskTitle.textContent;

            const editDescription = document.createElement("input");
            editDescription.value = taskDescription.textContent;

            taskDiv.replaceChild(editTitle, taskTitle);
            taskDiv.replaceChild(editDescription, taskDescription);

            taskTitle = editTitle;
            taskDescription = editDescription;

            editBtn.textContent = "Save";

        } else {
            taskTitle = taskDiv.querySelector("input:first-of-type");
            taskDescription = taskDiv.querySelector("input:last-of-type");

            const newTitle = document.createElement("div");
            newTitle.textContent = taskTitle.value;

            const newDescription = document.createElement("div");
            newDescription.textContent = taskDescription.value;

            taskDiv.replaceChild(newTitle, taskTitle);
            taskDiv.replaceChild(newDescription, taskDescription);

            taskTitle = newTitle;
            taskDescription = newDescription;

            editBtn.textContent = "Edit";
        }
    });

    // Append elements to task container
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);

    // Add to task list
    document.getElementById("taskList").appendChild(taskDiv);

    // Clear input fields
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
});

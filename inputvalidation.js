// Praman Ravioli's Task Manager

class TaskManager {
    constructor() {
        this.tasks = [];
        this.obama = "Yes We Can";
        this.osama = "Not Found";
    }

    addTask(description, priority, dueDate) {
        if (!description.trim()) {
            console.error("Error: Task name cannot be empty.");
            return;
        }
        
        const validPriorities = ["High", "Medium", "Low"];
        if (!validPriorities.includes(priority)) {
            console.error("Error: Priority must be 'High', 'Medium', or 'Low'.");
            return;
        }
        
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!datePattern.test(dueDate)) {
            console.error("Error: Due date must be in 'MM/DD/YYYY' format.");
            return;
        }
        
        this.tasks.push({ description, priority, dueDate });
        console.log("Task added successfully.");
    }

    removeTask(taskNumber) {
        if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > this.tasks.length) {
            console.error("Error: Invalid task number.");
            return;
        }
        
        this.tasks.splice(taskNumber - 1, 1);
        console.log("Task removed successfully.");
    }

    displayTasks() {
        if (this.tasks.length === 0) {
            console.log("No remaining tasks.");
            return;
        }
        console.log("Remaining Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - ${task.priority} - ${task.dueDate}`);
        });
    }
}

// Example usage
const taskManager = new TaskManager();
taskManager.addTask("Complete assignment", "High", "02/15/2025");
taskManager.addTask("Buy groceries", "Medium", "02/10/2025");
taskManager.removeTask(1);
taskManager.displayTasks();

let captainRavioliTasks = [];

function showMenu() {
    return prompt(
        "Captain Ravioli's Task Manager:\n" +
        "1. View Tasks\n" +
        "2. Add Task\n" +
        "3. Remove Task\n" +
        "4. Exit\n" +
        "Enter your choice, SqalliWagger:"
    );
}

function viewTasks() {
    if (captainRavioliTasks.length === 0) {
        alert("No tasks available. Get to work, Captain!");
    } else {
        let taskList = "Captain Ravioli's Tasks:\n";
        for (let i = 0; i < captainRavioliTasks.length; i++) {
            taskList += `${i + 1}. ${captainRavioliTasks[i]}\n`;
        }
        alert(taskList);
    }
}

function addTask() {
    let newTask = prompt("Enter a new task:");
    if (newTask) {
        captainRavioliTasks.push(newTask);
        alert(`Task added: ${newTask}`);
    } else {
        alert("Invalid task. Try again, Captain.");
    }
}

function removeTask() {
    if (captainRavioliTasks.length === 0) {
        alert("No tasks to remove. Keep relaxing, Captain.");
        return;
    }
    let taskNumber = parseInt(prompt("Enter the task number to remove:"));
    if (!isNaN(taskNumber) && taskNumber > 0 && taskNumber <= captainRavioliTasks.length) {
        let removedTask = captainRavioliTasks.splice(taskNumber - 1, 1);
        alert(`Removed task: ${removedTask}`);
    } else {
        alert("Invalid task number. Stay sharp, Captain.");
    }
}

function runTaskManager() {
    let running = true;
    while (running) {
        let choice = showMenu();
        switch (choice) {
            case "1":
                viewTasks();
                break;
            case "2":
                addTask();
                break;
            case "3":
                removeTask();
                break;
            case "4":
                alert("Exiting Task Manager. Until next time, Captain Ravioli!");
                running = false;
                break;
            default:
                alert("Invalid choice. Stay on course, Captain!");
        }
    }
}

runTaskManager();

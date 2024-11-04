const addbtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTask()
console.log(localStorage.length);
console.log(localStorage.getItem('task'));

function clearTask(){
    localStorage.removeItem('task');
    alert('Clear Chatting')

}

function addTask(){
    const task = taskInput.value.trim();
    if (task) {
        createTaskElement(task);
        taskInput.value = '';
        saveTask()
        // setTimeout(() => {
        //     window.location.reload(true);
        // },5000);
    }
    else{
        alert("Please enter a task!");
    }
}

addbtn.addEventListener('click',addTask);

function createTaskElement(task){
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
}
function saveTask(){
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.trim());
    });
    localStorage.setItem('task',JSON.stringify(tasks));
}
function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('task')) || [];
    tasks.forEach(createTaskElement);
}



const addTask = document.querySelector("form");
const tasks = document.querySelector(".under-progress");
const fineshed = document.querySelector(".done")
addTask.addEventListener("submit" , function(event) {
    event.preventDefault();
    const taskeValue = document.querySelector("input").value;
    tasks.innerHTML += ` <span class="list">${taskeValue}</span>`;
})




const addTask = document.querySelector("form");
const tasks = document.querySelector(".under-progress");
const fineshed = document.querySelector(".done");


addTask.addEventListener("submit" , function(event) {
    event.preventDefault();
    const taskeValue = document.querySelector("input").value;
    tasks.innerHTML += ` <span class="list">${taskeValue}</span>`;
})

tasks.addEventListener("click" , function () {
    const sameValue = document.querySelectorAll("tasks").value;
    fineshed.innerHTML += `<span class="end">${sameValue}</span>`;
    tasks.remove;
})

fineshed.addEventListener("click",function(){
    const sameValue = document.querySelectorAll("fineshed").value;
    tasks.innerHTML += ` <span class="list">${sameValue}</span>`;
    fineshed.remove
})









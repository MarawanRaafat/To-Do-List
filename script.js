
const addTask = document.querySelector("form");
const tasks = document.querySelector(".under-progress");
const fineshed = document.querySelector(".done");


addTask.addEventListener("submit" , function(event) {
    event.preventDefault();
    const taskeValue = document.querySelector("input").value;
    tasks.innerHTML += ` <span class="list">${taskeValue}</span>`;
})

tasks.addEventListener("click" , function (event) {
    const sameValue = event.target.textContent;
    fineshed.innerHTML += `<span class="end">${sameValue}</span>`;
    event.target.remove();
})

fineshed.addEventListener("click",function(){
    const sameValue = event.target.textContent;
    tasks.innerHTML += ` <span class="list">${sameValue}</span>`;
    event.target.remove();
})









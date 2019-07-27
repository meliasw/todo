const form = document.querySelector("form");
const task = document.querySelector(".task");
const list = document.querySelector(".list");
const checkbutton = document.querySelector(".all");
const uncheckbutton = document.querySelector(".none");
//console.log(form, task);

form.onsubmit = function(event) {
    event.preventDefault();
    const text = task.value;
    
    // add to the list
   const html = `<p><input type="checkbox"> ${text}</p>`
    list.innerHTML = list.innerHTML + html;
    task.value = "";
}

checkbutton.onclick = function(event) {
    const checkboxes = document.querySelectorAll(".list input")    
    checkboxes.forEach(function(checkbox){
        checkbox.checked = true;
        checkbox.setAttribute("checked", true);
    })
}

uncheckbutton.onclick = function(event) {
    const checkboxes = document.querySelectorAll(".list input")    
    checkboxes.forEach(function(checkbox){
        checkbox.checked = false;
        checkbox.setAttribute("checked", false);
    })
}


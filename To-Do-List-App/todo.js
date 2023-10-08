const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value ==='') {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";

    saveData();  //so here it's used for whenever we make any changes/ , it'll call the func and save data in browser/localStorage.
}
listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();  //here also it'll be called as if we check or delete any task it would be saved
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    //this func is used to show previous tasks whenever we'll again open website.

    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




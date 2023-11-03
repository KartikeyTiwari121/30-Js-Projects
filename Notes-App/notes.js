const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const addButton = document.getElementById("AddButton");

function showNotes() {
    // This will fetch data from local storage
    const notes = localStorage.getItem("notes");
    if (notes) {
        notesContainer.innerHTML = notes;
    }
}
showNotes();

function updateStorage() {
    // This will save data in local storage
    const notes = document.querySelectorAll(".input-box");
    const notesText = [];
    notes.forEach((note) => {
        notesText.push(note.innerHTML);
    });
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox);
    updateStorage();
});

addButton.addEventListener("click", () => {
    // Get the last created input-box
    const inputBoxes = document.querySelectorAll(".input-box");
    const lastInputBox = inputBoxes[inputBoxes.length - 1];
    
    if (lastInputBox.innerHTML.trim() !== "") {
        let img = document.createElement("img");
        img.src = "images/delete.png";
        lastInputBox.appendChild(img);
        updateStorage();
    }
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// This part of the code will save the data when you leave the page.
window.addEventListener("beforeunload", updateStorage);








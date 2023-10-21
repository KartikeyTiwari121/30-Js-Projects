const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    //this will fetch data from local storage
    const notes = localStorage.getItem("notes");
    if (notes) {
        notesContainer.innerHTML = notes;
    }
}
showNotes();

function updateStorage() {
    //this will save data in local storage
    const notes = document.querySelectorAll(".input-box");
    const notesText = [];
    notes.forEach((note) => {
        notesText.push(note.innerHTML);
    });
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
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








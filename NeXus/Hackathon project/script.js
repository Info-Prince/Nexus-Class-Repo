// script.js

// Rich Text Editor Functionality
function formatText(command) {
    document.execCommand(command, false, null);
}

function insertLink() {
    const url = prompt("Enter the URL:");
    if (url) {
        document.execCommand("createLink", false, url);
    }
}

// Save Notes
function saveNote() {
    const notesInput = document.getElementById("notes-input");
    const notesList = document.getElementById("notes-list");

    if (notesInput.value.trim()) {
        const li = document.createElement("li");
        li.textContent = notesInput.value;
        notesList.appendChild(li);
        notesInput.value = ""; // Clear input
    }
}

// Future: Add calendar functionality, analytics, and other advanced features.




// create blog data
const blogData = {
    imgge : "first",
    title: "Exploring the World of Technology",
    description : "Technology is advancing at an unprecedented rate. In this blog, we explore the latest trends, innovations, and how they are shaping our future.",
    author : "prince",
    category: "Technology", 
    readTime : "5 min",
    url: "https://www.example.com/blog/technology", //blog URL
    likes: 124,
    comments: 42,
    featured: true,  
}


console.log("hello dunia");
console.log("hello dunia");
console.log("hello dunia");
console.log("hello dunia");
console.log("hello dunia");
console.log("hello dunia");

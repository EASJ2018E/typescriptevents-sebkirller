// Global properties
let ul = document.getElementById("listeUsund");
let inputElement = document.getElementById("input") as HTMLInputElement;
let btn = document.getElementById("btnAdd");
let counter = 0;

// Button click event.
btn.addEventListener("click", () => {
    if (inputElement.value != null && inputElement.value !== "") {
        let node = document.createElement("li");
        node.setAttribute("id", String(counter));
        node.appendChild(document.createTextNode(inputElement.value));
        ul.appendChild(node);
        console.log("Added item with Id: " + counter);
        counter++;
    }
});

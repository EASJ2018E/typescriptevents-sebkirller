// Global properties
let ul = document.getElementById("listeUsund");
let inputElement = document.getElementById("input") as HTMLInputElement;
let btn = document.getElementById("btnAdd");
let counter = 0;

// Button click event.
btn.addEventListener("click", () => {
    if (inputElement.value != null && inputElement.value !== "") {
        const node = document.createElement("li");
        node.setAttribute("id", String(counter));
        node.appendChild(document.createTextNode(inputElement.value));
        ul.appendChild(node);
        counter++;
    }
});

// Hides element on click. Only on USUND
ul.addEventListener("click", (e: MouseEvent) => {
    const element = e.target as HTMLLIElement;
    element.hidden = true;
});

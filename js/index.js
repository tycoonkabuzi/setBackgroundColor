//setBackground()

// the first paragraph to red
// the second paragraph to yellow.

let mainContent = document.getElementById("main-content");
let btnChange = document.getElementById("btn-change-color");
btnChange.addEventListener("click", () => {
  let firstParagraph = mainContent.firstElementChild;
  let lastParagraph = mainContent.lastElementChild;
  firstParagraph.classList.toggle("red");
  lastParagraph.classList.toggle("yellow");
});

const mainHeading = document.getElementById("mapname");
const hoverElements = document.querySelectorAll(".hover-element");

hoverElements.forEach((element) => {
  element.addEventListener("mouseover", function () {
    changeHeading(element.id);
  });

  element.addEventListener("mouseout", resetHeading);
});

function changeHeading(newText) {
  mainHeading.textContent = newText.charAt(0).toUpperCase() + newText.slice(1); // Capitalize the first letter
}

function resetHeading() {
  mainHeading.textContent = "MAP";
}

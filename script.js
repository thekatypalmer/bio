const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

/*
Check whether the visitor previously
selected dark mode.
*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleButton.textContent = "🌙";
}


/*
Switch themes when the button is clicked.
*/

toggleButton.addEventListener("click", () => {

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {

    toggleButton.textContent = "🌙";

    localStorage.setItem("theme", "dark");

  } else {

    toggleButton.textContent = "☀️";

    localStorage.setItem("theme", "light");

  }

});


/*
Automatically update the copyright year.
*/

document.getElementById("year").textContent =
  new Date().getFullYear();

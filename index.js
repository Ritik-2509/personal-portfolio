/******************************toggle icon nav bar************************* */

// Select the toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Load saved theme (if available)
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle function
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});



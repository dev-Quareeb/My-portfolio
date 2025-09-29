function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



//Toggle 
const toggle = document.getElementById("theme-toggle");


toggle,addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});

//set initial theme on load//
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
});
//
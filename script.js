const rootElement = document.documentElement;
const themeToggleButton = document.querySelector(
  ".dashboard__header-theme-toggle"
);

themeToggleButton.addEventListener("change", function (e) {
  const theme = this.checked ? "dark" : "light";

  localStorage.setItem("theme", theme);

  rootElement.setAttribute("data-theme", theme);
});

window.addEventListener("DOMContentLoaded", function (e) {
  const currentTheme = localStorage.getItem("theme");

  if (!currentTheme) return;

  if (currentTheme === "dark") {
    themeToggleButton.checked = true;
    rootElement.setAttribute("data-theme", currentTheme);
  }

  if (currentTheme === "light") {
    themeToggleButton.checked = false;
    rootElement.setAttribute("data-theme", currentTheme);
  }
});

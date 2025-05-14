document.addEventListener("DOMContentLoaded", () => {
  // Function to apply theme from localStorage
  function applyTheme() {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // Function to toggle theme
  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Animate button
    const btn = document.getElementById("themeBtn");
    btn.classList.add("animate");
    setTimeout(() => btn.classList.remove("animate"), 400);
  }

  // Now safely attach event listener
  document.getElementById("themeBtn").addEventListener("click", toggleTheme);
  applyTheme(); // Apply saved theme on load
});

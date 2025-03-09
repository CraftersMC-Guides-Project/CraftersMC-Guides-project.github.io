document.addEventListener('DOMContentLoaded', function () {
  // Hide loader when content is loaded
  document.querySelector('#loader').style.display = 'none';

  // Setup dark mode toggle
  const toggleButton = document.getElementById("darkModeToggle");
  let isDarkMode = localStorage.getItem("darkMode") === "true";

  // Apply initial theme
  applyTheme();

  // Add event listener to toggle button
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem("darkMode", isDarkMode);
      applyTheme();
    });
  }

  // Function to apply the current theme
  function applyTheme() {
    // Toggle darkmode class on body
    document.body.classList.toggle("darkmode", isDarkMode);

    // Update toggle button icon
    if (toggleButton) {
      toggleButton.textContent = isDarkMode ? "light_mode" : "dark_mode";
    }
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}
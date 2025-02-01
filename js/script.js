document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#loader').style.display = 'none';
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Toggle dark and light mode

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarLink = document.querySelectorAll(".sidebar-link");
  const close = document.querySelectorAll(".sidebar-close");
  const bottomNav = document.querySelectorAll(".bottom-nav");
  const bottomNavItem = document.querySelectorAll(".nav-item");
  const bottomNavIcon = document.querySelectorAll(".botton-nav-icon");
  const ctaBtn = document.querySelectorAll(".cta-btn");
  const nav = document.querySelectorAll(".navbar");
  const unicode = document.querySelectorAll(".container");
  const unicodeSection = document.querySelectorAll(".section");
  const list = document.querySelectorAll(".seller-list");
  const listCard = document.querySelectorAll(".seller-card");
  const listCardInactive = document.querySelectorAll(".seller-card-inactive");
  const toggleButton = document.getElementById("darkModeToggle");
  
  // Check if the theme is stored in localStorage
  let isDarkMode = localStorage.getItem("darkMode") === "true";

  const applyTheme = () => {
    if (isDarkMode) {
      // Dark Mode
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "white";
      sidebar.style.backgroundColor = "#111111";
      sidebar.style.color = "white";
      bottomNav.forEach(nav => nav.style.backgroundColor = "#111111");
      list.forEach(nav => nav.style.backgroundColor = "#111111");
      sidebarLink.forEach(link => link.style.color = "#fff");
      close.forEach(button => button.style.color = "white");
      bottomNavItem.forEach(nav => nav.style.color = "white");
      bottomNavIcon.forEach(nav => nav.style.color = "white");
      ctaBtn.forEach(nav => nav.style.backgroundColor = "#111111");
      nav.forEach(nav => nav.style.backgroundColor = "#111111");
      unicode.forEach(nav => nav.style.backgroundColor = "#111111");
      unicodeSection.forEach(nav => nav.style.backgroundColor = "#222222");
      listCard.forEach(nav => nav.style.backgroundColor = "#45454547");
      listCardInactive.forEach(nav => nav.style.backgroundColor = "#dd22221f");
      toggleButton.textContent = "light_mode";
    } else {
      // Light Mode
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      sidebar.style.backgroundColor = "white";
      sidebar.style.color = "black";
      bottomNav.forEach(nav => nav.style.backgroundColor = "white");
      list.forEach(nav => nav.style.backgroundColor = "white");
      sidebarLink.forEach(link => link.style.color = "#000");
      close.forEach(button => button.style.color = "black");
      bottomNavItem.forEach(nav => nav.style.color = "#333333");
      bottomNavIcon.forEach(nav => nav.style.color = "#333333");
      ctaBtn.forEach(nav => nav.style.backgroundColor = "#007bff");
      nav.forEach(nav => nav.style.backgroundColor = "#007bff");
      unicode.forEach(nav => nav.style.backgroundColor = "#ffffff");
      unicodeSection.forEach(nav => nav.style.backgroundColor = "#f1f1f1");
      listCard.forEach(nav => nav.style.backgroundColor = "#f1f1f1");
      listCardInactive.forEach(nav => nav.style.border = "2px solid rgb(221, 34, 34)");
      toggleButton.textContent = "dark_mode";
    }
  };

  // Apply the stored theme on page load
  applyTheme();

  toggleButton.addEventListener("click", () => {
    // Toggle the mode and apply the theme
    isDarkMode = !isDarkMode;
    applyTheme();
    // Store the preference in localStorage
    localStorage.setItem("darkMode", isDarkMode);
  });
});

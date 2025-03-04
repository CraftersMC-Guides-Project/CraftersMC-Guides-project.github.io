
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

// Sidebar toggle function from script.js
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

//Background changer i hope

function changeBackground(type) {
  const backgrounds = {
      'default': 'linear-gradient(135deg, #1a1a1a, #333333)',
      'forest': 'url("../Backgrounds/IMG_4498.jpeg")',
      'mountain': 'url("../Backgrounds/IMG_4499.jpeg")',
      'desert': 'url("../Backgrounds/IMG_4500.jpeg")',
      'ocean': 'url("../Backgrounds/IMG_4502.jpeg")',
    'rose': 'url("../Backgrounds/IMG_0007.jpeg")',
    'bush': 'url("../Backgrounds/IMG_0004.jpeg")',
    'fireworks': 'url("../Backgrounds/IMG_0097.jpeg")',
    'snowdrops': 'url("../Backgrounds/IMG_0669.jpeg")',
    'fountain': 'url("../Backgrounds/IMG_0179.jpeg")',
    'skylights': 'url("../Backgrounds/IMG_0205.jpeg")',
      'cyberpunk': 'linear-gradient(135deg, #ff00ff, #00ffff)',
      'sunset': 'linear-gradient(135deg, #ff5f3f, #e5df3f)',
      'random': () => {
          //random gradient lol
          const randomColor1 = `hsl(${Math.random() * 360}, 70%, 50%)`;
          const randomColor2 = `hsl(${Math.random() * 360}, 70%, 50%)`;
          return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
      }
  };

  //check if is a function
  const background = typeof backgrounds[type] === 'function' 
      ? backgrounds[type]() 
      : backgrounds[type];

  document.body.style.background = background;
  document.body.style.backgroundSize = 'cover';
}

// dropdown code
document.addEventListener('DOMContentLoaded', () => {
  const backgroundSelect = document.getElementById('backgroundSelect');
  if (backgroundSelect) {
      backgroundSelect.addEventListener('change', (e) => {
          changeBackground(e.target.value);
      });
  }
});
//hello

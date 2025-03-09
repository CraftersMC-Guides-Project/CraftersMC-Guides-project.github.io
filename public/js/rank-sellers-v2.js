
document.addEventListener('DOMContentLoaded', function () {
  // Hide loader when content is loaded
  document.querySelector('#loader').style.display = 'none';
/*
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
  }*/
});

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.getElementById("darkModeToggle");
//   const elementsToStyle = {
//     // sidebar: document.getElementById("sidebar"),
//     loader: document.getElementById("loader"),
//     sidebarLinks: document.querySelectorAll(".sidebar-link"),
//     cards: document.querySelectorAll(".card"),
//     collectionItem: document.querySelectorAll(".collection-item"),
//     contentSections: document.querySelectorAll(".content"),
//     bottomNavs: document.querySelectorAll(".bottom-nav"),
//     bottomNavItems: document.querySelectorAll(".nav-item"),
//     bottomNavIcons: document.querySelectorAll(".bottom-nav-icon"),
//     ctaButtons: document.querySelectorAll(".cta-btn"),
//     navbars: document.querySelectorAll(".navbar"),
//     unicodeContainers: document.querySelectorAll(".container"),
//     unicodeSections: document.querySelectorAll(".section"),
//     sellerLists: document.querySelectorAll(".seller-list"),
//     sellerCards: document.querySelectorAll(".seller-card"),
//     sellerCardsInactive: document.querySelectorAll(".seller-card-inactive"),
//     tables: document.querySelectorAll("table"),
//     tableHeaders: document.querySelectorAll("table th"),
//     tableCells: document.querySelectorAll("table td"),
//   };

//   let isDarkMode = localStorage.getItem("darkMode") === "true";

//   const removeHoverEffects = () => {
//     elementsToStyle.tables.forEach(table => {
//       table.querySelectorAll("tr").forEach(row => {
//         row.onmouseenter = null;
//         row.onmouseleave = null;
//       });
//     });
//   };

//   const applyTheme = () => {
//     document.body.classList.toggle("dark-mode", isDarkMode);

//     if (isDarkMode) {
//       document.body.style.backgroundColor = "#1e1e2e";
//       document.body.style.color = "white";

//       // elementsToStyle.sidebar.style.backgroundColor = "#111111";
//       elementsToStyle.loader.style.backgroundColor = "#333333";

//       elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "#222222"));
//       elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#222222"));
//       elementsToStyle.collectionItem.forEach(collectionItem => (collectionItem.style.backgroundColor = "#1e1e3e"));
//       elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "#111111"));
//       elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "#111111"));
//       elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#fff"));
//       elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "white"));
//       elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "white"));
//       elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#111111"));
//       elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#111111"));
//       elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "rgb(17, 17, 28)", container.style.backdropFilter = "blur(15px)"));
//       elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#222222"));
//       elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "#45454547"));
//       elementsToStyle.sellerCardsInactive.forEach(card => (card.style.backgroundColor = "#dd22221f"));

//       elementsToStyle.tables.forEach(table => {
//         table.style.backgroundColor = "#282838";
//         table.style.color = "white";
//         table.style.border = "1px solid #444";
//       });

//       elementsToStyle.tableHeaders.forEach(header => {
//         header.style.backgroundColor = "#33334d";
//         header.style.color = "white";
//       });

//       elementsToStyle.tableCells.forEach(cell => {
//         cell.style.border = "1px solid #444";
//       });

//       removeHoverEffects();

//       elementsToStyle.tables.forEach(table => {
//         table.querySelectorAll("tr").forEach(row => {
//           row.addEventListener("mouseenter", () => {
//             row.style.backgroundColor = "#3a3a4a";
//           });

//           row.addEventListener("mouseleave", () => {
//             row.style.backgroundColor = "#282838";
//           });
//         });
//       });

//       toggleButton.textContent = "light_mode";
//     } else {
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";

//       // elementsToStyle.sidebar.style.backgroundColor = "white";
//       elementsToStyle.loader.style.backgroundColor = "white";

//       elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "white"));
//       elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#f9f9f9", section.style.borderTop = "1px solid #898989"));
//       elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "white"));
//       elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "white"));
//       elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#000"));
//       elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "#333333"));
//       elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "#333333"));
//       elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#007bff"));
//       elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#007bff"));
//       elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "#f1f1f1"));
//       elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#f1f1f1", section.style.border = "1px solid #898989"));
//       elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "#f1f1f1"));
//       elementsToStyle.sellerCardsInactive.forEach(card => {
//         card.style.border = "2px solid rgb(221, 34, 34)";
//         card.style.backgroundColor = "white";
//       });

//       elementsToStyle.tables.forEach(table => {
//         table.style.backgroundColor = "white";
//         table.style.color = "black";
//         table.style.border = "1px solid #ccc";
//       });

//       elementsToStyle.tableHeaders.forEach(header => {
//         header.style.backgroundColor = "#007bff";
//         header.style.color = "black";
//       });

//       elementsToStyle.tableCells.forEach(cell => {
//         cell.style.border = "1px solid #ccc";
//       });

//       removeHoverEffects();

//       elementsToStyle.tables.forEach(table => {
//         table.querySelectorAll("tr").forEach(row => {
//           row.addEventListener("mouseenter", () => {
//             row.style.backgroundColor = "#f0f0f0";
//           });

//           row.addEventListener("mouseleave", () => {
//             row.style.backgroundColor = "white";
//           });
//         });
//       });

//       toggleButton.textContent = "dark_mode";
//     }
//   };

//   applyTheme();

//   if (toggleButton) {
//     toggleButton.addEventListener("click", () => {
//       isDarkMode = !isDarkMode;
//       localStorage.setItem("darkMode", isDarkMode);
//       location.reload();
//       applyTheme();
//     });
//   }
// });


// Sidebar toggle function from script.js
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

//Background changer i hope

function changeBackground(type) {
  const backgrounds = {
      'default': 'url("../Backgrounds/IMG_4504.jpeg")',
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
    'crocus': 'url("../Backgrounds/Crocus.jpeg")',
    'daisy': 'url("../Backgrounds/Daisy.jpeg")',
    'oldtree': 'url("../Backgrounds/OldTree.jpeg")',
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded.");

  const themeSwitch = document.getElementById("theme-switch");

  if (!themeSwitch) {
    console.error("Error: #theme-switch button not found!");
    return;
  }

  let darkMode = localStorage.getItem("darkMode");

  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "true");
    themeSwitch.textContent = "light_mode";
    console.log("Dark mode enabled.");
  };

  const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", "false");
    themeSwitch.textContent = "dark_mode";
    console.log("Dark mode disabled.");
  };
  
  if (darkMode === "true") {
    enableDarkmode();
  }

  themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "true") {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });

  console.log("Event listener added.");
});

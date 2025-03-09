
document.addEventListener('DOMContentLoaded', function () {
  // Hide loader when content is loaded
  document.querySelector('#loader').style.display = 'none';

});

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
/*
function changeProfileBannerBackground(type) {
  const bannerBackgrounds = {
    'default': 'url("../Backgrounds/IMG_4500.jpeg")',
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
  };
  const profileBanner = document.querySelector('.profile-banner');
  const bannerBackground = bannerBackgrounds[type];
  if (bannerBackground) {
    profileBanner.style.backgroundImage = bannerBackground;
  }
}
*/

function changeProfileBannerBackground(type) {
  const bannerBackgrounds = {
    'default': 'url("../Backgrounds/IMG_4500.jpeg")',
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
    'periwinkle': 'url("../Backgrounds/PeriwinkleBanner.jpeg")',
    'flowerBanner': 'url("../Backgrounds/FlowerBanner.jpeg")',
    'daisy': 'url("../Backgrounds/daisy.jpeg")',
  };

  const profileBanner = document.querySelector('.profile-banner');
  const bannerBackground = bannerBackgrounds[type];
  if (bannerBackground) {
    profileBanner.style.backgroundImage = bannerBackground;
  }
}

//profile banner dropdown
//yea turns out i alr used backgroundSelect im a bit silly

document.addEventListener('DOMContentLoaded', () => {
  const bannerBackgroundSelect = document.getElementById('bannerBackgroundSelect');
  if (bannerBackgroundSelect) {
    bannerBackgroundSelect.addEventListener('change', (e) => {
      changeProfileBannerBackground(e.target.value);
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

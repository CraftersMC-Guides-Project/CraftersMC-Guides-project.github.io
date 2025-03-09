document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#loader').style.display = 'none';
});

function toggleLid() {
  const sidelid = document.getElementById("sidelid");
  const overlay = document.getElementById("sidebar-overlay");

  if (!sidelid) {
    console.error("Element with ID 'sidelid' not found.");
    return;
  }

  sidelid.classList.toggle("openlid");

  if (sidelid.classList.contains("openlid")) {
    document.body.style.overflow = "hidden";
    sidebar.style.overflowY = "auto";
    overlay.style.display = "block";
  } else {
    document.body.style.overflow = "";
    setTimeout(() => {
      sidelid.scrollTop = 0;
    }, 300);
    overlay.style.display = "none";
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.toggle("openSbar");

  if (sidebar.classList.contains("openSbar")) {
    document.body.style.overflow = "hidden";
    sidebar.style.overflowY = "auto";
    overlay.style.display = "block";
  } else {
    document.body.style.overflow = "";
    setTimeout(() => {
      sidebar.scrollTop = 0;
    }, 300);
    overlay.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (!scrollToTopBtn) {
      console.error("scrollToTopBtn not found in the DOM");
      return;
  }

  window.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// outside click will close the sidebar
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.querySelector(".menu-icon");
  const left = document.querySelector(".left");
  const overlay = document.getElementById("sidebar-overlay");

  if (!sidebar || !menuIcon || !left || !overlay) return;

  if (sidebar.classList.contains("openSbar") && 
      !sidebar.contains(event.target) && 
      !menuIcon.contains(event.target) &&
      !left.contains(event.target)) {
    
    sidebar.classList.remove("openSbar");
    document.body.style.overflow = "";
    overlay.style.display = "none";

    setTimeout(() => {
      sidebar.scrollTop = 0;
    }, 300);
  }
});

// outside click will close the sidelid
document.addEventListener("click", (event) => {
  const sidelid = document.getElementById("sidelid");
  const menuIcon = document.querySelector(".menu-icon");
  const left = document.querySelector(".left");
  const overlay = document.getElementById("sidebar-overlay");

  if (!sidelid || !menuIcon || !left || !overlay) return;

  if (sidelid.classList.contains("openlid") && 
      (!sidelid.contains(event.target) && 
       !menuIcon.contains(event.target) &&
       !left.contains(event.target)) || 
      event.target === overlay) {

    sidelid.classList.remove("openlid");
    document.body.style.overflow = "";
    overlay.style.display = "none";

    setTimeout(() => {
      sidelid.scrollTop = 0;
    }, 300);
  }
});


/*
//better dark mode

let darkmode = localStorage.getItem ('darkmode' )
const themeSwitch = document.getElementById('theme-switch')
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
  document.body.classList.remove ('darkmode')
  localStorage.setItem ('darkmode', 'null')
}
if(darkmode === "active") enableDarkmode ()
  themeSwitch.addEventListener ("click", () => {
  darkmode = localStorage.getItem( 'darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
*/

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const elementsToStyle = {
    // sidebar: document.getElementById("sidebar"),
    loader: document.getElementById("loader"),
    sidebarLinks: document.querySelectorAll(".sidebar-link"),
    cards: document.querySelectorAll(".card"),
    collectionItem: document.querySelectorAll(".collection-item"),
    contentSections: document.querySelectorAll(".content"),
    sidelid: document.querySelectorAll(".sidelid"),
    bottomNavs: document.querySelectorAll(".bottom-nav"),
    bottomNavItems: document.querySelectorAll(".nav-item"),
    bottomNavIcons: document.querySelectorAll(".bottom-nav-icon"),
    ctaButtons: document.querySelectorAll(".cta-btn"),
    navbars: document.querySelectorAll(".navbar"),
    unicodeContainers: document.querySelectorAll(".container"),
    unicodeSections: document.querySelectorAll(".section"),
    sellerLists: document.querySelectorAll(".seller-list"),
    sellerCards: document.querySelectorAll(".seller-card"),
    sellerCardsInactive: document.querySelectorAll(".seller-card-inactive"),
    tables: document.querySelectorAll("table"),
    tableHeaders: document.querySelectorAll("table th"),
    tableCells: document.querySelectorAll("table td"),
    statsBox:    document.querySelectorAll(".stats-box"),
    statCard: document.querySelectorAll(".stat-card"),
    sellerDetails: document.querySelectorAll(".seller-details"),
    sellerProfile: document.querySelectorAll(".seller-profile"),
  };

  let isDarkMode = localStorage.getItem("darkMode") === "true";

  const removeHoverEffects = () => {
    elementsToStyle.tables.forEach(table => {
      table.querySelectorAll("tr").forEach(row => {
        row.onmouseenter = null;
        row.onmouseleave = null;
      });
    });
  };

  const applyTheme = () => {
    document.body.classList.toggle("dark-mode", isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = "#1e1e2e";
      document.body.style.color = "white";

      // elementsToStyle.sidebar.style.backgroundColor = "#111111";
      elementsToStyle.loader.style.backgroundColor = "#333333";

      elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "#222222"));
      elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#222222"));
      elementsToStyle.collectionItem.forEach(collectionItem => (collectionItem.style.backgroundColor = "#1e1e3e"));
      elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "#111111"));
      elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "#111111"));
      elementsToStyle.sidelid.forEach(sidelid => (sidelid.style.backgroundColor = "rgb(17, 17, 28)", sidelid.style.color = "white"));
      elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#fff"));
      elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "white"));
      elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "white"));
      elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#111111"));
      elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#331166"));
      elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "rgb(17, 17, 28)", container.style.backdropFilter = "blur(15px)"));
      elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#222222"));
      elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "rgba(0, 0, 0, 0.4)"));
      elementsToStyle.sellerCardsInactive.forEach(card => (card.style.backgroundColor = "rgba(70, 0, 0, 0.4)"));

      elementsToStyle.tables.forEach(table => {
        table.style.backgroundColor = "#282838";
        table.style.color = "white";
        table.style.border = "1px solid #444";
      });

      elementsToStyle.tableHeaders.forEach(header => {
        header.style.backgroundColor = "#33334d";
        header.style.color = "white";
      });

      elementsToStyle.tableCells.forEach(cell => {
        cell.style.border = "1px solid #444";
      });

      removeHoverEffects();

      elementsToStyle.tables.forEach(table => {
        table.querySelectorAll("tr").forEach(row => {
          row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#3a3a4a";
          });

          row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "#282838";
          });
        });
      });
      elementsToStyle.statsBox.forEach(stat => (stat.style.backgroundColor = "rgba(0, 0, 0, 0.7)"));
      elementsToStyle.statCard.forEach(card => (card.style.backgroundColor = "rgba(0, 0, 0, 0.4)"));
      elementsToStyle.sellerDetails.forEach(detail => (detail.style.backgroundColor = "rgba(0, 0, 0, 0.4)"));
      elementsToStyle.sellerProfile.forEach(profile => (profile.style.color = "white"));
      elementsToStyle.sellerProfile.forEach(profile => (profile.style.backgroundColor = "rgba(34, 34, 34, 0.2)"));

      toggleButton.textContent = "light_mode";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

       //elementsToStyle.sidebar.style.backgroundColor = "white";
      elementsToStyle.loader.style.backgroundColor = "white";

      elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "white"));
      elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#f9f9f9"));
      elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "white"));
      elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "white"));
      elementsToStyle.sidelid.forEach(sidelid => (sidelid.style.backgroundColor = "rgb(241, 241, 241)", sidelid.style.color = "black"));
      elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#000"));
      elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "#333333"));
      elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "#333333"));
      elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#007bff"));
      elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#6f00ff"));
      elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "#f1f1f1"));
      elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#f1f1f1", section.style.border = "1px solid #898989"));
      elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "#rgba(255, 255, 255, 0.1)"));
      elementsToStyle.sellerCardsInactive.forEach(card => {
        card.style.border = "2px solid rgb(221, 34, 34)";
        card.style.backgroundColor = "rgba(221, 34, 34, 0.1)";
      });

      elementsToStyle.tables.forEach(table => {
        table.style.backgroundColor = "white";
        table.style.color = "black";
        table.style.border = "1px solid #ccc";
      });

      elementsToStyle.tableHeaders.forEach(header => {
        header.style.backgroundColor = "#007bff";
        header.style.color = "black";
      });

      elementsToStyle.tableCells.forEach(cell => {
        cell.style.border = "1px solid #ccc";
      });

      elementsToStyle.statsBox.forEach(stat => (stat.style.backgroundColor = "rgba(0, 87, 179, 0.7)"));
      elementsToStyle.statCard.forEach(card => (card.style.backgroundColor = "rgba(80, 80, 80, 0.4)"));
      elementsToStyle.sellerDetails.forEach(detail => (detail.style.backgroundColor = "rgba(80, 80, 80, 0.4)"))
      elementsToStyle.sellerProfile.forEach(profile => (profile.style.backgroundColor = "rgba(170, 170, 170, 0.2)"));

      removeHoverEffects();

      elementsToStyle.tables.forEach(table => {
        table.querySelectorAll("tr").forEach(row => {
          row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#f0f0f0";
          });

          row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "white";
          });
        });
      });

      toggleButton.textContent = "dark_mode";
    }
  };

  applyTheme();

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem("darkMode", isDarkMode);
      //got rid of auto reload for a bit mb if any issues
      //location.reload();
      applyTheme();
    });
  }
});

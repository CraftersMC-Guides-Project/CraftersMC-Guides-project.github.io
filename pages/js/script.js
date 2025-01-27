document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#loader').style.display = 'none';
  });

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }

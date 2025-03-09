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

document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.classList.contains("open")) {
                content.classList.remove("open");
            } else {
                content.classList.add("open");
            }
        });
    }
});
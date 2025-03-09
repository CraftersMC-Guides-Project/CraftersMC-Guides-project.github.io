document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#loader').style.display = 'none';
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}


let darkMode = localStorage.getItem ('darkMode')
const themeSwitch = document.getElementById('theme-switch')
const enabledarkMode = () => {
  document.body.classList.add('darkmode')
  themeSwitch.textContent = "light_mode";
  localStorage.setItem('darkMode', 'true')
}
const disabledarkMode = () => {
  document.body.classList.remove('darkmode')
  themeSwitch.textContent = "dark_mode";
  localStorage.setItem ('darkMode', 'null')
}
if(darkMode === "true") enabledarkMode ()
  themeSwitch.addEventListener ("click", () => {
  darkMode = localStorage.getItem( 'darkMode')
  darkMode !== "true" ? enabledarkMode() : disabledarkMode()
})

const interestInterval = 31 * 60 * 60 * 1000;

function calculateBaseTime() {
    const now = new Date();
    const currentTime = now.getTime();
    const baseTime = new Date(Date.UTC(2025, 1, 2, 20, 0, 0)).getTime();
    const periods = Math.floor((currentTime - baseTime) / interestInterval);
    return new Date(baseTime + (periods * interestInterval));
}

let nextInterestUTC = calculateBaseTime();

function formatDate(date) {
    let options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    let formattedDate = date.toLocaleString(undefined, options).replace(',', '');
    return formattedDate.replace(/\b([A-Z])([A-Z]*)\b/g, (match, first, rest) => first + rest.toLowerCase()).toUpperCase();
}

function updateInterestTimes() {
    let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let lastInterestUTC = new Date(nextInterestUTC.getTime() - interestInterval);
    let nextInterestLocal = formatDate(new Date(nextInterestUTC.toLocaleString("en-US", { timeZone: userTimezone })));
    let lastInterestLocal = formatDate(new Date(lastInterestUTC.toLocaleString("en-US", { timeZone: userTimezone })));
    document.getElementById("lastInterestTime").textContent = lastInterestLocal;
    document.getElementById("nextInterestTime").textContent = nextInterestLocal;
}

function toggleInterestContainer() {
    let content = document.querySelector('.interest-container .content');
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}

function updateCountdown() {
    let now = new Date();
    let timeLeft = nextInterestUTC - now;

    if (timeLeft <= 0) {
        nextInterestUTC.setTime(nextInterestUTC.getTime() + interestInterval);
        updateInterestTimes();
        generateNextInterests();  // Ensure the next 10 interests update when countdown resets
        timeLeft = interestInterval;
    }

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    let elapsed = interestInterval - timeLeft;
    let progress = (elapsed / interestInterval) * 100;
    document.getElementById("progressBar").style.width = `${progress}%`;
}

function generateNextInterests() {
    let interestContainer = document.getElementById("interestContainer");
    interestContainer.innerHTML = "";
    let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let nextTime = new Date(nextInterestUTC);

    for (let i = 0; i < 10; i++) {
        let interestTime = new Date(nextTime.getTime() + i * interestInterval);
        let interestElement = document.createElement("p");
        interestElement.textContent = formatDate(new Date(interestTime.toLocaleString("en-US", { timeZone: userTimezone })));
        interestContainer.appendChild(interestElement);
    }
}

setInterval(updateCountdown, 1000);
updateInterestTimes();
generateNextInterests();

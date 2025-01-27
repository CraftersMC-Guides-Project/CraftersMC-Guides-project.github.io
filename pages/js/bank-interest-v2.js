const initialTargetTime = new Date('2025-01-26T07:30:00+05:30').getTime();
let targetTime = initialTargetTime;

function formatTime(date) {
    const options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    return date.toLocaleString('en-IN', options).replace(':00', '').trim();
}

function calculateInterestTimes() {
    const interestTimes = [];
    for (let i = 0; i < 50; i++) {
        const nextInterestDate = new Date(initialTargetTime + (i * 31 * 60 * 60 * 1000));
        interestTimes.push(formatTime(nextInterestDate));
    }
    return interestTimes;
}

function displayNextInterest() {
    const interestTimes = calculateInterestTimes();
    const nextInterest = interestTimes[1];
    document.getElementById("nextInterestTime").textContent = nextInterest;
}

function displayLastInterest() {
    const interestTimes = calculateInterestTimes();
    const lastInterest = interestTimes[0];
    document.getElementById("lastInterestTime").textContent = lastInterest;
}

function displayInterests() {
    const interestContainer = document.getElementById("interestContainer");
    const interests = calculateInterestTimes();
    interestContainer.innerHTML = "";
    for (let i = 1; i < 11; i++) {
        const div = document.createElement("div");
        div.classList.add("interest-item");
        div.textContent = interests[i];
        interestContainer.appendChild(div);
    }
}

function toggleInterestContainer() {
    const content = document.querySelector(".content");
    content.classList.toggle("show");

    const collapsible = document.querySelector(".collapsible");
    if (content.classList.contains("show")) {
        collapsible.innerHTML = "Next Interests (Click to Collapse)";
        content.style.display = "block";
    } else {
        collapsible.innerHTML = "Next Interests (Click to Expand)";
        content.style.display = "none";
    }
}

function updateNextInterestTime() {
    const interestTimes = calculateInterestTimes();
    const lastInterest = interestTimes[0];
    const nextInterest = interestTimes[1];

    document.getElementById("lastInterestTime").textContent = lastInterest;
    document.getElementById("nextInterestTime").textContent = nextInterest;

    displayInterests();
}

function updateProgressBarAndTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - targetTime;

    if (elapsedTime >= 31 * 60 * 60 * 1000) {
        targetTime += 31 * 60 * 60 * 1000;
        updateNextInterestTime();
    }

    const remainingTime = 31 * 60 * 60 * 1000 - elapsedTime;
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    const percentage = (elapsedTime / (31 * 60 * 60 * 1000)) * 100;
    document.getElementById("progressBar").style.width = percentage + "%";
}

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        targetTime += 31 * 60 * 60 * 1000;
        updateNextInterestTime();
    } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        const totalTime = 31 * 60 * 60 * 1000;
        const percentage = (remainingTime / totalTime) * 100;
        document.getElementById("progressBar").style.width = percentage + "%";
    }
}, 1000);

displayNextInterest();
displayLastInterest();
displayInterests();
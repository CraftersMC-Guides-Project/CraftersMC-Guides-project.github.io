const targetTime = new Date('2025-01-26T07:30:00+05:30').getTime();

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
    let interestTimes = [];
    for (let i = 0; i < 50; i++) {
        const nextInterestDate = new Date(targetTime + (i * 31 * 60 * 60 * 1000));
        interestTimes.push(formatTime(nextInterestDate));
    }
    return interestTimes;
}

function displayNextInterest() {
    const interestTimes = calculateInterestTimes();
    const nextInterest = interestTimes[0];
    const lastInterest = new Date(new Date(targetTime) - (31 * 60 * 60 * 1000));
    document.getElementById("nextInterestTime").textContent = nextInterest;
    document.getElementById("lastInterestTime").textContent = formatTime(lastInterest);
}

function displayInterests() {
    const interestContainer = document.getElementById("interestContainer");
    const interests = calculateInterestTimes();
    
    for (let i = 0; i < 10; i++) {
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
    targetTime += 31 * 60 * 60 * 1000;  
    displayNextInterest();
}

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Interest is available now!";
        document.getElementById("progressBar").style.width = "100%";
        updateNextInterestTime();
    } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        const totalTime = targetTime - (new Date('2025-01-25T07:30:00+05:30').getTime());
        const percentage = (remainingTime / totalTime) * 100;
        document.getElementById("progressBar").style.width = percentage + "%";
    }
}, 1000);

displayNextInterest();
displayInterests();
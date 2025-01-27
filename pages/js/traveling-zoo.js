const initialTargetTime = new Date('2025-01-27T14:30:00+05:30').getTime();
let targetTime = initialTargetTime;
const eventDuration = 60 * 60 * 1000;
const intervalDuration = (2 * 24 + 14) * 60 * 60 * 1000;
const eventAlertMessage = `
🦁 Did you know? 🦁 The Creedon NPC is there with his random pets near the spawn inside the event stand area. Go online to buy those pets! 🐾
`;

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

function calculateEventTimes() {
    const eventTimes = [];
    for (let i = 0; i < 50; i++) {
        const nextEventDate = new Date(initialTargetTime + (i * intervalDuration));
        eventTimes.push(formatTime(nextEventDate));
    }
    return eventTimes;
}

function displayNextEvent() {
    const eventTimes = calculateEventTimes();
    const nextEvent = eventTimes[0];
    const lastEvent = new Date(initialTargetTime - intervalDuration);
    document.getElementById("nextEventTime").textContent = nextEvent;
    document.getElementById("lastEventTime").textContent = formatTime(lastEvent);
}

function displayEvents() {
    const eventContainer = document.getElementById("eventContainer");
    const events = calculateEventTimes();

    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        div.classList.add("event-item");
        div.textContent = events[i];
        eventContainer.appendChild(div);
    }
}

function toggleEventContainer() {
    const content = document.querySelector(".content");
    content.classList.toggle("show");

    const collapsible = document.querySelector(".collapsible");
    if (content.classList.contains("show")) {
        collapsible.innerHTML = "Next Events (Click to Collapse)";
        content.style.display = "block";
    } else {
        collapsible.innerHTML = "Next Events (Click to Expand)";
        content.style.display = "none";
    }
}

function updateNextEventTime() {
    targetTime += intervalDuration;
    displayNextEvent();
}

function showEventAlert() {
    const now = new Date().getTime();
    const eventStartTime = targetTime;
    const eventEndTime = targetTime + eventDuration;

    if (now >= eventStartTime && now <= eventEndTime) {
        alert(eventAlertMessage);
    }
}

const timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Event is available now!";
        document.getElementById("progressBar").style.width = "100%";
        updateNextEventTime();
    } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        const totalTime = intervalDuration - initialTargetTime + targetTime;
        const percentage = (remainingTime / totalTime) * 100;
        document.getElementById("progressBar").style.width = percentage + "%";

        showEventAlert();
    }
}, 1000);

displayNextEvent();
displayEvents();
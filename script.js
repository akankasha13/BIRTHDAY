const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date("October 4, 2025 00:00:00 UTC").getTime();
const messageEl = document.getElementById("message");
const confettiContainer = document.getElementById("confetti");

// Countdown update
function updateCountdown() {
  const now = new Date().getTime();
  let distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Confetti function
function showConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.width = confetti.style.height =
      Math.random() * 10 + 5 + "px";
    confettiContainer.appendChild(confetti);
  }
}

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Show confetti immediately on page load
window.addEventListener("load", () => {
  showConfetti();
});

// Confetti animation CSS
const style = document.createElement("style");
style.textContent = `
.confetti-piece {
    position: absolute;
    top: -10px;
    opacity: 0.8;
    border-radius: 50%;
    animation-name: fall;
    animation-timing-function: linear;
}
@keyframes fall {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(360deg); }
}
`;
document.head.appendChild(style);

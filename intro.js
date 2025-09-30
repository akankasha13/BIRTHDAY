document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const modal = document.getElementById("modal");
  const nextBtn = document.getElementById("nextBtn");
  const message = document.getElementById("message");

  function openEnvelope() {
    if (envelope.classList.contains("opening")) return;
    envelope.classList.add("opening");

    // Show inline message
    message.classList.add("show");

    // Show modal after animation
    setTimeout(() => {
      modal.classList.add("show");
    }, 3500);
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });

  nextBtn.addEventListener("click", () => {
    window.location.href = "apology.html";
  });
});
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  window.location.href = "apology.html"; // make sure file name matches
});

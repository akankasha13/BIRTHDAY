document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeBtn");
  const continueBtn = document.getElementById("continueBtn");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");

  const forgivePopup = document.getElementById("forgivePopup");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // Show popup automatically on page load
  overlay.style.display = "block";
  popup.style.display = "block";

  // Close first popup
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
  });

  // Show forgiveness popup
  continueBtn.addEventListener("click", () => {
    popup.style.display = "none";
    forgivePopup.style.display = "block";
    overlay.style.display = "block";
  });

  // Close forgiveness popup on overlay click
  overlay.addEventListener("click", () => {
    forgivePopup.style.display = "none";
    overlay.style.display = "none";
  });

  // Move No button randomly
  function moveNoButton() {
    const parent = noBtn.parentElement;
    const parentWidth = parent.clientWidth - noBtn.offsetWidth;
    const parentHeight = parent.clientHeight - noBtn.offsetHeight;

    const randX = Math.floor(Math.random() * parentWidth);
    const randY = Math.floor(Math.random() * parentHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";
  }

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton);
});
yesBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

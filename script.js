const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const wifeName = "Alaysha";

document.getElementById('question').textContent = `Will you be my Valentine, ${wifeName}? 💕`;

const PROXIMITY = 150; // distance to start dodging
const TELEPORT_THRESHOLD = 50; // if mouse gets too close, teleport

// Initial position
let buttonX = noButton.offsetLeft;
let buttonY = noButton.offsetTop;

// Make the button position absolute
noButton.style.position = "absolute";

// Move button by dx/dy, clamped to viewport
function moveButton(dx, dy) {
    buttonX += dx;
    buttonY += dy;

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    buttonX = Math.max(0, Math.min(maxX, buttonX));
    buttonY = Math.max(0, Math.min(maxY, buttonY));

    noButton.style.left = buttonX + "px";
    noButton.style.top = buttonY + "px";
}

// Teleport button to random location
function teleportButton() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    buttonX = Math.random() * maxX;
    buttonY = Math.random() * maxY;

    noButton.style.left = buttonX + "px";
    noButton.style.top = buttonY + "px";
}

// Handle mouse movement
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rect = noButton.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const dx = btnCenterX - mouseX;
    const dy = btnCenterY - mouseY;
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < PROXIMITY) {
        if (distance < TELEPORT_THRESHOLD) {
            teleportButton(); // immediate escape if too close
        } else {
            const angle = Math.atan2(dy, dx);
            const moveDistance = (PROXIMITY - distance) / 2;
            moveButton(Math.cos(angle) * moveDistance, Math.sin(angle) * moveDistance);
        }
    }
});

// Remove old transform-based teleport; use this instead
noButton.addEventListener('mouseenter', () => {
    teleportButton();
});

// Yes button click
yesButton.addEventListener('click', () => {
    const container = document.querySelector(".container");
    container.classList.add("fade-out");

    startHearts();

    setTimeout(() => {
        container.style.display = "none";
        document.getElementById('message').classList.add("show");
    }, 1000);
});

// Hearts animation
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heart.style.fontSize = 16 + Math.random() * 14 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

function startHearts() {
  const interval = setInterval(spawnHeart, 150);
  setTimeout(() => clearInterval(interval), 6000);
}

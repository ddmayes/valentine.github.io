
const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const wifeName = "Alaysha";

document.getElementById('question').textContent = `Will you be my Valentine, ${wifeName}? 💕`;

noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
      const y = Math.random() * 120 - 60;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener('click', () => {
    const container = document.querySelector(".container");
    container.classList.add("fade-out");

    startHearts();

    setTimeout(() => {
        container.style.display = "none";
        document.getElementById('message').classList.add("show");
    }, 1000);
});

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

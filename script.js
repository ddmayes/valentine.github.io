const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
      const y = Math.random() * 120 - 60;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
})
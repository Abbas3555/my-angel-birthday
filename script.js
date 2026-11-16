const reasons = [
  "Your smile makes ordinary days feel special.",
  "You have a beautiful way of caring.",
  "You have a heart made of gold.",
  "You make little moments mean so much.",
  "You bring warmth wherever you go.",
  "You are stronger than you sometimes realize.",
  "Your kindness never goes unnoticed.",
  "You make me want to be a better person.",
  "You have a heart worth protecting.",
  "The way you see the world is beautiful.",
  "You make distance feel a little smaller.",
  "You deserve every good thing coming your way.",
  "You make me smile without even trying.",
  "You are wonderfully and completely you.",
  "Your dreams deserve to come true.",
  "You make memories feel like treasures.",
  "You have a magic all your own.",
  "You make the world softer.",
  "You are more loved than words can say.",
  "Even quiet moments are special with you.",
  "You make life brighter just by being in it.",
  "Because you're my angel. ♡",
];

const reasonsGrid = document.querySelector("#reasonsGrid");
reasons.forEach((reason, index) => {
  const card = document.createElement("div");
  card.className = "reason";
  card.innerHTML = `<span class="reason-number">${String(index + 1).padStart(2, "0")}</span><span>${reason}</span>`;
  reasonsGrid.appendChild(card);
});

document.querySelector("#openSurprise").addEventListener("click", () => {
  document.querySelector("#letter").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#wishButton").addEventListener("click", () => {
  document.querySelector("#wishMessage").textContent =
    "I hope this year gives you a thousand reasons to smile. Happy 22nd, my angel. ♡";
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > 0.5 ? "♡" : "✧";
    heart.style.cssText = `
      position: fixed; left: ${Math.random() * 100}vw; bottom: -30px;
      color: #d58ba5; font-size: ${16 + Math.random() * 20}px;
      pointer-events: none; z-index: 10; animation: float-up ${2.5 + Math.random() * 2}s ease-out forwards;
    `;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

const style = document.createElement("style");
style.textContent = "@keyframes float-up { to { transform: translateY(-110vh) rotate(35deg); opacity: 0; } }";
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

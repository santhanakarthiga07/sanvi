function goToStep2() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function goToStep3() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function finalYes() {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  createHearts();
}

/* Moving NO Button */
function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Floating Hearts Animation */
function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

let score = 0;
let timeLeft = 30;
let gameInterval;
let moleTimeout;
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameOverScreen = document.getElementById('gameOver');
const finalScore = document.getElementById('finalScore');
const startBtn = document.getElementById('startBtn');

function clearMoles() {
  holes.forEach(hole => {
    hole.innerHTML = ''; // очищает молей
  });
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = 'Score: 0';
  timeDisplay.textContent = 'Time: 30s';
  gameOverScreen.classList.add('hidden');
  startBtn.classList.add('hidden');
  clearMoles();

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  popMole();
}

function popMole() {
  if (timeLeft <= 0) return;

  clearMoles();

  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  const mole = document.createElement('div');
  mole.classList.add('mole');

  mole.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    mole.remove();
  });

  hole.appendChild(mole);

  moleTimeout = setTimeout(() => {
    if (timeLeft > 0) {
      popMole();
    }
  }, 800);
}

function endGame() {
  clearInterval(gameInterval);
  clearTimeout(moleTimeout);
  clearMoles();

  finalScore.textContent = score;
  gameOverScreen.classList.remove('hidden');
}

startBtn.addEventListener('click', startGame);

// VANTA BACKGROUND
VANTA.NET({
  el: "body",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ff88,
  backgroundColor: 0x001a0e,
  points: 12.0,
  maxDistance: 20.0,
  spacing: 15.0
});

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartButton = document.querySelector('.restart-button');
const scoreSpan = document.querySelector('.score span');

let isGameOver = false;
let score = 0;

const jump = () => {
  if (isGameOver) return;
  
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const restartGame = () => {
  location.reload();
};

const updateScore = () => {
  score++;
  scoreSpan.textContent = score;
};

const gameOver = () => {
  pipe.style.animation = 'none';
  mario.style.animation = 'none';
  mario.src = './game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';
  restartButton.style.display = 'block';
  isGameOver = true;
};

restartButton.addEventListener('click', restartGame);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
    gameOver();
    clearInterval(loop);
  } else if (pipePosition === 0) {
    updateScore();
  }
}, 10);

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});

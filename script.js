const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartButton = document.querySelector('.restart-button');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const restartGame = () => {
  location.reload();
};

const gameOver = () => {
  pipe.style.animation = 'none';
  mario.style.animation = 'none';
  mario.src = './game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';
  restartButton.style.display = 'block';
};

restartButton.addEventListener('click', restartGame);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
    gameOver();
    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    

    const board = document.getElementById('game-board');
    board.style.backgroundImage = "url('./images/road.png')";
    board.style.backgroundPosition = "center";
    board.style.backgroundRepeat = "no-repeat";
    board.style.backgroundSize = "cover";
  }
};


class Game {
  constructor(){
    this.frames = 0;
    this.points = 0;
  }
}
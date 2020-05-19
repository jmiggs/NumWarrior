import Board from './board';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.restart();
  }

  restart() {
    this.board = new Board(this.dimensions)
    this.animate();
  }

  animate() {
    this.board.animate(this.context)

  }



}
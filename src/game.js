import Board from './board';
import Player from './player';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.board = new Board(this.dimensions)
    this.player = new Player(this.board, this.context);

    this.restart = this.restart.bind(this)
    this.board.animate(this.context)

    this.restart();
    
  }
  
  restart(timestamp) {
    
    this.registerListeners();
    this.init();
    
    console.log('hey')
    // requestAnimationFrame(this.restart)
  }
  
  init() {
    this.player.animate(this.context)
  }

  registerListeners() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(e) {
    // console.log(e)
    this.player.move(e);
    this.board.updateBoard(this.context);

    // requestAnimationFrame(this.handleKeyDown.bind(this))
  }



}
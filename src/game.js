import Board from './board';
import Player from './player';
import Objective from './objective';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.board = new Board(this.dimensions)
    this.player = new Player(this.board, this.context);
    this.obj = new Objective(this.board, this.context)

    this.restart = this.restart.bind(this)
    
    this.restart();
    
  }
  
  restart(timestamp) {
    
    this.registerListeners();
    this.init(this.context);
    
    // console.log('hey')
    requestAnimationFrame(this.restart)
  }
  
  init(c) {
    
    // c.clearRect(0,0, 440, 440);
    // this.board.updateBoard(this.context);
    this.board.animate(this.context)
    this.player.animate(this.context);


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
import Board from './board';
import Player from './player';
import Objective from './objective';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    // this.board = new Board(this.dimensions)
    this.player = new Player(this.board, this.context);
    this.obj = new Objective(this.board, this.context);
    this.frameCount = 0

    this.run = this.run.bind(this)
    // this.board.animate(this.context)

    this.run();
    
  }
  
  run(c) {
    this.frameCount += 1;

    if (this.frameCount < 10) {
      requestAnimationFrame(this.run);
      return
    }

    this.frameCount = 0;
    this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height)
    this.player.animate(this.context);
    this.registerListeners();


    // console.log(i)
    // this.init(this.context);
    // console.log('hey')
    requestAnimationFrame(this.run)

  }
  
  init(c) {
    
    // c.clearRect(0,0, 440, 440);
    // this.board.updateBoard(this.context);


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
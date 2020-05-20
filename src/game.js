import Board from './board';
import Player from './player';
import Objective from './objective';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    // this.board = new Board(this.dimensions)
    this.player = new Player(this.board, this.context);
    this.obj = new Objective(this.board, this.context)

    this.run = this.run.bind(this)
    // this.board.animate(this.context)

    this.run();
    
  }
  
  run(c) {
    // console.log(this.context);
    // let c = canvas
    // const loop = [1,2,3,4,5,6,7,8,9,10,11];
    // let i = 0;

    this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height)
    this.player.animate(this.context);


    // console.log(i)
    // this.registerListeners();
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
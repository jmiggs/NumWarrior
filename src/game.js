import Board from './board';
import Player from './player';
import ObjController from './obj_controller'

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.board = new Board(this.dimensions);
    this.objController = new ObjController(this.board, this.context);
    this.player = new Player(this.board, this.context, this.objController);
    this.frameCount = 0;

    this.run = this.run.bind(this);
    // this.board.animate(this.context)

    this.run();
    this.registerListeners();
    
  }
  
  run(c) {
    this.frameCount += 1;

    if (this.frameCount < 2) {
      requestAnimationFrame(this.run);
      return
    }

    this.frameCount = 0;
    this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);
    this.board.animate(this.context);
    this.objController.animatePigs(this.context);
    this.player.animate(this.context);
  
    requestAnimationFrame(this.run);
  }
  

  registerListeners() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(e) {

    if (e.key === 'Enter') {
      this.player.attacking = true;
      this.player.attack(e);
    }
    // console.log(this.player.attacking)
    this.player.move(e);

  }



}
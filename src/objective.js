

export default class Objective {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx;
    this.img = new Image;
    this.img.src = '../assets/pig.png';
    this.posX = 28;
    this.posY = -10;
    this.pos = [this.posX, this.posY];
    this.frame = 0;
    this.scale = board.tsize;



  }

  drawFrame(ctx, frame){
    let x = 34;
    ctx.drawImage(this.img, x*frame, 0, 38, 28 , this.posX+(this.scale*4), this.posY, 45, 45);
  }

  animate(ctx) {

    const loop = [1,2,3,4,5,6,7,8,9,10];

    if (this.frame > 9) {
      this.frame = 0;
    }
    this.drawFrame(ctx, loop[this.frame]);
    this.frame += 1;

  }




}
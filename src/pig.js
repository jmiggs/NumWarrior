

export default class Pigs {
  constructor(board, gridX, gridY) {
    // this.board = board;
    // this.ctx = ctx;
    this.posOffX = 28;
    this.posOffY = -10;
    this.gridPosX = gridX;
    this.gridPosY = gridY;
    this.pos = [gridX, gridY]
    this.frame = 0;
    this.scale = board.tsize;
    
    this.img = new Image;
    this.img.src = '../assets/pig.png';
  }

  drawFrame(ctx, frame){
    let x = 34;
    let scaleX = this.scale*this.gridPosX;
    let scaleY = this.scale*this.gridPosY;

    ctx.drawImage(this.img, x*frame, 0, 38, 28 , (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45);
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
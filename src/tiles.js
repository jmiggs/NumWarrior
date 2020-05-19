
export default class Tiles {
  constructor(tsize) {
    this.tsize = tsize
    this.number = Math.floor(Math.random() * 10); 
  }


  drawTile(ctx, xoff, yoff) {

    ctx.fillStyle = 'black';
    ctx.font = "20px Georgia";
    ctx.fillText(this.number, xoff, yoff)   
  }

  getTileNum() {
    return this.number
  }




}
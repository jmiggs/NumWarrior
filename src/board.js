import Tiles from './tiles';

const BG_IMG = new Image();
BG_IMG.src = '../assets/terrain.png'


// board shape = [
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1]
// ]



export default class Board {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.cols = 8;
    this.rows = 8;
    this.tsize = 52;
    this.tiles = [];
    this.status = false;
  }

  loadImage() {
    var img = new Image;
    img.src = '../assets/terrain.png';
    img.onload = function() {}

    this.img = img;
  }

  animate(ctx) {
    this.drawBackground(ctx)
    this.drawBoard(ctx);
    setTimeout( ()=> {
    this.drawTiles(ctx);
    }, 50)
    // this.status = true;
  }
  
  drawBoard(ctx) {
    function createImage(x,y) {
  
        ctx.drawImage(BG_IMG, 320, 224, 62, 62, x,y, 51, 51);
        // ctx.fillStyle = 'black';
        // ctx.font = "20px Georgia";
        // ctx.fillText('0', x-20, y-20)
        // setTimeout( ()=> {
        //   ctx.fillStyle = 'black';
        //   ctx.font = "20px Georgia";
        //   ctx.fillText('0', x-20, y-20)
        // }, 0)
      // this.img = img;
    }
    for (var c = 0, x=12; c < this.cols; c++, x+=this.tsize) {
      for (var r = 0, y=12; r < this.rows; r++, y+=this.tsize) {
        ctx.drawImage(BG_IMG, 320, 224, 62, 62, x,y, 51, 51);
      }
    }
  }

  drawBackground(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  drawTiles(ctx) {

    console.log(this.status)
    if (!this.status) {
    for (var c = 0; c < this.cols; c++) {
      let gridr = []
      for (var r = 0; r < this.rows; r++) {

        let xoff = 12 + c*this.tsize + 22
        let yoff = 12 + r*this.tsize + 31

        let num = Math.floor(Math.random() * 10);

        if (c > 0 && this.tiles[c-1][r] === num) {
          num = Math.floor(Math.random() * 10);
        }

        let tile = new Tiles(this.tsize, num);
        gridr.push(tile);
       

        tile.drawTile(ctx, xoff, yoff)


        // ctx.fillStyle = 'black';
        // ctx.font = "20px Georgia";
        // ctx.fillText('0', xoff, yoff)       
      }
      this.tiles.push(gridr)
    }
    this.status = true;
  }
  }

  updateBoard(ctx) {
    // ctx.clearRect(0,0, 440, 440);
    this.drawBackground(ctx);
    this.drawBoard(ctx);
    // this.updateTiles(ctx);
  }

  updateTiles(ctx) {
    console.log(this.status)
    if (this.status) {

    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        
        let xoff = 12 + i*this.tsize + 22
        let yoff = 12 + j*this.tsize + 31
    

        let tile = this.tiles[i][j];

       setTimeout( () =>
        tile.drawTile(ctx, xoff, yoff)
       )
      }
    }
  }
  }



}
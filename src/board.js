import Tiles from './tiles';


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
  }



  animate(ctx) {
    this.drawBackground(ctx)
    this.drawBoard(ctx);
    setTimeout( ()=> {
    this.drawTiles(ctx);
    }, 50)
  }
  
  drawBoard(ctx) {
    function createImage(x,y) {
      var img = new Image;
      img.src = '../assets/scifitiles-sheet.png';
      img.onload = function() {
  
        ctx.drawImage(img, 191, 31, 33, 33, x,y, 51, 51);
        // ctx.fillStyle = 'black';
        // ctx.font = "20px Georgia";
        // ctx.fillText('0', x-20, y-20)
        // setTimeout( ()=> {
        //   ctx.fillStyle = 'black';
        //   ctx.font = "20px Georgia";
        //   ctx.fillText('0', x-20, y-20)
        // }, 0)
      }
    }
    
    for (var c = 0, x=0; c < this.cols; c++, x+=this.tsize) {
      for (var r = 0, y =0; r < this.rows; r++, y+=this.tsize) {
        console.log(r,c)
        createImage(x,y);
      }
    }



  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  drawTiles(ctx) {
    for (var c = 0; c < this.cols; c++) {
      let gridr = []
      for (var r = 0; r < this.rows; r++) {

        let tile = new Tiles(this.tsize);
        gridr.push(tile);

        let xoff = 0 + c*this.tsize + 22
        let yoff = 0 + r*this.tsize + 31

        tile.drawTile(ctx, xoff, yoff)

        // ctx.fillStyle = 'black';
        // ctx.font = "20px Georgia";
        // ctx.fillText('0', xoff, yoff)       
      }
      this.tiles.push(gridr)
    }

    console.log(this.tiles)
  }


  getTile(col, row) {

  }





}
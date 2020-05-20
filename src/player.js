

export default class Player {
  constructor(board, ctx) {
    this.pos = [0,0];
    this.posx = 2;
    this.posy = -5;
    this.vel  = board.tsize
    this.context = ctx;
    this.board = board;
    this.validMoves = {};
    this.dirs = {
      left: [-1,0],
      right: [1, 0],
      up: [0,-1],
      down: [0, 1]
    };

    this.loadimage = this.loadimage.bind(this)
  }

  loadimage() {
    var img = new Image;
    img.src = '../assets/kingidle.png';
    img.onload = function() {
      // this.imgload = true
    }
    this.img = img

  }

  animate(ctx) {
    if (!this.img) {this.loadimage()}
    // will create idle animation for the player
    // var img = new Image;
    // img.src = '../assets/kingidle.png';
    // only for initial load, then save as variable for easy access
    // img.onload = function() {
    setInterval( () => {
      ctx.drawImage(this.img, 0, 0, 55, 45, this.posx, this.posy, 65, 65);
    //   // console.log(this)
    },)    
    // }

    // ctx.fillStyle= 'red';
    // ctx.fillRect(0,0,50,50);

 


  }

  move(e) {

    this.getValidMoves(this.dirs);
    // this.isValidMove(this.board, e)

    if (this.isValidMove(this.board, e)) {
      // this.posx += this.vel;
      // this.posy += this.vel;
      this.animate(this.context, e);
      this.validMoves = {};

    }
  }

  // drawNewPosition(ctx, e) {

  //   setInterval( () =>
  //     ctx.drawImage(this.img, 0, 0, 55, 45, this.posx, this.posy, 65, 65)
  //   )
  // }

  getValidMoves(dirs) {
    var dirKeys = Object.keys(dirs);
   

    for (let i = 0; i < dirKeys.length; i++) {
      let currX = this.pos[0];
      let currY = this.pos[1];

      let dirX = dirs[dirKeys[i]][0];
      let dirY = dirs[dirKeys[i]][1];

      let newX = currX + dirX;
      let newY = currY + dirY;


      if (newX >= 0 && newY >= 0) {
        if (newX < 8 && newY < 8) {
          this.validMoves[dirKeys[i]] = [newX, newY]
        }
      }


    }

  }

  isValidMove(board, e) {
    // console.log(this.board.tiles);
    let valMoves = Object.keys(this.validMoves)
    
    for (let i = 0; i < valMoves.length; i++) {

      let x =  this.validMoves[valMoves[i]][0];
      let y =  this.validMoves[valMoves[i]][1];



      if (board.tiles[x][y].number === parseInt(e.key, 10)) {

        this.pos = this.validMoves[valMoves[i]]

        if (valMoves[i] === 'up') {
          this.posy -= this.vel;
          return true;
        }
        if (valMoves[i] === 'down') {
          this.posy += this.vel;
          return true;

        }
        if (valMoves[i] === 'left') {
          this.posx -= this.vel;
          return true;
        }

        if (valMoves[i] === 'right') {
          this.posx += this.vel;
          return true
        }
      }
    }
  }







}
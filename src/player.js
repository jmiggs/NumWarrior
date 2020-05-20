import ObjController from './obj_controller';

export default class Player {
  constructor(board, ctx, objCont) {
    this.pos = [0,0];
    this.posx = 2;
    this.posy = -5;
    this.vel  = board.tsize
    this.board = board;
    this.objController = objCont;
    this.context = ctx;
    this.validMoves = {};
    this.nextMove = null;
    this.frame = 0;
    this.attackFrame = 0;
    this.attacking = false


    this.dirs = {
      left: [-1,0],
      right: [1, 0],
      up: [0,-1],
      down: [0, 1]
    };
  
    
    this.img = new Image;
    this.img.src = '../assets/kingidle.png';

    this.aimg = new Image;
    this.aimg.src = '../assets/attack.png';

    // this.loadimage = this.loadimage.bind(this)
  }


  drawFrame(ctx, frame){
    let x = 78;

    ctx.drawImage(this.img, x*frame, 0, 65, 55 , this.posx, this.posy, 75, 75);
  }

  drawAction(ctx, frame){
    let x = 78;

    ctx.drawImage(this.aimg, x*frame, 0, 75, 70, this.posx, this.posy, 75, 75 )
  }

  animate(ctx) {

    const loop = [0,1,2,3,4,5,6,7,8,9,10];

    if (this.attacking) {
      this.drawAction(ctx, loop[this.attackFrame] );
      this.attackFrame += 1;

      // console.log(this.attackFrame)
      if (this.attackFrame > 3) {
        this.attackFrame = 0;
        this.attacking = false;
      }
    } else {
    
    if (this.frame > 10) {
      this.frame = 0;
    }
    this.drawFrame(ctx, loop[this.frame]);
    // console.log(this.frame)
    this.frame += 1;
  }
  }

  move(e) {

    this.getValidMoves(this.dirs);

    if (this.isValidMove(this.board, e)) {
      this.updatePos(this.nextMove);
      this.validMoves = {};
    }
  }

  attack(ctx) {
    // console.log(this.board.pigs)
    // console.log(this.pos)

    for (let i = 0; i < this.board.pigs.length; i++) {
      let targetPigPos = this.board.pigs[i].pos;
      
      if (this.pos[0] === targetPigPos[0] && this.pos[1] === targetPigPos[1] ) {
        let targetPig = this.board.pigs[i];
        this.objController.removePig(targetPig)
     
      }
    }
  }
 

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
        this.pos = this.validMoves[valMoves[i]];
        this.nextMove = valMoves[i];
        return true;
      }
    }
  }

  updatePos(move) {
    if (move === 'up') {
    this.posy -= this.vel;
    return true;
    }
    if (move === 'down') {
    this.posy += this.vel;
    return true;

    }
    if (move === 'left') {
    this.posx -= this.vel;
    return true;
    }

    if (move === 'right') {
    this.posx += this.vel;
    return true;
    }

  }

}
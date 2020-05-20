import Pig from './pig'


export default class ObjController {
  constructor(board, ctx) {
    this.board = board;
    this.pigs = [];
    this.maxPigs = 4;
    this.status = false;


    this.generatePigs();
  }

  generatePigs() {
    for (let i = 0; i < this.maxPigs; i++) {
      let pigX = Math.floor(Math.random() * (8-0) )
      let pigY = Math.floor(Math.random() * (8-0) )

      let pig = new Pig(this.board, pigX, pigY);

      this.pigs.push(pig);
      this.board.pigs.push(pig);
    }
    this.status = true;
    // console.log(this.pigs);
  }

  animatePigs(ctx) {
    if (this.status) {
      for (let i = 0; i < this.pigs.length; i++) {
        let pig = this.pigs[i];

        pig.animate(ctx);
      }
    }
  }

  removePig(pig) {

    for (let i = 0; i < this.pigs.length; i++) {
      let currPigPos = this.pigs[i].pos;

      console.log(pig.pos, currPigPos)
      if (currPigPos[0] === pig.pos[0] && currPigPos[1] === pig.pos[1]) {
        // console.log('hit')
        this.pigs.splice(i, 1);
        if (this.pigs.length === 0) {
          this.generatePigs();
        }
        return
      }
    }
  }




}
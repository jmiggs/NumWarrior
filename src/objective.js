

export default class Objective {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx
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


  }



}
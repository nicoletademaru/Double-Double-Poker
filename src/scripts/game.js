import Board from "./board";

Object.prototype.isValid = function(xclick, yclick) {
  let x = this.pos[0];
  let y = this.pos[1]
  let x2 = this.pos[0] + this.width;
  let y2 = this.pos[1] + this.height;

  if (xclick < x || xclick > x2 || yclick < y || yclick > y2) {
    return false;
  }
  return true;
}


class Game {
  constructor(ctx) {
    this.board = new Board(ctx);
    this.bet = 1
    this.showBet(ctx)
  }

  buttonClicks(ctx, x, y) {
    let buttons = this.board.buttons
    ctx.fillText(`Bet: ${this.bet}`, 475, 565);

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].isValid(x,y) )
        if (i === 0) {
          this.bet += 1
        }
        else if (i === 1)
          this.bet -= 1
        else if (i === 2) 
          console.log("play max bet")
        else 
          console.log("deal cards")
    }
  }

  showBet(ctx) {
    
    ctx.font = '17px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Bet: ${this.bet}`, 475, 565);
  }

}

export default Game;
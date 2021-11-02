import Board from "./board";
import Card from "./card";
let SUITS = { 1: "heart", 2: "diamond", 3: "club", 4: "spade" }
let VALUES = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  10: "J",
  11: "Q",
  12: "K",
  13: "A"
}

class Game {
  constructor(ctx) {
    this.board = new Board(ctx);
    this.bet = 1
    this.deck = this.createDeck();
    this.showBet(ctx);
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

  createDeck() {
    let deck = {}
    let cardImg = new Image();
    cardImg.src = "deck.png"
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 14; j++) {
        let key = SUITS[i][0] + VALUES[j]

        deck[key] = new Card({
          value: VALUES[j],
          suit: SUITS[i],
          sx: 81 * (j-1),
          sy: 117.4 * (i-1)
        })
      }
    }
    return deck;
  }

  dealCards() {
    

  }



}

Object.prototype.isValid = function (xclick, yclick) {
  let x = this.pos[0];
  let y = this.pos[1]
  let x2 = this.pos[0] + this.width;
  let y2 = this.pos[1] + this.height;

  if (xclick < x || xclick > x2 || yclick < y || yclick > y2) {
    return false;
  }
  return true;
}

export default Game;
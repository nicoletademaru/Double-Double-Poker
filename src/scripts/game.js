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
    this.currHand = [];
  }

  buttonClicks(ctx, x, y) {
    let buttons = this.board.buttons
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].isValid(x,y) )
        if (i === 0) {
          if (this.bet === 5)
            this.bet = 5;
          else
            this.bet += 1;
          this.showBet(ctx);
        }
        else if (i === 1) {
          if (this.bet === 1)
            this.bet = 1;
          else
            this.bet -= 1;
          this.showBet(ctx);
        }
        else if (i === 2) {
          this.bet = 5;
          this.dealCards(ctx);
          this.showBet(ctx);
        }
        else 
          this.dealCards(ctx);
    }
  }

  holdCard() {

  }

  showBet(ctx) {
    ctx.font = '900 30.1px Courier New';
    ctx.textAlign = 'center';
    let clear = ctx.clearRect(435, 540, 90, 40);
    ctx.strokeText(`BET ${this.bet}`, 475, 570);

    ctx.font = 'bolder 30px Courier New';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red'
    ctx.fillText(`BET ${this.bet}`, 475, 570);
  }

  createDeck() {
    let deck = {}
    let p = 0
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 14; j++) {
          deck[p] = new Card({
          value: VALUES[j],
          suit: SUITS[i],
          sx: 81 * (j-1),
          sy: 117.4 * (i-1)
        })
        p++
      }
    }
    return deck;
  }

  dealCards(ctx) {
    for (let i = 0; i < 5; i++) {
      let randomCard = Math.floor(Math.random() * 52);
      this.currHand.push(this.deck[randomCard])
      delete this.deck[randomCard]
      console.log(this.deck)
    }

    let i = 0
    setInterval(() => {
      if (i < 5) {
        this.currHand[i].draw(ctx, this.board.cardPos[i]);
        i++
      }
    }, 500)
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
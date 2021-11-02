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
    this.bet = 1;
    this.credit = 100;
    this.deck = this.createDeck();
    this.start = false;
    this.showBet(ctx);
    this.currHand = [];
  }

  buttonClicks(ctx, x, y) {
    let buttons = this.board.buttons
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].isValid(x,y) )
      // Increase bet by 1 if game has not started
        if (i === 0 && this.start === false) {
          if (this.bet === 5)
            this.bet = 5;
          else
            this.bet += 1;
        }
        // Decrease bet by 1 if game has not started 
        else if (i === 1 && this.start === false) {
          if (this.bet === 1)
            this.bet = 1;
          else
            this.bet -= 1;
        }
        // Start game with max bet of 5 and subtract from total credits
        else if (i === 2 && this.start === false) {
          this.bet = 5;
          this.credit -= 5
          this.start = true;
          this.dealCards(ctx);
        }
        // Start game with current bet and subtract from total credits
        else if (i === 3) {
          this.start = true;
          this.credit -= this.bet;
          this.dealCards(ctx);

        }
      this.showBet(ctx);
    }
  }

  cardClicks(ctx, x, y) {
    let cards = this.currHand;
    for (let i = 0; i < cards.length; i++) {
      console.log("clicked")
      // With a valid click, switch the card.held value if the game has started
      console.log(cards[i])
      if (cards[i].isValid(x,y) && this.start === true) {
        if (cards[i].held === true)
          cards[i].held = false;
        else
          cards[i].held = true;

      }
    }
  }

  showBet(ctx) {
    // Print out current bet
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'center';
    ctx.clearRect(435, 568, 90, 40);
    ctx.strokeText(`BET ${this.bet}`, 475, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red'
    ctx.fillText(`BET ${this.bet}`, 475, 605);

    // Print out current credits
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'right';
    ctx.clearRect(720, 568, 200, 40);
    ctx.strokeText(`CREDIT ${this.credit}`, 920, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'right';
    ctx.fillStyle = 'red'
    ctx.fillText(`CREDIT ${this.credit}`, 920, 605);
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
    while (this.currHand.length !== 5) {
      let rand = Math.floor(Math.random() * 52);
      if (this.deck[rand] !== undefined) {
        this.currHand.push(this.deck[rand]);
        delete this.deck[rand];
      }
    }

    // Print out cards every 0.5 seconds
    let i = 0
    setInterval(() => {
      if (i < 5) {
        this.currHand[i].pos = this.board.cardPos[i];
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
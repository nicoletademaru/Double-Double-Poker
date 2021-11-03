import Board from "./board";
import Card from "./card";
import WinningHand from "./winning_hand"

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
    this.deck = this.resetDeck(ctx);
    this.start = false;
    this.currHand = [];
    this.showStats(ctx);
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
          this.resetDeck(ctx);
          this.currHand = [];
          this.bet = 5;
          this.credit -= 5
          this.dealCards(ctx);
          this.start = true;
        }
        // Start game with current bet and subtract from total credits
        else if (i === 3 && this.start === false) {
            console.log("NEW GAME")
            this.resetDeck(ctx);
            this.currHand = [];
            this.credit -= this.bet;
            this.dealCards(ctx);
            this.start = true;
        } else if (i === 3 && this.start === true) {
            this.dealCards(ctx);
            this.start = false
            console.log(this.currHand)
            let finalHand = new WinningHand(this.currHand)
            console.log(`pair ${finalHand.straight()}`);
          console.log(`pair ${finalHand.straightFlush()}`);

        }
      this.showStats(ctx);
    }
  }

  cardClicks(ctx, x, y) {
    let cards = this.currHand;
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];

      if (card.isValid(x,y) && this.start === true) {
        if (card.held === true) {
          ctx.clearRect(card.pos[0], card.pos[1], 100, -40);
          card.held = false;
        } else {
        // Add "held" above the card
          ctx.font = '900 21px Arial';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'white'
          ctx.fillText(`HELD`, card.pos[0] + 71, card.pos[1] - 5);
          card.held = true;
        }
      }
    }
  }

  showStats(ctx) {
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
    ctx.clearRect(720, 568, 205, 40);
    ctx.strokeText(`CREDIT ${this.credit}`, 920, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'right';
    ctx.fillStyle = 'red'
    ctx.fillText(`CREDIT ${this.credit}`, 920, 605);

    // Print out "DRAW" or "DEAL" based on game
    if (this.start === false) {
      ctx.clearRect(820, 623, 200, 100);
      this.board.buttons[3].draw(ctx)
      this.board.buttons[3].populate(ctx, "DEAL")
    } else {
      ctx.clearRect(820, 623, 200, 100);
      this.board.buttons[3].draw(ctx)
      this.board.buttons[3].populate(ctx, "DRAW")
    }
  }

  resetDeck(ctx) {
    ctx.clearRect(70, 320, 800, 300)
    let newDeck = {}
    let p = 0
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 14; j++) {
          newDeck[p] = new Card({
          value: VALUES[j],
          suit: SUITS[i],
          sx: 81 * (j-1),
          sy: 117.4 * (i-1)
        })
        p++
      }
    }
    this.deck = newDeck;
  }

  dealCards(ctx) {
    // Deal all five cards at the start of a game
    // if (this.start === false) {
    //     while (this.currHand.length !== 5) {
    //     let rand = Math.floor(Math.random() * 52);
    //     if (this.deck[rand] !== undefined) {
    //       this.currHand.push(this.deck[rand]);
    //       delete this.deck[rand];
    //     }
    //   }
    // } 
      if (this.start === false) {
        let test = [18,19,20,21,22]
        for (let i = 0; i < test.length; i++) {
          this.currHand.push(this.deck[test[i]])
        }
      }
      else {
    // Draw new cards for the ones that were not held
        for (let i = 0; i < 5; i++) {
          if (this.currHand[i].held === false) {
            let rand = Math.floor(Math.random() * 52);
            while (this.deck[rand] === undefined) {
              rand = Math.floor(Math.random() * 52);
            }

            this.deck[rand].pos = this.currHand[i].pos;
            this.currHand[i] = this.deck[rand];
            delete this.deck[rand];
        }
      }
      this.start = false
    }

    // Print out cards every 0.5 seconds
    let i = 0
    setInterval(() => {
      if (i < 5) {
        this.currHand[i].pos = this.board.cardPos[i];
        this.currHand[i].draw(ctx, this.board.cardPos[i]);
        i++
      }
    }, 200)
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
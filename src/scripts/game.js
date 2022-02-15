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
const PAYOUTS = {
  1: [250, "ROYAL FLUSH", "royalFlush"],
  2: [50, "STRAIGHT FLUSH", "straightFlush"],
  3: [400, "FOUR ACES WITH ANY 2,3,4", "fourAandKicker"],
  4: [160, "FOUR 2s, 3s, 4s w/ANY A,2,3,4", "four234andKicker"],
  5: [160, "FOUR ACES", "fourA"],
  6: [80, "FOUR 2s, 3s, 4s", "four234"],
  7: [50, "FOUR 5s THRU KINGS", "fours"],
  8: [9, "FULL HOUSE", "fullHouse"],
  9: [6, "FLUSH", "flush"],
  10: [4, "STRAIGHT", "straight"],
  11: [3, "THREE OF A KIND", "threeofaKind"],
  12: [1, "TWO PAIR", "twoPair"],
  13: [1, "JACKS OR BETTER", "jacksOrBetter"]
};

class Game {
  constructor(ctx) {
    this.board = new Board(ctx);
    this.bet = 1;
    this.credit = 100;
    this.deck = this.resetDeck(ctx);
    this.start = false;
    this.payout = 0;
    this.win = "";
    this.currHand = [];
    this.tableHighlight(ctx);
    this.showStats(ctx);
    // this.board.instructions(ctx);
    // console.log(this.board.buttons)
  }


  tableHighlight(ctx) {
    ctx.fillStyle = "#17015A"
    ctx.fillRect(30, 16, 890, 267);
    ctx.fillStyle = "#D70115";
    ctx.fillRect(225+(115* this.bet), 17, 115, 270);
    this.board.addColumns(ctx)
    this.board.populateColumns(ctx);
  }


  buttonClicks(ctx, x, y) {
    let buttons = this.board.buttons
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].isValid(x,y) )
      // Increase bet by 1 if game has not started
        if (i === 0 && this.start === false) {
          if (this.bet === 5) {
            this.bet = 5;
            this.tableHighlight(ctx);
            this.showStats(ctx);
          } else {
            this.bet += 1;
            this.tableHighlight(ctx);
            this.showStats(ctx);
          }
        }
        // Decrease bet by 1 if game has not started 
        else if (i === 1 && this.start === false && this.credit !== 0) {
          if (this.bet === 1) {
            this.bet = 1;
            this.tableHighlight(ctx); 
            this.showStats(ctx);
          } else {
            this.bet -= 1;
            this.tableHighlight(ctx);
            this.showStats(ctx);
          }
        }
        // Start game with max bet of 5 and subtract from total credits
        else if (i === 2 && this.start === false && this.credit !== 0) {
          this.resetDeck(ctx);
          this.payout = 0;
          this.currHand = [];
          this.bet = 5;
          this.credit -= 5
          this.tableHighlight(ctx);
          this.dealCards(ctx);
          this.start = true;
          this.showStats(ctx);
        }
        // Start game with current bet and subtract from total credits
        else if (i === 3 && this.start === false && this.credit > 0) {
          this.resetDeck(ctx);
          this.currHand = [];
          this.payout = 0;
          this.credit -= this.bet;
          this.tableHighlight(ctx);
          this.dealCards(ctx);
          this.start = true;
          this.showStats(ctx);
      } else if (i === 3 && this.start === true && this.credit > 0) {
          this.dealCards(ctx);
          this.start = false
          this.checkWin(ctx)
          this.showStats(ctx);
      } else if (i === 4 && this.board.buttons[i].clicked === false) {
          ctx.lineWidth = 7;
          this.board.instructions(ctx);
          this.board.buttons[i].clicked = true;
      } else if (i === 4) {
          ctx.clearRect(0,0,950,680)
          this.board.addButtons(ctx);
          this.showStats(ctx);
          this.tableHighlight(ctx)
          this.drawCards(ctx)
          this.board.buttons[i].clicked = false
      }
    }

  }

  drawCards(ctx) {
    for (let i = 0; i < 5; i++) {
      this.currHand[i].draw(ctx, this.currHand[i].pos);
      }
  }

  cardClicks(ctx, x, y) {
    let cards = this.currHand;
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];

      if (card.isValid(x,y) && this.start === true) {
        if (card.held === true) {
          ctx.clearRect(card.pos[0], card.pos[1], 130, -40);
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
    ctx.lineWidth = 7;
    // Print out current bet
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'center';
    ctx.clearRect(435, 568, 90, 45);
    ctx.strokeText(`BET ${this.bet}`, 475, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#D70115'
    ctx.fillText(`BET ${this.bet}`, 475, 605);

    // Print out current credits
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'right';
    ctx.clearRect(680, 568, 245, 45);
    ctx.strokeText(`CREDIT ${this.credit}`, 920, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#D70115'
    ctx.fillText(`CREDIT ${this.credit}`, 920, 605);

    // Print out "DRAW" or "DEAL" based on game
    if (this.start === false) {
      ctx.clearRect(820, 623, 200, 100);
      ctx.fillStyle = "#F0E222"
      this.board.buttons[3].draw(ctx)
      this.board.buttons[3].populate(ctx, "DEAL")
    } else {
      ctx.clearRect(820, 623, 200, 100);
      this.board.buttons[3].draw(ctx)
      this.board.buttons[3].populate(ctx, "DRAW")
    }
  }

  showWinsStats(ctx) {
    ctx.beginPath();
    // show winnings
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'left';
    ctx.clearRect(435, 568, 90, 50);
    ctx.strokeText(`WIN ${this.payout}`, 25, 605);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#D70115'
    ctx.fillText(`WIN ${this.payout}`, 25, 605);

    // show winning hand
    ctx.font = '900 32.1px Courier New';
    ctx.textAlign = 'center';
    ctx.clearRect(475, 305, 90, 40);
    ctx.strokeText(`${this.win}`, 475, 325);

    ctx.font = 'bolder 32px Courier New';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#BF0217'
    ctx.fillText(`${this.win}`, 475, 325);
    ctx.closePath();
  }

  checkWin(ctx) {
    let final = new WinningHand(this.currHand)
    for (let i = 1; i < 14; i++) {
      let func = PAYOUTS[i][2]

      if (final[func]() === true && i === 1 && this.bet === 5) {
        this.payout += PAYOUTS[i][0] * 16;
        this.win = PAYOUTS[i][1];
        this.credit += this.payout;
        ctx.beginPath();
        ctx.fillStyle = "#3C01C8";
        ctx.fillRect(34.5, 0 + (21 * i), 305, 21);
        ctx.fillStyle = "#F0E222"
        ctx.closePath();
        this.board.populateColumns(ctx);
        this.showStats(ctx);
        this.showWinsStats(ctx)
        break;
      }
      else if (final[func]() === true) {
        this.payout += PAYOUTS[i][0] * (this.bet);
        this.win = PAYOUTS[i][1];
        this.credit += this.payout;
        ctx.fillStyle = "#3C01C8";
        ctx.fillRect(34.5, 0 + (20*i), 305, 21);
        ctx.fillStyle = "#F0E222"
        this.board.populateColumns(ctx);
        this.showStats(ctx);
        this.showWinsStats(ctx)
        break;
      }
    }
  }

  resetDeck(ctx) {
    ctx.clearRect(15, 300, 850, 320)
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
    if (this.start === false) {
        while (this.currHand.length !== 5) {
        let rand = Math.floor(Math.random() * 52);
        if (this.deck[rand] !== undefined) {
          this.currHand.push(this.deck[rand]);
          delete this.deck[rand];
        }
      }
    } 
    // Test out predetermined hands for wins
      // if (this.start === false) {
      //   let rand =[0,13,26,39,31]
      //   for (let i = 0; i < 5; i++) {
      //     this.currHand.push(this.deck[rand[i]]);
      //   }
      // }
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
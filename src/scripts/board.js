import Card from "./card";
import tableColumn from "./table_column";
import Button from "./button";

const DEFAULTS = { NUM_CARDS: 5};
const PAYOUTS =  { 
  1: [250, "ROYAL FLUSH"], 
  2: [50, "STRIGHT FLUSH"], 
  3: [400, "FOUR ACES WITH ANY 2,3,4"], 
  4: [160, "FOUR 2s, 3s, 4s w/ANY A,2,3,4"], 
  5: [160, "FOUR ACES"], 
  6: [80, "FOUR 2s, 3s, 4s"], 
  7: [50, "FOUR 5s THRU KINGS"], 
  8: [9, "FULL HOUSE"], 
  9: [6, "FLUSH"], 
  10: [4, "STRAIGHT"], 
  11: [3, "THREE OF A KIND"], 
  12: [1, "TWO PAIR"], 
  13: [1, "JACKS OR BETTER"] 
};
const BUTTONS = {
  0: ["BET +1"],
  1: ["BET -1"],
  2: ["MAX BET"],
  3: ["DEAL"],
  4: ["DRAW"]
}

class Board {
  constructor(ctx) {
    this.num_cards = DEFAULTS.NUM_CARDS;
    this.hand = [];
    this.table = [];
    this.buttons = [];
    this.addCards.bind(this)(ctx);
    this.addColumns.bind(this)(ctx);
    this.populateColumns.bind(this)(ctx);
    this.addButtons.bind(this)(ctx);
  }
  
  addCards(ctx) {
    for (let i = 0, j = 0; i < this.num_cards; i++, j += 175) {
      let pos = [45 + j, 300]
      let card = new Card({ pos })
      this.hand.push(card)
    }

    this.drawCards(ctx);
  }


  drawCards(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let i =0
    setInterval(() => {
      if (i < 5) {
        this.hand[i].draw(ctx);
        i++
      }
    }, 500)
  }

  addColumns(ctx) {
    let y = 15;
    let firstCol = new tableColumn({pos: [32.5, y], width: 310});
    this.table.push(firstCol);

    for (let i = 0, j = 0; i < 5; i++, j += 115) {
      let position = [342.5 + j, y];
      let colWidth = 115;
      let column = new tableColumn({ pos: position, width: colWidth })
      this.table.push(column)
    }

    this.drawColumns(ctx)
  }

  drawColumns(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i <= 5; i++) {
      this.table[i].draw(ctx)
    }
  }

  populateColumns(ctx) {
    for (let j = 1, y = 37; j <= 13; j++, y += 20) {
      ctx.font = '21px Arial Narrow'
      ctx.textAlign = 'left';
      this.table[0].populate(ctx, PAYOUTS[j][1], y, 38)
    }

    for (let i=1; i < 6; i++) {
      for (let j=1, y=37; j <= 13; j++, y+=20) {
        ctx.font = '21px Arial'
        ctx.textAlign = 'right';
        if (i === 5 && j === 1) 
          this.table[i].populate(ctx, PAYOUTS[j][0] * 16, y)
        else
          this.table[i].populate(ctx, PAYOUTS[j][0] * i, y)
      }
    }
  }

  addButtons(ctx) {
    for (let i = 0, j = 0; i < 4; i++, j += 110) {
      let pos = [500 + j, 590]
      let button = new Button({ pos })
      this.buttons.push(button)
    }

    this.drawButtons(ctx)
  };

  drawButtons(ctx) {
    for (let i = 0; i < 4; i++) {
      this.buttons[i].draw(ctx)
      console.log(BUTTONS[i])
      console.log(this.buttons)
      this.buttons[i].populate(ctx, BUTTONS[i][0])
    }
  };

}


export default Board;


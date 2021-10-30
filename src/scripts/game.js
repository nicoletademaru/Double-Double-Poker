import Card from "./card";
import tableColumn from "./table_column"

const DEFAULTS = { DIM_X: 900, DIM_Y: 750, NUM_CARDS: 5}
const PAYOUTS =  { 1: 250, 2: 50, 3: 400, 4: 160, 5: 160, 6: 80, 7: 50, 8: 9, 9: 6, 10: 4, 11: 3, 12: 1, 13: 1 }

class Game {
  constructor(ctx) {
    this.dim_x = DEFAULTS.DIM_X;
    this.dim_y = DEFAULTS.DIM_Y;
    this.num_cards = DEFAULTS.NUM_CARDS;
    this.hand = [];
    this.table = [];
    this.addCards.bind(this)(ctx);
    this.addColumns.bind(this)(ctx);
    this.populateColumns.bind(this)(ctx);
  }
  
  addCards(ctx) {
    for (let i = 0, j = 0; i < this.num_cards; i++, j += 55) {
      let pos = [18 + j, 80]
      let card = new Card({ pos })
      this.hand.push(card)
    }

    this.drawCards(ctx)
  }


  drawCards(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let i =0
    setInterval(() => {
      this.hand[i].draw(ctx);
      i++
    }, 500)
  }

  addColumns(ctx) {
    let y = 10;
    let firstCol = new tableColumn({pos: [18, y], width: 64});
    this.table.push(firstCol);

    for (let i = 0, j = 0; i < 5; i++, j += 40) {
      let position = [82 + j, y];
      let colWidth = 40;
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
    for (let i=1; i < this.table.length; i++) {
      for (let j=1, y=15; j < 13; j++, y+=5) {
        this.table[i].populate(ctx, PAYOUTS[j]*(i+1), y)
      }
    }
  }

}


export default Game;


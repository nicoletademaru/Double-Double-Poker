const SUITS = {1: "heart", 2: "diamond", 3: "spade", 4: "club"}
const VALUES = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: "J",
  12: "Q",
  13: "K"
}

class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = "#FF5733";
    this.value = "";
    this.suit = "";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 160, 230);
    ctx.stroke();
    ctx.closePath();
  }

}


export default Card;
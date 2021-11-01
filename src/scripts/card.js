class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = "#FF5733";
    this.value = object["value"];
    this.suit = object["suit"];
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
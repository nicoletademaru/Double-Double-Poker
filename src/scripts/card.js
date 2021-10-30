class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = "#FF5733";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 45, 50);
    ctx.stroke();
  }
}


export default Card;
class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = "#FF5733";
    this.value = object["value"];
    this.suit = object["suit"];
    this.sx = object["sx"];
    this.sy = object["sy"];
    this.sheight = 117.4;
    this.swidth = 81;
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
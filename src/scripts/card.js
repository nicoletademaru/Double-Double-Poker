class Card {
  constructor(object) {
    this.color = "#FF5733";
    this.value = object["value"];
    this.suit = object["suit"];
    this.held= false;
    this.width = 81;
    this.height = 117.4;
    this.sx = object["sx"];
    this.sy = object["sy"];
  }

  draw(ctx, pos) {
    const sx = this.sx;
    const sy = this.sy;
    const pos0 = pos[0];
    const pos1 = pos[1];
    let cardImg = new Image();
    cardImg.onload = function () {
      ctx.drawImage(cardImg, sx, sy, 81, 117.4, pos0, pos1, 141.8, 205.5)
    }
    cardImg.src = "deck.png"
  }
}


export default Card;
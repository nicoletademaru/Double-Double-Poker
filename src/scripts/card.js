class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = "#FF5733";
  }
}

Card.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.rect(10, 60, 50, 50);
  ctx.stroke();
}

export default Card;
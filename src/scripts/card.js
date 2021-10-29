class Card {
  constructor(object) {
    this.pos = object["pos"];
    this.color = object["colot"];
  }
}

Card.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.rect(10, 10, 100, 50)
}
class tableColumn {
  constructor(object) {
    this.pos = object["pos"];
    this.width = object["width"];
    this.color = "#FF5733";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.width, 60);
    ctx.stroke();
  }
}

export default tableColumn;
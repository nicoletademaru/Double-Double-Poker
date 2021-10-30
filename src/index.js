import Card from "./scripts/card";
import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');

  // const card = new Card({pos:[20, 80]})
  // card.draw(ctx)

  let v = new Game(ctx);
  ctx.font = '10px Arial';
  ctx.fillText("STRAIGHT FLUSH", 100, 20);
})


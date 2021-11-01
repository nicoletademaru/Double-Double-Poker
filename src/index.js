import Card from "./scripts/card";
import Board from "./scripts/board"

document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  canvas.width = 950;
  canvas.height = 650;
  const ctx = canvas.getContext('2d');

  let v = new Board(ctx);
  // ctx.font = '10px Arial';
  // ctx.fillText("STRAIGHT FLUSH", 100, 20);
})


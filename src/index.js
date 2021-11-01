import Card from "./scripts/card";
import Board from "./scripts/board"

document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  canvas.width = 950;
  canvas.height = 650;
  const ctx = canvas.getContext('2d');

  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
  })

  let v = new Board(ctx);
})


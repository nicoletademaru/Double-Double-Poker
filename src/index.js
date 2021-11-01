import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  canvas.width = 950;
  canvas.height = 650;
  const ctx = canvas.getContext('2d');
  let game = new Game(ctx);

  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    game.buttonClicks(ctx, x, y)
  })

})


import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  canvas.width = 950;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');
  let game = new Game(ctx);

  // game.dealCards(ctx);

  let cardImg = new Image();
  cardImg.onload = function() {
    ctx.drawImage(cardImg, 0, 0, 81, 117.4, 45, 300, 162, 234.8)
  }
  // cardImg.src = "deck.png"
  

  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    game.buttonClicks(ctx, x, y)
    game.cardClicks(ctx, x, y)
  })

})


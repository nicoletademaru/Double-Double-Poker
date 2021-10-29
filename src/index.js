import Card from "./scripts/card";

document.addEventListener("DOMContentLoaded",() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');

  const card = new Card({pos:[30, 50]})

  card.draw(ctx)
})


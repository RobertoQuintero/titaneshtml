let images = [
  'url("img/01-img.png")',
  'url("img/02-img.png")',
  'url("img/03-img.png")',
  'url("img/04-img.png")',
  'url("img/05-img.png")',
];
// let colors = ["#C5EBC7", "#D7D1EB", "#D8EABA", "#EBA2C0", "#EBE5AE"];
let colors = [
  "#9b5de5",
  "#f15bb5",
  "#fee440",
  "#00bbf9",
  "#00f5d4",
  // "#C5EBC7",
  // "#D7D1EB",
  // "#D8EABA",
  // "#EBA2C0",
  // "#EBE5AE",
];

function dropImage() {
  let section = document.querySelector(".section-popimg");

  let drop = document.createElement("span");
  // drop.style.left = `${Math.random() * innerWidth}px`;
  drop.style.top = `${Math.random() * innerHeight}px`;

  let bg = images[Math.floor(Math.random() * images.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];

  setTimeout(() => {
    drop.remove();
  }, 4000);

  let size = Math.random() * 150;
  // drop.style.width = `${size}px`;
  // drop.style.height = `${size}px`;
  drop.style.width = `${50 + size}px`;
  drop.style.height = `${50 + size}px`;
  drop.style.backgroundImage = bg;
  drop.style.backgroundColor = color;
  // drop.style.backgroundPositionY = "5px";
  section.appendChild(drop);
}

let interval = setInterval(() => {
  dropImage();
}, 50);

setTimeout(() => {
  clearInterval(interval);
}, 4000);

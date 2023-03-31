`use strict`;

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let click = 0;
let maxClicksAllowed = 25;

const state = {
  allproductsArray: [],
};

function product(path, name) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.click = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allproductsArray.length);
}

function renderProducts() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  while (
    product1 === product2 ||
    product2 == product3 ||
    product3 == product1
  ) {
    product1 = getRandomNumber();
    product2 = getRandomNumber();
    product3 = getRandomNumber();
  }

  image1.src = state.allproductsArray[product1].path;
  image2.src = state.allproductsArray[product2].path;
  image3.src = state.allproductsArray[product3].path;

  image1.alt = state.allproductsArray[product1].name;
  image2.alt = state.allproductsArray[product2].name;
  image3.alt = state.allproductsArray[product3].name;

  state.allproductsArray[product1].views++;
  state.allproductsArray[product2].views++;
  state.allproductsArray[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  }
  click++;

  let clickProduct = event.target.alt;
  for (let i = 0; i < state.allproductsArray.length; i++) {
    if (clickProduct === state.allproductsArray[i].name) {
      state.allproductsArray[i].click++;
      break;
    }
  }
  if (click === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    productContainer.className = "no-voting";
  } else {
    renderProducts();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < state.allproductsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${state.allproductsArray[i].name} had 
        ${state.allproductsArray[i].views} view and was clicked 
        ${state.allproductsArray[i].click} times.`;
    ul.append(li);
  }
}

// executable code
let bag = new product("./img/bag.jpg", "Bag");
let banana = new product("./img/banana.jpg", "Banana");
let bathroom = new product("./img/bathroom.jpg", "Bathroom");
let boots = new product("./img/boots.jpg", "Boots");
let breakfast = new product("./img/breakfast.jpg", "Breakfast");
let bubblegum = new product("./img/bubblegum.jpg", "Bubblegum");
let chair = new product("./img/chair.jpg", "Chair");
let cthulu = new product("./img/cthulhu.jpg", "Cthulhu");
let dogDuck = new product("./img/dog-duck.jpg", "Dog-Duck");
let dragon = new product("./img/dragon.jpg", "Dragon");
let pen = new product("./img/pen.jpg", "Pen");
let petSweep = new product("./img/pet-sweep.jpg", "Pet Sweep");
let scissors = new product("./img/scissors.jpg", "Scissors");
let shark = new product("./img/shark.jpg", "Shark");
let sweep = new product("./img/sweep.png", "Sweep");
let tauntaun = new product("./img/tauntaun.jpg", "Taun-Taun");
let unicorn = new product("./img/unicorn.jpg", "Unicorn");
let waterCan = new product("./img/water-can.jpg", "Water Can");
let wineGlass = new product("./img/wine-glass.jpg", "Wine Glass");
state.allproductsArray.push(
  bag,
  banana,
  bathroom,
  boots,
  breakfast,
  bubblegum,
  chair,
  cthulu,
  dogDuck,
  dragon,
  pen,
  petSweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  waterCan,
  wineGlass
);

renderProducts();

productContainer.addEventListener("click", handleProductClick);

function printChart() {
  let productNames = [];
  let productVotes = [];
  let productViews = [];
  for (let i = 0; i < state.allProductsArray.length; i++) {
    productNames.push(state.allProductsArray[i].name);
    productVotes.push(state.allProductsArray[i].votes);
    productViews.push(state.allProductsArray[i].timesImageViewed);
  }

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Votes",
        data: productVotes,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "Times Shown",
        data: productViews,
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  let canvasChart = document.getElementById("myChart");
  const myChart = new myChart(canvasChart, config);
}
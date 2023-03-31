`use strict`;

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let click = 0;
let maxClicksAllowed = 25;

const views = {};

// State object holds the holds the current state of the application (all existing products)
const state = {
  allproductsArray: [],
};

// functional logic

function product(path, name) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.click = 0;
}

const imageFiles = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

// image counter
const imageCount = {};

//random
function getRandomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// call the getRandomNumber
function renderProducts() {
  const product1Image = getRandomNumber(imageFiles);
  image1.src = `img/${product1Image}`;
    if (views[product1Image]) {
      views[product1Image]++;
    } else {
      views[product1Image] = 1;
    }
  
    const product2Image = getRandomNumber(imageFiles);
    image2.src = `img/${product2Image}`;
    if (views[product2Image]) {
      views[product2Image]++;
    } else {
      views[product2Image] = 1;
    }
  
    const product3Image = getRandomNumber(imageFiles);
    image3.src = `img/${product3Image}`;
    if (views[product3Image]) {
      views[product3Image]++;
    } else {
      views[product3Image] = 1;
    }
  }

  
// this puts thenm in the html
const product1Span = document.getElementById('image1');
const product2Span = document.getElementById('image2');
const product3Span = document.getElementById('image3');

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
    // give the button an event lister and styles so the user
    // knows its an active button:
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

function showResults() {
  renderResults();
  printChart();
}


productContainer.addEventListener("click", handleProductClick);

// Event listener for the View Results button
const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);


// prints the chart to HTML 
function printChart() {
  // Create an array of labels and data from the imageCount object
  const labels = Object.keys(views);
  const data = Object.values(views);

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

document.addEventListener("DOMContentLoaded", function() {
  const viewResultsBtn = document.querySelector('.view-results-btn');
  viewResultsBtn.addEventListener('click', showResults);
});
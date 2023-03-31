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

renderProducts();

function showResults() {
  renderResults();
  printChart();
}


productContainer.addEventListener("click", handleProductClick);

// Event listener for the View Results button
const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);

function printChart() {
  // Create an array of labels and data from the imageCount object
  const labels = Object.keys(views);
  const data = Object.values(views);

  // Get the canvas element for the chart
  const canvas = document.getElementById('myChart');

  // Create the chart using Chart.js
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Image Votes',
        data: data,
        backgroundColor: [
            "#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE",

        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: 'Image Votes'
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const viewResultsBtn = document.querySelector('.view-results-btn');
  viewResultsBtn.addEventListener('click', showResults);
});
`use strict`;

// variables that select elements in the html
let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

// this sets the beginning click for the clicking vote
let click = 0;
// this sets the maxium clicks entirely
let maxClicksAllowed = 25;

const views = {};

// holds the current state of the app and products
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

// this is the array for the product img files
const imageFiles = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

// image counter
const imageCount = {};

//random
function getRandomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// this calls the getRandomNumber function to generate a random number to randomly select an img
function renderProducts() {
  const usedImages = [];
  
  // getRandomNumber for product 1
  let product1Image = getRandomNumber(imageFiles);
  while (usedImages.includes(product1Image)) {
    product1Image = getRandomNumber(imageFiles);
  }
  usedImages.push(product1Image);
  image1.src = `img/${product1Image}`;
  if (views[product1Image]) {
    views[product1Image]++;
  } else {
    views[product1Image] = 1;
  }

  // getRandomNumber for product 2
  let product2Image = getRandomNumber(imageFiles);
  while (usedImages.includes(product2Image)) {
    product2Image = getRandomNumber(imageFiles);
  }
  usedImages.push(product2Image);
  image2.src = `img/${product2Image}`;
  if (views[product2Image]) {
    views[product2Image]++;
  } else {
    views[product2Image] = 1;
  }

  // getRandomNumber for product 3
  let product3Image = getRandomNumber(imageFiles);
  while (usedImages.includes(product3Image)) {
    product3Image = getRandomNumber(imageFiles);
  }
  usedImages.push(product3Image);
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


// this is the function for the event clicker w/ an alert
// alert happens if user clicks off the img while voting is in session
function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  }
  click++;
  localStorage.setItem("state", JSON.stringify(state));


  let clickProduct = event.target.alt;
  for (let i = 0; i < state.allproductsArray.length; i++) {
    if (clickProduct === state.allproductsArray[i].name) {
      state.allproductsArray[i].click++;
      break;
    }
  }
  if (click === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    // the above code removes the even listener after 25 images has been clicked

    // this gives the results an event listener for clicks when clicked
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    productContainer.className = "no-voting";
  } else {
    renderProducts();
  }
}

// this renders proucts results and displays them on the html
// formerly this displayed them in a li, but the feature was removed
// they now are displayed as a bar graph when myChart canvas was added
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

// this is the event listener for results
const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);

function printChart() {
  // creates an array of labels and data from the imageCount object
  const labels = Object.keys(views);
  const data = Object.values(views);

  // get the canvas element for the chart
  const canvas = document.getElementById('myChart');

  // create the chart using Chart.js
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

document.addEventListener("DOMContentLoaded", function () {
  const viewResultsBtn = document.querySelector('.view-results-btn');
  viewResultsBtn.addEventListener('click', showResults);
});

// localstorage function

// instructions: Store the products array into local storage as a formatted JSON string
// Retrieve the products array from local storage and then utilize the JSON.Parse() 
// function. Remember, if your constructor utilizes prototype methods, you will have to 
// send each item in the array back through the constructor function.

localStorage.setItem('product', JSON.stringify(Object));

let myObj = JSON.parse(localStorage.getItem('product'));

localStorage.imageFiles = JSON.stringify(product);

let myJSON = JSON.parse(localStorage.imageFiles);

let string = localStorage.setItem('product');
localStorage.setItem('product', str);
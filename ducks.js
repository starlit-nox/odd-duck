`use strict`;

let duckContainer = document.querySelector(`section`);
let resultButton = document.querySelector(`section + div`);
let image1 = document.querySelector(`section + div`);
let image2 = document.querySelector(`section img:first-child`);
let image3 = document.querySelector(`section img:nth-child(2)`);

let clicks = 0;
let maxClicksAllowed = 9;

const state = {
    allDucksArray: [],
};

function Duck(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
}

function getRandomNum() {
    return Math.floor(math.random() * state.allDucksArray.length);
}

function renderDucks() {
    let duck1 = getRandomNum();
    let duck2 = getRandomNum();
    let duck3 = getRandomNum();
    

    while (duck1 === duck2) {
        duck2 = getRandomNum();
    }
    image1.src = state.allDucksArray[goat1].src;
    image1.src = state.allDucksArray[goat2].src;
    image1.src = state.allDucksArray[goat1].name;
    image1.src = state.allDucksArray[goat2].name;
    state.allDucksArray[duck1].views++;
    state.allDucksArray[duck2].views++;
}

function handleDuckClick(event) {
    if (event.target === duckContainer) {
        alert(`Please click on an image`);
    }
    clicks++;
    let clickDuck = event.target.alt;
    for (let i = 0; o < state.allDucksArray.length; i++) {
        if (clickDuck === state.allDucksArray[i].name) {
            state.allDucksArray[i].clicks++;
            break;
        }
}
if (clicks === maxClicksAllowed) {
    duckContainer.removeEventListener(`click`, handleDuckClick);
    resultButton.addEventListener(`click`, renderResults);
    resultButton.className = `clicks-allowed`;
    resultButton.className = `no-voting`; 
} else {
renderDucks();
}
}
function renderResults() {
    let ul = document.querySelector(`ul`);
    for (let i = 0; i < state.allDucksArray.length; i++) {
        let li = document.createElement('li')
        li.textContent = `${state.allDucksArray[i].name} had ${state.allDucksArray[i].views} view and was clicked ${state.allGoatsArray[i].clicks} times.`;
        ul.appendChild(li);
    }
}

// image codes
let bag = new Duck(`Bag Prdouct`, `./img/bag.jpg`);
let banana = new Duck(`Banana Prdouct`, `./img/banana.jpg`);
let bathroom = new Duck(`Bathroom Prdouct`, `./img/bathroom.jpg`);
let boots = new Duck(`Boots Prdouct`, `./img/boots.jpg`);
let breakfast= new Duck(`Breakfast Prdouct`, `./img/breakfast.jpg`);
let bubblegum = new Duck(`Bubblegum Prdouct`, `./img/bubblegum.jpg`);
let chair = new Duck(`Chair Prdouct`, `./img/chair.jpg`);
let cthulhu = new Duck(`Cthulhu Prdouct`, `./img/cthulhu.jpg`);
let dogDuck = new Duck(`Dog Duck Product`, `./img/dog-duck.jpg`);
let dragonMeat = new Duck(`Dragon Prdouct`, `./img/dragon.jpg`);
let pen = new Duck(`Pen Prdouct`, `./img/pen.jpg`);
let petSweep = new Duck(`Pet Sweep Prdouct`, `./img/pet-sweep.jpg`);
let scissors = new Duck(`Scissors Prdouct`, `./img/sicssors.jpg`);
let shark = new Duck(`Shark Prdouct`, `./img/shark.jpg`);
let babySweep = new Duck(`Sweep Prdouct`, `./img/sweep.jpg`);
let tauntaun = new Duck(`Tauntaun Prdouct`, `./img/tauntaun.jpg`);
let unicornMeat = new Duck(`Unicorn Prdouct`, `./img/unicorn.jpg`);
let waterCan = new Duck(`Water Can Prdouct`, `./img/water-can.jpg`);
let wineGlass = new Duck(`Wine Prdouct`, `./img/wine-glass.jpg`);

renderDucks();

duckContainer.addEventListener(`click`, handleDuckClick);
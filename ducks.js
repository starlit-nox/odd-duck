// `use strict`;
function product(productName, imageFilePath) {
    this.productName = productName
    this.imageFilePath = imageFilePath
    this.timesShown = 0
    this.clickProduct = 0
}

// image codes
let bag = new product(`Bag`, `./img/bag.jpg`);
let banana = new product(`Banana Cutter`, `./img/banana.jpg`);
let bathroom = new product(`Bathroom`, `./img/bathroom.jpg`);
let boots = new product(`Boots`, `./img/boots.jpg`);
let breakfast = new product(`Breakfast Product`, `./img/breakfast.jpg`);
let bubblegum = new product(`Meatball Bubblegum`, `./img/bubblegum.jpg`);
let chair = new product(`Chair`, `./img/chair.jpg`);
let cthulhu = new product(`Cthulhu Idol`, `./img/cthulhu.jpg`);
let dogDuck = new product(`Dog Duck Costume`, `./img/dog-duck.jpg`);
let dragonMeat = new product(`Dragon Meat`, `./img/dragon.jpg`);
let pen = new product(`Pen`, `./img/pen.jpg`);
let petSweep = new product(`Sweeper for Pets`, `./img/pet-sweep.jpg`);
let scissors = new product(`Pizza Scissors`, `./img/scissors.jpg`);
let shark = new product(`Shark Sleeping Bag`, `./img/shark.jpg`);
let babySweep = new product(`Sweeper for Baby`, `./img/sweep.png`);
let tauntaun = new product(`Tauntaun`, `./img/tauntaun.jpg`);
let unicornMeat = new product(`Unicorn Meat`, `./img/unicorn.jpg`);
let waterCan = new product(`Water Can`, `./img/water-can.jpg`);
let wineGlass = new product(`Wine Glass`, `./img/wine-glass.jpg`);
let products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragonMeat, pen, petSweep, scissors, shark, babySweep, tauntaun, unicornMeat, waterCan, wineGlass]


function getRandomProducts(arrayOfProducts) {
    let randomProducts = []
    let randomIndex1 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex2 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex3 = Math.floor(Math.random() * arrayOfProducts.length)

    // while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
    //     randomIndex1 = randomIndex1 = Math.floor(Math.random()) * arrayOfProducts.length
    //     randomIndex2 = Math.floor(Math.random()) * arrayOfProducts.length

    // }

    // while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
    //     randomIndex3 = Math.floor(Math.random()) * arrayOfProducts.length
    // }

    let randomProduct1 = arrayOfProducts[randomIndex1]
    let randomProduct2 = arrayOfProducts[randomIndex2]
    let randomProduct3 = arrayOfProducts[randomIndex3]


    randomProducts.push(randomProduct1)
    randomProducts.push(randomProduct2)
    randomProducts.push(randomProduct3)


    return randomProducts
}

let randomProducts = getRandomProducts(products)

function displayProduct(product, imageTagId) {
    let productImageFilePath = this.imageFilePath
    let image = document.getElementById(imageTagId)
    image.src = productImageFilePath
    image.alt = product.productName
}

displayProduct(randomProducts[0], "image1")
displayProduct(randomProducts[1], "image2")
displayProduct(randomProducts[2], "image3")

//  below is the clicker attempt 

// let item3 = document.getElementById("item3")

// function handleClick(event){
//     if (event.target === item3) {
//         alert(`Please select a product`);
//     }
//     clicks++;
//     let clickProduct = event.target.alt;
//     for (let i = 0; i < state.arrayOfProducts.length; i++) {
//         if (state.arrayOfProducts[i].productName == clickProduct){

//         }
//     }
// }

let state = {
    products: products,
    randomProducts: getRandomProducts(products),
    rounds: 0,
}

function handleClick(event) {
    if (event.target === item3) {
        alert(`Please select a product`);
        return;
    }

    state.rounds++;

    let clickedProduct = event.target.alt;
    for (let i = 0; i < state.products.length; i++) {
        let product = state.products[i];
        if (product.productName === clickedProduct) {
            product.clickProduct++;
            break;
        }
    }

    if (state.rounds >= 25) {
        // show results
    } else {
        state.randomProducts = getRandomProducts(state.products);
        displayProduct(state.randomProducts[0], "image1");
        displayProduct(state.randomProducts[1], "image2");
        displayProduct(state.randomProducts[2], "image3");
    }
}

let productContainer = document.getElementById("product-container");
productContainer.addEventListener("click", handleClick);


// click  attempt ends


// lab 12 code below

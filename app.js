'use strict';


let maxRound = 26;
let currentRound = 0;
let timesViewed = 0;

// create constructor function
function Product (name, fileExtention='jpg', timesViewed, click){
  this.name = name;
  this.source = `img/${name}.${fileExtention}`;
  this.timesViewed = 0;
  this.timesClicked = 0;
  this.click = click;

}
// Array of all products
let allProducts = [

  new Product ('bag','./assests/bag.jpg', timesViewed),
  new Product ('banana', './assets/banana.jpg',timesViewed ),
  new Product ('bathroom', './assets/bathroom.jpg', timesViewed),
  new Product ('boots', './assets/boots.jpg', timesViewed),
  new Product ('breakfast','./assets/breakfast.jpg', timesViewed),
  new Product ('bubblegum','.assets/bubblegum.jpg', timesViewed),
  new Product ('chair', '.assets/chair.jpg', timesViewed),
  new Product ('cthulhu', '.assets/cthulhu.jpg', timesViewed),
  new Product ('dog-duck', '.assets/dog-duck.jpg', timesViewed),
  new Product ('dragon', '.assets/dragon.jpg', timesViewed),
  new Product ('pen', '.assets/pen.jpg', timesViewed),
  new Product ('pet-sweep', '.assets/pet-sweep.jpg', timesViewed),
  new Product ('scissors', '.assets/scissors.jpg', timesViewed),
  new Product ('shark', '.assets/ shark.jpg', timesViewed),
  new Product ('sweep','png'),
  new Product ('tauntaun', '.assets/tauntaun.jpg', timesViewed),
  new Product ('unicorn', '.assets/unicorn.jpg', timesViewed),
  new Product ('water-can', '.assets/water-can.jpg', timesViewed),
  new Product ('wine-glass', '.assets/ wine-glass.jpg', timesViewed),
];

console.log(allProducts);

// Random Image

function randomImage(){

  return Math.floor(Math.random () * allProducts.length);
}

let button = document.getElementById('button');
button.addEventListener('click', showNewImage);

// create function showNewImage
function showNewImage(){

  let product = allProducts[randomImage()];

  let img = document.getElementById('productImage');
  img.src = `assets/${product.name}.jpg`;
  img.alt = product.name;
  img.title = product.name;
  //   increment shown products
  product.click++;
  currentRound++;
  if (currentRound === maxRound){
    button.removeEventListener('click', showNewImage);
  }
}
showNewImage();

// Unique image checker

function randomizer () {
  let randomArray = [];

  while (randomArray.length < 3) {

    let randomIndex = randomImage();

    // eslint-disable-next-line no-empty
    if (randomArray.includes(randomIndex)){
    }
    // do nothing
    else {
      randomArray.push(randomIndex);
    }

  }
}

randomizer();

// let images = document.getElementById('productImage');
// let

'use strict';


// let maxRound = 25;
let currentRound = 0;
let productList = [];
let previousArray = [];
let resultButton = document.getElementById('button');
let productsImg = document.getElementById('productsImg');

// create constructor function that takes in name, filepath and times viewed as arguements
function Product (src,alt,name, clicked = 0, timesViewed = 0){
  this.src = src;
  this.alt = alt;
  this.name = name;
  this.clicked = clicked;
  this.timesViewed = timesViewed;
  productList.push(this);
}
// Array of all products that take in name, file path, and times viewed as parameters
let allProducts = [

  new Product ('./assets/bag.jpg', 'weird bag', 'bag'),
  new Product ('./assets/banana.jpg', 'weird banana', 'banana'),
  new Product ('./assets/bathroom.jpg', 'weird bathroom', 'bathroom'),
  new Product ('./assets/boots.jpg', 'weird boots', 'boots'),
  new Product ('./assets/breakfast.jpg', 'weird breakfast', 'breakfast'),
  new Product ('./assets/bubblegum.jpg', 'weird bubblegum', 'bubblegum'),
  new Product ('./assets/chair.jpg', 'weird chair', 'chair'),
  new Product ('./assets/cthulhu.jpg', 'weird cthulhu', 'cthulhu'),
  new Product ('./assets/dog-duck.jpg', 'weird dog duck', 'dog-duck'),
  new Product ('./assets/dragon.jpg', 'weird dragon', 'dragon'),
  new Product ('./assets/pen.jpg', 'weird pen', 'pen'),
  new Product ('./assets/pet-sweep.jpg', 'weird pet sweep', 'pet-sweep'),
  new Product ('./assets/scissors.jpg', 'weird scissors', 'scissors'),
  new Product ('./assets/shark.jpg', 'weird shark', 'shark'),
  new Product ('./assets/sweep.png', 'weird sweep', 'sweep'),
  new Product ('./assets/tauntaun.jpg', 'weird tauntaun', 'tauntaun'),
  new Product ('./assets/unicorn.jpg', 'weird unicorn', 'unicorn'),
  new Product ('./assets/water-can.jpg', 'weird water can', 'water-can'),
  new Product ('./assets/wine-glass.jpg', 'weird wine glass', 'wine-glass'),
];



// Random Image that will generate a random image (number)

function randomImage(){

  return Math.floor(Math.random() * allProducts.length);
}



// let button = document.getElementById('button');
// button.addEventListener('click', showNewImage);

// // create function showNewImage
// function showNewImage(event){

//   let product = allProducts[randomImage()];

//   let img = document.getElementById('productImages');
//   img.src = `assets/${product.name}.jpg`;
//   img.alt = product.name;
//   img.title = product.name;
//   //   increment shown products
//   product.click++;
//   currentRound++;
//   if (currentRound === maxRound){
//     button.removeEventListener('click', showNewImage);
//   }
// }
// showNewImage();


function randomizer () {
  let randomArray = [];

  while (randomArray.length < 6) {

    let randomIndex = randomImage();


    // eslint-disable-next-line no-empty
    if (randomArray.includes(randomIndex) || previousArray.includes(randomIndex)){

    }
    else {
      randomArray.push(randomIndex);
    }

  }
  //   console.log(randomArray);
  previousArray = randomArray;
  return randomArray;
}

randomizer();


// grab the elements that i need to assign to.
// listeners

let image = document.getElementById('productImage1');
image.addEventListener('click', handleTheEvent);

let imageTwo = document.getElementById('productImage2');
imageTwo.addEventListener('click', handleTheEvent);

let imageThree = document.getElementById('productImage3');
imageThree.addEventListener('click', handleTheEvent);


// event handler
// function buttonrandomizer(){

//   let product = randomizer();


//   console.log(product);

//   let img = document.getElementById('productImage1');
//   img.src = allProducts[product[0]].src;
//   img.alt = product.name;
//   img.title = product.name;
//   // increment shown products
//   product.click++;
//   currentRound++;
//   let img2 = document.getElementById('productImage2');
//   img2.src = allProducts[product[1]].src;
//   img2.alt = product.name;
//   img2.title = product.name;
//   //   increment shown products
//   product.click++;
//   currentRound++;
//   let img3 = document.getElementById('productImage3');
//   img3.src = allProducts[product[2]].src;
//   img3.alt = product.name;
//   img3.title = product.name;
//   //   increment shown products
//   product.click++;
//   currentRound++;
//   if (currentRound === 5){
//     product.removeEventListener('click', buttonrandomizer);
//   }
// }
// buttonrandomizer();

function renderImage(){
  let threeNewImages = randomizer();
  let product1, product2, product3;
  product1 = allProducts[threeNewImages[0]];
  product2 = allProducts[threeNewImages[1]];
  product3 = allProducts[threeNewImages[2]];

  let image = document.getElementById('productImage1');
  image.name = product1.name;
  image.src = product1.src;
  image.alt = product1.alt;
  product1.timesViewed++;

  let image2 = document.getElementById('productImage2');
  image2.name = product2.name;
  image2.src = product2.src;
  image2.alt = product2.alt;
  product2.timesViewed++;

  let image3 = document.getElementById('productImage3');
  image3.name = product3.name;
  image3.src = product3.src;
  image3.alt = product3.alt;
  product3.timesViewed++;

}
// // incorp into handleTheEvent after for loop
renderImage();



function handleTheEvent(e){
  // e.preventDefault();

  let clickedProduct = e.target.name;

  for (let i = 0; i < productList.length; i++){
    if (clickedProduct === productList[i].name){
      productList[i].clicked++;
      break;
    }
  }
  currentRound++;
  if(currentRound === 25){
    resultButton.hidden = false;
    productsImg.hidden = true;
    image.removeEventListener('click', handleTheEvent);
    imageTwo.removeEventListener('click', handleTheEvent);
    imageThree.removeEventListener('click', handleTheEvent);
  } else {
    renderImage();
  }
}
console.log(allProducts);

function renderResults(){
  let ul = document.getElementById('resultList');
  for (let i = 0; i <productList.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].timesViewed} view and was clicked ${allProducts[i].clicked} times.`;
    ul.appendChild(li);
  }
  return ul;
}
resultButton.addEventListener('click', renderResults);

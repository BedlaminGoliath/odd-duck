'use strict';
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

  new Product ('./assets/bag.jpg', ' bag', 'bag'),
  new Product ('./assets/banana.jpg', ' banana', 'banana'),
  new Product ('./assets/bathroom.jpg', ' bathroom', 'bathroom'),
  new Product ('./assets/boots.jpg', ' boots', 'boots'),
  new Product ('./assets/breakfast.jpg', ' breakfast', 'breakfast'),
  new Product ('./assets/bubblegum.jpg', ' bubblegum', 'bubblegum'),
  new Product ('./assets/chair.jpg', ' chair', 'chair'),
  new Product ('./assets/cthulhu.jpg', ' cthulhu', 'cthulhu'),
  new Product ('./assets/dog-duck.jpg', ' dog duck', 'dog-duck'),
  new Product ('./assets/dragon.jpg', ' dragon', 'dragon'),
  new Product ('./assets/pen.jpg', ' pen', 'pen'),
  new Product ('./assets/pet-sweep.jpg', ' pet sweep', 'pet-sweep'),
  new Product ('./assets/scissors.jpg', ' scissors', 'scissors'),
  new Product ('./assets/shark.jpg', ' shark', 'shark'),
  new Product ('./assets/sweep.png', ' sweep', 'sweep'),
  new Product ('./assets/tauntaun.jpg', ' tauntaun', 'tauntaun'),
  new Product ('./assets/unicorn.jpg', ' unicorn', 'unicorn'),
  new Product ('./assets/water-can.jpg', ' water can', 'water-can'),
  new Product ('./assets/wine-glass.jpg', ' wine glass', 'wine-glass'),
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
  e.preventDefault();

  let clickedProduct = e.target.name;

  for (let i = 0; i < productList.length; i++){
    if (clickedProduct === productList[i].name){
      productList[i].clicked++;
      break;
    }
  }
  currentRound++;
  // change back to 25 after fixing rendering
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
  renderChart();

  return ul;
}
resultButton.addEventListener('click', renderResults);

function renderChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  let products = [];
  let clicks = [];
  let views = [];

  for (let i = 0; i < allProducts.length; i++) {
    products.push(allProducts[i].name);
    clicks.push(allProducts[i].clicked);
    views.push(allProducts[i].timesViewed);
  }

  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: products,
      datasets: [
        {
          label: '# of Votes',
          data: clicks,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
        {
          label: '# of Views',
          data: views,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

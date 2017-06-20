'strict use';

var testProd = [];
var testPath = [];

function Prod(name, path) {
  this.name = name;
  this.path = path;
  this.randProd = [];
  this.prodViews = 0;
  this.totalClicks = 0;
  testProd.push(this);
  testPath.push(this);
}
new Prod('bag', 'img/bag.jpg');
new Prod('banana', 'img/banana.jpg');
new Prod('bathroom', 'img/bathroom.jpg');
new Prod('boots', 'img/boots.jpg');
new Prod('breakfast', 'img/breakfast.jpg');
new Prod('bubblegum', 'img/bubblegum.jpg');
new Prod('chair', 'img/chair.jpg');
new Prod('cthulhu', 'img/cthulhu.jpg');
new Prod('dog-duck', 'img/dog-duck.jpg');
new Prod('dragon', 'img/dragon.jpg');
new Prod('pen', 'img/pen.jpg');
new Prod('pet-sweep', 'img/pet-sweep.jpg');
new Prod('scissors', 'img/scissors.jpg');
new Prod('shark', 'img/shark.jpg');
new Prod('sweep', 'img/sweep.png');
new Prod('tauntaun', 'img/tauntaun.jpg');
new Prod('unicorn', 'img/unicorn.jpg');
new Prod('usb', 'img/usb.gif');
new Prod('water-can', 'img/water-can.jpg');
new Prod('wine', 'img/wine.jpg');


function randProd() {
  var roll = Math.floor(Math.random() * testProd.length + 1);
  var rollProd = document.getElementById('img1');
  rollProd.src = testProd[roll].path;
}
randProd() {
  var roll = Math.floor(Math.random() * testProd.length + 1);
  var rollProd = document.getElementById('img1');
  rollProd.src = testProd[roll].path;
}
randProd() {
  var roll = Math.floor(Math.random() * testProd.length + 1);
  var rollProd = document.getElementById('img1');
  rollProd.src = testProd[roll].path;
}

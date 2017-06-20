'strict use';

var totalclicks = 0;
var all = [];
var newRoll = [];
var lastRoll = [];
Product.imgRoll = document.getElementById('rollCall');

function Product(name, path){
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
  all.push(this);
}

function getRoll(){
  newRoll = [];
  while(newRoll.length < 3){
    var randomSelection = Math.floor(Math.random() * all.length);
    if (!newRoll.includes(all[randomSelection]) && !lastRoll.includes(all[randomSelection])) {
      newRoll.push(all[randomSelection]);
      console.log('Doplicate! Rerolling');
      all[randomSelection].views++;
    }
  }
  lastRoll = newRoll;
}
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

getRoll();

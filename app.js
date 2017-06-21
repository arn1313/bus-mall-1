'strict use';

var totalclicks = 0;
var all = [];
var newRoll = [];
var lastRoll = [];
var viewList = document.getElementById('list');
var imgRoll = document.getElementById('rollCall');

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
      console.log('Duplicate! Rerolling');
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
new Product('sweep', 'img/sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

getRoll();

function render() {
  for(var i = 0; i < newRoll.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newRoll[i].path;
    console.log(imgEl);
    imgEl.id = newRoll[i].name;
    imgRoll.appendChild(imgEl);
    newRoll[i].view ++;
  }
}

function clear(){
  while(imgRoll.firstChild) {
    imgRoll.removeChild(imgRoll.firstChild);
  }
}

function handleClick(event) {
  for(var i = 0; i < newRoll.length; i++) {
    localStorage.setItem('data', JSON.stringify(all));
    if(newRoll[i].name === event.target.id) {
      newRoll[i].clicks ++;
    }
  }

  totalclicks ++;
  if (totalclicks === 25) {
    imgRoll.removeEventListener('click', handleClick);
    clear();
    resultsButton();
  } else {
    clear();
    getRoll();
    render();
  }
}

function resultsButton() {
  var butEl = document.createElement('button');
  var labEl = document.createElement('labEl');
  labEl.textContent = 'See Results';
  butEl.appendChild(labEl);
  imgRoll.appendChild(butEl);
  renderList();
}

function renderList() {
  var imgList = document.getElementById('list');
  function showList() {
    imgList.innerHtml = '';
    for(var i = 0; i < all.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = 'Products: ' + all[i].name + ' has been clicked ' + all[i].clicks + ' times.';
      imgList.appendChild(liEl);
    }
  }
  showList();
}

var research = function() {
  if (localStorage.data){
    all = JSON.parse(localStorage.data);
  } else {
    getRoll();
  }
};

// research();
// function renderChart() {
//   var chartLabel = [];
//   var chartData = [];
//   for (var i = 0; i < all.length; i ++){
//     chartData.push(all[i].clicks);
//     chartLabel.push(all[i].name);
//   }
//
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'bar',
//
//   // The data for our dataset
//   data: {
//     labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
//     datasets: [{
//       label: 'Results Chart',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   },
//
//   // Configuration options go here
//   options: {}
// });
// }

render();

// renderChart();
viewList.addEventListener('click', renderList);
imgRoll.addEventListener('click', handleClick);

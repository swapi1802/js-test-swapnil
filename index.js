// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Swapnil Sakpal JS App</h1>`;

// ----------- Task 1 ----------
Array.prototype.Duplicate = function (){
  return this.concat(this); // used concat function to duplicate, or can use For loop
}

const dupId = document.getElementById('duplicate_result');
dupId.innerHTML = [1,2,3,4,5].Duplicate();

// ----------- Task 2 ----------

function logCar(){
  console.log(this.color + " " + this.brand);
  return this.color + " " + this.brand; 
}

let input = '{"color" : "red", "brand": "Mercedes"}\n {"color" : "white", "brand": "Toyota"}\n{"color" : "gray", "brand": "Audi"}';

const data = input
              .split('\n')
              .filter((t) => !!t)
              .map((i) => JSON.parse(i));
const carlogId = document.getElementById('carlog_result');

console.log('---------------- Task 2 Result --------------');
for(let i = 0; i < data.length; i++){
  console.log (data[i])
  let tempFun = logCar.bind(data[i]);
  carlogId.append(tempFun() + ', '); // shown data on page too 
}

// --------- Task 3 ------------

const Converter = {
  radian: (180 / Math.PI),
  deg2rad (degrees){
  return degrees / this.radian;
  },
  rad2deg (radians) { // code changes due to limited scope of this
  return radians * this.radian;
  }
  };

  const t3input = '1,2,4,2,4,5,5';
  const radId = document.getElementById('rad_result');
  let result = '';
  t3input
  .split(",")
  .filter((t) => !!t)
  .map((i) => parseInt(i, 10))
  .forEach((ang) => {
    let rad = Converter.deg2rad (ang);
    const degPlus10= Converter.rad2deg(rad + 0.174533);
    result += `${rad} - ${degPlus10}\n`;
  });

  radId.innerText = result;  
  console.log('---------------- Task 3 Result --------------');
  console.log(result);


  // ------------ Task 4 ---------

  
let mapInput = '{"value" : "10", "targetDate": "2020-01-01"}\n {"value" : "14", "targetDate": "2020-01-02"}\n{"value" : "12", "targetDate": "2020-01-03"}';

const mapData = mapInput
              .split('\n')
              .filter((t) => !!t)
              .map((i) => JSON.parse(i));

let mapArray = new Map();
mapData.forEach(function(item){
  console.log(item);
  mapArray.set(item.targetDate, item);
});

console.log('---------------- Task 4 Result --------------');
const objTemp = Object.fromEntries(mapArray);
console.log(JSON.stringify(objTemp));
const task4Id = document.getElementById('task4_result');
task4Id.innerHTML = JSON.stringify(objTemp);


// ------------- Task 5 -------------

console.log('---------------- Task 5 Result --------------');

let numInput = [5,4,3,2,1];
const task5Id = document.getElementById('task5_result');
numInput = [...numInput].sort((a, b) => a - b);
for(let i = 1 ; i < numInput.length ; i++){
  const slicedArray = numInput.slice(0, i);
  let output = getMedian(slicedArray)
  console.log(output);
  task5Id.innerHTML += '<br/>';  
  task5Id.append(output);
}

function getMedian(arr) {
  const mid = Math.floor(arr.length / 2),
    if(arr.length == 0){
      return arr[0];
    }
    else if(arr.length % 2 !== 0){
      return arr[mid];
    }
    else{
      return (arr[mid - 1] + arr[mid]) / 2;
    }
};


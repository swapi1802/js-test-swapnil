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

const txtJson = document.getElementById('id_txtjson');
const carlogId = document.getElementById('carlog_result');

txtJson.value = '{"color" : "red", "brand": "Mercedes"}\n{"color" : "white", "brand": "Toyota"}\n{"color" : "gray", "brand": "Audi"}';

const btnResult = document.getElementById('btn_add');
btnResult.addEventListener("click", btnAddClick)
document.getElementById('btn_clear').addEventListener("click", btnClearClick);

function btnAddClick(evt){
  carlogId.innerHTML = '';
  if(txtJson.value != null && txtJson.value != ''){
    const data = txtJson.value
                .split('\n')
                .filter((t) => !!t)
                .map((i) => JSON.parse(i));
    console.log('---------------- Task 2 Result --------------');
    for(let i = 0; i < data.length; i++){
      let tempFun = logCar.bind(data[i]);
      carlogId.append(tempFun() + ', '); // shown data on page too 
    }
  }
};

function btnClearClick(evt){
  txtJson.value = '';
  carlogId.innerHTML = '';
};


btnResult.dispatchEvent(new Event('click'));


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

const txtTask3Values = document.getElementById('id_txttask3values');
const radId = document.getElementById('rad_result');

txtTask3Values.value = '1,2,4,2,4,5,5';

const btnTask3Result = document.getElementById('btn_task3_result');
btnTask3Result.addEventListener("click", btnTask3ReultClick)
document.getElementById('btn_task3_clear').addEventListener("click", btnTask3ClearClick);

function btnTask3ReultClick(evt){
  radId.innerHTML = '';
  if(txtTask3Values.value != null && txtTask3Values.value != ''){
    let result = '';
    txtTask3Values.value
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
  }
};

function btnTask3ClearClick(evt){
  txtTask3Values.value = '';
  radId.innerHTML = '';
};

btnTask3Result.dispatchEvent(new Event('click'));

  // ------------ Task 4 ---------

const txtTask4Values = document.getElementById('id_txttask4values');
const task4Id = document.getElementById('task4_result');

txtTask4Values.value = '{"value" : "10", "targetDate": "2020-01-01"}\n {"value" : "14", "targetDate": "2020-01-02"}\n{"value" : "12", "targetDate": "2020-01-03"}';

const btnTask4Result = document.getElementById('btn_task4_result');
btnTask4Result.addEventListener("click", btnTask4ReultClick)
document.getElementById('btn_task4_clear').addEventListener("click", btnTask4ClearClick);

function btnTask4ReultClick(evt){
  task4Id.innerHTML = '';
  if(txtTask4Values.value != null && txtTask4Values.value != ''){
    const mapData = txtTask4Values.value
              .split('\n')
              .filter((t) => !!t)
              .map((i) => JSON.parse(i));

    let mapArray = new Map();
    mapData.forEach(function(item){
      mapArray.set(item.targetDate, item);
    });

    console.log('---------------- Task 4 Result --------------');
    const objTemp = Object.fromEntries(mapArray);
    console.log(JSON.stringify(objTemp));
    task4Id.innerHTML = JSON.stringify(objTemp);
  }
};

function btnTask4ClearClick(evt){
  txtTask4Values.value = '';
  task4Id.innerHTML = '';
};

btnTask4Result.dispatchEvent(new Event('click'));

// ------------- Task 5 -------------

console.log('---------------- Task 5 Result --------------');

const txtTask5Values = document.getElementById('id_txttask5values');
const task5Id = document.getElementById('task5_result');

txtTask5Values.value = '5,4,3,2,1';

const btnTask5Result = document.getElementById('btn_task5_result');
btnTask5Result.addEventListener("click", btnTask5ReultClick)
document.getElementById('btn_task5_clear').addEventListener("click", btnTask5ClearClick);

function btnTask5ReultClick(evt){
  task5Id.innerHTML = '';
  if(txtTask5Values.value != null && txtTask5Values.value != ''){
    numInput = txtTask5Values.value
              .split(',')
              .filter((t) => !!t)
              .map((i) => JSON.parse(i));
              
    numInput = [...numInput].sort((a, b) => a - b);
    console.log('sorted array - ' + numInput);
    for(let i = 1 ; i <= numInput.length ; i++){
      const slicedArray = numInput.slice(0, i);
      let output = getMedian(slicedArray)
      console.log(output);
      task5Id.innerHTML += '<br/>';  
      task5Id.append(output);
    }
  }
};

function btnTask5ClearClick(evt){
  txtTask5Values.value = '';
  task5Id.innerHTML = '';
};

let numInput = []
function getMedian(arr) {
  const mid = Math.floor(arr.length / 2),
    if(arr.length % 2 !== 0){
      return arr[mid];
    }
    else{
      return (arr[mid - 1] + arr[mid]) / 2;
    }
};
btnTask5Result.dispatchEvent(new Event('click'));


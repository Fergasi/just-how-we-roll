/**********
* DATA *
**********/
// Can change 'const' to 'let':

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
* HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
* YOUR CODE BELOW *
*******************/

//Define elements
const d6Mean = document.querySelector('#d6-rolls-mean');
const d6Median = document.querySelector('#d6-rolls-median');
const d6Mode = document.querySelector('#d6-rolls-mode');
const d6Img = document.querySelector('#d6-roll')

const doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
const doubleD6Median = document.querySelector('#double-d6-rolls-median');
const doubleD6Mode = document.querySelector('#double-d6-rolls-mode');
const doubleD6Img1 = document.querySelector('#double-d6-roll-1')
const doubleD6Img2 = document.querySelector('#double-d6-roll-2')

const d12Mean = document.querySelector('#d12-rolls-mean');
const d12Median = document.querySelector('#d12-rolls-median');
const d12Mode = document.querySelector('#d12-rolls-mode');
const d12Img = document.querySelector('#d12-roll')

const d20Mean = document.querySelector('#d20-rolls-mean'); 
const d20Median = document.querySelector('#d20-rolls-median');
const d20Mode = document.querySelector('#d20-rolls-mode');
const d20Img = document.querySelector('#d20-roll')

const reset = document.querySelector('#reset-button');

defaultDisplay();

/****************************
* CLICK HANDLING FUNCTIONS *
****************************/

function defaultDisplay(){
  //D6 defult display
  d6Mean.innerText = 'N/A'
  d6Median.innerText = 'N/A'
  d6Mode.innerText = 'N/A'
  d6Img.src = 'images/start/d6.png'
 
  // 2D6 defult display
  doubleD6Mean.innerText = 'N/A'
  doubleD6Median.innerText = 'N/A'
  doubleD6Mode.innerText = 'N/A'
  doubleD6Img1.src = 'images/start/d6.png'
  doubleD6Img2.src = 'images/start/d6.png'
 
  // D12 defult display
  d12Mean.innerText = 'N/A'
  d12Median.innerText = 'N/A'
  d12Mode.innerText = 'N/A'
  d12Img.src = 'images/start/d12.jpeg'
 
  // D20 defult display
  d20Mean.innerText = 'N/A'
  d20Median.innerText = 'N/A'
  d20Mode.innerText = 'N/A'
  d20Img.src = 'images/start/d20.jpg'
}

function d6Roll(){
  
  const result = getRandomNumber(6);
 
  d6Img.src = `images/d6/${result}.png`
  sixes.push(result);
  
  d6Mean.innerText = getMean(sixes)
  d6Median.innerText = getMedian(sixes)
  d6Mode.innerText = getMode(sixes)
}


function doubleD6Roll(){
  
  const d61Result = getRandomNumber(6);
  const d62Result = getRandomNumber(6);
  doubleD6Img1.src = `images/d6/${d61Result}.png`
  doubleD6Img2.src = `images/d6/${d62Result}.png`
  let result = d61Result + d62Result
  doubleSixes.push(result);
  
  doubleD6Mean.innerText = getMean(doubleSixes)
  doubleD6Median.innerText = getMedian(doubleSixes)
  doubleD6Mode.innerText = getMode(doubleSixes)
}

function d12Roll(){

 const result = getRandomNumber(12);
 d12Img.src = `images/numbers/${result}.png`
 twelves.push(result);

 d12Mean.innerText = getMean(twelves)
 d12Median.innerText = getMedian(twelves)
 d12Mode.innerText = getMode(twelves)
}

function d20Roll(){
 
 const result = getRandomNumber(20);
 d20Img.src = `images/numbers/${result}.png`
 twenties.push(result);
 
 d20Mean.innerText = getMean(twenties)
 d20Median.innerText = getMedian(twenties)
 d20Mode.innerText = getMode(twenties)
}

/*******************
* EVENT LISTENERS *
*******************/

d6Img.addEventListener('click', d6Roll)

doubleD6Img1.addEventListener('click', doubleD6Roll)

doubleD6Img2.addEventListener('click', doubleD6Roll)

d12Img.addEventListener('click', d12Roll)

d20Img.addEventListener('click', d20Roll)

reset.addEventListener('click', reset_function)

/******************
* RESET FUNCTION *
******************/

function reset_function(){
  sixes.splice(0,sixes.length);
  doubleSixes.splice(0,doubleSixes.length);
  twelves.splice(0,twenties.length);
  twenties.splice(0,twenties.length);
   
  defaultDisplay();
}

/****************
* MATH SECTION *
****************/

function getMean(arr){
  let sum = 0
  for( a of arr){
    sum += a
  }
  return (sum/arr.length).toFixed(2)
}
 
function getMedian(arr){
  let sortedArr = sortByNumber(arr);
  let medianIndex = Math.floor(arr.length/2);
  
  if (arr.length % 2 === 0){
    return ((sortedArr[medianIndex] + sortedArr[medianIndex -1])/2).toFixed(2)
  }
  
  else {
    return (sortedArr[medianIndex]).toFixed(2)
  }
}
 
function getMode(arr){

  let countObject = {};
  
  //create keys for each number in array

  for (let number of arr){
    if (countObject[number] >= 1){
      countObject[number]++;
    } else {
      countObject[number] = 1;
    }
  }

  let highestUniqueNumber = 0;
  let highestCount = 0;
  let keys = Object.keys(countObject); //returns a string array of each key in the object that we passed in
  
  //Get number with highest count
  for(let number of keys){
    let value = countObject[number];
    if(value > highestCount){
      highestCount = value;
      highestUniqueNumber = number;
    }
  }

  return highestUniqueNumber; 
}
function getArrayParams(...arr) {
  let min = arguments[0]; 
  let max = arguments[0];
  let sum = arr.reduce((result, item)=> result + item);
  for(let i = 0; i < arr.length; i++) {
    if(min>arr[i]) {min = arr[i]};
    if(max<arr[i]) {max = arr[i]};
  };
  return { min: min, max: max, avg: Number((sum / arr.length).toFixed(2))};
}

function summElementsWorker(...arr) {
  if (arguments.length === 0) {return 0};
  let sum = arr.reduce((result, item) => result + item);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arguments.length === 0) {return 0};
  let max = arguments[0];
  let min = arguments[0];
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]){max = arr[i]};
    if(min > arr[i]){min = arr[i]};
  };
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  if (arguments.length === 0) {return 0};
  let arrEvent = arr.filter(function (i) {
    let item = i%2;
    return item === 0;
  });
  let arrEventNo =arr.filter(function (i) {
    let item = i % 2;
    return item != 0;
  });
  let sumEvent = arrEvent.reduce((result, item)=> result + item);
  let sumEventNo = arrEventNo.reduce((result, item)=> result + item);
  return sumEvent-sumEventNo;
}

function averageEvenElementsWorker(...arr) {
  if (arguments.length === 0) {return 0};
  let sumEventElement = 0;
  let countEventElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      sumEventElement += arr[i];
      countEventElement++;
    } else continue;
  }
  return sumEventElement/countEventElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];
  let maxLocalResult = 0;
  arrOfArr.forEach((arr) => {
    let result = func(...arr);
    if (maxLocalResult<result) {maxLocalResult=result}
  });
  if (maxWorkerResult < maxLocalResult) {maxWorkerResult = maxLocalResult};  
  return maxWorkerResult;
}

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if (d === 0) {
    arr.push(-1*b/(2*a));
    return arr;
  } 
  if(d > 0){
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percen = percent/100;
  let oneMounthPercent = percen/12;
  let loanAmount = amount-contribution
  let payment = loanAmount * (oneMounthPercent + (oneMounthPercent / (((1 + oneMounthPercent)**countMonths) - 1)));

  return Math.round(payment*countMonths*100)/100;
}
"use strict";
window.addEventListener("DOMContentLoaded", clickCalculate);
let total;
let roundTo;
let result;
let ul;

function clickCalculate() {
  clickClear();
  //number inputs
  document.getElementById("calculate").addEventListener("click", () => {
    let firstnumber = document.getElementById("firstnumber").value;
    let secondnumber = document.getElementById("secondnumber").value;
    let operator = document.getElementById("operator").value;
    //use previous result as new firstnumber
    if (result !== undefined) {
      firstnumber = result;
    }
    //calculate
    if (operator === "add") {
      total = parseInt(firstnumber) + parseInt(secondnumber);
    } else if (operator === "sub") {
      total = parseInt(firstnumber) - parseInt(secondnumber);
    } else if (operator === "mul") {
      total = parseInt(firstnumber) * parseInt(secondnumber);
    } else if (operator === "div") {
      total = parseInt(firstnumber) / parseInt(secondnumber);
    }
    checkRounded();
  });
}

function checkRounded() {
  if ((document.getElementById("doround").value = true)) {
    let roundTo = document.getElementById("decimals").value;
    result = total.toFixed(roundTo);
    writeResult();
  }
}

function writeResult() {
  const ul = document.getElementById("results");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(result));
  firstnumber.value = result;
  ul.appendChild(li);
}

function clickClear() {
  document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("results").innerHTML = "";
  });
}

const fivePercentages = document.querySelectorAll(".btn-style")[0];
const tenPercentages = document.querySelectorAll(".btn-style")[1];
const fifteenPercentages = document.querySelectorAll(".btn-style")[2];
const twentyfivePercentages = document.querySelectorAll(".btn-style")[3];
const fiftyPercentages = document.querySelectorAll(".btn-style")[4];
const tipAmountTotal = document.querySelector(".TipAmountTotal");
const TipAmountPerPerson = document.querySelector(".TipAmountPerPerson");
const TotalBillPerPerson = document.querySelector(".totalBillPerPerson");

function getTheButtonValueFive() {
  const totalBill = parseInt(document.getElementById("bill").value);
  const numberOfPeople = parseInt(document.getElementById("people").value);
  const buttonValue = parseInt(fivePercentages.value);
  const tipAmount = (totalBill * buttonValue) / 100;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalBillPerPerson = (totalBill + tipAmount) / numberOfPeople;
  tipAmountTotal.innerHTML = "$" + tipAmount.toFixed(2);
  TipAmountPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
  TotalBillPerPerson.innerHTML = "$" + totalBillPerPerson.toFixed(2);
  console.log(totalBillPerPerson);
}

function getTheButtonValueTen() {
  const totalBill = parseInt(document.getElementById("bill").value);
  const numberOfPeople = parseInt(document.getElementById("people").value);
  const buttonValue = parseInt(tenPercentages.value);
  const tipAmount = (totalBill * buttonValue) / 100;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalBillPerPerson = (totalBill + tipAmount) / numberOfPeople;
  tipAmountTotal.innerHTML = "$" + tipAmount.toFixed(2);
  TipAmountPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
  TotalBillPerPerson.innerHTML = "$" + totalBillPerPerson.toFixed(2);
  console.log(tipAmount);
}

function getTheButtonValueFifteen() {
  const totalBill = parseInt(document.getElementById("bill").value);
  const numberOfPeople = parseInt(document.getElementById("people").value);
  const buttonValue = parseInt(fifteenPercentages.value);
  const tipAmount = (totalBill * buttonValue) / 100;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalBillPerPerson = (totalBill + tipAmount) / numberOfPeople;
  tipAmountTotal.innerHTML = "$" + tipAmount.toFixed(2);
  TipAmountPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
  TotalBillPerPerson.innerHTML = "$" + totalBillPerPerson.toFixed(2);
  console.log(tipAmount);
}
function getTheButtonValueTwentyFive() {
  const totalBill = parseInt(document.getElementById("bill").value);
  const numberOfPeople = parseInt(document.getElementById("people").value);
  const buttonValue = parseInt(twentyfivePercentages.value);
  const tipAmount = (totalBill * buttonValue) / 100;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalBillPerPerson = (totalBill + tipAmount) / numberOfPeople;
  tipAmountTotal.innerHTML = "$" + tipAmount.toFixed(2);
  TipAmountPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
  TotalBillPerPerson.innerHTML = "$" + totalBillPerPerson.toFixed(2);
  console.log(tipAmount);
}
function getTheButtonValueFifty() {
  const totalBill = parseInt(document.getElementById("bill").value);
  const numberOfPeople = parseInt(document.getElementById("people").value);
  const buttonValue = parseInt(fiftyPercentages.value);
  const tipAmount = (totalBill * buttonValue) / 100;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalBillPerPerson = (totalBill + tipAmount) / numberOfPeople;
  tipAmountTotal.innerHTML = "$" + tipAmount.toFixed(2);
  TipAmountPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
  TotalBillPerPerson.innerHTML = "$" + totalBillPerPerson.toFixed(2);
  console.log(tipAmount.toFixed(2).padStart(2, "0"));
}

function resetButtonHandler() {
  tipAmountTotal.innerHTML = "$0.00";
  TipAmountPerPerson.innerHTML = "$0.00";
  TotalBillPerPerson.innerHTML = "$0.00";
}

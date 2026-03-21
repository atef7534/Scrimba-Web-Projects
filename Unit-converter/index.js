/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", showUnits);

function showUnits() {
  const inputEl = document.getElementById("units");
  const inputElValue = Number(inputEl.value);
  const unitEls = document.getElementsByClassName("unit");

  for (let i = 0; i < unitEls.length; i++) {
    unitEls[i].textContent = inputElValue;
  }

  const feet = document.querySelector(".feet");
  const meters = document.querySelector(".meters");
  const gallons = document.querySelector(".gallons");
  const liters = document.querySelector(".liters");
  const pounds = document.querySelector(".pounds");
  const kilos = document.querySelector(".kilos");

  feet.textContent = (inputElValue * 3.281).toFixed(3);
  meters.textContent = (inputElValue / 3.281).toFixed(3);
  gallons.textContent = (inputElValue * 0.264).toFixed(3);
  liters.textContent = (inputElValue / 0.264).toFixed(3);
  pounds.textContent = (inputElValue * 2.204).toFixed(3);
  kilos.textContent = (inputElValue / 2.204).toFixed(3);
}

showUnits();

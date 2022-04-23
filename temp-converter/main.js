document.querySelector('#convertC').addEventListener('click', TempToCelsius);

document.querySelector('#convertF').addEventListener('click', TempToFahrenheit);


function TempToCelsius() {
      let degree = document.querySelector('#temp').value;
      degree = (parseFloat(degree) - 32) * 5/9;

      document.getElementById("newtemp").innerHTML = `The temperature in Celsius is ${degree}`;
}


function TempToFahrenheit() {
      let temp = document.querySelector('#temp').value;

      let convertedTemp = (parseFloat(temp) * 9/5) + 32;

      document.getElementById("newtemp").innerHTML = `The temperature in Fahrenheit is ${convertedTemp}`;
}
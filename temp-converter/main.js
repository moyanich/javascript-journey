document.querySelector('#convertToFarenheight').addEventListener('click', TempToFahrenheit);

function TempToFahrenheit() {
      let degree = document.querySelector('#temperature').value;
      degree = (parseFloat(degree) * 9/5) + 32;
      document.getElementById("newtemp").innerHTML = `The temperature in Fahrenheit is ${degree}`;
}
document.querySelector('#calculate').addEventListener('click', getRemainder);

function getRemainder() {
      const num1 = document.querySelector('#num1').value;
      const num2 = document.querySelector('#num2').value;

      const remainder = parseInt(num1) / parseInt(num2);

      document.getElementById("remainder").innerText = remainder;
}
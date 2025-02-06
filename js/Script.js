function calculateSquare() {
  const input = document.getElementById("numberInput").value;
  const number = parseFloat(input);
  if (!isNaN(number)) {
    const square = number * number;
    document.getElementById(
      "result"
    ).innerText = `Square of ${number} is ${square}`;
  } else {
    document.getElementById("result").innerText = "Please enter a valid number";
  }
}

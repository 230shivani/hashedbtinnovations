function calculate(operation) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(n1) || isNaN(n2)) {
    result = "Please enter valid numbers";
  } else {
    if (operation === "add") result = n1 + n2;
    else if (operation === "sub") result = n1 - n2;
    else if (operation === "mul") result = n1 * n2;
    else if (operation === "div") {
      result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}
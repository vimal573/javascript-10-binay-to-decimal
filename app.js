const inputBinary = document.getElementById("binary");
const btnConvert = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

btnConvert.addEventListener("click", (e) => {
  e.preventDefault();
  const [binary, float] = inputBinary.value.split(".");

  const decimalInt = binary
    .split("")
    .reverse()
    .reduce((acc, el, i) => {
      // console.log(acc, el, i + 1);
      // console.log(2 ** (i + 1));
      if (el == 1) return 2 ** i + acc;
      if (el == 0) return 0 + acc;
    }, 0);

  let decimalFloat;

  if (!float) {
    decimalFloat = 0;
  } else {
    decimalFloat = float.split("").reduce((acc, el, i) => {
      // console.log(acc, el, i + 1);
      // console.log(2 ** (i + 1));
      if (el == 1) return 2 ** -(i + 1) + acc;
      if (el == 0) return 0 + acc;
    }, 0);
  }

  console.log(decimalInt + decimalFloat);

  // resultEl.textContent = `Decimal Number : ${
  //   decimalInt || decimalFloat
  //     ? decimalInt + decimalFloat
  //     : "Enter Binary number"
  // }`;

  resultEl.textContent =
    decimalInt || decimalFloat
      ? `Decimal Number : ${decimalInt + decimalFloat}`
      : "Enter Binary number";
});

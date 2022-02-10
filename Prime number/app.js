const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

console.log(input);

function isPrime(number) {
  if (number <= 1) return false;

  if (number <= 3) return true;

  if (number % 2 == 0 || number % 3 == 0) return false;

  for (var i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }

  return true;
}

const output = isPrime(input);

try {
  fs.writeFile("./output.txt", `${output}`, "utf-8", (err) => {
    console.log(output);
  });
} catch (err) {
  console.log(err);
}

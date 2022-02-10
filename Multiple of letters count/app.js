const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").toLowerCase();

console.log(input);

let aCounter = 0,
  oCounter = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    aCounter++;
  } else if (input[i] === "o") {
    oCounter++;
  } else {
    continue;
  }
}

const output = aCounter * oCounter;

try {
  fs.writeFile("./output.txt", `${output}`, "utf-8", (err) => {
    console.log(output);
  });
} catch (err) {
  console.log(err);
}

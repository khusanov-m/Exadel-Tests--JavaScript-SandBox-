const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
const arrInput = input.split(",");

console.log(arrInput);

let output = 0;

for (let i = 0; i < arrInput.length - 1; i++) {
  output += arrInput[i] - arrInput[i + 1] < 0 ? 1 : 0;
  console.log(`${output}\n${arrInput[i]} : ${arrInput[i + 1]}`);
}

try {
  fs.writeFile("./output.txt", `${output}`, "utf-8", (err) => {
    console.log(output);
  });
} catch (err) {
  console.log(err);
}

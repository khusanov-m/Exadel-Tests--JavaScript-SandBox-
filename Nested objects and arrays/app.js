const fs = require("fs");
const func = require("./script1");

const input = JSON.parse(fs.readFileSync(`${__dirname}/input.txt`, "utf-8"));

console.log(input);

let arr = [];

function addToArray(input) {
  for (var k in input) {
    if (input[k] instanceof Object) {
      addToArray(input[k]);
    } else arr.push(input[k]);
  }

  return arr;
}

arr = addToArray(input);
console.log(arr);

const filterArr = arr
  .filter((e) => e !== undefined)
  .filter((e) => e !== null)
  .filter((e) => e > 0);

console.log(filterArr);

const output = filterArr.reduce((acc, curr) => acc + curr, 0);

try {
  fs.writeFile("./output.txt", `${output}`, "utf-8", (err) => {
    console.log(output);
  });
} catch (err) {
  console.log(err);
}

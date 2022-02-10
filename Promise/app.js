const fs = require("fs");
const func = require("./script1");

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

console.log(input);

let output;

func(input).then((value) => {
  output = value;

  try {
    fs.writeFile("./output.txt", `${output}`, "utf-8", (err) => {
      console.log(output);
    });
  } catch (err) {
    console.log(err);
  }
});

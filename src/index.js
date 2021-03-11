import json from "./index.json";

function fn(...arr) {
  const res = arr.reduce((pre, cur) => pre + cur);
  console.log(res);
}

fn(3, 2, 1);

console.log(json);

// webpack ./src/index.js  ./build/bundle.js

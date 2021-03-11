import json from "./index.json";

function fn(...arr) {
  const res = arr.reduce((pre, cur) => pre + cur);
  console.log(res);
}

fn(6, 5, 4, 3, 2, 1);

console.log(json);
console.log(__dirname);
// webpack ./index.js  ../build/bundle.js

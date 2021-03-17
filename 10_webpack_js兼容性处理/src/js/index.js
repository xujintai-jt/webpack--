//  import '@babel/polyfill'

const fn1 = () => {
  console.log(111);
}
fn1()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})

setTimeout(() => {
  console.log(p1);
}, 1500);
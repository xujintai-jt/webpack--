//引入样式资源
import './global.css'
import './index.less'

function  fn(...arr) {
  const res = arr.reduce((pre, cur, item, index, itself) => pre + cur)
  console.log(res);
}

fn(1,2,3,4,5,6)
import "./iconfont.css";
import "./global.less";
import printMe from './print.js';

console.log(1111)();

if (module.hot) {
  //一旦module.hot为true，说明开起了HMR功能。
  module.hot.accept("./print.js", function () {
    //方法会监听print.js文件的变化，一旦发生变化，其它模块不会重新打包构建。
    //会执行后面的回调函数
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}

'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql={
   enable:true,    //是否开启
   package:'egg-mysql'    //对应的包
}
exports.cors={
  enable:true,      //允许跨域
  package:'egg-cors'   //解决跨域访问
}
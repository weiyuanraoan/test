/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588422612508_845';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //配置数据库地址、接口、用户、密码、数据库名称
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  
  //设置跨域
  config.security={
    csrf:{
      enable:false  
    },
    domainWhiteList:['*']   //所有数组
  };

  config.cors={
    // origin: '*',    //所有的域名都可以访问
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'     //允许哪些请求方式可以访问
  }
  return {
    ...config,
    ...userConfig,
  };
};
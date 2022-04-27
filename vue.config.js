/*
 * @Author: your name
 * @Date: 2021-11-23 16:42:28
 * @LastEditTime: 2022-04-27 19:01:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /defens1/vue.config.js
 */
"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// const defaultSettings = require("./src/settings.js");
const { config } = require("process");
// const name = defaultSettings.title || "Admin"; // page title
module.exports = {
  publicPath: "./",
  outputDir: "build",
  assetsDir: "assets",
  lintOnSave: false,
  productionSourceMap: false,
  // baseUrl:'./',
  devServer: {
    // https:true,
    // open: true,
    // host: "192.168.1.126",
    
    port: 8090,
    disableHostCheck: true,
    proxy: {
      "/api": {
        // target: "http://192.168.1.56:8011/api/",  
        target:"http://www.daoting.co:8899/",
        // target: "http://192.168.1.133:8011/",   
        // target:"http://221.213.114.155:1215/api/",
        // target:"http://221.213.114.155:1217/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
        "@components": resolve("src/components")
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true);
  }
};

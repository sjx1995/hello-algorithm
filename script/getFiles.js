/*
 * @Author: Sunly
 * @Date: 2020-11-30 11:26:36
 * @LastEditTime: 2020-11-30 14:43:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \hello-algorithm\script\getFiles.js
 */
const fs = require("fs");

const files = fs.readdirSync("./docs/leetcode/string").map((file) => file.substr(0, file.length - 3));

console.log(files);

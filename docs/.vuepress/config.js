/*
 * @Author: Sunly
 * @Date: 2020-11-25 11:04:39
 * @LastEditTime: 2020-11-30 17:33:47
 * @LastEditors: Sunly
 * @Description: 配置文件
 * @FilePath: \hello-algorithm\docs\.vuepress\config.js
 */
const { nav, sidebar } = require("../../scripts/getConfig");

module.exports = {
	title: "Javascript data structures and algorithms",
	description: "Javascript data structures and algorithms",
	base: "/js-structures-algorithms/",
	dest: "./dist",
	head: [["link", { rel: "icon", href: "/logo.png" }]],
	themeConfig: {
		nav,
		smoothScroll: true,
		sidebar,
	},
	markdown: {
		lineNumbers: true,
	},
	configureWebpack: {
		resolve: {
			alias: {},
		},
	},
};

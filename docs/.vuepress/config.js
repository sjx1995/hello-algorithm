/*
 * @Author: Sunly
 * @Date: 2020-11-25 11:04:39
 * @LastEditTime: 2020-12-01 15:27:10
 * @LastEditors: Sunly
 * @Description: 配置文件
 * @FilePath: \hello-algorithm\docs\.vuepress\config.js
 */
const { nav, sidebar } = require("../../scripts/getConfig");

module.exports = {
	title: "Javascript data structures and algorithms",
	description: "Javascript data structures and algorithms",
	base: "/js-data-structures-algorithms/",
	dest: "./dist",
	head: [
		["link", { rel: "icon", href: "/logo.png" }],
		[
			"script",
			{},
			`
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?f2f882b82cfdd739bdf165595a2019f2";
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();`,
		],
	],
	themeConfig: {
		nav,
		sidebar,
		smoothScroll: true,
		nextLinks: true,
		prevLinks: true,
		lastUpdated: "最后更新时间",
		repo: "sjx1995/js-data-structures-algorithms",
		repoLabel: "查看源码",
		editLinks: true,
		editLinkText: "帮助我改善这个页面",
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

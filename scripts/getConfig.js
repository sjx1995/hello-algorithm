/*
 * @Author: Sunly
 * @Date: 2020-11-30 11:26:36
 * @LastEditTime: 2020-12-16 12:40:18
 * @LastEditors: Sunly
 * @Description: 设置nav和sidebar
 * @FilePath: \hello-algorithm\scripts\getConfig.js
 */
const fs = require("fs");

const configText = {
	algorithmConfig: "常用算法",
	leetcodeConfig: "Leetcode",
	personelPageConfig: "个人主页",
};
const algorithmConfig = [{ path: "/sort-algorithms/", name: "排序算法" }];
const leetcodeConfig = [
	{ path: "/leetcode/array/", name: "数组" },
	{ path: "/leetcode/design/", name: "设计" },
	{ path: "/leetcode/dynamicProgramming/", name: "动态规划" },
	{ path: "/leetcode/graph/", name: "图" },
	{ path: "/leetcode/greedy/", name: "贪心算法" },
	{ path: "/leetcode/linkedList/", name: "链表" },
	{ path: "/leetcode/mathematics/", name: "数学" },
	{ path: "/leetcode/search/", name: "搜索算法" },
	{ path: "/leetcode/sort/", name: "排序" },
	{ path: "/leetcode/string/", name: "字符串" },
];
const personelPageConfig = [
	{ path: "https://sunly.in", name: "个人网站" },
	{ path: "https://sunly.in/blog", name: "个人博客" },
	{ path: "https://github.com/sjx1995", name: "Github" },
];

const navConfigs = { leetcodeConfig, algorithmConfig, personelPageConfig };
const sidebarConfigs = [...algorithmConfig, ...leetcodeConfig];

const themeConfig = {
	nav: [],
	sidebar: {},
};

Object.getOwnPropertyNames(navConfigs).forEach((config) => {
	themeConfig.nav.push({
		text: configText[config],
		items: navConfigs[config].map((item) => ({ text: item.name, link: item.path })),
	});
});

sidebarConfigs.map((config) => {
	themeConfig.sidebar[config.path] = [
		{
			title: config.name,
			collapsable: false,
			sidebarDepth: 2,
			children: fs
				.readdirSync(`./docs${config.path}`)
				.filter((dir) => dir !== "README.md")
				.map((dir) => dir.substr(0, dir.length - 3)),
		},
	];
});

// console.log(JSON.stringify(themeConfig, null, 2));

module.exports = themeConfig;

/*
 * @Author: Sunly
 * @Date: 2020-11-25 11:04:39
 * @LastEditTime: 2020-11-30 15:07:40
 * @LastEditors: Sunly
 * @Description: 配置文件
 * @FilePath: \hello-algorithm\docs\.vuepress\config.js
 */
module.exports = {
	title: "Hello Algorithm",
	description: "Javascript data structures and algorithms",
	base: "/js-structures-algorithms/",
	dest: "./dist",
	head: [["link", { rel: "icon", href: "/logo.png" }]],
	themeConfig: {
		nav: [
			{
				text: "常用算法",
				items: [{ text: "排序算法", link: "/sort-algorithms/" }],
			},
			{
				text: "Leetcode",
				items: [
					{ text: "数组", link: "/leetcode/array/" },
					{ text: "动态规划", link: "/leetcode/dynamicProgramming/" },
					{ text: "图", link: "/leetcode/graph/" },
					{ text: "贪心算法", link: "/leetcode/greedy/" },
					{ text: "链表", link: "/leetcode/linkedList/" },
					{ text: "数字", link: "/leetcode/number/" },
					{ text: "搜索算法", link: "/leetcode/search/" },
					{ text: "排序", link: "/leetcode/sort/" },
					{ text: "字符串", link: "/leetcode/string/" },
				],
			},
			{
				text: "个人主页",
				items: [
					{ text: "个人网站", link: "https://sunly.in" },
					{ text: "个人博客", link: "https://sunly.in/blog/" },
					{ text: "Github", link: "https://github.com/sjx1995" },
				],
			},
		],
		smoothScroll: true,
		sidebar: {
			"/sort-algorithms/": [
				{
					title: "排序算法",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						["", "介绍"],
						"01.冒泡排序",
						"02.选择排序",
						"03.插入排序",
						"04.归并排序",
						"05.快速排序",
						"06.计数排序",
						"07.桶排序",
						"08.基数排序",
						"09.希尔排序",
					],
				},
			],
			"/leetcode/array/": [
				{
					title: "数组",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"001.数组交集.350",
						"002.最长公共前缀.14",
						"003.买股票的最佳时机-贪心.122",
						"004.买股票的最佳时机-动态规划.121",
						"005.旋转数组.189",
						"006.转置矩阵.867",
						"007.移除元素.27",
						"008.删除排序数组中重复元素.26",
						"009.一维数组动态和.1480",
						"010.数组加一.66",
						"011.两数之和.1",
						"012.三数之和.15",
						"013.Z字型变换.6",
						"014.一周中的第几天.1185",
						"015.主要元素.17.10",
						"016.有序数组的平方.977",
						"017.所有奇数长度子数组的和.1588",
						"018.三个数的最大乘积.628",
						"019.存在连续三个奇数的数组.1550",
						"020.翻转图像.832",
						"021.存在重复元素II.219",
						"022.种花问题.605",
						"023.盛最多水的容器.11",
						"024.最接近的三数之和.16",
						"025.四数之和.18",
						"026.岛屿的周长.463",
						"026.独一无二的出现次数.1207",
						"027.两个数组的交集.349",
						"028.有效的山脉数组.941",
						"029.找出数组游戏的赢家.1535",
						"030.插入区间.57",
						"031.下一个排列.31",
						"032.按奇偶排序数组II.922",
						"033.移动零.283",
						"034.数组中重复的数字.剑指Offer03",
						"035.有序数组中出现次数超过百分之25的元素.1287",
						"036.能否连接形成数组.1640",
						"037.四数相加II.454",
					],
				},
			],
			"/leetcode/dynamicProgramming/": [
				{
					title: "动态规划",
					collapsable: false,
					sidebarDepth: 2,
					children: ["001.最大子序和.53"],
				},
			],
			"/leetcode/graph/": [
				{
					title: "图",
					collapsable: false,
					sidebarDepth: 2,
					children: ["001.单词接龙.127"],
				},
			],
			"/leetcode/greedy/": [
				{
					title: "贪心算法",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"001.划分字母区间.763",
						"002.分发饼干.455",
						"003.柠檬水找零.860",
						"004.跳跃游戏.55",
						"005.加油站.134",
						"006.用最少数量的箭引爆气球.452",
					],
				},
			],
			"/leetcode/linkedList/": [
				{
					title: "链表",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"001.删除链表的倒数第N个节点.19",
						"002.返回倒数第K个节点.面试题.02.02",
						"003.删除中间节点.面试题02.03",
						"004.合并两个有序列表.21",
						"005.反转链表.206",
						"006.删除链表的节点.剑指Offer18",
						"007.链表的中间结点.876",
						"008.相交链表.160",
						"009.移除链表元素.,203",
						"010.二进制链表转整数.1290",
						"011.回文链表.234",
						"012.删除排序链表中的重复元素.83",
						"013.环形链表.141",
						"014.从尾到头打印链表.剑指Offer06",
						"015.奇偶链表.328",
						"016.旋转链表.61",
						"017.两两交换链表中的节点.24",
						"018.两数相加.2",
						"019.对链表进行插入排序.147",
					],
				},
			],
			"/leetcode/number/": [
				{
					title: "数字",
					collapsable: false,
					sidebarDepth: 2,
					children: ["001.反转数字.7"],
				},
			],
			"/leetcode/search/": [
				{
					title: "搜索算法",
					collapsable: false,
					sidebarDepth: 2,
					children: ["001.0~n-1中缺失的数字.剑指offer53-II"],
				},
			],
			"/leetcode/sort/": [
				{
					title: "排序",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"001.根据数字二进制下1的数目排序.1356",
						"002.最接近原点的K个点.973",
						"003.距离顺序排列矩阵单元格.1030",
						"004.上升下降字符串.1370",
						"005.三角形的最大周长.976",
						"006.数组的相对排序.1122",
						"007.非递增顺序的最小子序列.1403",
						"008.去掉最低工资和最高工资后的工资平均值.1491",
						"009.最大间距.164",
					],
				},
			],
			"/leetcode/string/": [
				{
					title: "字符串",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"001.无重复字符的最长字串.3",
						"002.反转字符串.344",
						"003.字符串中的第一个唯一字符.387",
						"004.验证回文串.125",
						"005.旋转字符串.796",
						"006.比较退格的字符串.844",
						"007.长按输入925",
						"008.罗马数字转整数.13",
						"009.实现strStr().28",
						"010.替换空格.剑指Offer05",
						"011.有效的字母异位词.242",
						"012.有效的括号.20",
					],
				},
			],
		},
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

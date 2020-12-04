/*
 * @Author: Sunly
 * @Date: 2020-12-01 15:27:32
 * @LastEditTime: 2020-12-01 15:27:49
 * @LastEditors: Sunly
 * @Description: 路由切换时上报百度统计
 * @FilePath: \hello-algorithm\docs\.vuepress\enhanceApp.js
 */
export default ({ router }) => {
	/**
	 * 路由切换事件处理
	 */
	router.beforeEach((to, from, next) => {
		console.log("切换路由", to.fullPath, from.fullPath);
		//触发百度的pv统计
		if (typeof _hmt != "undefined") {
			if (to.path) {
				_hmt.push(["_trackPageview", to.fullPath]);
				console.log("上报百度统计", to.fullPath);
			}
		}
		// continue
		next();
	});
};

export default {
	name: 'header-view',
	data() {
		return {
			searchText: '',
			barArr: [
				{
					path: '/',
					name: '首页',
				},
				{
					path: '/selection',
					name: '精选',
				},
				{
					path: '/category',
					name: '分类',
				},
				{
					path: '/booklist',
					name: '书单',
				},
				{
					path: '/ranking',
					name: '排行榜',
				},
			],
		};
	},
	mounted() {},
	// 计算机属性
	computed: {
		path() {
			return this.$route.path;
		},
	},
	methods: {
		search() {
			console.log(this.searchText);
		},
		/**
     * 路由跳转
     * @param {String} path 
     */
		routerFun(path) {
			console.log(path);
			// this.$router.push(path);
		},
	},
};

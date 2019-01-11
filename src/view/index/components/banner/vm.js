export default {
	name: 'banner',
	data() {
		return {
			showIndex: 0,
			api: 'http://statics.zhuishushenqi.com',
			bannerArr: [],
			bannerSetInterval: null,
			BannerBtn: false,
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.$http.get('/spread').then(({ data }) => {
				this.bannerArr = data.data;
				this.SetInterval();
			});
		},
		/**
     * 定时器
     */
		SetInterval() {
			this.bannerSetInterval = setInterval(() => {
				if (this.showIndex < this.bannerArr.length - 1) {
					this.showIndex++;
				} else {
					this.showIndex = 0;
				}
			}, 5000);
		},
		/**
     * 点击跳转
     * @param {Object} item 
     */
		router(item) {
			console.log('这里是banner点击跳转', item);
		},
		/**
     * 鼠标移入
     */
		enter(index) {
			// console.log(typeof(index));  // 判断是什么类型的
			if (typeof index === 'number') {
				this.showIndex = index;
			}
			this.BannerBtn = true;
			clearInterval(this.bannerSetInterval);
		},
		/**
     * 鼠标离开
     */
		leave() {
			this.BannerBtn = false;
			this.SetInterval();
		},
		bannerClick(index) {
			const showIndex = this.showIndex + index;
			if (showIndex < 0 || showIndex === this.bannerArr.length) {
				return;
			}
			this.showIndex = showIndex;
		},
	},
};

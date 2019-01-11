import categoryView from './components/category/index.vue';
import bannerView from './components/banner/index.vue';
import searchAllView from './components/searchAll/index.vue';
export default {
	name: 'index',
	data() {
		return {
			statistics: {},
		};
	},
	components: {
		categoryView,
    bannerView,
    searchAllView
	},
	mounted() {
		this.wd();
	},
	methods: {
		wd() {
			this.$http.get('/cats/lv2/statistics').then((res) => {
				this.statistics = res.data;
				this.statistics.press = this.statistics.press.slice(0, 9); // 切割数组，slice不会改变原来的数组
				this.statistics.male = this.statistics.male.slice(0, 9); // 两个参数为开始和个数
				this.statistics.female = this.statistics.female.splice(0, 9); // 切割数组会改变原有数组，并且可以在后面添加新的数组
			});
		},
	},
};

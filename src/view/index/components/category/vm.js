export default {
	name: 'category',
	data() {
		return {
			statistics: {},
		};
	},
	props: {
		value: {
			type: Array,
			default: () => {
				return [];
			},
		},
		title: {
			type: String,
			default: '类型',
		},
	},
	mounted() {},
	methods: {},
};

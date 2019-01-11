export default {
	name: 'category',
	data() {
		return {
		};
	},
	props: {
		value: {
			type: Array,
			default: () => {
				return [];
			},
		},
		icon: {
			type: String,
		},
		title: {
			type: String,
			default: '类型',
		},
	},
	mounted() {},
	methods: {},
};

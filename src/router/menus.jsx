export default [
	{
		name: 'Dashboard',
		icon: 'iconfont icon-dashboard',
		path: '/',
		file: '/dashboard/index'
	},
	{
		name: '作业管理',
		icon: 'iconfont icon-zuoyeguanli',
		path: '/task',
		child: [
			{
				name: '作业登记',
				icon: 'iconfont icon-xiezi',
				path: '/task/checkin',
				file: '/task/checkin',
				meta: {
					role: ['admin']
				}
			},
			{
				name: '作业列表',
				icon: 'iconfont icon-zuoye',
				path: '/task',
				file: '/task/index'
			}
		]
	},
	{
		name: '用户管理',
		icon: 'iconfont icon-shujuyuanpeizhi',
		path: '/datasource',
		file: '/data-source/index'
	},
	{
		name: '报表管理',
		icon: 'iconfont icon-ico-',
		path: '/report',
		file: '/report/index'
	},
	{
		name: '关于此项目',
		icon: 'iconfont icon-json',
		path: '/daily',
		file: '/daily/index'
	}
]

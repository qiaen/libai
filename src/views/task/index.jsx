import React, { useEffect, useState } from 'react'
import { Table, Button, Badge, Form, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import useInit from '@utils/useInit'
import './index.scss'
import * as Task from '@api/Task'
const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		width: '70px'
	},
	{
		title: 'Name',
		dataIndex: 'jobName',
		width: '170px',
		ellipsis: true,
		render: text => <a>{text}</a>
	},
	{
		title: 'updateTime',
		dataIndex: 'updateTime'
	},
	{
		title: 'Status',
		dataIndex: 'status',
		width: '120px',
		render: text => (
			<span>
				<Badge status="success" />
				{text}
			</span>
		)
	},
	{
		title: 'Set',
		dataIndex: 'set',
		width: '120px',
		render: () => (
			<Button type="primary" size="small">
				Publish
			</Button>
		)
	}
]
export default function () {
	const [form] = Form.useForm()
	/** Page配置信息, 包含主数据data，多选list */
	const begin = useInit(get)
	const { init, page, setTotal, data, setData, loading, setLoading, rowSelection } = begin

	/** 制造数据 */
	async function get() {
		rowSelection.setSelectedRowKeys([])
		setLoading(true)
		const p = {
			pageNo: page,
			...form.getFieldsValue()
		}
		await Task.getList(p)
			.then(res => {
				setData(res.data)
				setTotal(res.total)
			})
			.catch(err => {})
		setLoading(false)
	}

	return (
		<section className="task height100 flex-view">
			<Form
				className="pb12 shrink0"
				form={form}
				layout="inline"
				onFinish={init}
				initialValues={{
					name: '',
					status: ''
				}}
			>
				<Form.Item name="name" label="用户名">
					<Input style={{ width: 140 }} placeholder="Name / Age"></Input>
				</Form.Item>
				<Form.Item name="status" label="状态">
					<Select style={{ width: 120 }}>
						<Select.Option value="">all</Select.Option>
						<Select.Option value="finished">finished</Select.Option>
						<Select.Option value="running">running</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<Button loading={loading} icon={<SearchOutlined />} type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
			<Table
				className="zm-table"
				loading={loading}
				scroll={{ x: 760, y: 0 }}
				pagination={begin.pagination}
				rowKey="id"
				rowSelection={rowSelection}
				columns={columns}
				dataSource={data}
			/>
		</section>
	)
}

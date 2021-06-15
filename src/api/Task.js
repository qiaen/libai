import Http from '@utils/Http'
// 获取作业列表
export const getList = params => Http.setPromise(`GET`, `/api/jobList`, params)

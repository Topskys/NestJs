import  axios from 'axios';

axios.defaults.baseURL='http://localhost:3000'


export const addCurd = (data:any) => axios.post('/curd', data).then(res => res.data)
export const getList=(data:any) =>axios.get('/curd', {params:data}).then(res => res.data)
export const delCurd = (data:any) => axios.delete(`/curd/${data.id}`).then(res => res.data)
export const updateCurd = (data:any) => axios.patch(`/curd/${data.id}`,data).then(res => res.data)
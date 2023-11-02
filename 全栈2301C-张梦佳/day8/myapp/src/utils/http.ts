import http from './api'
// interface logI{
//     mobile:string,
//     code:string
// }
// export const loginApi=()=>http.get('/verification/sms/get')
export const bannApi = () => http.get('/banner/list')
interface listI {
    page: 1;
    pageSize: 10
}
interface goodsI {
  
    page: 1,
    pageSize: 1,
}
export const listApi = (data: listI) => http.post('/shop/goods/list/v2', data)
export const goodsApi = (data: any) => http.post('/shop/goods/reputation/v2', data)
export const flApi=()=>http.get('/shop/goods/category/all')
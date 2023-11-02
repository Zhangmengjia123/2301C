import http from './api'

export const yzmAPi=(mobile:any)=>http.get('/verification/sms/get',mobile)
// 注册
export const zhuce=(data:any)=>http.post('/user/m/register',data)
// 轮播图
export const bannerAPi=()=>http.get('/banner/list')
// 列表
export const shopList=(data:any)=>http.post('/shop/goods/list/v2',data)
// 商品详细
export const shopApi=(data:any)=>http.post('shop/goods/reputation/v2',data)
// 分类
export const yidaoAPpi=()=>http.get('/shop/goods/category/all')
// 分类二级
export const erdaoApi=(data:any)=>http.post('/shop/goods/list/v2',data)
// 添加
export const addApi=(data:any)=>http.post('shopping-cart/add',data)
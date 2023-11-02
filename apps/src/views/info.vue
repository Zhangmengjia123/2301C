<template>
    <div>
        <div class="box" v-if="data.info" v-for="item in data.info.result">
            <img :src="item.goods.pic" alt="">
            <div class="list">
                <p style="color: green;">￥{{ item.goods.amount }}</p>
                <small style="color: #ccc;text-decoration: line-through;">{{ item.goods.orderId }}</small>
            </div>
        </div>
        <van-action-bar style="z-index: 8;"> 
            <van-action-bar-icon icon="chat-o" text="首页" @click="$router.back()" />
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="shop-o" text="购物车" />
            <van-action-bar-button color="#d8f2f0" type="warning" text="加入购物车" />
            <van-action-bar-button color="#109785" type="danger"  @click="add" text="立即购买" />
        </van-action-bar>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { shopApi } from '../request/http'
import { useRoute } from 'vue-router';
const route = useRoute()
const list = reactive({
    page: 1,
    pageSize: 1
})
const data = reactive({
    info: <any>[]
})
shopApi({ goodsId: route.query.id, list }).then(res => {
    console.log(res);
    data.info = res.data
})
</script>

<style lang="scss" scoped>
.list {
    padding: 0 10px;
}
</style>
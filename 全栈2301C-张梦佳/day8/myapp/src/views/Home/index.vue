<script setup lang='ts'>
    import { ref } from "vue";
    import { bannApi, listApi } from '../../utils/http'
    const list = ref([])
    const list1 = ref([])

    const bann = () => {
        bannApi().then((res) => {
            // console.log(res);
            list.value = res.data
            // console.log(list.value);

        })
    }
    bann()

    const li = () => {
        listApi().then((res) => {
            console.log(res);
            list1.value = res.data.result
            console.log(list1.value);
        })
    }
    li()
 
</script>
<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in list" :key="index">
                <img style="width: 100%;height: 100%;" :src="item.picUrl" alt="">
            </van-swipe-item>
        </van-swipe>
        <h3 style="text-align: center;">商品列表</h3>

        <ul style="display: flex;flex-wrap: wrap;">
            <li v-for="(item, index) in list1" :key="index" style="padding:5px ;width: 170px;" @click="$router.push(`/mygoods?id=${item.id}`)">
                <span style=" display: inline-block; width: 175px;height: 170px;"><img style="border-radius: 8px;overflow: hidden;
                width: 100%;height: 100%;" :src="item.pic" alt=""></span>
                <h6 style="overflow: hidden;word-wrap:break-word; word-break:normal; ">{{item.name}}</h6>
                <p style="color:#52a486 ; display: flex;align-items: center;justify-content: space-around;">
                    ￥{{item.minPrice}}
                    <s style="font-size: 12px;  color:#ccc ;">￥{{item.originalPrice}}</s>
                    <button
                        style="border:1px solid #59a58a ;font-size: 12px;border-radius: 4px; background-color: #fff;  color: #59a58a;padding: 3px;">购买</button>
                </p>

            </li>
        </ul>

        <h6 style="text-align:center ;margin-top: 30px; margin-bottom: 100px;">没有更多哟了</h6>
'
'



    </div>
</template>
<style lang='scss' scoped>





</style>
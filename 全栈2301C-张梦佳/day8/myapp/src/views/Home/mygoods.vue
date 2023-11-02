<script setup lang='ts'>
    import { ref } from 'vue'
    import { goodsApi } from "../../utils/http";
    import { useRoute } from 'vue-router'
    import { showToast } from 'vant';
    const route = useRoute()
    let list = ref([])
    const goodsA = () => {

        goodsApi({ goodsId: route.query.id, page: 1, pageSize: 1, }).then((res) => {
            console.log(res);
            list.value = res.data.result[0].goods
            console.log(list.value);

        })
    }
    goodsA()
    const onClickIcon = () => showToast('点击图标');
    const onClickButton = () => showToast('点击按钮');

</script>
<template>
    <div>
        <div>
            <img :src="list.pic" alt="">
            <h4 style="color:#55a387 ;">￥ {{list.amountSingle}} .00</h4>
            <p style="color:#666 ;font-size: 12px;">价格：<s>￥ {{list.amountSingleBase}}</s> </p>
        </div>

        <h4> {{list.goodsName}} </h4>

        <p><span>运费&emsp;包邮</span><span>剩余 {{list.amount}} </span></p>
        <div class="bott">
            111
            <van-action-bar>
                <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
                <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
                <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
                <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
            </van-action-bar>
        </div>


    </div>
</template>
<style lang='scss' scoped>
    img {
        width: 100%;
    }

    h4 {
        color: #666;
    }
    .bott{
        position: fixed;
        bottom: 100px;
    }
</style>
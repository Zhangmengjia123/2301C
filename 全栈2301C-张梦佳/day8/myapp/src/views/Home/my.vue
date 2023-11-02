<script setup lang='ts'>



</script>
<template>
    <div style="background-color:#f2f2f2 ;">
        <div class="header" style="height: 80px;  background-color: #50a586;color: #fff;padding: 16px;">
            <img src="../../assets/logo.png" alt="">
            登录/注册
        </div>
     <div class="li" >
        <ul style="background-color: #fff;  display:flex ;align-items: center;justify-content: space-around;text-align: center; padding: 16px; margin: 15px ;">
            <li>
                <span>--</span>
                <p>积分</p>
            </li>
            <li>
                <span>--</span>
                <p>优惠劵</p>
            </li>
            <li>
                <span>--</span>
                <p>余额</p>
            </li>
        </ul>
     </div>
     <div class="ul">
        <h4 style="display: flex;align-items: center;justify-content: space-around;background-color: #fff; margin: 15px;padding: 6px;">我的订单  <span style=" color:#666 ;font-size: 14px;">查看全部订单 &ensp;></span></h4>
     </div>
    <div class="lis">
        <ul  style="background-color: #fff;  display:flex ;align-items: center;justify-content: space-around;text-align: center; padding: 16px; margin: 15px ;">
            <li>
                <span><van-icon name="coupon-o" /></span>
                <p>待付款</p>
            </li>
            <li>
                <span><van-icon name="send-gift-o" /></span>
                <p>待发货</p>
            </li>
            <li>
                <span><van-icon name="logistics" /></span>
                <p>待收货</p>
            </li>
            <li>
                <span><van-icon name="other-pay" /></span>
                <p>评价</p>
            </li>
            <li>
                <span><van-icon name="after-sale" /></span>
                <p>退款/售后</p>
            </li>
        </ul>
        <h4  style="background-color: #fff;  display:flex ;align-items: center;justify-content: space-around;text-align: center; padding: 16px; margin: 15px ;">常用功能</h4>
        <div class="uls">
        <ul  style="background-color: #fff;  display:flex ; flex-wrap: wrap; text-align: center; padding: 16px; margin: 15px ;">
            <li style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="balance-o" /></span>
                <p>我的钱包</p>
            </li>
            <li style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="gift-o" /></span>
                <p>积分兑换</p>
            </li>
            <li style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="coupon-o" /></span>
                <p>优惠券</p>
            </li>
            <li style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="location-o" /></span>
                <p>收货地址</p>
            </li>
            <li  style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="setting-o" /></span>
                <p>设置</p>
            </li>
            <li style="width:65px ;height: 65px; padding: 5px;">
                <span><van-icon name="qr" /></span>
                <p>主题</p>
            </li>
            <li style="width:65px ;height: 65px;padding: 5px;">
                <span><van-icon name="manager-o" /></span>
                <p>我的设备</p>
            </li>
        </ul>
        </div>
    </div>

    </div>
</template>
<style lang='scss' scoped>


img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
.van-icon{
    font-size:24px;
}
</style>
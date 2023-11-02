<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/fenlei" icon="search">分类</van-tabbar-item>
    <van-tabbar-item replace to="/shop" icon="search">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="search">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
}
</style>

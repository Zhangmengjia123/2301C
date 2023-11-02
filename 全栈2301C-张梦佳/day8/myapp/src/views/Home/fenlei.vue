<script setup lang='ts'>
    import { flApi } from '../../utils/http'
    import { ref } from 'vue'
    let list = ref([])
    const flA = () => {
        flApi().then((res) => {
            console.log(res);
            list.value = res.data
        })
    }
    flA()
    const active = ref(0);

</script>
<template>
    <div>

        <van-tabs v-model:active="active" v-for="(item, index) in list" :key="index">
            <van-tab :title="item.name"></van-tab>
        </van-tabs>



    </div>
</template>
<style lang='scss' scoped>





</style>
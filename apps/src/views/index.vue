<template>
    <div class="boox">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in list.banner"><img :src="item.picUrl" alt=""></van-swipe-item>
        </van-swipe>
        <h2 style="text-align: center;margin: 20px 0;">商品列表</h2>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" offset="30" finished-text="没有更多了" @load="onLoad">
                <div class="box">
                    <div class="box-list" @click="info(item.id)" v-for="item in list.List">
                        <img :src="item.pic" alt="">
                        <p>{{ item.name }}</p>
                        <div class="flo">
                            <div class="z">
                                <span style="color: rgb(69, 112, 5);"> ￥{{ item.kanjiaPrice }}</span>
                                <small style="text-decoration: line-through; color: #ccc; margin-left:10px ;">{{
                                    item.originalPrice }}</small>
                            </div>
                            <button>购买</button>
                        </div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>



    </div>
</template>


<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';
import { ref, reactive } from 'vue'
import { bannerAPi, shopList } from '../request/http'
const router=useRouter()
const list = reactive<any>({
    banner: [],
    List: []
})
const ListName = reactive({
    page: 1,
    pageSize: 4,
})
const tatlo = ref(0)
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = () => {
    if (list.List.length == tatlo.value && tatlo.value) {
        finished.value = true
        return
    }
    ListName.pageSize++
    fn()
};
const onRefresh = () => {
};



const info = (id:number) => {
    console.log(id);
    router.push({
        path:'/info',
        query:{
            id
        }
    })
}
function fn() {
    shopList(ListName).then(res => {
        console.log(res.data);
        list.List = res.data.result
        tatlo.value = res.data.totalRow
        loading.value = false
    })
}
fn()
bannerAPi().then(res => {
    list.banner = res.data
})
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-wrap: wrap;
}

.box-list {
    width: 44%;
    margin: 10px;
}

.box-list {
    p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.flo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: green;
        background-color: transparent;
        border: 1px solid green;
    }
}

.boox {
    margin-bottom: 50px;
}
</style>

<template>
    <div>
        <div class="box">
            <van-sidebar v-model="active">
                <van-sidebar-item @click="er(item.id)" v-for="item in list" :title="item.name" />
            </van-sidebar>
            <zi :zizu="zizu" class="y"></zi>
        </div>
    </div>
</template>

<script setup lang="ts">
import zi from '../components/zi.vue'
import { yidaoAPpi, erdaoApi } from '../request/http'
import { ref, reactive } from 'vue'
const active = ref(0)
const aa = ref(0)
const list = ref<any>([])
const zizu = ref([])
const data = reactive({
    categoryId: 272693,
    page: 1,
    pageSize: 10
})

const er = (id: number) => {
    data.categoryId = id
   fn()
}

function fn(){
    erdaoApi(data).then(res => {
        zizu.value = res.data
    })
}
fn()
yidaoAPpi().then(res => {
    console.log(res.data);
    list.value = res.data
})
</script>

<style lang="scss" scoped>
.box {
    display: flex;
}
.y{
    flex: 1;
}
</style>
<template>
    <div>
       <div class="da">
        <div class="box" @click="at(item.id)" v-if="zizu" v-for="item in zizu.result">
            <img :src="item.pic" alt="">
            <p>{{ item.name }}</p>
            <p>￥{{ item.minPrice }}</p>
        </div>
       </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const {push}=useRouter()
import { ref, reactive } from 'vue'
import {shopApi} from '../request/http'
const props=defineProps(['zizu'])
console.log(props);

const at=(id:number)=>{
  console.log(id);
  push({
    path:'/info',
    query:{
        id
    }
  })
}

</script>

<style lang="scss" scoped>
.box{
    width: 50%;
}
.da{
    display: flex;
    flex-wrap: wrap;
}
</style>
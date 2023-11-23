<template>
  <div>
  <span>  <input type="checkbox" v-model="$store.state.all"
     @click="$store.commit('checkAll')">&emsp;
 
  已完成  
  <!-- {{$store.state.newArr.length}} -->
    /全部 
  {{$store.state.store.length}}
  </span>
    <span @click="$store.commit('dels')" class="dels">清除已完成任务</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
    computed: {},
    filters: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
.dels{
  color: aliceblue;
  background-color: #ca594f;
  border: 0;
  border-radius: 3px;
  padding: 5px 8px;

}
div{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
</style>
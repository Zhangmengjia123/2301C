<template>
  <div>
    <div class="div" v-for="(item, index) in $store.state.store" :key="index">

      <span> <input type="checkbox" v-model="item.isCheck" @click="$store.commit('checkOne',index)">
        {{item.value}}
      </span>
      <button @click="$store.commit('del',index)"> 删除 </button>

    </div>
  </div>
</template>

<script>
  export default {
    // el: '#app',
    data() {
      return {
        
      };
    },
    methods: {

    },
    computed: {},
    filters: {},

    directive: {

    }
  };
</script>

<style lang="scss" scoped>
  .div:hover {
    background-color: #f2f2f2;

    button {
      display: block;
    }
  }


  span {

    position: absolute;
    left: 15px;


  }




  button {
    display: none;
    background-color: #ca594f;
    color: aliceblue;
    padding: 5px 8px;
    border: 0;
    border-radius: 3px;
    position: absolute;
    right: 25px;
  }

  .div {
    width: 95%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-top: 25px;
    border: 1px solid #f2f2f2;

  }
</style>
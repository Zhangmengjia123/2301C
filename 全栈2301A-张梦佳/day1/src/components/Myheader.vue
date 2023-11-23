<template>
  <div>

    <input v-model="input" placeholder="  请输入你的任务名称，按回车键确认" @keydown.enter="add"></input>


  </div>
</template>

<script>
  export default {

    data() {
      return {

        input: '',

      };
    },
    methods: {
      add() {
        if (!this.input) {
          alert('内容不能为空')
        }
        else {
          let obj = {
            value: this.input,
            isCheck: false
          }
          console.log(obj);
          this.$store.commit('obj', obj)
          this.input=''
        }

      }
    },
    computed: {},
    filters: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
  input {
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    width: 400px;
    margin: auto;
    font-size: 16px;
  }

  div {
    display: flex;
    margin: 30px auto;
  }
</style>
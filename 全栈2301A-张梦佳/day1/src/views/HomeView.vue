<template>
  <div>
<div class="div1">
  
  <Myheader ></Myheader>

  <div class="Mycontent">
    <Mycontent ></Mycontent>
  </div>
<div class="Myfooter">
  <Myfooter></Myfooter>
</div>

</div>

  </div>
</template>

<script>
  import  Mycontent  from '../components/Mycontent.vue'
  import  Myfooter  from '../components/Myfooter.vue'
  import  Myheader  from '../components/Myheader.vue'

  export default {
    components: { Myheader, Mycontent, Myfooter },
    data() {
      return {
        list:[]
      };
    },
    methods: {
    
    },
    computed: {
  
    },
    filters: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
.div1{
  width: 450px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.Mycontent{
  margin:30px 10px ;
}
.Myfooter{
  margin: 20px;
}

</style>
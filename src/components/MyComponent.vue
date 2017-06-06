<template>
  <div  id="main">
    <h1>{{msg}}</h1>
    <h2>{{msgfromparent}}</h2>
    <button v-on:click="clickMe">CLICK！</button>
  </div>
</template>

<script>
  export default {
      name:'main',
    data:function  () {
      return {
        msg: 'this is my component'
      }
    },
    props:['msgfromparent'],
    methods:{
      clickMe:function () {
//          alert(this.msgfromparent);
        this.$emit('child-tell-me-something',this.msg);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

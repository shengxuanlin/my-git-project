<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->
    <my-componenet msgfromparent="i am you father" v-on:child-tell-me-something="listenToMyChild"></my-componenet>
    <p>child tell me {{ childWords }}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'
import MyComponenet from './components/MyComponent'

export default {
  name: 'app',
  data:function(){
      return{
        childWords:''
      }
  },
  components: {
    Hello,MyComponenet
  },
  methods:{
    listenToMyChild(msg){
      this.childWords=msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

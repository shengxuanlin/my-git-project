<template>
  <div  class="test">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :class="[LiClass,{finished:item.isFinished}]" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from '../todo-vuejs'
  export default {
    name: 'test',
    data:function  () {
      return {
        title: 'My first vue test.',
        items:Store.fetch(),
//        [
//          {
//              label:'coding',
//              isFinished:false
//          },
//          {
//              label:'walking',
//              isFinished:true
//          }
//        ],
        LiClass:'thisislicalss',
        newItem:''
      }
    },
    methods:  {
        toggleFinish:function (item){
            item.isFinished=!item.isFinished;
        },
        addNew:function () {
            this.items.push({
              label:this.newItem,
              isFinished:false
            });
          this.newItem='';
        }
    },
    watch:{
        items:{
            handler:function (val,oldVal) {
              Store.save(val);
            },
            deep:true
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finished{
    text-decoration:underline;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

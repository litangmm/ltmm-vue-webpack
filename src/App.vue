<template>
  <div>
    <div style="height: 200px">你好吗，我不啊好</div>
    <img :src="require('./image/bg2.png').default" alt="" />
    <img :src="require('./image/bg3.png').default" alt="" />
  </div>
</template>

<script>
export default {
    created(){
        let func = ()=>{console.log("hello,i'm a fuction")}
        func()
    },
};
</script>

<style>
div {
  color: green;
  background-image: url("./image/bg1.png");
}
</style>
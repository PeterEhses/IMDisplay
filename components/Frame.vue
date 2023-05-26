<template>
  <div class='frame'>
    <Header/>
    <div class='content-wrapper'>
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: [
    Header
  ]

}
</script>

<style lang='scss'>
.frame{
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  .content-wrapper{
    height: 10px;
    width: 100%;
    background:red;
    flex-grow: 1;
  }
}

</style>

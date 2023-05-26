<template>
  <div class='frame'>
    <Header/>
    <div class="content-group">
      <div class='content-wrapper'>
        <slot/>
      </div>
      <div class='triangle-overlay'></div>
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
  .content-group{
    position: relative;
        height: 10px;
    width: 100%;
    // background:red;
    flex-grow: 1;
      .content-wrapper{
    width: 100%;
    height: 100%;
    // background:red;
    flex-grow: 1;

    box-sizing: border-box;
    border: 1rem solid var(--color-variable-accent);
  }
    .triangle-overlay{
      position: absolute;
      width: 100%;
      height: 10vw;

      width: 0;
height: 0;
border-style: solid;
border-width: 0 0 10vw 100vw;
border-color: transparent transparent var(--color-background-accent) transparent;
      bottom: 0;
    }

  }

}

</style>

<template>
  <div class="content-group">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang='scss'>
.content-group {
  position: relative;
  height: 10px;
  width: 100%;
  // background:red;
  flex-grow: 1;
  .content-wrapper {
    width: 100%;
    height: 100%;
    // background:red;
    flex-grow: 1;

    box-sizing: border-box;
    border: 1rem solid var(--color-variable-accent);
  }

}
</style>

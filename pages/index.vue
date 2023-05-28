<template>
  <div class="page">
    <Header />

    <Frame>
      <ContentRenderer
        v-if="content"
        v-for="c in content"
        :value="c"
        class="content"
      />
      <img v-for="c in content"  :src="c.background" alt="">
    </Frame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {},
    };
  },
  computed: {
    // content() {
    //   queryContent("/dated")
    //     .find()
    //     .then((c) => {
    //       console.log(c);
    //       return c;
    //     });
    // },
  },
  mounted() {
    queryContent("/dated/")
      .find()
      .then((c) => {
        c.forEach((el)=>{
            el.img = el._path;
            console.log(el);
        })
        
        this.content = c;
      });
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

}
.content {
  color: var(--color-white);
}
</style>
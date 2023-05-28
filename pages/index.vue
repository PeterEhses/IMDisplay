<template>
  <div class="page">
    <div class="header-container">
      <Transition name="fade">
        <Header
          v-if="content.length"
          class="header"
          :title="content[activeFrame].title"
          :description="content[activeFrame].description"
          :type="content[activeFrame].type"
          :orgs="content[activeFrame].orgs"
          :suborgs="content[activeFrame].suborgs"
          :key="'hd' + activeFrame"
        />
      </Transition>
    </div>

    <FrameCarousel :content="content" @frameChange="activeFrame = $event" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [],
      activeFrame: 0,
    };
  },
  computed: {},
  methods: {
    adevanceFrame() {
      if (this.content.length > 1) {
        if (this.currentFrame >= this.content.length) {
          this.currentFrame = 0;
        } else {
          this.currentFrame += 1;
        }
      }
    },
  },
  mounted() {
    queryContent("/dated/")
      .find()
      .then((c) => {
        c.forEach((el) => {
          el.img = el._path;
          console.log(el);
        });

        this.content = c.filter(el => !el.draft);
      });
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  .header-container {
      z-index: 9999;
    position: relative;
    .header {
      width: 100%;
    }
  }
}
</style>
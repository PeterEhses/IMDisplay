<template>
  <div class="frame-carousel" :style="style">
    <Transition name="slide">
      <Frame
        class="frame"
        v-if="content && content.length"
        @nextFrame="adevanceFrame()"
        :content="content[currentFrame]"
        :type="'poster'"
        :active="true"
        :key="currentFrame"
      />
    </Transition>
  </div>
</template>

<script>
export default {
  props: ["content", "reloadAfter"],
  data() {
    return {
      currentFrame: 0,
      roundtrips: 0,
    };
  },
  computed: {
    style() {
      return { "--active-frame": this.currentFrame };
    },
  },
  methods: {
    adevanceFrame() {
      console.log(`frame was #${this.currentFrame}`);
      if (this.content.length > 1) {
        if (this.currentFrame >= this.content.length - 1) {
          this.currentFrame = 0;
          this.roundtrips += 1;
          console.log(`Shown all cards ${this.roundtrips} times!`)
          if(this.reloadAfter && this.roundtrips >= this.reloadAfter){
            this.roundtrips = 0;
            console.log('reloading!')
            location.reload();
          }
        } else {
          this.currentFrame += 1;
        }
      }
      console.log(`frame now #${this.currentFrame}`);
      this.$emit('frameChange', this.currentFrame)
    },
  },
};
</script>

<style lang="scss">
.frame-carousel {
    position: relative;
  --active-frame: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  .frame{
  position: absolute;
  }
}


</style>
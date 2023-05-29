<!-- <script setup>
const { postData } = await useAsyncData('',queryContent("/dated/")
      .find().then((c) => {
        c.forEach((el) => {
          el.img = el._path;
          // console.log(el);
        });

        return c.filter(el => !el.draft);
      }))
      console.log(postData)
</script> -->

<template>
  <div class="page">
    <div class="header-container">
      <Transition name="fade">
        <Header
          v-if="content && content.length"
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
import { ref, toRef } from 'vue'

let _content;
export default {
  data() {
    return {
      // content: [],
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
  setup() {
    const content = ref(null)
    queryContent("/dated/")
      .find()
      .then((c) => {
        c.forEach((el) => {
          el.img = el._path;
          
        });

        content.value = c.filter(el => !el.draft);
        console.log(content);

      });
      return {
        content
        }
  },
  mounted(){
    // this.content = _content
    console.log(this.content);
  }
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
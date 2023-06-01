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
    <div
      :class="[
        'header-container',
        content && content.length && content[activeFrame].fullscreen
          ? 'fullscreen'
          : '',
      ]"
    >
      <Transition name="fade" v-if="content && content.length">
        <Header
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

    <FrameCarousel
      class="frame-carousel"
      :content="content"
      :reloadAfter="4"
      @frameChange="onFrameChange"
    />
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/de";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.locale("de");
import { ref, toRef } from "vue";

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
    onFrameChange(e) {
      this.activeFrame = e;
    },
  },
  setup() {
    const content = ref(null);
    queryContent("/dated/")
      .find()
      .then((c) => {
        c = c.filter((el) => {
          if (!el.remove) {
            return true;
          } else {
            let removeBy = dayjs().isBefore(
              dayjs(el.remove, `${dayjs.Ls[dayjs.locale()].formats.L}`).add(
                1,
                "day"
              )
            );
            // console.log(dayjs('15.07.1996', 'DD.MM.YYYY'))
            // console.log(`Date is ${el.remove}, ${dayjs(el.remove, `${dayjs.Ls[dayjs.locale()].formats.L}`)} and will be shown? ${removeBy}, Format ${dayjs.Ls[dayjs.locale()].formats.L}`)
            return removeBy;
          }
        });
        c.forEach((el) => {
          el.img = el._path;
        });

        content.value = c.filter((el) => !el.draft);
        console.log(content);
      });
    return {
      content,
    };
  },
  mounted() {
    // this.content = _content
    console.log(this.content);
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
    flex-grow: 1;
    max-height: 33vh;
    bottom: 0%;
    transition: bottom .33s ease-out, max-height 3s ease-out .33s;
    &.fullscreen {
        transition: max-height 2s ease-in, bottom .25s linear 2s;
        max-height: 0%;
        bottom: -10vw;
      }
    .header {
      width: 100%;

    }
  }
  .frame-carousel {
    // width: 100vw;
    // height: calc(((100vw - 2rem) * 1.414 ) + 2rem)
  }
}
</style>
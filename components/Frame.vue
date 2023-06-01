<template>
  <div :class="['content-group', active ? 'active' : '', content.noborder ? 'noborder' : '']">
    <div class="content-wrapper" :style="styleBorder">
      <div class="inside-border" :style="styleContent">
        <video
          autoplay
          loop
          :muted="!content.unmute"
          class="video-bg"
          :src="content.background"
          v-if="hasVideoBackground"
        ></video>
        <time v-if="content.timeAndDate">{{ content.timeAndDate }}</time>
        <ContentRenderer
          v-if="
            type == 'poster' && content.body && content.body.children.length
          "
          :value="content"
          class="was-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  props: ["content", "type", "active"],
  data() {
    return {
      lifetime: 20000,
    };
  },
  components: {
    Header,
  },
  computed: {
    styleBorder() {
      return {
        background: this.accent,
        "--color-accent": this.accent,
      };
    },
    styleContent() {
      switch (this.type) {
        case "poster":
          return {
            "background-image": "url(" + this.content.background + ")",
          };
        default:
          return {};
      }
    },
    hasVideoBackground() {
      if (this.type == "poster") {
        if (this.content.background) {
          return ["mp4", "webm", "mov"].some((suffix) =>
            this.content.background.endsWith(suffix)
          );
        }
      }
    },
    accent() {
      let colors = [];
      let singleColor = "var(--color-white)";

      if (this.content && this.content.orgs && this.content.orgs.length) {
        for (const c of this.content.orgs) {
          colors.push("var(--c-" + c + ")");
        }
        singleColor = "var(--c-" + this.content.orgs[0] + ")";
      }
      if (this.content && this.content.suborgs && this.content.suborgs.length) {
        for (const c of this.content.suborgs) {
          colors.push("var(--c-ID-" + c + ")");
        }
        singleColor = "var(--c-ID-" + this.content.suborgs[0] + ")";
      }
      if (colors.length > 1) {
        return "linear-gradient(-0.525turn, " + colors.join(", ") + ")";
      }
      return singleColor;
    },
  },
  watch: {
    active: {
      handler(newValue, oldValue) {
        if (this.type != "poster") {
          return;
        }
        if (newValue) {
          let delay =
            this.content && this.content.lifetime
              ? this.content.lifetime
              : this.lifetime;
          console.log(`Starting countdown of ${delay}ms for next frame!`);
          setTimeout(() => {
            this.$emit("nextFrame");
          }, delay);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.content-group {

  &.noborder{
    .content-wrapper{
      padding: 0;
      .video-bg{
        width: 100%;
        height: 100%;
        top: 0;
      }
    }
  }
  // height: 10px;
  height: 100%;
  width: 100%;
  color: var(--color-white);
  flex-grow: 1;
  // transform: translateY(calc(var(--active-frame) * -100%));
  // transition: 1s ease-in-out;
  .video-bg {
    z-index: 0;
    position: absolute;
    top: 1rem;
    width: calc(100% - 1.9rem);
    height: calc(100% - 1.9rem);
    object-fit: cover;
  }
  .content-wrapper {
    width: 100%;
    height: 100%;
    // background:red;
    flex-grow: 1;

    box-sizing: border-box;
    padding: 1rem;
    background: var(--color-white);
    .inside-border {
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background: var(--color-black);
      width: 100%;
      height: 100%;
    }
  }
  time {
    display: block;
    width: 100%;
    position: relative;
    font-family: "Orkney", sans-serif;
    text-align: right;
    padding: var(--size-3xl) var(--size-4xl);
    font-size: 3.052rem;
    font-weight: 600;
  }
  .was-md {
    padding: var(--size-4xl) 0;
    :nth-child(n) {
      position: relative;
      // margin: var(--size-m);
      margin-right: 33%;
      margin-left: 0;
      margin-bottom: -0.99rem;
      // margin-top: 2rem;
      left: -2rem;
      padding: 2rem;
    }

    :nth-child(2n) {
      position: relative;
      margin-right: 0;
      margin-left: 33%;
      left: 2rem;
      // margin: var(--size-m);
      // margin-left: var(--size-6xl);
    }

    h1,
    h2,
    h3,
    h4 {
      &:nth-child(n) {
        left: 1rem;
        margin-top: 2rem;
        margin-right: 25%;
        margin-bottom: 2rem;
      }
      &:nth-child(2n) {
        left: 1rem;
        margin-right: 0;
        margin-left: 25%;
        margin-bottom: 2rem;
      }
      &:first-child {
        margin-top: -2rem;
      }
    }

    p,
    table {
      z-index: 1;
      // font-size: var(--size-s);
      color: var(--color-black);
      // border: 1rem solid var(--color-accent);
      padding: 1rem;
      background: var(--color-accent);
      &:after {
        position: absolute;
        inset: 0;
        z-index: -1;
        left: 2rem;
        top: 2rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        content: "";
        margin: -1rem;
        background: var(--color-white);
      }
    }
  }
}
</style>

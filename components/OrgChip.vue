<template>
  <span :style="style" class='org-chip'>
    {{org ? org : sub}}
  </span>
</template>

<script>
export default {
  props: [
    "org",
    "sub"
  ],
  data(){
    return {
    }
  },
  computed: {
    accent(){
      return this.org ? '--c-'+this.org : '--c-ID-'+this.sub
    },
    style(){
      return {
        "background-color": this.org ? 'var('+this.accent+')' : 'var(--color-white)',
        "color": this.org ? 'var(--color-lightblue)' : 'var('+this.accent+')',
        "border": ' 0.1rem solid var('+this.accent+')'
      }
    }
  }
}
</script>

<style lang='scss'>
.org-chip{
        font-size: var(--size-xl);
      padding: 0 var(--size-s);
      margin: 0 0.2rem;
      border: 0.1rem solid var(--color-black);
      color: var(--color-black);
      border-radius: 9999999px;
}
</style>

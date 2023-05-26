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
      colors: {
        "GES": '--color-bright-pink-crayola',
        "ID": '--color-veronica',
        "KD": '--color-icterine',
        "MD": '--color-spring-bud',
        "AR": '--color-pacific-cyan',
        "IA": '--color-fluorescent-cyan',
        "ES": '--color-spring-bud',
        "MR": '--color-orange-web',
        "GM": '--color-spring-bud',
        "NF": '--color-fluorescent-cyan',
        "HM": '--color-pacific-cyan',
        "IÄ": '--color-bright-pink-crayola'
      }
    }
  },
  computed: {
    accent(){
      return this.colors[this.org ? this.org : this.sub]
    },
    style(){
      return {
        "background-color": this.org ? 'var('+this.accent+')' : 'transparent',
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

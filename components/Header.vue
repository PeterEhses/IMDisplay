<template>
  <div class="header">
    <h1>How To Adobe Suite</h1>

    <div class="meta-info">
      <h2>Workshop</h2>
      <div class="chip-container">
        <OrgChip org="GES"/> <OrgChip org="ID"/> <OrgChip sub="MR"/>
      </div>
    </div>

    <h3>Abendworkshop mit Bier und Schlechter Musik</h3>
  </div>
</template>

<script>
import OrgChip from '@/components/OrgChip.vue'
export default {
  components: [
    OrgChip
  ]
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  background-color: var(--color-background-accent);
  padding: var(--size-xs) var(--size-4xl) var(--size-xxl) var(--size-4xl);
  h1 {
    margin: 0;
    height: 1.3em;
    order: 1;
  }
  h3 {
    flex-grow: 1;
    min-width: 100%;
    height: 1.3em;
    padding-left: 0.1rem;
    margin: -0.666em 0 var(--size-m) 0;
    font-size: var(--size-m);
    font-family: "Nunito Sans";
    order: 2;
  }
  h2 {
    margin: 0;
    height: 1.3em;
    order: 3;
  }
  .meta-info {
    // padding-left: var(--size-4xl);
    // padding-bottom: 0.33rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    order: 3;
  }
  .chip-container {
    flex-grow: 1;
    display: flex;
    justify-content: end;
    align-items: end;
    order: 10;
  }
}
</style>

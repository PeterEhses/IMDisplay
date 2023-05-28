<template>
  <div class="header">
    <div class="header-content">
      <h1>{{ title }}</h1>

      <div class="meta-info">
        <h2>{{ type }}</h2>
        <div class="chip-container">
          <!-- <OrgChip org="GES"/> <OrgChip org="ID"/>  -->
          <OrgChip v-for="(org, i) in orgs" :org="org" :key="'o'+i"/>
          <OrgChip v-for="(org, i) in suborgs" :sub="org" :key="'so'+i"/>
          <!-- <OrgChip sub="MR" /> -->
        </div>
      </div>
      <h3>{{ description }}</h3>
    </div>

    <div class="triangle-overlay"></div>
  </div>
</template>

<script>
import OrgChip from "@/components/OrgChip.vue";
export default {
  props: [
    'title',
    'description',
    'type',
    'orgs',
    'suborgs',
  ],
  components: {
    OrgChip,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  background-color: var(--color-background-accent);

  .header-content {
    display: flex;
    flex-direction: column;
    padding: var(--size-4xl)  var(--size-4xl) var(--size-xxl) var(--size-4xl);
    color: var(--color-darkblue);
  }
  h1 {
    margin: 0;
    height: 1.3em;
    order: 1;
    font-size: var(--size-4xl);
    white-space: nowrap;

  }
  h3 {
    flex-grow: 1;
    min-width: 100%;
    height: 1.3em;
    padding-left: 0.1rem;
    margin: -0.5em 0 var(--size-m) 0;
    font-size: var(--size-m);
    font-family: "Nunito Sans";
    order: 2;
  }
  h2 {
    margin: 0;
    height: 1.3em;
    order: 3;
    font-size: var(--size-xl);
    white-space: nowrap;

    // border: 2px solid black;
    // border-radius: 9999px;
    // padding: 0 var(--size-s);
    // color: var(--color-darkblue);
    opacity: .666;

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

  .triangle-overlay {
    position: absolute;
    left: 0;
    top: calc(-10vw + .75px);
    width: 100%;
    height: 10vw;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10vw 100vw;
    border-color: transparent transparent var(--color-background-accent)
      transparent;
    bottom: 0;
  }
}
</style>

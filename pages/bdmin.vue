<script setup>
useHead({
  meta: [{ name: "robots", content: "noindex" }],
  title: "Content manager",
});
</script>

<template>
  <client-only>
    <admin-panel />
  </client-only>
</template>

<script>
export default {};
</script>

<style>
#__nuxt{
  display: none;
}
</style>
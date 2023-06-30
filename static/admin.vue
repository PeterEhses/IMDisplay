<script setup>
useHead({
  meta: [{ name: "robots", content: "noindex" }],
  title: "Content manager",
});
</script>

<template>
  <div></div>
</template>
<script>
import CMS, { init } from "netlify-cms-app";
if (window) {
    window.CMS_MANUAL_INIT = true
  const { CMS, initCMS: init } = window;
  init();
}
export default {};
</script>

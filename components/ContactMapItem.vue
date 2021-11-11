<template>
  <a :href="url" class="contact-map-item flex w-full py-2 transition-all hover:bg-blue-100" target="_blank">
    <div class="icon-container flex items-center justify-center px-2 mr-2">
      <i class="bg-blue-700 p-3 rounded-full text-white" :class="iconClass"></i>
    </div>
    <div>
      <h3 class="font-semibold">{{ title }}</h3>
      <div v-if="text">{{ text }}</div>
      <div v-else>{{ url }}</div>
    </div>
  </a>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: ["iconClass", "title", "text", "url"],
});
</script>

<style lang="scss" scoped>
.contact-map-item:hover {
  .icon-container i {
    @apply transition-all transform rotate-12;
  }
}
</style>

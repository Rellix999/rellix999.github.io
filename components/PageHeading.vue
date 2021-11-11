<template>
  <div class="bg-blue-100">
    <div class="container mx-auto flex flex-col text-center w-full mt-6 mb-6">
      <h1 class="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">{{ title }}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-500">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "subtitle"],
});
</script>

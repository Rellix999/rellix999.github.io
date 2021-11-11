<template>
  <div class="bg-blue-100 bg-cover">
    <div class="flex w-full h-full backdrop-filter backdrop-blur">
      <div class="container mx-auto px-4 flex flex-col text-center text-black w-full my-6 filter drop-shadow-2xl">
        <h1 class="sm:text-3xl text-2xl font-bold mb-4">{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "subtitle"],
});
</script>

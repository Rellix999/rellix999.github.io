<template>
  <footer class="bg-gray-100 text-gray-400 py-4 text-sm text-center lg:text-right">
    <div class="container mx-auto">© {{ currentYear }} Thijs Schalk</div>
  </footer>
</template>

<script lang="ts">
export default {
  computed: {
    currentYear: function () {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <nav class="bg-blue-700 text-white">
    <div class="container mx-auto px-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            v-on:click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-blue-900"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center text-2xl text-white font-bold">
            <NuxtLink to="/" class="app-name">Thijs Schalk</NuxtLink>
          </div>
          <div class="hidden sm:block sm:ml-auto">
            <div class="flex space-x-4">
              <NuxtLink to="/cv" class="hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CV</NuxtLink>
              <NuxtLink to="/contact" class="hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NuxtLink>
              <NuxtLink to="/resources" class="hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resources</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden" :class="{ hidden: isMobileMenuHidden }" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1" v-on:click="toggleMobileMenu">
        <NuxtLink to="/cv" class="hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium">CV</NuxtLink>
        <NuxtLink to="/contact" class="hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium">Contact</NuxtLink>
        <NuxtLink to="/resources" class="hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium">Resources</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      isMobileMenuHidden: true,
    };
  },
  methods: {
    toggleMobileMenu: function () {
      this.isMobileMenuHidden = !this.isMobileMenuHidden;
    },
  },
};
</script>

<style lang="scss" scoped>
.nuxt-link-active:not(.app-name) {
  @apply bg-blue-900 text-white;
}
</style>

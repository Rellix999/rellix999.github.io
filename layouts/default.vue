<template>
  <div class="flex flex-col h-full">
    <Navbar />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
</template>


<style lang="scss">
/*
Primary: bg-blue-700
Secondary: bg-blue-500
Tertiary: bg-green-700
*/

html {
  font-family: Inter, sans-serif;
}
html,
body,
#__nuxt,
#__layout {
  display: block;
  height: 100%;
  width: 100%;
}
.text-link {
  @apply text-blue-500 hover:underline;
}
</style>

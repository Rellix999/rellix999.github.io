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
  overflow-y: scroll;
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
.table-responsive {
  @apply w-full overflow-y-auto;
}
.table {
  @apply table-auto w-full text-left whitespace-nowrap;

  tbody {
    tr:nth-child(even) {
      @apply bg-gray-100;
    }
    tr:nth-child(odd) {
      @apply bg-gray-50;
    }

    tr:not(:first-child) td {
      @apply border-t-2 border-gray-200;
    }

    td {
      @apply px-4 py-3;
    }
  }
}
p {
  @apply mb-4;
}
ul {
  @apply list-disc pl-4;
}
</style>

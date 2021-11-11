<template>
  <section class="flex flex-grow items-center">
    <div class="container mx-auto">
      <div class="flex w-full text-center flex-col lg:flex-row">
        <div class="feature">
          <div class="icon-container"><i class="far fa-laugh"></i></div>
          <div class="title">Personal website</div>
          <div class="description">About me, my skills, knowledge, education and career <NuxtLink to="/cv" class="text-link">here</NuxtLink>.</div>
        </div>
        <div class="feature">
          <div class="icon-container"><i class="fas fa-briefcase"></i></div>
          <div class="title">Contact</div>
          <div class="description">All my relevant contact details can be found <NuxtLink to="/contact" class="text-link">here</NuxtLink>.</div>
        </div>
        <div class="feature">
          <div class="icon-container"><i class="fas fa-tools"></i></div>
          <div class="title">Resources</div>
          <div class="description">
            My developer <NuxtLink to="/resources" class="text-link">toolbox</NuxtLink> is opened up to you. Time will tell what other cool stuff I'll put on
            here.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.feature {
  @apply p-4 w-full lg:pb-0 lg:w-1/3;

  .icon-container {
    @apply mb-4 transition-all;

    i {
      @apply bg-blue-700 p-10 transition-all rounded-full text-5xl text-white;
    }
  }
  .title {
    @apply font-semibold text-2xl h-12;
  }

  &:hover {
    .icon-container {
      @apply transform rotate-12;

      i {
        @apply bg-blue-500;
      }
    }
  }
}
</style>

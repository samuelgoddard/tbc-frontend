<template>
  <div class="flex flex-wrap items-center">
    <div class="w-full md:w-1/2 order-2 md:order-1">
      <div class="flex flex-wrap lg:justify-center">
        <div class="w-10/12 md:w-3/4 lg:w-4/6 lg:pr-32">
          <h1 class="font-serif text-2xl">welcome to your creative life</h1>
          
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md: mb-0">
      <div class="absolute top-0 left-0 h-full z-10 -ml-48 hidden md:block">
        <div class="flex flex-wrap items-center h-full">
          <h1 class="text-3xl font-bold tracking-widest">to be created.</h1>
        </div>
      </div>
      
      <lazy-image lowSrc="https://placedog.net/100/100" src="https://placedog.net/1200/1200" alt="Placeholder Image" classList="border-l-12 border-pink" />
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage.vue'

export default {
  components: {
    LazyImage,
  }
}
</script>
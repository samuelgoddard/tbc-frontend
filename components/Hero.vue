<template>
  <div class="flex flex-wrap items-center">
    <div class="w-full md:w-1/2 order-2 md:order-1">
      <div class="flex flex-wrap lg:justify-center">
        <div class="w-10/12 md:w-3/4 lg:w-4/6 lg:pr-32">
          <h1 class="font-serif text-2xl">{{ heroTitle }}</h1>
          
          <p class="text-sm">{{ heroBlurb }}</p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md: mb-0">
      <div class="absolute top-0 left-0 h-full z-10 -ml-48 hidden md:block">
        <div class="flex flex-wrap items-center h-full">
          <logo-full />
        </div>
      </div>
    
      <lazy-image :src="heroImage" alt="tbc Hero Image" classList="border-l-12 border-pink" />
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage.vue'
import LogoFull from '~/components/LogoFull.vue'

export default {
  props: {
    heroTitle: {
      type: String,
      required: true,
    },
    heroBlurb: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String,
      required: true
    }
  },
  components: {
    LazyImage,
    LogoFull
  }
}
</script>
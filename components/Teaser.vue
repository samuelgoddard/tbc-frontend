<template>
  <div class="m-teaser pb-3 sm:pb-6 lg:pb-12">
    <nuxt-link to="#" class="no-underline">
      <lazy-image :src="imgUrl" alt="Placeholder Image" class="mb-5 w-full" />
    </nuxt-link>
    
    <span v-if="meta && !naked" class="meta">{{ meta }}</span>
    
    <nuxt-link to="#" v-if="!naked">
      <h1 class="font-serif" :class="small ? 'text-xl' : 'text-2xl'">{{ heading }}</h1>
    </nuxt-link>

    <nuxt-link to="#" class="underline" v-if="!naked">{{ linkText }}</nuxt-link>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage.vue'

export default {
  components: {
    LazyImage,
  },
  props: {
    imgUrl: {
      type: String,
      required: false,
      default: 'https://placedog.net/1200/1200'
    },
    classList: {
      type: String,
      required: false,
      default: 'text-pink'
    },
    linkText: {
      type: String,
      required: false,
      default: 'view more'
    },
    heading: {
      type: String,
      required: false
    },
    meta: {
      type: String,
      required: false
    },
    small: {
      type: Boolean,
      required: false
    },
    naked: {
      type: Boolean,
      required: false
    }
  }
}
</script>
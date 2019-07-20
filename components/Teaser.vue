<template>
  <div class="m-teaser pb-12">
    <nuxt-link to="#" class="no-underline">
      <img src="https://placedog.net/1200/1200" alt="Placeholder Image" class="mb-5 w-full" />
    </nuxt-link>
    
    <span v-if="meta" class="meta">{{ meta }}</span>
    
    <nuxt-link to="#">
      <h1 class="font-serif" :class="small ? 'text-xl' : 'text-2xl'">{{ heading }}</h1>
    </nuxt-link>

    <nuxt-link to="#" class="underline">{{ linkText }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
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
      required: true
    },
    meta: {
      type: String,
      required: false
    },
    small: {
      type: Boolean,
      required: false
    }
  }
}
</script>
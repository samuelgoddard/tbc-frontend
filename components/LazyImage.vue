<template>
  <figure>
    <img :data-src="src" :alt="alt" class="w-full lozad" data-toggle-class="lozad-loaded" :class="classList" />
    <figcaption class="text-sm mt-5" v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: 'https://placedog.net/1200/1200'
    },
    alt: {
      type: String,
      required: false,
      default: 'Image'
    },
    caption: {
      type: String,
      required: false
    },
    classList: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.lozad {
  @apply transition-slow opacity-0;
}

.lozad-loaded {
  @apply opacity-100;
}
</style>
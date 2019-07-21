<template>
  <div>
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
  html {
    @apply font-sans antialiased bg-off-white text-purplish-grey;
  }

  .fade-enter-active {
    transition: all 0.5s ease;
  }

  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
</style>

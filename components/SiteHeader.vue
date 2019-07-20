<template>
  <div class="container py-10">
    <div class="flex flex-wrap items-center">
      <logo classList="text-beige" />
      <div class="flex-1">
        <div class="flex justify-end sm:justify-center">
          <site-nav />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteNav from '~/components/SiteNav.vue'

export default {
  components: {
    Logo,
    SiteNav
  }
}
</script>
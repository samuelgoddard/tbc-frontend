<template>
  <div class="container py-10 pb-12">
    <div class="flex flex-wrap items-center">
      <div class="mb-5 sm:mb-0">
        <logo classList="text-dark-blue-grey" />
      </div>

      <div class="w-full sm:flex-1">
        <div class="flex flex-wrap">
          <div class="sm:ml-8">
            <p class="text-black text-sm leading-snug">
              sign up to the <a href="#" class="text-black underline">newsletter</a><br/>
              we use <a href="#" class="text-black underline">cookies</a>
            </p>
          </div>
          <div class="ml-auto text-right">
            <p class="text-black text-sm leading-snug">
              <a href="#" class="text-black underline block">instagram</a>
              <a href="#" class="text-black underline block">pinterest</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
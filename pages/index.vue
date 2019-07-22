<template>
  <div>
    <!-- Hero -->
    <div class="mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <Hero :heroTitle="home.heroTitle" :heroBlurb="home.heroBlurb" :heroImage="home.heroImage.url" />
      </div>
    </div>
    <!-- End Hero -->

    <!-- Style Edit -->
    <div class="mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 md:pr-16 lg:pr-28">
            <Teaser
              heading="roof party lo-fi live-edge man braid, freegan."
              meta="fashion"
            />
          </div>
          <div class="w-full md:w-1/2">
            <div class="flex flex-wrap md:h-full -mx-3 sm:-mx-5 md:-mx-6 lg:-mx-10">
              <div class="w-1/2 px-3 sm:px-5 md:px-6 lg:px-10 h-full">
                <div class="flex flex-col h-full">
                  <div class="mb-auto mt-auto">
                    <span class="block text-brownish-grey text-xl lg:text-2xl font-serif flex-1 leading-tight mb-3 lg:mb-0">
                      style
                      <span class="md:block md:ml-12 lg:ml-20">edit</span>
                    </span>
                  </div>

                  <div class="mt-auto">
                    <Teaser
                      heading="roof party lo-fi live-edge man braid, freegan."
                      meta="just in"
                      small
                    />
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-3 sm:px-5 md:px-6 lg:px-10">
                <Teaser 
                  heading="roof party lo-fi live-edge man braid, freegan."
                  meta="what's new"
                  small
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Style Edit -->

    <!-- Meet the curator -->
    <div class="mb-12 md:mb-32 xl:mb-40" v-for="curator in allCurators" :key="curator.id">
      <div class="container">
        <div class="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div class="flex flex-wrap md:-mx-8 items-center">
            <div class="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
              <lazy-image :src="curator.image.url" :alt="curator.image.alt" classList="border-l-12 border-pink w-full" />
            </div>
            
            <div class="w-full md:w-2/5 md:px-8">
              <h2 class="font-serif text-2xl">meet the curator.</h2>
              <p class="text-sm mb-4 lg:pr-12">{{ curator.blurb }}</p>
              <nuxt-link to="#" class="underline">learn more</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Meet the cutator -->

    <!-- Instagram -->
    <div class="mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="flex flex-wrap md:h-full -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-10">
          <div
            class="w-1/2 md:w-1/4 px-4 sm:px-5 md:px-6 lg:px-10 instagram-item"
            :class="{ 'mt-12 md:mt-16 lg:mt-24' : index % 2 }"
            v-for="(image, index) in instagram"
            :key="image.id"
          >
            <div v-if="index == 0" class="flex flex-wrap items-center justify-center h-full">
              <div class="mb-auto mt-auto">
                <span class="block text-brownish-grey text-xl lg:text-2xl font-serif leading-tight mb-0">
                  insta<span class="block ml-12 lg:ml-20">gram</span>
                </span>
              </div>
            </div>
            <div v-else>
              <lazy-image :src="image.url" alt="Instagram Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Instagram -->
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Teaser from '~/components/Teaser.vue'
import LazyImage from '~/components/LazyImage.vue'

import allCuratorsQuery from '~/apollo/queries/allCurators'
import homeQuery from '~/apollo/queries/home'

import gql from 'graphql-tag';

export default {
  transition: 'fade',
  components: {
    Hero,
    Teaser,
    LazyImage,
  },
  // async asyncData({ app }){
  //   const home = await app.apolloProvider.defaultClient.query({
  //     query: homeQuery,
  //   }).then(({data}) => data && data.home)

  //   const allCurators = await app.apolloProvider.defaultClient.query({
  //     query: allCuratorsQuery,
  //   }).then(({data}) => data && data.allCurators)
    
  //   return { home, allCurators }
  // },
  apollo: {
    home: {
      query: homeQuery,
    },
    allCurators: {
      query: allCuratorsQuery,
    },
  },
  data() {
    return {
      instagram: [
        { url: 'https://placedog.net/700/700', id: 1 },
        { url: 'https://placedog.net/770/770', id: 2 },
        { url: 'https://placedog.net/760/770', id: 3 },
        { url: 'https://placedog.net/780/780', id: 4 },
        { url: 'https://placedog.net/800/800', id: 5 },
        { url: 'https://placedog.net/710/710', id: 6 },
        { url: 'https://placedog.net/720/720', id: 7 },
        { url: 'https://placedog.net/730/730', id: 8 }
      ]
    }
  },
  mounted () {
    this.$lozad.observe();
  }
}
</script>
<template>
  <div>
    <!-- First block start -->
    <div class="mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="flex flex-wrap md:-mx-6">
          <div class="w-full md:w-1/3 md:px-6 mt-16 lg:mt-24">
            <div class="mb-12">
              <h2 class="font-serif text-2xl">the edit</h2>
              <p class="text-sm mb-0 pr-24 md:pr-6 lg:pr-24">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non volupd.</p>
            </div>

            <h3 class="text-black text-base font-sans font-bold">choose a category&nbsp;&nbsp;-</h3>

            <div class="flex flex-wrap -mx-2">
              <div class="w-1/2 md:w-full xl:w-1/2 px-2" v-for="category in categories" :key="category.id">
                <nuxt-link to="#">{{ category.title }}</nuxt-link>
              </div>
            </div>

          </div>
          <div class="w-full md:w-2/3 md:px-6">
            <div class="flex flex-wrap -mx-3 sm:-mx-5 lg:-mx-8 mt-24 md:mt-0">
              <div 
                class="w-1/2 px-3 sm:px-5 lg:px-8"
                :class="{ '-mt-12 md:-mt-32' : index % 2 }"
                v-for="(article, index) in articles"
                :key="article.id"
              >
                <Teaser :imgUrl="article.imgUrl" naked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- First block end -->

    <!-- Second block start -->
    <div class="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="flex flex-wrap md:-mx-8">
          <div class="w-10/12 md:w-2/3 lg:w-4/12 xl:w-3/12 md:px-8 md:mt-12 lg:mt-24 mb-12 lg:mb-0">
            <h2 class="font-serif text-2xl">welcome to your creative life</h2>
            <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non voluptates mollitia unde atque tempora aliquam ad.</p>
            <nuxt-link to="/about" class="underline">learn more</nuxt-link>
          </div>
          
          <div class="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div class="flex flex-wrap">
              <div class="w-2/3">
                <lazy-image src="https://placedog.net/900/1000" alt="Placeholder Image" classList="border-l-12 border-pink" />
              </div>
              <div class="w-1/3 self-end pl-5 sm:pl-8 md:pl-10 xl:pl-16">
                <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second block end -->
  </div>
</template>

<script>
import Teaser from '~/components/Teaser.vue'
import LazyImage from '~/components/LazyImage.vue'

export default {
  transition: 'fade',
  components: {
    Teaser,
    LazyImage
  },
  data() {
    return {
      categories: [
        { title: 'overcoat', id: 1 },
        { title: 'the perfect short tee', id: 2 },
        { title: 'leather jacket', id: 3 },
        { title: 'the perfect long tee', id: 4 },
        { title: 'puffa', id: 5 },
        { title: 'turtle neck', id: 6 },
        { title: 'bomber', id: 7 },
        { title: 'blazer', id: 8 },
        { title: 'slogan tee', id: 9 },
        { title: 'blue jean', id: 10 },
        { title: 'knit jumper', id: 11 },
        { title: 'black jean', id: 12 },
      ],
      articles: [
        { imgUrl: 'https://placedog.net/650/900', id: 1, },
        { imgUrl: 'https://placedog.net/650/900', id: 2, },
        { imgUrl: 'https://placedog.net/650/900', id: 3, },
        { imgUrl: 'https://placedog.net/650/900', id: 4, },
        { imgUrl: 'https://placedog.net/650/900', id: 5, },
        { imgUrl: 'https://placedog.net/650/900', id: 6, },
      ]
    }
  },
  mounted () {
    this.$lozad.observe();
  }
}
</script>
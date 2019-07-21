<template>
  <div>
    <!-- First block start -->
    <div class="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="flex flex-wrap md:-mx-8">
          <div class="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div class="flex flex-wrap">
              <div class="w-1/3 self-end pr-5 sm:pr-8 md:pr-10 xl:pr-16">
                <figure>
                  <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" />
                </figure>
              </div>
              <div class="w-2/3">
                <lazy-image src="https://placedog.net/900/1000" alt="Placeholder Image" classList="border-l-12 border-pink" />
              </div>
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-3/12 md:px-8 mt-12 lg:mt-24">
            <h2 class="font-serif text-2xl">about tbc. raclette hexagon locavore meh</h2>
            <p class="text-sm mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non voluptates mollitia unde atque tempora aliquam ad.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- First block end -->

    <!-- Second block start -->
    <div class="mb-12 md:mb-32 xl:mb-40">
      <div class="container">
        <div class="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div class="flex flex-wrap lg:-mx-12">
            <div class="w-full lg:w-2/5 lg:px-12">
              <h2 class="font-serif text-2xl">intro to the brand, tagline to go here. tumblr irony, kitsch poke selfies.</h2>
            </div>
            <div class="w-full lg:w-3/5 lg:px-12">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi alias beatae iste est, optio ad ipsa dignissimos distinctio recusandae molestias sint adipisci itaque dolorum. Eos rerum exercitationem similique asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat quod hic quos odio eligendi delectus sit culpa magnam debitis iusto ad, numquam incidunt. Obcaecati illo enim illum est id?</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic placeat odit vero rerum! A ipsum illo impedit incidunt, quaerat necessitatibus, animi sapiente fuga.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second block  end-->

    <!-- Third block start -->
    <div class="mb-12 md:mb-32 xl:mb-40" v-for="(person, index) in bios" :key="person.id">
      <div class="container">
        <div class="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div class="flex flex-wrap md:-mx-8 items-center" :class="{ 'flex-row-reverse' : index % 2 }">
            <div class="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
              <lazy-image :src="person.img" alt="Placeholder Image" classList="border-l-12 border-pink w-full" />
            </div>
            <div class="w-full md:w-2/5 md:px-8">
              <h2 class="font-serif text-2xl">{{ person.name}} bio.</h2>
              <p class="text-sm mb-4 lg:pr-12" v-html="person.blurb"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Third block end -->
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
      bios: [
        { 
          name: 'charlotte',
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi alias nobis impedit veritatis. Voluptate quis nisi aliquam, sunt ullam totam omnis ex distinctio. Lorem ipsumdolor sit amet consecteteur adipicising',
          img: 'https://placedog.net/900/900',
          id: 1
        },{
          name: 'hermione',
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi alias nobis impedit veritatis. Voluptate quis nisi aliquam, sunt ullam totam omnis ex distinctio. Lorem ipsumdolor sit amet consecteteur adipicising',
          img: 'https://placedog.net/900/800',
          id: 2          
        }
      ]
    }
  },
  mounted () {
    this.$lozad.observe();
  }
}
</script>
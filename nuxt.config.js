import fetch from 'node-fetch';
import { execute, makePromise } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

require('dotenv').config()

export default {
  env: {
    DATO_KEY: process.env.DATO_KEY,
  },
  mode: 'generated',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#e5d1d1' },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@ax2/lozad-module',
    'nuxt-purgecss',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js'
      }
    }
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['nuxt-link-exact-active', 'fade-enter-active', 'fade-leave-active', 'fade-enter', '.fade-leave-to']
  },
  lozad: {
  },
  axios: {
  },
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '~/apollo/config.js'
    }
  },

  generate: {
    routes: function(callback) {
      const uri = 'https://graphql.datocms.com';
      const link = new createHttpLink({ uri: uri, fetch: fetch });
      const operation = {
      query: gql`
        {
          allPosts {
            slug
          }
        }`,
        context: {
          headers: {
            authorization: `Bearer ${ process.env.DATO_KEY }`
          }
        }
      };

    makePromise(execute(link, operation))
      .then(data => {
        // Build the routes from the posts
        const postRoutes = data.data.allPosts.map(item => {
          return { route: `/edit/${item.slug}`, payload: { }};
        });

        // Register the routes
        callback(null, postRoutes);
      })
      .catch(error => console.log(`received error ${error}`));
    }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    extend(config, ctx) {
    }
  }
}

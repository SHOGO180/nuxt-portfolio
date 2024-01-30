// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxt/content",'@nuxtjs/apollo'],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "json", "vue"],
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
        httpLinkOptions: {
          headers: {
            authorization: 'Bearer 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',
          },
        },
      }
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

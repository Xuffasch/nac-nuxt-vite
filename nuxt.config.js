export default {
  components: true,
  buildModules: ['nuxt-vite', '@nuxtjs/tailwindcss'],
  tailwindcss: { 
    jit: true
  },
  plugins: ['~/plugins/vue-fragment.js']
}
<template>
  <div v-frag>
    <header>
        <h1 v-html="this.title"></h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  import frag from 'vue-frag'
  export default ({
    directives: {
      frag
    },
    created() {
      this.title = 'Album Comics Clone with Nuxt2 and Vite'
    },
    data: {
      title: ''
    }
  })
</script>
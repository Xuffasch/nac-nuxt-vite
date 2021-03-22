<template>
  <div v-frag>
    <header>
        <h1>This is where all the fun starts</h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  import frag from 'vue-frag';
  export default ({
    directives: {
      frag
    }
  })

</script>
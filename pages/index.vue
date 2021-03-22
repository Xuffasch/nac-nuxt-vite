<template>
  <div v-frag>
    <h1>Hello World!</h1>
    <NuxtLink to='/fun'>Fun page</NuxtLink>
  </div>
</template>

<script>
  import frag from 'vue-frag'
  export default ({
    directives: {
      frag
    },
    layout: 'default',
  })
</script>
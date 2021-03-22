<template>
  <div v-frag>
    <main>
      <br />
      <h2>Testing the new fragment directive</h2>
      <p>We should only see an h2 and a p elements</p>
    </main>
    <NuxtLink to='/'>Home page</NuxtLink>
  </div>
</template>

<script>
  import frag from 'vue-frag';
  export default ({
    directives: {
      frag,
    },
    layout: 'funLayout',
  })
</script>

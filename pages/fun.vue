<template>
  <div v-frag>
    <header>
      <h1>Fun page</h1>
      <p>All the fun when creating pages with Nuxt</p>
    </header>
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
  export default {
    directives: {
      frag
    }
  }
</script>

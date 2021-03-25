<template>
  <main>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>Server error. We cannot provide this page</h1>
    <NuxtLink to="/">Home Page</NuxtLink>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }

</script>
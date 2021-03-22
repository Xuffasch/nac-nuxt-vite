<template>
  <main>
    <h1>Hello World!</h1>
    <NuxtLink to='/fun'>Fun page</NuxtLink>
  </main>
</template>

<style scoped>
  h1 {
    @apply p-2 m-2 text-lg text-albumBlue;
  }
  a {
    @apply m-2 p-2 block bg-yellow-400 text-lg;
  }

</style>
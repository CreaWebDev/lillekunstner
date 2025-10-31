<template>
  <header class="h-20 flex flex-row bg-dark z-50 relative">
    <NuxtLink to="/" class="place-self-center">
      <h1 class="text-4xl md:text-6xl pl-6 text-lavender tracking-widest font-display sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        lillekunstner.dk
      </h1>
    </NuxtLink>
    <NuxtLink to="/shop" class="fixed right-2 top-2 bg-dark hover:bg-lavender transition-colors duration-200 border-2 border-soft rounded-md p-2 w-12 h-12 lg:w-14 lg:h-14 m-2 flex flex-col items-center justify-center ">
      <img
        src="/images/buttons/basket.svg"
        alt="Shop"
        class=""
      />
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">

</script>

<template>
  <div class="flex justify-around items-center bg-dark py-2 px-4">
        <!-- Shop Button -->
        <NavButton
          route="/shop"
          icon-src="/images/buttons/basket.svg"
          icon-size="w-10 h-10"
          label="Shop"
          alt-text="Shop"
        />

        <!-- Gallery Button -->
        <NavButton
          route="/gallery"
          icon-src="/images/buttons/flower.svg"
          icon-size="w-10 h-10"
          label="Gallery"
          alt-text="Gallery"
        />

        <!-- Special Button -->
        <NavButton
          route="/seasons"
          icon-src="/images/buttons/xmas.svg"
          icon-size="w-10 h-10"
          label="Jul"
          alt-text="Special"
        />
      </div>
</template>

<script setup lang="ts">
import NavButton from './NavButton.vue';

</script>

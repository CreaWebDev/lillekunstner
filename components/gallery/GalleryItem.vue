<template>
  <div class="flex flex-col">
    <div class="w-72 border-8 border-aqua rounded mb-2">
      <img :src="props.path">
    </div>
    <p class="w-72 text-bloody text-2xl font-display">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['path'])
</script>
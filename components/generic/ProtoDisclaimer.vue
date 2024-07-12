<template>
  <div 
    class="w-full fixed bottom-0 z-50 text-sm font-serif text-center"
    :class="$props.colors">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['colors'])
</script>
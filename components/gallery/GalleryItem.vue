<template>
  <div class="gallery-item p-12 text-center">
    <div class="relative ">
      <img 
        :src="imageSrc" 
        :alt="title"
        class="w-full rounded-md"
      />
      <h3 v-if="title" class="text-2xl font-display font-semibold my-1">{{ title }}</h3>
      <p v-if="description" class="text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  imageSrc: string;
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
})

</script>
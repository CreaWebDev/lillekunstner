<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-8 pt-8">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-900 font-display">Galleri</h1>
      <p class="text-center text-gray-600">Eksempler på produkter, jeg har lavet med mine egen pigers tegninger:</p>
      <p class="text-sm text-center text-gray-600 italic">(Maaaaange flere på vej)</p>
    </div>
    <GalleriItems />
  </div>
</template>

<script setup>
import GalleriItems from '~/components/gallery/GalleryItems.vue'

useHead({
  title: 'Galleri - Lillekunstner'
})
</script>

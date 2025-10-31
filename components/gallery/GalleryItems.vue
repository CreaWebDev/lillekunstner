<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <GalleryItem
      v-for="item in galleryItems"
      :key="item.id"
      :imageSrc="item.imageSrc"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryItem from '~/components/gallery/GalleryItem.vue'


const galleryItems = [
  {
    id: 1,
    imageSrc: '/images/gallery/mulepose_lama.png',
    title: 'Mulepose',
    description: 'Enkel tegning i sort/hvid af en lama.'
  },
  {
    id: 2,
    imageSrc: '/images/gallery/mulepose_muh.png',
    title: 'Mulepose',
    description: 'Min datters 1. kærlighed blev foreviget og nu altså også på en mulepose.'
  },
  {
    id: 3,
    imageSrc: '/images/gallery/poster_teacups.png',
    title: 'Plakat',
    description: 'Tekopperne på plakaten.'
  },
  
] 
</script>
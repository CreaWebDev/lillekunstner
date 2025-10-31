<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <GalleryItem
      v-for="item in seasonGallery"
      :key="item.id"
      :imageSrc="item.imageSrc"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryItem from '~/components/gallery/GalleryItem.vue'


const seasonGallery = [
  {
    id: 1,
    imageSrc: '/images/seasons/julekort.png',
    title: 'Julekort & til-og-fra kort',
    description: 'Motiv er taget framin datters hjemmetegnede julekalender'
  },
  {
    id: 2,
    imageSrc: '/images/seasons/xmas_wrap.jpg',
    title: 'Julepapir & til-og-fra kort',
    description: 'Min datters 1. kærlighed blev foreviget og nu altså også på en mulepose.'
  },
  {
    id: 3,
    imageSrc: '/images/seasons/lampeskaerm_julestok.jpg',
    title: 'Lampeskærm',
    description: 'Foldet lampeskærm til vinglas med julestok.'
  },
  {
    id: 4,
    imageSrc: '/images/seasons/julestromper.png',
    title: 'Julesok',
    description: 'Søde og personlige julestrømper til bedsteforældrene'
  },
  
] 
</script>
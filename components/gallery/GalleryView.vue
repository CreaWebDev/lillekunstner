<template>
  <div class="flex flex-row flex-wrap">
    <div
      v-for="(item, index) in galleryItems" 
      :key="index"
      class="flex p-4"
    >
      <GalleryItem :path="item.path">{{ item.text }}</GalleryItem>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GalleryItem from '@/components/gallery/GalleryItem.vue'

const galleryItems = ref([
  {path: '/images/gallery/bag_lama.png', text: 'Mulepose med tryk'},
  {path: '/images/gallery/coaster_cupcake.jpg', text: 'Bordskånere til glas til fødselsdagsparty eller anden fest'},
  {path: '/images/gallery/poster_teacups.png', text: 'Plakat til thesalonen'},
  {path: '/images/gallery/label_rose.png', text: 'Etiket som pynt på forskelligt tilbehør'},
  {path: '/images/gallery/label_box.png', text: 'Etiket som æskepynt'},
  {path: '/images/gallery/bag_ice.png', text: 'Mulepose med tryk'},
  {path: '/images/gallery/poster_littlebig_greens.png', text: 'Kunstplakat med dino'},
  {path: '/images/gallery/coaster_blue_face.jpg', text: 'Bordskånere til glas med sjove ansigter'},
  // {path: '/images/gallery/snekugle.svg', text: 'Lorem ipsum'},
  {path: '/images/gallery/gaveetiket_engel.jpg', text: 'Navneetiket til julegaverne'}
])

const letItSnow = () => {
  let snowflakes = document.getElementsByClassName('snowflake')
  for (let s = 0; s < snowflakes.length; s++) {
    snowflakes[s].classList.add('animate-pulse')
  }
} 

onMounted(() => {
  letItSnow()
})
</script>

<style type="text/css">
	.st0{fill:#78654F;}
	.st1{fill:#6D5B47;}
	.st2{fill:#836F58;}
	.st3{fill:#3F2116;}
	.st4 animate-pulse{fill:#3D675B;}
	.st5{fill:#5C4735;}
	.st6{fill:#493725;}
	.st7{fill:#8A1F1D;}
	.st8{fill:#637C6C;}
	.st9{fill:#582117;}
	.st10{fill:#3D2E1D;}
	.st11{fill:#811C19;}
</style>
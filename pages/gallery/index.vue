<template>
  <div class="flex flex-col">
    <TextArea>
      <template v-slot:headline>
        Produktgalleri
      </template>
      <template v-slot:subtext>
        Eksempler på hvad jeg kan lave med dit barns tegning...
      </template>
    </TextArea>
    <GalleryView/>
  </div>
</template>

<script setup lang="ts">
import GalleryView from '@/components/gallery/GalleryView.vue'
import TextArea from '@/components/generic/TextArea.vue'

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "Lillekunstner",
})
</script>
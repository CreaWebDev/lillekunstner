<template>
  <div class="w-full">
    <div class="md:w-1/2">
      <TextArea>
        <template v-slot:headline>
          Dette bliver ordresiden.
        </template>
        <template v-slot:subtext>
          Mere tekst følger...
        </template>
      </TextArea>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextArea from '@/components/generic/TextArea.vue'

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "Kurv",
})
</script>
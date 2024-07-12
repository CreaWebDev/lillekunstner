<template>
  <div class="flex flex-row space-x-8 pt-8">
    <div class="z-50 w-40 h-40 md:w-52 md:h-52">
      <img src="/images/meandgirls.png?url">
    </div>
    <div class="w-2/5 md:w-1/2">
      <TextArea>
        <template v-slot:headline>
          Kontakt mig
        </template>
        <template v-slot:subtext>
          Inspirationen til dette website får jeg fra mine to døtre og deres kreative univers.<br>
          Al tak går til dem. Mere tekst følger...
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
  title: "Kontakt",
})
</script>
<template>
  <div class="">
    <div class="flex-col">
      <TextArea>
        <template v-slot:headline>
          Denne side bliver produktsiden, men er stadig under udarbejdelse - jeg arbejder på sagen...
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
    title: "Produkter",
  })
</script>
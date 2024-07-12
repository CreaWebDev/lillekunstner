<template>
  <div class="">
    <div class="md:w-1/2">
      <TextArea>
        <template v-slot:headline>
          På denne side vil der være inspiration til produkter fra årstiden - jeg arbejder på sagen...
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
  title: "Årstider",
})
</script>
<template>
  <div class="">
    <div class="flex flex-col">
      <TextArea>
        <template v-slot:headline>
          Du vidste måske ikke, at du har en lille kunstner derhjemme?
        </template>
        <template v-slot:subtext>
          Jeg har to.<br> Og i løbet af deres børnehaveår og skolestart
          er jeg blevet begavet med maaange tegninger.<br>
          Nogle af dem særligt flotte, sjove eller kreative.
          Hver gang stod jeg i et dilemma. Der var ikke plads til alle på opslagstavlen, og jeg nænnede ikke at smide dem ud.
          <br>
          <br>
          Dette gav mig idéen til lillekunster. Det første forsøg var køleskabsmagneter. <br>A4-tegninger blev skaleret ned og nu var der plads til fire tegninger i stedet for én.<br>
          Nogle gange tilføjede jeg et passende citat.
          <br><br>
          Næste projekt blev at bruge dele af en tegning, som grafik til en invitation.<br>
          Mulighederne er mange, se eksempler under Galleri.
          
        </template>
      </TextArea>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import ProtoDisclaimer from '@/components/generic/ProtoDisclaimer.vue';
  import LilleFooter from '@/components/layout/LilleFooter.vue'
  import MenuBar from '@/components/layout/MenuBar.vue'
  import TextArea from '@/components/generic/TextArea.vue'

  definePageMeta({
    layout: "main-layout",
  })

  useHead({
    title: "Lillekunstner",
  })

</script>
  
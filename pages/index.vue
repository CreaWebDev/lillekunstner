<template>
  <div class="min-h-screen">
    <!-- Background Banner Image (animated panorama) -->
    <section class="absolute bottom-10 inset-0 z-0 h-full pt-20">
      <div
        class="w-full h-full bg-center bg-cover bg-no-repeat animate-panorama"
        style="background-image: url('/images/banner_muh.png');"
        aria-hidden="true"
      ></div>
      <div class="absolute inset-0 bg-soft bg-opacity-60 z-10"></div>
    </section>

    <!-- Hero section sith face -->
    <section class="relative">
      <div class="relative z-10 text-center px-4 w-full pb-8">
        <img
          src="/images/face.svg"
          alt="Lillekunstner Logo"
          class="w-1/2 h-auto place-self-center"
        />
        <p class="text-dark font-display text-6xl mb-6 px-4">
          Vidste du ikke,<br>at du har en lille kunstner derhjemme?
        </p>
        <img
          src="/images/org_btn.svg"
          class="w-1/5 h-auto place-self-center mx-auto"  
        />
      </div>
    </section>
    <section class="relative flex flex-col text-dark text-center font-display px-12">
      <p class="text-7xl py-4">
        Jeg har to!
      </p>
      <p class="text-2xl">
        Og i løbet af deres børnehaveår og skolestart er jeg dagligt blevet begavet med de sødest og sjoveste tegninger.
        <img src="/images/pizza.png" alt="Pizza Drawing" class="w-32 h-auto mx-auto my-4"/>
        Hver gang stod jeg i et dilemma. Der var ikke plads til alle på opslagstavlen, og jeg nænnede ikke at smide dem ud.
        <br>
        Dette gav mig idéen til lillekunster. Jeg begyndte at fotografere hele eller små detaljer af de bedste tegninger, og lavede det om til grafik på min pc. 
        <br>
        Nu havde jeg så deres "digitale kunst" til at designe med.
        <img src="/images/teacups.png" alt="Pizza Drawing" class="w-32 h-auto mx-auto my-4"/>
        Jeg fandt forskellige produkter, såsom magneter, muleposer, postkort, plakater, som jeg kunne trykke deres kunst på, og kunne på dén måde lave unikke gaver til familie og venner.
       <br>
        Mulighederne er mange, se eksempler i mit Galleri:
      </p>
      <UiBtn
        text="Se galleriet"
        href="/gallery"
        variant="secondary"
        class="mt-6 mx-auto"  
      />
    </section>

    <section class="py-12 sm:py-16 md:py-20">
      <Process />      
    </section>
  </div>
</template>

<script setup lang="ts">
import Process from '~/components/Process.vue'
import UiBtn from '~/components/ui/UiBtn.vue'

useHead({
  title: 'Lillekunstner - Du har en lille kunstner derhjemme',
  meta: [
    { name: 'description', content: 'Udforsk din kreativitet med Lillekunstner. Workshops, vejledning og fællesskab for alle kreative sjæle.' }
  ]
})
</script>

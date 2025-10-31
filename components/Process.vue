<template>
  <div class="mx-auto w-2/3">
    <h2 class="text-3xl font-bold text-center mb-8 font-display sm:text-4xl md:text-5xl lg:text-7xl md:mb-12 lg:mb-16">
      Således fungerer det:
    </h2>
    <div class="flex flex-col space-y-8 md:flex-row md:space-x-8 lg:space-x-16">
      <div class="text-center">
        <div class="flex items-center justify-center mx-auto mb-3">
          <font-awesome-icon :icon="['fas', 'camera']" class="text-2xl md:text-4xl text-abricot" />
          <p class="text-2xl md:text-4xl px-2 font-display"> + </p>
          <font-awesome-icon :icon="['fas', 'file']" class="text-2xl md:text-4xl text-abricot" />
        </div>
        <p>Frem med smartphonen</p>
        <p class="text-sm text-gray-600 sm:text-base">Tag et nærbillede af dit barns tegningi klart lys og uden skygger</p>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center mx-auto mb-3">
          <font-awesome-icon :icon="['fas', 'laptop']" class="text-2xl md:text-4xl text-abricot" />
          <p class="text-2xl md:text-4xl px-2 font-display"> + </p>
          <font-awesome-icon :icon="['fas', 'print']" class="text-2xl md:text-4xl text-abricot" /> 
        </div>
        <p>Design processen starter</p>
        <p class="text-sm text-gray-600 sm:text-base">Tegningen digitaliseres og omdannes til vektor grafik</p>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center mx-auto mb-3">
          <font-awesome-icon :icon="['fas', 'envelopes-bulk']" class="text-2xl md:text-4xl text-abricot" />
          <p class="text-xs px-2 font-display"> eller </p>
          <font-awesome-icon :icon="['fas', 'bag-shopping']" class="text-2xl md:text-4xl text-abricot" />
            <p class="text-xs px-2 font-display"> eller </p>
            <font-awesome-icon :icon="['fas', 'image']" class="text-2xl md:text-4xl text-abricot" />
        </div>
        <p>Produktet skabes</p>
        <p class="text-sm text-gray-600 sm:text-base">Det grafiske design er klar til at blive trykt på det valgte produkt.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<template>
  <div class="min-h-screen bg-soft pb-20">
    <NuxtRouteAnnouncer />
    <header class="z-50 relative">
      <SiteHeader />
    </header>
    <NuxtPage />

    <!-- Fixed Bottom Navigation -->
    <nav class="fixed bottom-0 left-0 right-0 z-50">
      <MainNavigation />
    </nav>
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import MainNavigation from './components/navigation/MainNavigation.vue';

</script>
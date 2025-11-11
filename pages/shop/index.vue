<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-900 font-display">Snart kan du bestille hér</h1>
      <OrderForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderForm from '~/components/shop/OrderForm.vue'

useHead({
  title: 'Shop - Lillekunstner'
})
</script>

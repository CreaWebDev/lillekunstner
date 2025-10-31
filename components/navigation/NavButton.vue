<template>
  <button
    class="flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 border border-dark hover:border-lavender transition-colors duration-200"
    @click="navigateTo(route)"
  >
    <div :class="iconSize">
      <font-awesome-icon v-if="iconFa" :icon="iconFa" class="w-full h-full text-gray-700" />
      <img v-else :src="iconSrc" :alt="altText ?? label" class="w-full h-full object-contain" />
    </div>
    <span class="text-md text-soft font-medium font-display">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">

interface Props {
  route: string
  iconSrc?: string
  altText?: string
  label?: string
  iconSize?: string
  iconFa?: any
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 'w-6 h-6 mb-1'
})
</script>

<template>
  <!-- Supports internal routes via `to`, external links via `href`, or acts as a button otherwise -->
  <NuxtLink v-if="to" :to="to" :class="buttonClass" :aria-label="ariaLabel">
    <template #default>
      <span v-if="iconFa" class="flex items-center">
        <font-awesome-icon :icon="iconFa" class="mr-2" />
        <span>{{ text }}</span>
      </span>
      <span v-else-if="iconSrc" class="flex items-center">
        <img :src="iconSrc" alt="" class="w-8 h-8 mr-2 object-contain" />
        <span>{{ text }}</span>
      </span>
      <span v-else>{{ text }}</span>
    </template>
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="buttonClass" :aria-label="ariaLabel" rel="noopener noreferrer">
    <span v-if="iconFa" class="flex items-center">
      <font-awesome-icon :icon="iconFa" class="mr-2" />
      <span>{{ text }}</span>
    </span>
    <span v-else-if="iconSrc" class="flex items-center">
      <img :src="iconSrc" alt="" class="w-8 h-8 mr-2 object-contain" />
      <span>{{ text }}</span>
    </span>
    <span v-else>{{ text }}</span>
  </a>

  <button v-else type="button" :class="buttonClass" :aria-label="ariaLabel" @click="onClick">
    <span v-if="iconFa" class="flex items-center">
      <font-awesome-icon :icon="iconFa" class="mr-2" />
      <span>{{ text }}</span>
    </span>
    <span v-else-if="iconSrc" class="flex items-center">
      <img :src="iconSrc" alt="" class="w-8 h-8 mr-2 object-contain" />
      <span>{{ text }}</span>
    </span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'

interface Props {
  text?: string
  to?: string
  href?: string
  iconFa?: any
  iconSrc?: string
  variant?: 'primary' | 'secondary'
  full?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['click'])

const ariaLabel = computed(() => props.text || props.to || props.href || 'button')

const buttonClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 px-8 py-2 rounded-md text-lg font-medium transition-colors duration-150'
  const size = props.full ? 'w-full' : ''
  const variant = props.variant === 'secondary'
    ? 'bg-abricot text-soft hover:text-abricot hover:bg-lavender'
    : 'bg-lavender text-dark hover:opacity-95'
  return [base, size, variant].filter(Boolean).join(' ')
})

function onClick(e: Event) {
  emits('click', e)
}
</script>

<!-- Notes:
  - Use `iconFa` for Font Awesome icon arrays (e.g. ['fas','shopping-basket']) or IconDefinition.
  - Use `iconSrc` to supply an image icon.
  - Provide either `to` (internal Nuxt route) or `href` (external link). If neither is provided, the component renders a button and emits `click` events.
-->

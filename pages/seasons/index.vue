<template>
  <div class="min-h-screen">
    <div class="px-4 py-8 text-center">
      <img src="/images/seasons/snekugle.svg" alt="Christmas Banner" class="w-2/3 md:w-1/3 h-auto my-6 mx-auto" />
      
      <h1 class="text-3xl font-bold trailing-wide mb-6 font-display">Countdown til 24. december:</h1>
      <div class="sr-only" aria-live="polite">
        {{ timeLeft.days }} dage, {{ timeLeft.hours }} timer, {{ timeLeft.minutes }} minutter og {{ timeLeft.seconds }} sekunder tilbage til 24. december.
      </div>

      <div class="flex justify-center gap-3">
        <OrganicBtn
          :fillColor="'fill-lavender'"
          :addClass="'w-20'"
        >
          <div class="flex flex-col items-center px-3 py-2">
            <div class="text-2xl font-bold">{{ timeLeft.days }}</div>
            <div class="text-xs text-dark">dage</div>
          </div>
        </OrganicBtn>

        <OrganicBtn
          :fillColor="'fill-green'"
          :addClass="'w-20'"
        >
          <div class="flex flex-col items-center px-3 py-2">
            <div class="text-2xl font-bold">{{ timeLeft.hours }}</div>
            <div class="text-xs text-dark">timer</div>
          </div>
        </OrganicBtn>
        <OrganicBtn
          :fillColor="'fill-dark'"
          :addClass="'w-20'"
        >
        <div class="flex flex-col items-center px-3 py-2">
          <div class="text-2xl text-green">{{ timeLeft.minutes }}</div>
          <div class="text-xs text-soft">min</div>
        </div>
        </OrganicBtn>

        <OrganicBtn
          :fillColor="'fill-abricot'"
          :addClass="'w-20'"
        >
        <div class="flex flex-col items-center px-3 py-2">
          <div class="text-2xl font-bold">{{ timeLeft.seconds }}</div>
          <div class="text-xs text-dark">sek</div>
        </div>
        </OrganicBtn>
      </div>

      
      <SeasonGallery />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import OrganicBtn from '~/components/ui/OrganicBtn.vue'
import SeasonGallery from '~/components/seasons/SeasonsGallery.vue'

useHead({
  title: 'Jul - Lillekunstner'
})

// function getNextDec1(): Date {
//   const now = new Date()
//   let target = new Date(now.getFullYear(), 11, 1, 0, 0, 0)
//   if (now >= target) {
//     target = new Date(now.getFullYear() + 1, 11, 1, 0, 0, 0)
//   }
//   return target
// }

function getNextDec24(): Date {
  const now = new Date()
  let target = new Date(now.getFullYear(), 11, 24, 0, 0, 0) // 11 = december
  if (now >= target) {
    target = new Date(now.getFullYear() + 1, 11, 24, 0, 0, 0)
  }
  return target
}

type Countdown = { days: number; hours: number; minutes: number; seconds: number }
const timeLeft = ref<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer: ReturnType<typeof setInterval> | null = null

function updateCountdown() {
  const now = new Date()
  const target = getNextDec24()
  let diff = Math.max(0, target.getTime() - now.getTime())

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  timeLeft.value = { days, hours, minutes, seconds }
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

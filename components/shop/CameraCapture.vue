<template>
  <div class="camera-capture">
    <div v-if="!imageCapture" class="camera-preview rounded-lg overflow-hidden bg-gray-100">
      <video
        v-if="isStreamActive"
        ref="videoRef"
        class="w-full h-full object-cover"
        autoplay
        playsinline
      ></video>
      <div v-else class="flex items-center justify-center h-48 text-gray-500">
        <p v-if="!hasCamera">No camera detected</p>
        <p v-else>Camera not active</p>
      </div>
    </div>
    
    <div v-else class="captured-image rounded-lg overflow-hidden bg-gray-100">
      <img :src="imageCapture" alt="Captured image" class="w-full h-auto" />
    </div>

    <div class="mt-4 flex gap-3 justify-center">
      <UiBtn
        v-if="!isStreamActive && !imageCapture"
        @click="startCamera"
        type="button"
        :variant="primary"
        :text="'Start Camera'"
      >
      </UiBtn>
      <UiBtn
        v-if="isStreamActive && !imageCapture"
        @click="captureImage"
        type="button"
        :variant="primary"
        :text="'Take photo'"
      >
      </UiBtn>
      <UiBtn
        v-if="imageCapture"
        @click="retakePhoto"
        type="button"
        :variant="primary"
        :text="'Retake photo'"
      >
      </UiBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'capture', image: string): void
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const stream = ref<MediaStream | null>(null)
const isStreamActive = ref(false)
const imageCapture = ref<string | null>(null)
const hasCamera = ref(true)

const startCamera = async () => {
  try {
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false
    })
    
    if (videoRef.value) {
      videoRef.value.srcObject = stream.value
      isStreamActive.value = true
    }
  } catch (error) {
    console.error('Error accessing camera:', error)
    hasCamera.value = false
  }
}

const captureImage = () => {
  if (!videoRef.value || !isStreamActive.value) return

  const canvas = document.createElement('canvas')
  canvas.width = videoRef.value.videoWidth
  canvas.height = videoRef.value.videoHeight
  
  const context = canvas.getContext('2d')
  if (context) {
    context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height)
    imageCapture.value = canvas.toDataURL('image/jpeg')
    emit('capture', imageCapture.value)
    stopCamera()
  }
}

const stopCamera = () => {
  if (stream.value) {
    stream.value.getTracks().forEach(track => track.stop())
    stream.value = null
    isStreamActive.value = false
  }
}

const retakePhoto = () => {
  imageCapture.value = null
  startCamera()
}

onUnmounted(() => {
  stopCamera()
})
</script>
<template>
  <div class="order-form max-w-2xl mx-auto p-6">
    <!-- <h2 class="text-lg italic mb-6">Hér kan du sende mig din bestilling. Jeg modtager den på mail og sender dig et preview af produktet inden afsendelse og betaling.</h2> -->
    <h2 class="text-lg italic mb-6">Jeg arbejder på højtryk for at gøre klar til bestillinger. Skriv evt til mig på pia@lillekunster.dk</h2>
    
    <form @submit.prevent="submitOrder" class="space-y-6">
      <!-- Contact Information -->
      <div class="space-y-4">
        <h3 class="text-lg font-display font-semibold">Kontaktinfo</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-1">Navn</label>
            <input
              v-model="formData.name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1">Email</label>
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <!-- Photo Upload -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Foto upload</h3>
        <CameraCapture @capture="handlePhotoCapture" />
      </div>

      <!-- Order Details -->
      <div class="space-y-4">
        <h3 class="text-lg font-display font-semibold">Bestilling</h3>
        <div>
          <label class="block text-sm font-semibold mb-1">Produkttype</label>
          <select
            v-model="formData.productType"
            required
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Vælg et produkt</option>
            <option value="poster">Plakat</option>
            <option value="canvas">Mulepose</option>
            <option value="card">Lykønskningskort</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Yderligere bemærkninger</label>
          <textarea
            v-model="formData.instructions"
            rows="3"
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <UiBtn
          type="submit"
          :variant="primary"
          :text="'Send'"
          :disabled="!formData.photoData"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CameraCapture from './CameraCapture.vue'

interface OrderFormData {
  name: string
  email: string
  photoData: string | null
  productType: string
  instructions: string
}

const formData = ref<OrderFormData>({
  name: '',
  email: '',
  photoData: null,
  productType: '',
  instructions: ''
})

const handlePhotoCapture = (imageData: string) => {
  formData.value.photoData = imageData
}

const isSubmitting = ref(false)
const submitError = ref('')

const submitOrder = async () => {
  if (!formData.value.photoData) {
    submitError.value = 'Please take a photo before submitting'
    return
  }

  try {
    isSubmitting.value = true
    submitError.value = ''

    const response = await fetch('/api/submit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    })

    if (!response.ok) {
      throw new Error('Failed to submit order')
    }

    // Show success message
    alert('Order submitted successfully! You will receive a confirmation email shortly.')
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      photoData: null,
      productType: '',
      instructions: ''
    }
  } catch (error) {
    console.error('Error submitting order:', error)
    submitError.value = 'Failed to submit order. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from adding its CSS automatically since Nuxt/PostCSS handles imports
config.autoAddCss = false

// Add full solid + brand packs; you can cherry-pick icons instead for smaller bundles
library.add(fas, fab)

export default defineNuxtPlugin((nuxtApp) => {
  // Register component globally as <font-awesome-icon>
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

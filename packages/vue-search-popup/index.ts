import type { App } from 'vue'
import VueSearchPopup from './index.vue'

export function install(app: App) {
  app.component('VueSearchPopup', VueSearchPopup)
}

export {
  VueSearchPopup,
}

export default VueSearchPopup

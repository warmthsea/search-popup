import type { App } from 'vue'
import VueSearchPopup from './index.vue'
import './styles.css'

function install(app: App) {
  app.component('VueSearchPopup', VueSearchPopup)
}

export {
  install,
}

export default VueSearchPopup

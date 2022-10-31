import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faPhone, faMagnifyingGlass, faTrash, faPen  } from '@fortawesome/free-solid-svg-icons'
import store from './store/index'
import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHatWizard, faPhone, faMagnifyingGlass, faTrash, faPen)
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.use(store)

app.mount('#app')

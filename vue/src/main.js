import { createApp } from 'vue'
import './style.css'
import mainpage from './mainpage.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(mainpage).use(vuetify).mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'

// Terra Sounds custom theme
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F57C00',           // Terra Sounds orange
          'primary-darken-1': '#E65100',
          secondary: '#424242',
          accent: '#0288D1',
          background: '#FFFFFF',
          surface: '#FAFAFA',
          error: '#F44336',
          success: '#4CAF50',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'elevated'
    },
    VCard: {
      elevation: 2,
      rounded: 'lg'
    },
    VTextField: {
      variant: 'outlined'
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

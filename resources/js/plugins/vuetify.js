import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        accent: '#be0028',
        secondary: '#f15726',
      },
      dark: {
        accent: '#be0028',
        secondary: '#f15726',
      }
    }
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}

export default new Vuetify(opts)
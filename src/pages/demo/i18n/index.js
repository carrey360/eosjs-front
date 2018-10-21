import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  en: {},
  cn: {}
}

const i18n = new VueI18n({
  locale: localStorage.lang || 'ch',
  messages
})

export default i18n

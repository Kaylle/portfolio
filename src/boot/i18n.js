import { createI18n } from 'vue-i18n'
import en from '../boot/apiEn'
import ru from '../boot/apiRu'

export default ({ app }) => {
  const lang = localStorage.getItem('lang') || 'en'
  const messages = { en, ru }
  console.log(messages)

  const i18n = createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: 'en',
    messages
  })

  app.use(i18n)
}

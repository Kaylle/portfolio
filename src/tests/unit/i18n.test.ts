import { createI18n } from 'vue-i18n'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeroSection from '../../components/HeroSection.vue'

const messages = {
  en: { description: 'description' },
  ru: { description: 'описание' }
}

describe('i18n translations', () => {
  it('renders correct translation in Russian', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'ru',
      messages
    })
    const wrapper = mount(HeroSection, {
      global: { plugins: [i18n] },
    })
    expect(wrapper.text()).toContain('описание')
  })
})

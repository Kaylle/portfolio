import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProjectPreviewCard from '../../components/ProjectPreviewCard.vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    moreInfo: 'More info',
  },
  ru: {
    moreInfo: 'Подробнее',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

describe('ProjectCard', () => {
  it('renders project title', () => {
    const wrapper = mount(ProjectPreviewCard, {
      props: {
        card: {
          id: 0,
          slug: 'test',
          title: 'My Project',
          description: '',
          badges: [],
          link: [],
          images: [],
          image: ''
        },
      },
      global: {
        plugins: [i18n],
      },
    })

    expect(wrapper.text()).toContain('My Project')
  })
})

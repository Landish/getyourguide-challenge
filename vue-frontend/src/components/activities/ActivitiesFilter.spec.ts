import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivitiesFilter from './ActivitiesFilter.vue'

describe('ActivitiesFilter', () => {
  it('renders activities filter', () => {
    const wrapper = mount(ActivitiesFilter, {})

    expect(wrapper.get('[data-testid=activities-filter]')).toBeDefined()
  })

  it('fires custom event when query is set to something', async () => {
    const wrapper = mount(ActivitiesFilter, {})

    await wrapper.find('input').setValue({ query: 'test' })

    expect(wrapper.emitted()).toHaveProperty('search')
  })
})

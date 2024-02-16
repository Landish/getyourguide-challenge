import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivitiesEmpty from './ActivitiesEmpty.vue'

describe('ActivitiesEmpty', () => {
  it('renders activities empty state', () => {
    const wrapper = mount(ActivitiesEmpty, {})

    expect(wrapper.get('[data-testid=activities-empty]')).toBeDefined()
  })
})

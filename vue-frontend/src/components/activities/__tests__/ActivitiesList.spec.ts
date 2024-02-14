import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivitiesList from '../ActivitiesList.vue'

describe('ActivitiesList', () => {
  it('renders list of activities', () => {
    const wrapper = mount(ActivitiesList, {
      props: {
        activities: []
      }
    })

    expect(wrapper.get('[data-testid=activities-list]')).toBeDefined()
  })
})

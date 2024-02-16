import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { mockActivity } from '@/utils/test-utils'
import ActivitiesList from './ActivitiesList.vue'

describe('ActivitiesList', () => {
  it('renders list of activities component', () => {
    const wrapper = mount(ActivitiesList, {
      props: {
        activities: []
      }
    })

    expect(wrapper.get('[data-testid=activities-list]')).toBeDefined()
  })

  it('displays list of activities', () => {
    const wrapper = mount(ActivitiesList, {
      props: {
        activities: [
          mockActivity({ title: 'Skip the line' }),
          mockActivity({ title: 'Hop-on Bus' }),
          mockActivity({ title: 'City tour' })
        ]
      }
    })

    expect(wrapper.text()).toContain('Skip the line')
    expect(wrapper.text()).toContain('Hop-on Bus')
    expect(wrapper.text()).toContain('City tour')
  })
})

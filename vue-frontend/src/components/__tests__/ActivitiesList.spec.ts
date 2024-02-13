import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivitiesList from '../ActivitiesList.vue'

describe('ActivitiesList', () => {
  it('renders list of activities', () => {
    const wrapper = mount(ActivitiesList, {
      props: {
        activities: [
          {
            id: 1,
            title: 'Activity Title',
            price: 50,
            currency: 'EUR',
            rating: 4.2,
            specialOffer: true,
            supplier: {
              id: 1,
              name: 'Supplier name',
              address: 'Supplier address',
              zip: '12345',
              city: 'Berlin',
              country: 'Germany'
            }
          }
        ]
      }
    })
    expect(wrapper.text()).toContain('Activity Title')
    expect(wrapper.text()).toContain('50')
    expect(wrapper.text()).toContain('EUR')
    expect(wrapper.text()).toContain('4.2')
    expect(wrapper.text()).toContain('Supplier name')
    expect(wrapper.text()).toContain('Supplier address')
    expect(wrapper.text()).toContain('12345')
    expect(wrapper.text()).toContain('Berlin')
    expect(wrapper.text()).toContain('Germany')
  })
})

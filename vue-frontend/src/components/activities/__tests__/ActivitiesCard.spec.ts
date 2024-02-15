import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivitiesCard from '../ActivitiesCard.vue'
import { mockActivity } from '@/utils/test-utils'

describe('ActivitiesCard', () => {
  it('renders activity card', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity()
      }
    })
    expect(wrapper.get('[data-testid=activity-card]')).toBeDefined()
  })
  it('renders activity title', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ title: 'Activity Title' })
      }
    })
    expect(wrapper.text()).toContain('Activity Title')
  })
  it('renders activity price with currency', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ price: 49, currency: 'USD' })
      }
    })
    expect(wrapper.text()).toContain('49')
    expect(wrapper.text()).toContain('USD')
  })
  it('renders activity rating', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ rating: 4.7 })
      }
    })
    expect(wrapper.text()).toContain('4.7')
  })
  it('renders activity special offer', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ specialOffer: true })
      }
    })
    expect(wrapper.text()).toContain('Special Offer')
  })
  it('renders activity without special offer', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ specialOffer: false })
      }
    })
    expect(wrapper.text()).not.toContain('Special Offer')
  })

  it('renders activity supplier name', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({ supplier: { name: 'John Doe' } })
      }
    })
    expect(wrapper.text()).toContain('John Doe')
  })
  it('renders activity supplier location', () => {
    const wrapper = mount(ActivitiesCard, {
      props: {
        activity: mockActivity({
          supplier: { address: '123 Main St', country: 'USA', city: 'New York' }
        })
      }
    })
    expect(wrapper.text()).toContain('123 Main St')
    expect(wrapper.text()).toContain('USA')
    expect(wrapper.text()).toContain('New York')
  })
})

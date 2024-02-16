// import type { Activity, Supplier } from '@/types/types'

import { Activity } from '../src/activities/entities/activity.entity';
import { Supplier } from '../src/suppliers/entities/Supplier.entity';

// Utility type to make all properties of a nested object optional
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const mockActivity = (overrides?: DeepPartial<Activity>): Activity => {
  return {
    id: 1,
    title: 'Activity Title',
    price: 50,
    currency: 'EUR',
    rating: 4.2,
    specialOffer: true,
    supplierId: 1,
    supplier: mockSupplier(),
    ...overrides,
  } as Activity;
};

export const mockSupplier = (overrides?: DeepPartial<Supplier>): Supplier => {
  return {
    id: 1,
    name: 'Supplier name',
    address: 'Supplier address',
    zip: '12345',
    city: 'Berlin',
    country: 'Germany',
    ...overrides,
  };
};

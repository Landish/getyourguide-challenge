export interface Activity {
  id: number
  title: string
  price: number
  currency: string
  rating: number
  specialOffer: boolean
  supplierId: number
  supplier?: Supplier
}

export interface Supplier {
  id: number
  name: string
  address: string
  zip: string
  city: string
  country: string
}

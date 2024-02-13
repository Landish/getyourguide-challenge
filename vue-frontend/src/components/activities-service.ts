import type { Activity } from '@/types'

export async function getActivities({
  title = '',
  withSupplier = true
}: {
  title?: string
  withSupplier?: boolean
}): Promise<Activity[]> {
  const url = new URL('http://localhost:3000/activities')
  if (title) url.searchParams.append('title', title)
  if (withSupplier) url.searchParams.append('withSupplier', withSupplier.toString())

  const request = await fetch(url.toString())
  const activities = await request.json()
  return activities
}

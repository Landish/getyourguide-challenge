import type { Activity } from '@/types/types'

interface FindActivitiesDto {
  title?: string
  withSupplier?: boolean
}

export async function findActivities({
  title = '',
  withSupplier = true
}: FindActivitiesDto): Promise<Activity[]> {
  // TODO: Move the URL in to environment variables
  const url = new URL('http://localhost:3000/activities')
  if (title) url.searchParams.append('title', title)
  if (withSupplier) url.searchParams.append('withSupplier', withSupplier.toString())

  const request = await fetch(url.toString())
  if (!request.ok) throw new Error('Failed to fetch activities')

  const activities = (await request.json()) as Activity[]
  return activities
}

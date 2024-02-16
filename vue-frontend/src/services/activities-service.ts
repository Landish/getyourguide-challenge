import type { Activity } from '@/types/types'

interface GetActivitiesDto {
  title?: string
  withSupplier?: boolean
}

export async function getActivities({
  title = '',
  withSupplier = true
}: GetActivitiesDto): Promise<Activity[]> {
  const url = new URL('http://localhost:3000/activities')
  if (title) url.searchParams.append('title', title)
  if (withSupplier) url.searchParams.append('withSupplier', withSupplier.toString())

  const request = await fetch(url.toString())
  if (!request.ok) throw new Error('Failed to fetch activities')

  const activities = (await request.json()) as Activity[]
  return activities
}

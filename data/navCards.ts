export type NavCard = {
  title: string
  href: string
  blurb: string
  description: string
}

export const navCards: NavCard[] = [
  {
    title: 'Celebrity Contestants',
    href: '/celebrity-contestants',
    blurb: 'The Roster',
    description: 'Meet the stars brave enough to take on Baja.',
  },
  {
    title: 'Racing Legends',
    href: '/legends',
    blurb: 'The Legends',
    description:
      "Champions mentors and rival guest drivers who get hands-on mentoring their teams.",
  },
  {
    title: 'Creators',
    href: '/creators',
    blurb: 'The Producers',
    description: 'Get to know the visionary team behind Perilous.',
  },
]

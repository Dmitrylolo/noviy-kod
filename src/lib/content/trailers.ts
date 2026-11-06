export interface EnglishTrailer {
  id: string
  title: string
  label: string
  // Leave empty until the video is confirmed: the card then renders a "coming soon" placeholder.
  youtubeId: string
}

// Verified via the official playlist "THE NEW CODE | Official Trailers" (2 videos).
export const englishTrailersPlaylistUrl = 'https://www.youtube.com/playlist?list=PLB2HH4z-4kdY'

export const englishTrailers = {
  title: 'Watch the trailers in English',
  badge: 'English dubbed',
  watchLabel: 'Watch on YouTube',
  playlistLabel: 'All trailers on YouTube →',
  comingSoonLabel: 'Coming soon',
  items: [
    {
      id: 'trailer',
      label: 'Trailer',
      title: 'War isn’t what you think',
      youtubeId: 'OFVa1DV8rOE',
    },
    {
      id: 'teaser',
      label: 'Teaser',
      title: 'How does modern war shape culture?',
      youtubeId: 'XusSQcncjZE',
    },
  ] satisfies EnglishTrailer[],
}

export function getYoutubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`
}

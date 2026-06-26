import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          letterSpacing: '-1px',
        }}
      >
        <span style={{ color: '#ffffff', fontSize: 20, fontWeight: 700, lineHeight: 1 }}>k</span>
        <span style={{ color: '#E8A030', fontSize: 20, fontWeight: 700, lineHeight: 1 }}>_</span>
      </div>
    ),
    { ...size },
  )
}

import { ImageResponse } from 'next/og'

export const dynamic = "force-static"
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Server-compatible icon for favicon generation
function WebsiteIconSvg() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F778BA" />
          <stop offset="50%" stopColor="#A093FF" />
          <stop offset="100%" stopColor="#58A6FF" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 28L4 4L12 14.6667L20 4V28L12 17.3333L4 28Z M22 4H28V11.2L24.4 14L28 16.8V28H22V20.8L25.6 18L22 15.2V4Z"
        fill="url(#logoGradient)"
      />
    </svg>
  );
}

// Image generation
export default function Icon() {
  return new ImageResponse(
    <WebsiteIconSvg />,
    {
      ...size,
    }
  )
}
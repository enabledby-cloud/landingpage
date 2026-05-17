import type { Metadata } from 'next'
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marvyn Zalewski - Engineering Leader & Cloud Strategist',
  description: 'An Engineering Leader & Cloud Strategist transforming technology landscapes. I partner with organizations to build scalable platforms, simplify complex systems, and enable teams to deliver their best work.',
  keywords: 'Engineering Leader, Cloud Strategist, DevOps, FinOps, Platform Engineering, AWS, Cloud Security',
  authors: [{ name: 'Marvyn Zalewski' }],
  creator: 'Marvyn Zalewski',
  metadataBase: new URL('https://enabledby.cloud'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enabledby.cloud',
    title: 'Marvyn Zalewski - Engineering Leader & Cloud Strategist',
    description: 'An Engineering Leader & Cloud Strategist transforming technology landscapes.',
    siteName: 'Marvyn Zalewski Portfolio',
    images: [
      {
        url: 'https://i.imgur.com/3fANW97.jpeg',
        width: 1200,
        height: 630,
        alt: 'Marvyn Zalewski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvyn Zalewski - Engineering Leader & Cloud Strategist',
    description: 'An Engineering Leader & Cloud Strategist transforming technology landscapes.',
    images: ['https://i.imgur.com/3fANW97.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          {children}
      </body>
    </html>
  )
}
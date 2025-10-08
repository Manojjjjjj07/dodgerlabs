import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'DodgerLabs - Engineering Intelligence at Scale',
  description: 'We design, develop, and deploy cutting-edge AI solutions and web applications that transform businesses.',
  keywords: ['AI', 'Web Development', 'Machine Learning', 'Software Development', 'Tech Solutions'],
  authors: [{ name: 'DodgerLabs' }],
  openGraph: {
    title: 'DodgerLabs - Engineering Intelligence at Scale',
    description: 'We design, develop, and deploy cutting-edge AI solutions and web applications.',
    url: 'https://dodgerlabs.com',
    siteName: 'DodgerLabs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DodgerLabs - Engineering Intelligence at Scale',
    description: 'We design, develop, and deploy cutting-edge AI solutions.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}

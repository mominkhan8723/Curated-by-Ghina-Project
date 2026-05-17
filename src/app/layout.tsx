import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curated by Ghina | Luxury Event Styling & Personalized Celebrations',
  description: 'Emotionally invested in every detail. Luxury event styling, personalized gifting, and intimate celebrations crafted with heart in Islamabad, Pakistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
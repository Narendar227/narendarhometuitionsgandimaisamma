import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import {
  BRAND_NAME,
  BUSINESS_NAME,
  CITY,
  LOCATION,
  MAP_LINK,
  PHONE_RAW,
  POSTAL_CODE,
  PRIMARY_AREA,
  REGION,
  SERVICE_AREAS,
  SITE_URL,
} from '@/components/site/site-data'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const TITLE = `Home Tuition in ${PRIMARY_AREA} | ${BUSINESS_NAME}`
const DESCRIPTION = `${BUSINESS_NAME} offers one-to-one home tuition in ${PRIMARY_AREA}, ${CITY} with home tutors for Mathematics, Science, English and more across CBSE, ICSE and State Board.`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Home Tuition in Gandimaisamma',
    'Home Tutors in Gandimaisamma',
    'Best Home Tuition in Gandimaisamma',
    'Private Tutors in Gandimaisamma',
    'Home Tuition Services Gandimaisamma',
    'Mathematics Home Tutor Gandimaisamma',
    'Science Home Tutor Gandimaisamma',
    'CBSE Home Tuition Gandimaisamma',
    'ICSE Home Tuition Gandimaisamma',
    'Home Tutors Near Gandimaisamma',
    BUSINESS_NAME,
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/home-tutor-maths-session.png',
        width: 1024,
        height: 1024,
        alt: `Home tutor teaching a student one-to-one in ${PRIMARY_AREA}, ${CITY}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/home-tutor-maths-session.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#053067',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#business`,
  name: BUSINESS_NAME,
  image: `${SITE_URL}/images/narendar-logo.png`,
  logo: `${SITE_URL}/images/narendar-logo.png`,
  url: SITE_URL,
  telephone: PHONE_RAW,
  slogan: 'Learn Today, Lead Tomorrow',
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: LOCATION,
    addressLocality: PRIMARY_AREA,
    addressRegion: REGION,
    postalCode: POSTAL_CODE,
    addressCountry: 'IN',
  },
  hasMap: MAP_LINK,
  areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'Place', name: `${name}, ${CITY}` })),
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '21:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

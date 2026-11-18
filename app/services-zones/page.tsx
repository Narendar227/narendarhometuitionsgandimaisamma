import { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Areas } from '@/components/site/areas'

export const metadata: Metadata = {
  title: 'Service Zones in Gandimaisamma',
  alternates: { canonical: '/services-zones' },
  description:
    'Home tuition service zones of Narendar Home Tuitions in Gandimaisamma, Hyderabad and genuinely nearby localities such as Dundigal, Bowrampet and Bahadurpally.',
  keywords: [
    'service zones',
    'coverage areas',
    'home tutors near Gandimaisamma',
    'home tuition areas',
    'Narendar Home Tuitions',
  ],
}

export default function ServiceZonesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Zones"
        title="Home tuition coverage around Gandimaisamma"
        description="Gandimaisamma is our primary service location. Our verified home tutors also serve nearby localities, so your child can learn at home."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Service Zones' },
        ]}
      />
      <Areas isHomepage={false} />
    </PageShell>
  )
}

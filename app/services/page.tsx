import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Services } from '@/components/site/services'
import { HowItWorks } from '@/components/site/how-it-works'

export const metadata: Metadata = {
  title: 'Home Tuition Services',
  alternates: { canonical: '/services' },
  description:
    'Home tuition services in Gandimaisamma — private tutors, one-to-one tutoring, board exam preparation and academic improvement for CBSE, ICSE and State Board.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Complete home tutoring solutions"
        description="From everyday homework help to full exam preparation, we offer the right home tuition support in Gandimaisamma for every learning goal."
        breadcrumbItems={[{ label: 'Services' }]}
      />
      <Services />
      <HowItWorks />
    </PageShell>
  )
}

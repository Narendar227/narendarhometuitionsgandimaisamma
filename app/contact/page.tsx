import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { MapSection } from '@/components/site/map-section'

export const metadata: Metadata = {
  title: 'Contact Us',
  alternates: { canonical: '/contact' },
  description:
    'Contact Narendar Home Tuitions Gandimaisamma at HCMC+77 Hyderabad, Telangana. Call or WhatsApp +91 63040 79622 for home tuition in Gandimaisamma.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Contact our Gandimaisamma team"
        description="Reach out and we'll match your child with the perfect tutor. Call, WhatsApp or send us a message."
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      <MapSection />
    </PageShell>
  )
}

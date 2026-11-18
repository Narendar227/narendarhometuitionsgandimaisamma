import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { About } from '@/components/site/about'

export const metadata: Metadata = {
  title: 'About Us',
  alternates: { canonical: '/about' },
  description:
    'Learn about Narendar Home Tuitions Gandimaisamma — a trusted home tuition service in Gandimaisamma, Hyderabad connecting families with experienced, verified home tutors.',
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About Narendar Home Tuitions Gandimaisamma"
        description="Dedicated to helping every student reach their full academic potential with experienced, verified home tutors."
        breadcrumbItems={[{ label: 'About Us' }]}
      />
      <About />
    </PageShell>
  )
}

import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Testimonials } from '@/components/site/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials',
  alternates: { canonical: '/testimonials' },
  description:
    'Feedback from families whose children learn with Narendar Home Tuitions Gandimaisamma.',
}

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="What parents say about us"
        description="Feedback from families whose children learn with Narendar Home Tuitions Gandimaisamma."
        breadcrumbItems={[{ label: 'Testimonials' }]}
      />
      <Testimonials />
    </PageShell>
  )
}

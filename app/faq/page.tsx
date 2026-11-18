import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Faq } from '@/components/site/faq'

export const metadata: Metadata = {
  title: 'FAQ',
  alternates: { canonical: '/faq' },
  description:
    'Frequently asked questions about home tuition in Gandimaisamma — tutors, subjects, boards, nearby areas and how to enquire.',
}

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about our home tuition services in Gandimaisamma."
        breadcrumbItems={[{ label: 'FAQ' }]}
      />
      <Faq />
    </PageShell>
  )
}

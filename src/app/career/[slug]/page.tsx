import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCareerBySlug, CAREER_DATA } from '@/components/Career/careerData'
import { CareerEntry } from '@/components/Career/CareerEntry'

export function generateStaticParams() {
  return CAREER_DATA.map((entry) => ({ slug: entry.slug }))
}

interface CareerDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params
  const career = getCareerBySlug(slug)

  if (!career) {
    notFound()
  }

  return (
    <main className="min-h-screen px-8 py-16 md:px-10 md:py-24">
      <div className="max-w-5xl mx-auto w-full">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity mb-10"
        >
          ← ABOUT으로 돌아가기
        </Link>

        <CareerEntry
          title={career.title}
          period={career.period}
          items={career.items}
        />
      </div>
    </main>
  )
}

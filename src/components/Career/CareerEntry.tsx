import Link from 'next/link'

export interface CareerEntryProps {
  slug?: string
  title: string
  period: string
  items: string[]
}

function CalendarIcon() {
  return (
    <svg
      className="w-4 h-4 text-black shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

export function CareerEntry({ slug, title, period, items }: CareerEntryProps) {
  const titleNode = (
    <span className="text-black font-bold text-base md:text-lg mb-1 block">
      {title}
    </span>
  )

  return (
    <div className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
      {slug ? (
        <Link
          href={`/career/${slug}`}
          className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
        >
          {titleNode}
        </Link>
      ) : (
        titleNode
      )}
      <div className="flex items-center gap-2 text-sm text-black/80 mb-3">
        <CalendarIcon />
        <span>{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-black text-sm md:text-base leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

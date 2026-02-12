import { CareerEntry } from './CareerEntry'
import { CAREER_DATA } from './careerData'

export function CareerSummary() {
  return (
    <div className="mt-16 md:mt-20">
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-black tracking-tight inline-block pb-0.5">
        CAREER SUMMARY
      </h2>

      <div className="flex flex-col gap-6 mt-8">
        {CAREER_DATA.map((entry) => (
          <CareerEntry
            key={entry.slug}
            slug={entry.slug}
            title={entry.title}
            period={entry.period}
            items={entry.items}
          />
        ))}
      </div>
    </div>
  )
}

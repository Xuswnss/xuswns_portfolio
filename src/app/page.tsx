import Link from 'next/link'
import { About } from '@/components/About'

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Home() {
  return (
    <>
      {/* 첫 화면 */}
      <main className="min-h-screen flex flex-col justify-between px-8 py-8 md:px-10">
        <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 justify-between">
          <header className="flex flex-col justify-start pt-[min(4rem,8vh)]">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-2 text-black tracking-tight">
              Portfolio by JiYun Hyun
            </h1>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-normal text-black">
              구현보다 구조를 먼저 고민하는 개발자 현지윤입니다
            </p>
          </header>

          <nav className="flex flex-wrap gap-8 md:gap-10 pb-[min(2rem,6vh)]" aria-label="메인 내비게이션">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-[0.35rem] text-sm font-medium tracking-wider text-black no-underline border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
            >
              {item.label}
              <span className="text-xs leading-none" aria-hidden>↗</span>
            </Link>
          ))}
          </nav>
        </div>
      </main>
          {/* About */}
      <About />
    </>
  )
}

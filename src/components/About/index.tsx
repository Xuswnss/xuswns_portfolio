import { CareerSummary } from './CareerSummary'

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col px-8 py-16 md:px-10 md:py-24 scroll-mt-6"
    >
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-black tracking-tight mb-10 md:mb-12">
        ABOUT
      </h2>

      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 max-w-5xl">
        {/* 왼쪽: 자기소개 */}
        <div className="flex-1 space-y-4 text-black leading-relaxed">
          <p>
            안녕하세요, 구조를 먼저 설계하는 개발자 <strong>현지윤</strong>입니다.
          </p>
          <p>
            저는 기능 구현에 앞서 전체 흐름과 아키텍처를 고민하며, 팀원 모두가 이해하고 확장할 수 있는 코드를 작성하는 것을 중요하게 생각합니다. 다양한 프로젝트를 진행하며 단순히 동작하는 코드가 아닌, 유지보수와 협업을 고려한 구조 설계 역량을 길러왔습니다. 혼자 잘 아는 코드보다 함께 쓰기 좋은 결과물을 지향하며, 가독성과 확장성을 기반으로 안정적인 서비스를 만드는 개발자입니다.
          </p>
        </div>

        {/* 오른쪽: 개인 정보 */}
        <ul className="flex flex-col gap-3 md:min-w-[240px] mt-8 md:mt-0">
          <li className="flex flex-col">
            <span className="font-bold text-black">Name</span>
            <span className="text-black">현지윤</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-black">Birth</span>
            <span className="text-black">2004.01.05</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-black">Phone</span>
            <a href="tel:010-3968-1452" className="text-black hover:opacity-70">
              010-3968-1452
            </a>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-black">Email</span>
            <a href="mailto:cooconut0226@gmail.com" className="text-black hover:opacity-70">
              cooconut0226@gmail.com
            </a>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-black">Github</span>
            <a
              href="https://github.com/Xuswnss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
            >
              https://github.com/Xuswnss
            </a>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-black">Insta</span>
            <a
              href="https://instagram.com/ruby_dev_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
            >
              @ruby_dev_
            </a>
          </li>
        </ul>
      </div>

      <CareerSummary />
    </section>
  )
}

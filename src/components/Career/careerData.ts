export interface CareerItem {
  slug: string
  title: string
  period: string
  items: string[]
}

export const CAREER_DATA: CareerItem[] = [
  {
    slug: 'blavers-mvp-2026',
    title: 'Hackathon | 2026 블레이버스 MVP 개발 해커톤',
    period: '2026년 02월 01일 ~ 2026년 02월 10일',
    items: [
      '멘토/멘티 관리 서비스 설스터디 프론트개발',
      'Auth Guard 개발',
      '멘토 페이지 개발',
    ],
  },
  {
    slug: 'tetrapod-hackathon-2026',
    title: 'Hackathon | TETRAPOD 해커톤',
    period: '2026년 1월- 2026년 3월',
    items: [
      'TETRAPOD 해커톤 백엔드 개발',
      'UniQdata 헬스케어 블록체인 서비스 백엔드 개발',
    ],
  },
  {
    slug: 'medilux-healthcare-2025',
    title: 'Hackathon | Medilux 헬스케어 해커톤',
    period: '2025년 11월- 2026년 1월',
    items: [
      'Medilux 헬스케어 해커톤 풀스택 개발',
      'Anipharm 풀스택 개발',
      '의/약대 기획자와 실제 개발 협업 경험',
      'OpenAI API 와 동물약 데이터를 통한 챗봇 서비스 개발',
      '전국 동물약국 데이터와 Naver Map API를 통한 동물약국 찾기 서비스 개발',
      '데이터베이스 설계 및 최적화 경험',
    ],
  },
  {
    slug: 'carelog-2025',
    title: '미래내일 일 경험 | (주) 케어로그',
    period: '2025년 9월- 2025년 11월',
    items: [
      '해외이주민을 위한 한국어 교육서비스 프론트 개발 및 배포',
      'AI 한국어 튜터 대화서비스 프론트 개발',
      '프론트에서 한국어 번역 api를 통한 번역 기능 구현',
      '학습 대시보드 프론트 구현',
    ],
  },
]

export function getCareerBySlug(slug: string): CareerItem | undefined {
  return CAREER_DATA.find((item) => item.slug === slug)
}

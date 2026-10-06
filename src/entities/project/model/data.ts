import type { Project } from './types';

// hanwha-motiev
import HanwhaMainImage from '../assets/hanwha/hanwha_main.png';

// hubbing
import HubbingMainImage from '../assets/hubbing/hubbing_main.png';

// school-trip
import SchoolTripMainImage from '../assets/schooltrip/schooltrip_main.png';

// alba-edu
import AlbaEduMainImage from '../assets/alba-edu/alba-edu_main.png';

// shortz
import ShortzMainImage from '../assets/shortz/shortz_main.gif';

// webtoonrun
import WebtoonRunMainImage from '../assets/webtoon-run/webtoonrun_main.gif';

export const projectList: Project[] = [
  {
    id: 1,
    slug: 'shortz',
    title: '재담쇼츠',
    description: '웹툰 기반 숏폼 영상 플랫폼 웹 / 앱 개발',
    period: '2024.01 ~ 2026.06',
    tech: 'react, nextjs, typescript, react-native, expo',
    type: 'mobile',
    detail: {
      stack: ['React', 'Nextjs', 'Typescript', 'React-native', 'Expo'],
      mainMovie: ShortzMainImage,
    },
  },
  {
    id: 1,
    slug: 'webtoon-run',
    title: '웹툰런',
    description: '웹툰 공모전 오픈 플랫폼',
    period: '2025.6 ~ 2026.06',
    tech: 'react, nextjs, typescript, tanstack-query',
    type: 'mobile',
    detail: {
      stack: ['React', 'Nextjs', 'Typescript', 'Tanstack-query'],
      mainMovie: WebtoonRunMainImage,
    },
  },
  {
    id: 3,
    slug: 'hanwha-motiev',
    title: 'hanwha-motiev',
    description: '전기차 충전 한화모티브 앱 React Native 개발',
    period: '2023.01 ~ 2023.04',
    tech: 'react-native, typescript, recoil, react-query, styled-component',
    type: 'mobile',
    detail: {
      stack: [
        'React-native',
        'Typescript',
        'Styled-component',
        'Recoil',
        'React-query',
      ],
      mainImages: HanwhaMainImage,
    },
  },
  {
    id: 4,
    slug: 'school-trip',
    title: 'school-trip',
    description: '교육여행 신청 및 견적 플랫폼 웹 개발',
    period: '2022.10 ~ 2022.12',
    tech: 'react, typescript, recoil, react-query, styled-component',
    type: 'web',
    detail: {
      stack: [
        'React',
        'Typescript',
        'Styled-component',
        'Recoil',
        'React-query',
      ],
      mainImages: SchoolTripMainImage,
    },
  },
  {
    id: 5,
    slug: 'hubbing',
    title: 'hubbing',
    description: '아르바이트 / 사장님 알바 및 급여관리 앱 개발',
    period: '2022.09 ~ 2022.10',
    tech: 'react-native, typescript, recoil, react-query, styled-component',
    type: 'mobile',
    detail: {
      stack: [
        'React-native',
        'Typescript',
        'Styled-component',
        'Recoil',
        'Axios',
      ],
      mainImages: HubbingMainImage,
    },
  },
  {
    id: 6,
    slug: 'alba-edu',
    title: 'alba-edu',
    description: '학생,학부모 / 선생 과외 매칭 플랫폼 웹 개발',
    period: '2022.06 ~ 2022.09',
    tech: 'react, javascript, recoil, axios, styled-component',
    type: 'web',
    detail: {
      stack: ['React', 'Javascript', 'Styled-component', 'Recoil', 'Axios'],
      mainImages: AlbaEduMainImage,
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projectList.find((project) => project.slug === slug);

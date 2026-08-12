# 김세찬 포트폴리오 (Next.js)

기존 Vite + React 포트폴리오를 Next.js 14(App Router) 기반으로 마이그레이션한 버전입니다.

## 스택

- **Next.js 14** (App Router, SSR/SSG, `generateMetadata`/`sitemap`/`robots`로 SEO 대응)
- **TypeScript**
- **FSD(Feature-Sliced Design)** 아키텍처 — `app / views / widgets / entities / shared`
- **styled-components** (App Router 공식 SSR 레지스트리 적용, 기존 브랜드 컬러 계승)
- **framer-motion** (스크롤 리빌, 히어로 스태거 애니메이션)

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

```bash
npm run build   # 프로덕션 빌드 (타입 에러 여기서 함께 확인됩니다)
npm run start   # 빌드 결과 실행
```

## 폴더 구조 (FSD)

```
src/
  app/                     # Next.js 라우팅 (얇게 유지, 실제 화면은 views에 위임)
    page.tsx               # "/"
    about/page.tsx         # "/about" (기존 MyPage)
    projects/[slug]/page.tsx  # "/projects/hanwha-motiev" 등 프로젝트 상세
    sitemap.ts / robots.ts # SEO
  views/                   # FSD의 "pages" 레이어 (Next 라우팅과 이름 충돌 방지를 위해 views로 명명)
    home, about, project-detail
  widgets/                 # 여러 entity/feature를 조합한 큰 UI 블록
    site-header, site-footer, hero, project-detail(히어로/컨셉/진행 섹션)
  entities/
    project/                # 프로젝트 도메인 모델 + 카드 UI + 실제 프로젝트 데이터/이미지
  shared/
    ui/                    # Button, Container, SectionHeading, RevealOnScroll 등 공용 UI
    lib/                   # StyledComponentsRegistry(SSR), Providers, motion variants
    styles/                # theme, GlobalStyle
    config/                # site.ts (이름/연락처/링크 등 사이트 메타 정보)
```

## 기존 버전 대비 달라진 점

- `react-router-dom` + `location.state`로 프로젝트 데이터를 전달하던 방식 → 실제 URL(`/projects/[slug]`)을 갖는 정적 라우트로 전환. 새로고침해도 데이터가 유지되고, 각 프로젝트가 검색엔진에 개별 페이지로 노출됩니다.
- 페이지별 커스텀 keyframes 애니메이션 → framer-motion 기반 스크롤 리빌/스태거 애니메이션으로 통일.
- 다크 테마는 기존 브랜드 컬러(`primary: #fff1b9`, 배경 `#272625` 계열)를 계승하되, 카드/그라디언트 시스템을 더해 톤을 다듬었습니다. 색상 값은 `src/shared/styles/theme.ts`에서 한 곳에 관리됩니다.
- 프로젝트 이미지는 모두 정적 import(`next/image`)로 옮겨와 자동 최적화(WebP/AVIF, lazy loading)가 적용됩니다.

## 설치 위치 안내

기존 Vite 프로젝트(`portfolio/`)를 덮어쓰지 않기 위해, 이 프로젝트는 `portfolio/next-app/` 하위 폴더에 통째로 새로 만들어졌습니다. 즉:

```
portfolio/            ← 기존 Vite 프로젝트 (그대로 남아있음)
portfolio/next-app/   ← 지금 이 새 Next.js 프로젝트 (여기서 npm install/dev 실행)
```

`next-app` 폴더 안에서 바로 `npm install && npm run dev`로 실행해보시면 됩니다. 확인 후 마음에 드시면:

1. `portfolio/next-app` 안의 내용을 `portfolio/` 루트로 옮기고
2. 아래의 기존 Vite 전용 파일들을 삭제하면 됩니다 (git으로 관리되니 되돌리기도 쉽습니다):
   - `vite.config.ts`, `index.html`, `tsconfig.node.json`
   - 기존 `src/pages`, `src/data`, `src/theme`, `src/components/GlobalStyle.tsx`, `src/hooks`, `src/types`, `src/App.tsx`, `src/main.tsx`, `src/vite-env.d.ts` (전부 새 FSD 구조로 옮겨졌습니다)
   - `src/assets/images` (모든 이미지는 `src/entities/project/assets`로 복사되었습니다)

바로 옮기지 않고 `next-app` 폴더에서 그대로 개발을 이어가셔도 무방합니다.

## 참고 사항

이 세션에서는 npm 레지스트리 접근이 막혀 있어 `npm install` / `npm run build`를 직접 실행해 검증하지 못했습니다. 대신 모든 파일을 esbuild로 구문 검사하고, 모든 import 경로(별칭 포함)를 실제 파일과 대조해 확인했습니다. 로컬에서 설치 후 빌드 에러가 나면 에러 메시지를 공유해 주세요, 바로 고쳐드릴게요.

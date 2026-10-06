/**
 * 디자인 토큰
 * 기존 포트폴리오의 브랜드 컬러(--primary: #fff1b9 / --bg: #272625)를 계승하면서
 * 새 목업의 다크모드 카드/그라디언트 시스템을 얹었습니다.
 * DevTools > Elements > Computed 에서 값을 그대로 확인할 수 있습니다.
 */

export const colors = {
  bg: '#0d0c0a',
  bgElevated: '#161513',
  bgCard: '#1c1a17',
  border: '#2c2924',
  borderHover: '#42392c',

  textPrimary: '#f5f1e8',
  textSecondary: '#a39c8e',
  textMuted: '#6b6459',

  primary: '#fff1b9',
  accent: '#ff8a5b',
  gradient: 'linear-gradient(135deg, #fff1b9 0%, #ff8a5b 100%)',

  lightGray: '#8b8687',
  gray: '#3f4040',
};

export const fonts = {
  sans: "'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', ui-monospace, monospace",
  condensed: "'Roboto Condensed', sans-serif",
};

export const radii = {
  sm: '8px',
  md: '14px',
  lg: '24px',
};

export const space = {
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '40px',
  6: '64px',
  7: '96px',
  8: '140px',
};

export const container = '1120px';

const theme = {
  color: colors,
  font: fonts,
  radius: radii,
  space,
  container,
};

export type AppTheme = typeof theme;

export default theme;

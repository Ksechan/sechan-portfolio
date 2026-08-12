'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * Next.js App Router + styled-components SSR 공식 레시피.
 * 서버에서 렌더링된 스타일을 <head>에 주입해 FOUC(스타일 깜빡임) 없이
 * SSR 결과물을 그대로 사용할 수 있게 해줍니다.
 * https://styled-components.com/docs/advanced#nextjs
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

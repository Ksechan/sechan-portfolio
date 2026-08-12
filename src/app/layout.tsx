import type { Metadata } from 'next';
import Providers from '@/shared/lib/Providers';
import { siteConfig } from '@/shared/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['프론트엔드', '개발자', 'React', 'Next.js', 'TypeScript', siteConfig.name],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

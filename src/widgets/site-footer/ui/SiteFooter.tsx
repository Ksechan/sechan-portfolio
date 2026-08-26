'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Button from '@/shared/ui/Button';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { siteConfig } from '@/shared/config/site';

const Section = styled.section`
  padding: ${({ theme }) => theme.space[7]} 0;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space[7]} ${({ theme }) => theme.space[6]};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 138, 91, 0.22), transparent 70%);
  }
`;

const Title = styled.h2`
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.space[3]};
  position: relative;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  max-width: 480px;
  margin: 0 auto ${({ theme }) => theme.space[5]};
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]};
  flex-wrap: wrap;
  position: relative;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[5]};
  position: relative;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.textSecondary};

  a:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const Foot = styled.footer`
  padding: ${({ theme }) => theme.space[5]} 0 ${({ theme }) => theme.space[6]};
  text-align: center;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 13px;
  font-family: ${({ theme }) => theme.font.mono};
`;

interface SiteFooterProps {
  title?: string;
  subtitle?: string;
}

export default function SiteFooter({
  title = '함께 일해요 🚀',
  subtitle = '새로운 기회, 협업 제안, 혹은 그냥 인사도 환영합니다. 편하게 연락 주세요.',
}: SiteFooterProps) {
  return (
    <>
      <Section id="contact">
        <Container>
          <RevealOnScroll>
            <Card>
              <Title>{title}</Title>
              <Sub>{subtitle}</Sub>
              <Actions>
                <Button href={`mailto:${siteConfig.email}`} $variant="primary">
                  이메일 보내기
                </Button>
                <Button href="#about" $variant="ghost">
                  소개 보기
                </Button>
              </Actions>
              <SocialRow>
                <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub
                </Link>
                <span>{siteConfig.phone}</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </SocialRow>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>
      <Foot>
        © {new Date().getFullYear()} {siteConfig.name}. Built with curiosity.
      </Foot>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import Container from '@/shared/ui/Container';
import { siteConfig } from '@/shared/config/site';
import { fadeInUp, staggerContainer } from '@/shared/lib/motion';

const Section = styled.section`
  padding: calc(${({ theme }) => theme.space[8]} + 60px) 0
    ${({ theme }) => theme.space[6]};
  position: relative;
`;

const Glow = styled.div`
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(255, 138, 91, 0.16) 0%,
    transparent 65%
  );
  pointer-events: none;
  z-index: -1;
`;

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.accent};
  background: rgba(255, 138, 91, 0.08);
  border: 1px solid rgba(255, 138, 91, 0.28);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: ${({ theme }) => theme.space[4]};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8bd17c;
  }
`;

const gradientFlow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  max-width: 780px;

  span {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.color.primary} 0%,
      ${({ theme }) => theme.color.accent} 50%,
      ${({ theme }) => theme.color.primary} 100%
    );
    background-size: 200% auto;
    background-position: 0% center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${gradientFlow} 3s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const Sub = styled(motion.p)`
  font-size: 19px;
  color: ${({ theme }) => theme.color.textSecondary};
  max-width: 560px;
  white-space: pre-line;
`;

const IntroWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[2]};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space[3]};

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;

const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IntroItem = styled.li`
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
`;

export default function Hero() {
  return (
    <Section id="about">
      <Glow />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Eyebrow variants={fadeInUp}>Open to new opportunities</Eyebrow>
          <Title variants={fadeInUp}>
            안녕하세요, {siteConfig.role} <span>{siteConfig.name}</span>입니다.
          </Title>

          <IntroWrap>
            <p>* 저는</p>
            <IntroList>
              <IntroItem>변화를 추구하는</IntroItem>
              <IntroItem>사람을 좋아하는</IntroItem>
              <IntroItem>개발문화를 고민하는</IntroItem>
            </IntroList>
          </IntroWrap>
          <Sub variants={fadeInUp}>{siteConfig.description}</Sub>
        </motion.div>
      </Container>
    </Section>
  );
}

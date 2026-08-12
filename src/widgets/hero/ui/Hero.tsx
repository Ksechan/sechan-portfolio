'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import Button from '@/shared/ui/Button';
import { siteConfig } from '@/shared/config/site';
import { fadeInUp, staggerContainer } from '@/shared/lib/motion';

const Section = styled.section`
  padding: calc(${({ theme }) => theme.space[8]} + 60px) 0 ${({ theme }) => theme.space[7]};
  position: relative;
`;

const Glow = styled.div`
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 138, 91, 0.16) 0%, transparent 65%);
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

const Title = styled(motion.h1)`
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  max-width: 780px;

  span {
    background: ${({ theme }) => theme.color.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Sub = styled(motion.p)`
  margin-top: ${({ theme }) => theme.space[4]};
  font-size: 19px;
  color: ${({ theme }) => theme.color.textSecondary};
  max-width: 560px;
  white-space: pre-line;
`;

const Actions = styled(motion.div)`
  margin-top: ${({ theme }) => theme.space[5]};
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  flex-wrap: wrap;
`;

export default function Hero() {
  return (
    <Section>
      <Glow />
      <Container>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Eyebrow variants={fadeInUp}>Open to new opportunities</Eyebrow>
          <Title variants={fadeInUp}>
            안녕하세요, {siteConfig.role} <span>{siteConfig.name}</span>입니다.
          </Title>
          <Sub variants={fadeInUp}>
            {`변화를 추구하는 사람을 좋아하는 개발문화를 고민하는 엔지니어입니다.\n디자이너와 소통하며 문제를 찾고 해결하는 과정을 즐깁니다.`}
          </Sub>
          <Actions variants={fadeInUp}>
            <Button href="#projects" $variant="primary">
              프로젝트 보기 →
            </Button>
            <Button href="#about" $variant="ghost">
              소개 보기
            </Button>
          </Actions>
        </motion.div>
      </Container>
    </Section>
  );
}

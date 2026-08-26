'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import type { ProjectProgressStep } from '@/entities/project/model/types';

const Section = styled.section`
  padding: ${({ theme }) => theme.space[6]} 0;

  ${Container} {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: ${({ theme }) => theme.space[6]};
    align-items: center;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }
`;

const TextBlock = styled.div<{ $order: number }>`
  order: ${({ $order }) => $order};

  @media (max-width: 860px) {
    order: 0;
  }
`;

const ImageBlock = styled.div<{ $order: number }>`
  order: ${({ $order }) => $order};

  @media (max-width: 860px) {
    order: 1;
  }
`;

const StepNumber = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 72px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.border};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.space[3]};

  @media (max-width: 860px) {
    font-size: 48px;
  }
`;

const StepTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
  white-space: pre-line;
`;

const StepDesc = styled.p`
  font-size: 15px;
  line-height: 1.9;
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: pre-line;
  max-width: 480px;
`;

const ImageGroup = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: ${({ $count }) => ($count > 1 ? '1fr 1fr' : '1fr')};
  gap: ${({ theme }) => theme.space[3]};
  align-items: start;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.bgElevated};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

interface ProjectProgressSectionProps {
  step: ProjectProgressStep;
  index: number;
  projectTitle: string;
}

export default function ProjectProgressSection({
  step,
  index,
  projectTitle,
}: ProjectProgressSectionProps) {
  const reverse = index % 2 === 1;

  return (
    <Section>
      <Container>
        <TextBlock $order={reverse ? 1 : 0}>
          <StepNumber>0{index + 1}</StepNumber>
          <StepTitle>{step.title}</StepTitle>
          <StepDesc>{step.description}</StepDesc>
        </TextBlock>
        <ImageBlock $order={reverse ? 0 : 1}>
          <RevealOnScroll>
            <ImageGroup $count={step.images.length}>
              {step.images.map((img, i) => (
                <ImgWrap key={i}>
                  <Image
                    src={img}
                    alt={`${projectTitle} ${step.title} 화면 ${i + 1}`}
                    sizes="(max-width: 860px) 100vw, 45vw"
                  />
                </ImgWrap>
              ))}
            </ImageGroup>
          </RevealOnScroll>
        </ImageBlock>
      </Container>
    </Section>
  );
}

'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import TechTag from '@/entities/project/ui/TechTag';
import type { Project } from '@/entities/project/model/types';

const Section = styled.section`
  padding: ${({ theme }) => theme.space[6]} 0;
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.textMuted};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const Title = styled.h1`
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
  text-transform: capitalize;
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.textSecondary};
  max-width: 640px;
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const Period = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.textMuted};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const Gallery = styled.div<{ $mobile: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  justify-content: ${({ $mobile }) => ($mobile ? 'flex-start' : 'center')};
`;

const ImgWrap = styled.div<{ $mobile: boolean }>`
  position: relative;
  width: 100%;
  max-width: ${({ $mobile }) => ($mobile ? '320px' : '100%')};
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

export default function ProjectHeroSection({ project }: { project: Project }) {
  const images = project.detail?.mainImages ?? [];

  return (
    <Section>
      <Container>
        <Eyebrow>{project.type === 'mobile' ? 'MOBILE APP' : 'WEB SERVICE'}</Eyebrow>
        <Title>{project.title}</Title>
        <Desc>{project.description02 ?? project.description}</Desc>
        {project.period && <Period>{project.period}</Period>}
        <Tags>
          {project.detail?.stack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </Tags>
        {images.length > 0 && (
          <RevealOnScroll>
            <Gallery $mobile={project.type === 'mobile'}>
              {images.map((img, i) => (
                <ImgWrap key={i} $mobile={project.type === 'mobile'}>
                  <Image
                    src={img}
                    alt={`${project.title} 메인 화면 ${i + 1}`}
                    sizes={project.type === 'mobile' ? '320px' : '(max-width: 1120px) 100vw, 1120px'}
                    priority={i === 0}
                  />
                </ImgWrap>
              ))}
            </Gallery>
          </RevealOnScroll>
        )}
      </Container>
    </Section>
  );
}

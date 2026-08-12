'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import type { Project } from '@/entities/project/model/types';

const Section = styled.section`
  padding: ${({ theme }) => theme.space[7]} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[6]};
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: pre-line;
`;

const ImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
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

export default function ProjectConceptSection({ project }: { project: Project }) {
  const descs = project.detail?.conceptDescriptions.filter(Boolean) ?? [];
  const images = project.detail?.conceptImages ?? [];

  return (
    <Section>
      <Container>
        <SectionTag>concept</SectionTag>
        <SectionTitle>Project Concept</SectionTitle>
        <Grid>
          <Descriptions>
            {descs.map((d, i) => (
              <Desc key={i}>{d}</Desc>
            ))}
          </Descriptions>
          {images.length > 0 && (
            <RevealOnScroll>
              <ImageStack>
                {images.map((img, i) => (
                  <ImgWrap key={i}>
                    <Image
                      src={img}
                      alt={`${project.title} 컨셉 이미지 ${i + 1}`}
                      sizes="(max-width: 860px) 100vw, 50vw"
                    />
                  </ImgWrap>
                ))}
              </ImageStack>
            </RevealOnScroll>
          )}
        </Grid>
      </Container>
    </Section>
  );
}

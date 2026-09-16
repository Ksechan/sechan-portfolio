'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import { careerList } from '@/entities/career/model/data';
import { siteConfig } from '@/shared/config/site';

const Section = styled.section`
  padding: calc(${({ theme }) => theme.space[7]} + 60px) 0
    ${({ theme }) => theme.space[6]};
`;

const IntroWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[2]};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space[5]};

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

const Name = styled.h1`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const DescText = styled.p`
  font-size: 16px;
  line-height: 2;
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: pre-line;
  max-width: 640px;
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const InfoTable = styled.dl`
  display: grid;
  grid-template-columns: 120px 1fr;
  row-gap: ${({ theme }) => theme.space[3]};
  max-width: 480px;
  margin-bottom: ${({ theme }) => theme.space[7]};

  dt {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    color: ${({ theme }) => theme.color.textMuted};
    padding-top: 4px;
  }

  dd {
    font-size: 15px;
    color: ${({ theme }) => theme.color.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    padding-bottom: ${({ theme }) => theme.space[2]};
  }

  a:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[4]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  transition: padding-left 0.2s ease;

  &:hover {
    padding-left: 8px;
  }

  &:hover h4 {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.2s ease;
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ExperienceRole = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.textMuted};
`;

const ExperienceMeta = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.textMuted};
  text-align: right;

  span {
    display: block;
  }
`;

export default function CareerView() {
  return (
    <>
      <Section id="career">
        <Container>
          <SectionTag>career</SectionTag>
          <SectionTitle>Career</SectionTitle>
          <RevealOnScroll>
            <ExperienceList>
              {careerList.map((career) => (
                <ExperienceItem key={career.id} href="#projects">
                  <div>
                    <ExperienceTitle>{career.title}</ExperienceTitle>
                    <ExperienceRole>{career.role}</ExperienceRole>
                  </div>
                  <ExperienceMeta>
                    <span>{career.period}</span>
                    <span>{career.stack.join(', ')}</span>
                  </ExperienceMeta>
                </ExperienceItem>
              ))}
            </ExperienceList>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}

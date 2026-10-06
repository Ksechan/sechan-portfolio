'use client';

import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import { careerList } from '@/entities/career/model/data';

const Section = styled.section`
  padding: calc(${({ theme }) => theme.space[7]} + 60px) 0
    ${({ theme }) => theme.space[6]};
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
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

const ExperienceItemRowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[4]} 0;
`;

const ExperienceItemDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.textSecondary};
  line-height: 1.5;
  white-space: pre-line;
`;

const ExperienceTitleWrap = styled.div`
  flex-shrink: 0;
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
                <ExperienceItem key={career.id}>
                  <ExperienceItemRowWrap>
                    <ExperienceTitleWrap>
                      <ExperienceTitle>{career.title}</ExperienceTitle>
                      <ExperienceRole>{career.role}</ExperienceRole>
                    </ExperienceTitleWrap>
                    <ExperienceMeta>
                      <span>{career.period}</span>
                      <span>{career.stack.join(', ')}</span>
                    </ExperienceMeta>
                  </ExperienceItemRowWrap>
                  <div>
                    <ExperienceItemDescription>
                      {career.description}
                    </ExperienceItemDescription>
                  </div>
                </ExperienceItem>
              ))}
            </ExperienceList>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}

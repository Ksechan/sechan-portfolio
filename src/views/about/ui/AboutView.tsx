'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import { projectList } from '@/entities/project/model/data';
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

export default function AboutView() {
  return (
    <>
      <Section id="about">
        <Container>
          <IntroWrap>
            <p>* 저는</p>
            <IntroList>
              <IntroItem>변화를 추구하는</IntroItem>
              <IntroItem>사람을 좋아하는</IntroItem>
              <IntroItem>개발문화를 고민하는</IntroItem>
            </IntroList>
            <p>엔지니어입니다.</p>
          </IntroWrap>

          <Name>{siteConfig.name}</Name>

          <DescText>
            {`안녕하세요. 2년차 프론트엔드 개발자 김세찬입니다.\n스타트업 '인베스티'에서 약 1년 4개월간 frontend-manager로 근무하였습니다.\n주로 디자이너와 소통하며 문제를 찾고 해결하려고 노력하였으며, 효율적인 협업을 위한 개발역량을 쌓아왔습니다.\n\n아직은 많이 부족하다고 생각하여 다양한 컨텐츠에서 개발 관련 정보 및 강의 시청을 하고 있으며,\n많은 동료들과 함께 성장할 수 있는 좋은 경험을 쌓고 싶습니다.`}
          </DescText>

          <InfoTable>
            <dt>GitHub</dt>
            <dd>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                {siteConfig.githubHandle}
              </a>
            </dd>
            <dt>Contact</dt>
            <dd>{siteConfig.phone}</dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </dd>
          </InfoTable>

          <SectionTag>experience</SectionTag>
          <SectionTitle>Experiences</SectionTitle>
          <RevealOnScroll>
            <ExperienceList>
              {projectList.map((project) => (
                <ExperienceItem key={project.id} href="#projects">
                  <div>
                    <ExperienceTitle>{project.title}</ExperienceTitle>
                  </div>
                  <ExperienceMeta>
                    <span>{project.period}</span>
                    <span>{project.tech}</span>
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

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import RevealOnScroll from '@/shared/ui/RevealOnScroll';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import SiteHeader from '@/widgets/site-header/ui/SiteHeader';
import SiteFooter from '@/widgets/site-footer/ui/SiteFooter';
import Hero from '@/widgets/hero/ui/Hero';
import ProjectSlider from '@/widgets/project-slider/ui/ProjectSlider';
import { getProjectBySlug, projectList } from '@/entities/project/model/data';
import CareerView from '@/views/career/ui/CareerView';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.space[7]} 0;
`;

export default function HomeView() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <CareerView />
      <ProjectsSection id="projects">
        <Container>
          <SectionTag>projects</SectionTag>
          <SectionTitle>주요 프로젝트</SectionTitle>
          <RevealOnScroll>
            <ProjectSlider projects={projectList} />
          </RevealOnScroll>
        </Container>
      </ProjectsSection>
      <SiteFooter />
    </>
  );
}

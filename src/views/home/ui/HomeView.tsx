'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import { SectionTag, SectionTitle } from '@/shared/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/shared/lib/motion';
import SiteHeader from '@/widgets/site-header/ui/SiteHeader';
import SiteFooter from '@/widgets/site-footer/ui/SiteFooter';
import Hero from '@/widgets/hero/ui/Hero';
import ProjectCard from '@/entities/project/ui/ProjectCard';
import { projectList } from '@/entities/project/model/data';
import CareerView from '@/views/career/ui/CareerView';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.space[7]} 0;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
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
          <Grid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {projectList.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </Grid>
        </Container>
      </ProjectsSection>
      <SiteFooter />
    </>
  );
}

'use client';

import SiteHeader from '@/widgets/site-header/ui/SiteHeader';
import SiteFooter from '@/widgets/site-footer/ui/SiteFooter';
import ProjectHeroSection from '@/widgets/project-detail/ui/ProjectHeroSection';
import ProjectConceptSection from '@/widgets/project-detail/ui/ProjectConceptSection';
import ProjectProgressSection from '@/widgets/project-detail/ui/ProjectProgressSection';
import type { Project } from '@/entities/project/model/types';

export default function ProjectDetailView({ project }: { project: Project }) {
  return (
    <>
      <SiteHeader />
      <ProjectHeroSection project={project} />
      <ProjectConceptSection project={project} />
      {project.detail?.progress.map((step, i) => (
        <ProjectProgressSection
          key={step.title}
          step={step}
          index={i}
          projectTitle={project.title}
        />
      ))}
      <SiteFooter
        title="THANK YOU FOR VIEWING"
        subtitle={`${project.title} 프로젝트를 봐주셔서 감사합니다. 더 궁금한 점이 있다면 편하게 연락 주세요.`}
      />
    </>
  );
}

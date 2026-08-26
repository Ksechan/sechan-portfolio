'use client';

import styled from 'styled-components';
import Container from '@/shared/ui/Container';
import ProjectHeroSection from '@/widgets/project-detail/ui/ProjectHeroSection';
import ProjectConceptSection from '@/widgets/project-detail/ui/ProjectConceptSection';
import ProjectProgressSection from '@/widgets/project-detail/ui/ProjectProgressSection';
import type { Project } from '@/entities/project/model/types';

const Panel = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.border};
  margin-top: ${({ theme }) => theme.space[5]};
`;

const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.space[4]};
`;

const CloseButton = styled.button`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.textSecondary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.borderHover};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 8px 16px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.textPrimary};
  }
`;

interface ProjectDetailPanelProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  return (
    <Panel>
      <Container>
        <CloseRow>
          <CloseButton type="button" onClick={onClose}>
            ✕ 접기
          </CloseButton>
        </CloseRow>
      </Container>
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
    </Panel>
  );
}

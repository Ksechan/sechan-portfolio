'use client';

import Image from 'next/image';
import styled from 'styled-components';
import type { Project } from '../model/types';
import TechTag from './TechTag';

const Card = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.color.accent : theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  padding-top: ${({ theme }) => theme.space[5]};
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
  }
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.color.bgElevated};

  img {
    object-fit: contain;
  }
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  flex: 1;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const Desc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.textSecondary};
  flex: 1;
`;

const Period = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.textMuted};
`;

const Tags = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.space[1]};
`;

interface ProjectCardProps {
  project: Project;
  active?: boolean;
}

export default function ProjectCard({
  project,
  active = false,
}: ProjectCardProps) {
  const thumb = project.detail?.mainImages;
  const mainMovie = project.detail?.mainMovie;

  return (
    <Card type="button" $active={active}>
      {thumb && (
        <Thumb>
          <Image
            src={thumb}
            alt={`${project.title} 대표 이미지`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Thumb>
      )}
      {mainMovie && (
        <Thumb>
          <Image
            src={mainMovie}
            alt={`${project.title} 대표 이미지`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Thumb>
      )}
      <Body>
        <Title>{project.title}</Title>
        <Desc>{project.description}</Desc>
        {project.period && <Period>{project.period}</Period>}
        <Tags>
          {project.detail?.stack.slice(0, 4).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </Tags>
      </Body>
    </Card>
  );
}

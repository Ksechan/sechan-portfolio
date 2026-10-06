'use client';

import Image from 'next/image';
import styled from 'styled-components';
import type { Project } from '../model/types';
import TechTag from './TechTag';

const Card = styled.div<{ $active: boolean }>`
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
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${({ theme }) => theme.space[5]};
  padding: 0 ${({ theme }) => theme.space[3]};
`;

const LinkIconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.textSecondary};
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.bgElevated};
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
    <Card $active={active}>
      <TopBar>
        {project.link && (
          <LinkIconButton
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} 링크 새 창에서 열기`}
            onClick={(event) => event.stopPropagation()}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </LinkIconButton>
        )}
      </TopBar>
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

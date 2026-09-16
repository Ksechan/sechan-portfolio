'use client';

import { useRef, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '@/entities/project/ui/ProjectCard';
import type { Project } from '@/entities/project/model/types';

const Wrap = styled.div`
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 calc((100% - ${({ theme }) => theme.space[4]} * 2) / 3);
  scroll-snap-align: start;

  @media (max-width: 900px) {
    flex-basis: calc((100% - ${({ theme }) => theme.space[4]}) / 2);
  }

  @media (max-width: 640px) {
    flex-basis: 82%;
  }
`;

const ArrowButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.borderHover};
  background: ${({ theme }) => theme.color.bgElevated};
  color: ${({ theme }) => theme.color.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
  z-index: 1;

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: rgba(255, 138, 91, 0.08);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const PrevButton = styled(ArrowButton)`
  left: -22px;
`;

const NextButton = styled(ArrowButton)`
  right: -22px;
`;

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    setCurrentIndex(direction);
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <Wrap>
      <PrevButton
        type="button"
        aria-label="이전 프로젝트"
        onClick={() => scrollByPage(-1)}
        disabled={currentIndex === -1}
      >
        ←
      </PrevButton>
      <Track ref={trackRef}>
        {projects.map((project) => (
          <Slide key={project.id}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Track>
      <NextButton
        type="button"
        aria-label="다음 프로젝트"
        onClick={() => scrollByPage(1)}
        disabled={currentIndex === 1}
      >
        →
      </NextButton>
    </Wrap>
  );
}

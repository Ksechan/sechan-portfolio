import type { StaticImageData } from 'next/image';

export type ProjectType = 'web' | 'mobile';

export interface ProjectProgressStep {
  title: string;
  description: string;
  images: StaticImageData[];
}

export interface ProjectDetail {
  stack: string[];
  mainImages: StaticImageData[];
  conceptDescriptions: string[];
  conceptImages: StaticImageData[];
  progress: ProjectProgressStep[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  description02?: string;
  period?: string;
  tech?: string;
  type?: ProjectType;
  detail?: ProjectDetail;
}

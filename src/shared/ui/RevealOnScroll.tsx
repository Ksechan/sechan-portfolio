'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../lib/motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

/**
 * 스크롤로 뷰포트에 들어오면 한 번 애니메이션되는 공용 래퍼.
 * framer-motion의 whileInView를 사용해 프로젝트 상세 페이지의
 * concept / progress 섹션마다 반복 사용합니다.
 */
export default function RevealOnScroll({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

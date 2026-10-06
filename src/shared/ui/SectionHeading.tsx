'use client';

import styled from 'styled-components';

export const SectionTag = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: ${({ theme }) => theme.space[2]};

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.color.textPrimary};
`;

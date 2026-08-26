'use client';

import styled from 'styled-components';

const TechTag = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.bgElevated};
  color: ${({ theme }) => theme.color.textSecondary};
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export default TechTag;

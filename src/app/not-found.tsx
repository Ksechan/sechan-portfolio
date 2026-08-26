'use client';

import styled from 'styled-components';
import Button from '@/shared/ui/Button';

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  text-align: center;
  padding: ${({ theme }) => theme.space[4]};
`;

const Code = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  color: ${({ theme }) => theme.color.accent};
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export default function NotFound() {
  return (
    <Wrap>
      <Code>404</Code>
      <Title>페이지를 찾을 수 없어요</Title>
      <Button href="/" $variant="primary">
        홈으로 돌아가기
      </Button>
    </Wrap>
  );
}

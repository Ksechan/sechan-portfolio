'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { siteConfig } from '@/shared/config/site';

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(13, 12, 10, 0.72);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.gradient};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space[5]};
  font-size: 14px;
  color: ${({ theme }) => theme.color.textSecondary};

  a {
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }

  @media (max-width: 640px) {
    gap: ${({ theme }) => theme.space[3]};
  }
`;

const GithubLink = styled.a`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.color.borderHover};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: rgba(255, 138, 91, 0.08);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default function SiteHeader() {
  return (
    <Wrap>
      <Inner>
        <Logo href="#">{siteConfig.handle}</Logo>
        <Nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </Nav>
        <GithubLink href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </GithubLink>
      </Inner>
    </Wrap>
  );
}

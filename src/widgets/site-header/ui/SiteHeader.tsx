'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { siteConfig } from '@/shared/config/site';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
] as const;

const HEADER_OFFSET = 96;

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

const Logo = styled.a`
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

  @media (max-width: 640px) {
    gap: ${({ theme }) => theme.space[3]};
  }
`;

const NavLink = styled.a<{ $active: boolean }>`
  transition: color 0.2s ease;
  color: ${({ theme, $active }) =>
    $active ? theme.color.textPrimary : theme.color.textSecondary};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
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
  const [activeId, setActiveId] = useState<string>('about');

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -70% 0px`,
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Wrap>
      <Inner>
        <Logo href="#" onClick={handleLogoClick}>
          {siteConfig.handle}
        </Logo>
        <Nav>
          {NAV_LINKS.map(({ id, label }) => (
            <NavLink
              key={id}
              href={`#${id}`}
              $active={activeId === id}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </NavLink>
          ))}
        </Nav>
        <GithubLink href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </GithubLink>
      </Inner>
    </Wrap>
  );
}

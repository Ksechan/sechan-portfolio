'use client';

import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  $variant?: 'primary' | 'ghost';
}

const base = css`
  font-weight: 600;
  font-size: 15px;
  padding: 14px 26px;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
    border-color 0.2s ease;
`;

const Button = styled.a<ButtonStyleProps>`
  ${base}

  ${({ $variant = 'primary', theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.color.gradient};
          color: ${theme.color.bg};

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 138, 91, 0.25);
          }
        `
      : css`
          background: transparent;
          color: ${theme.color.textPrimary};
          border: 1px solid ${theme.color.borderHover};

          &:hover {
            border-color: ${theme.color.accent};
            background: rgba(255, 138, 91, 0.08);
          }
        `}
`;

export default Button;

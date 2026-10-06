'use client';

import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import styled from 'styled-components';
import { useMediaQuery } from '@/shared/lib/useMediaQuery';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 12, 10, 0.72);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: ${({ theme }) => theme.space[5]};

  @media (max-width: 640px) {
    align-items: flex-end;
    padding: 0;
  }
`;

const Panel = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 960px;
  max-height: 88vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: 640px) {
    max-height: 92vh;
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
`;

const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]};
  background: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;

  @media (max-width: 640px) {
    border-radius: 0;
  }
`;

const DragHandle = styled.div`
  display: none;
  grid-column: 2;

  @media (max-width: 640px) {
    display: block;
    width: 40px;
    height: 4px;
    border-radius: 999px;
    background: ${({ theme }) => theme.color.borderHover};
  }
`;

const CloseButton = styled.button`
  grid-column: 3;
  justify-self: end;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.bgElevated};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 15px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.textPrimary};
  }
`;

const desktopPanelVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.98,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const mobilePanelVariants: Variants = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
  exit: { y: '100%', transition: { duration: 0.24, ease: [0.4, 0, 1, 1] } },
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <Panel
            variants={isMobile ? mobilePanelVariants : desktopPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <TopBar>
              <DragHandle />
              <CloseButton type="button" onClick={onClose} aria-label="닫기">
                ✕
              </CloseButton>
            </TopBar>
            {children}
          </Panel>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.body
  );
}

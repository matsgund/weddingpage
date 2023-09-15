import { Transition as Trans } from '@headlessui/react';
import React from 'react';

interface TransitionProps {
  show: boolean;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children, show,  duration = 300 }) => {
  return (
    <Trans.Root
      show={show}
      as="div"
      enter={`ease-in duration-[${duration}ms] transition-all`}
      enterFrom="opacity-0"
      enterTo="opacity-100"
      className="bg-hero-image bg-cover bg-center min-h-screen"
    >
      {children}
    </Trans.Root>
  );
};

export default Transition;

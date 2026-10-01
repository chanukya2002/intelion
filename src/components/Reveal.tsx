import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '../animations/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: { ...fadeInUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

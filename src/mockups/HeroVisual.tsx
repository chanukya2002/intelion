import { motion, useReducedMotion } from 'framer-motion';
import { DayOSMockup } from './DayOSMockup';
import { SudokuZenMockup } from './SudokuZenMockup';

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[36rem]">
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(123,140,255,0.16),transparent_58%)] blur-3xl" />
      <motion.div
        className="relative"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <DayOSMockup />
      </motion.div>
      <motion.div
        className="absolute -bottom-12 right-[-1rem] w-[44%] sm:-right-8"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <SudokuZenMockup phone />
      </motion.div>
    </div>
  );
}

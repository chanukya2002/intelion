import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { staggerContainer, fadeInUp } from '../animations/motion';
import { HeroVisual } from '../mockups/HeroVisual';

export function HeroSection() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-xl">
          <motion.p variants={fadeInUp} className="eyebrow">
            Intelion
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]"
          >
            Thoughtful software for the rhythm of everyday life.
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
            Intelion designs focused digital products that make planning, tracking, and play feel clearer, calmer, and more intentional.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/#products">View products</Button>
            <Button to="/dayos" variant="secondary">
              Explore DayOS
            </Button>
          </motion.div>
        </motion.div>

        <Reveal className="pb-12 lg:pb-0">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

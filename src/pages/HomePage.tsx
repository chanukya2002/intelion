import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { AboutSection } from '../sections/AboutSection';
import { DayOSSpotlightSection } from '../sections/DayOSSpotlightSection';
import { HeroSection } from '../sections/HeroSection';
import { ProductsSection } from '../sections/ProductsSection';
import { SudokuSpotlightSection } from '../sections/SudokuSpotlightSection';
import { SupportSection } from '../sections/SupportSection';

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Intelion — Thoughtful Software & Digital Products"
        description="Intelion builds thoughtful software for everyday life, including DayOS and Sudoku Zen."
        path="/"
      />
      <HeroSection />
      <ProductsSection />
      <DayOSSpotlightSection />
      <SudokuSpotlightSection />
      <AboutSection />
      <SupportSection />
    </PageTransition>
  );
}

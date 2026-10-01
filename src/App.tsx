import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollManager } from './components/ScrollManager';
import { DayOSPage } from './pages/DayOSPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SudokuZenPage } from './pages/SudokuZenPage';
import { SupportPage } from './pages/SupportPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="site-shell min-h-screen bg-canvas text-white">
      <ScrollManager />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dayos" element={<DayOSPage />} />
            <Route path="/sudoku-zen" element={<SudokuZenPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

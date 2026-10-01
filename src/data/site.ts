export type ProductAreaStatus = 'focus' | 'configured';

export type ProductArea = {
  title: string;
  description: string;
  status: ProductAreaStatus;
};

export type AppConfig = {
  slug: 'dayos' | 'sudoku-zen';
  name: string;
  shortName: string;
  route: string;
  category: string;
  headline: string;
  description: string;
  accent: string;
  playStoreUrl?: string;
  playStoreLabel: string;
  productAreas: ProductArea[];
};

const configured = (value?: string) => Boolean(value && !value.includes('YOUR_') && !value.includes('SUPPORT_'));

export const siteConfig = {
  brand: 'Intelion',
  year: 2026,
  description: 'Thoughtful software and digital products built for everyday life.',
  supportEmail: 'chanukyamamidipalli@gmail.com',
  themeColor: '#07090d',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://intelion.web.app',
  developerGooglePlayUrl: import.meta.env.VITE_GOOGLE_PLAY_DEVELOPER_URL || '',
};

export const apps: AppConfig[] = [
  {
    slug: 'dayos',
    name: 'DayOS',
    shortName: 'DayOS',
    route: '/dayos',
    category: 'Personal Productivity',
    headline: 'Your personal operating system.',
    description:
      'DayOS is a personal productivity experience designed to bring everyday life into one organized space, with focused areas for planning, tracking, and reflection.',
    accent: '#7b8cff',
    playStoreUrl: import.meta.env.VITE_DAYOS_PLAY_URL || '',
    playStoreLabel: 'Configure DayOS Google Play URL',
    productAreas: [
      {
        title: 'Dashboard',
        description: 'A calm overview for the day, with space for priorities, routines, and personal context.',
        status: 'focus',
      },
      {
        title: 'Tasks & reminders',
        description: 'Structured planning surfaces for work, errands, and recurring personal follow-through.',
        status: 'focus',
      },
      {
        title: 'Expenses & tracking',
        description: 'Financial and personal records presented with the same thoughtful system design as the rest of the app.',
        status: 'focus',
      },
      {
        title: 'Fitness, diet & notes',
        description: 'Lifestyle modules visualized as part of the product direction without overstating shipped functionality.',
        status: 'focus',
      },
    ],
  },
  {
    slug: 'sudoku-zen',
    name: 'Sudoku Zen',
    shortName: 'Sudoku Zen',
    route: '/sudoku-zen',
    category: 'Puzzle Game',
    headline: 'A calmer way to solve.',
    description:
      'Sudoku Zen is a polished Sudoku experience for Android, designed around clean gameplay, satisfying interactions, and distraction-free puzzle solving.',
    accent: '#6ec7b7',
    playStoreUrl: import.meta.env.VITE_SUDOKU_ZEN_PLAY_URL || '',
    playStoreLabel: 'Configure Sudoku Zen Google Play URL',
    productAreas: [
      {
        title: 'Focused board',
        description: 'A high-clarity grid built for readability, rhythm, and calm concentration.',
        status: 'configured',
      },
      {
        title: 'Number pad & notes',
        description: 'Essential puzzle controls that stay clean and accessible without cluttering the board.',
        status: 'configured',
      },
      {
        title: 'Subtle feedback',
        description: 'Selection, placement, and completion states are designed to feel smooth rather than loud.',
        status: 'configured',
      },
      {
        title: 'Distraction-light play',
        description: 'A premium mobile puzzle atmosphere that avoids the noisy visual style common in casual games.',
        status: 'configured',
      },
    ],
  },
];

export const appMap = Object.fromEntries(apps.map((app) => [app.slug, app])) as Record<AppConfig['slug'], AppConfig>;

export const primaryPlayDestination =
  siteConfig.developerGooglePlayUrl ||
  apps.find((app) => configured(app.playStoreUrl))?.playStoreUrl ||
  '/sudoku-zen#download';

export const isConfiguredUrl = (value?: string) => configured(value);

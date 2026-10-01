import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const baseUrl = process.env.VITE_SITE_URL || 'https://intelion.web.app';
const routes = ['/', '/dayos', '/sudoku-zen', '/privacy', '/support'];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${new URL(route, baseUrl).toString()}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const outputDir = resolve(process.cwd(), 'public');
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'sitemap.xml'), body, 'utf8');

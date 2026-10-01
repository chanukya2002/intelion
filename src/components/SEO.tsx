import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/site';

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

export function SEO({ title, description, path }: SEOProps) {
  const canonical = new URL(path, siteConfig.siteUrl).toString();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.brand} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteConfig.siteUrl}/favicon.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteConfig.siteUrl}/favicon.svg`} />
    </Helmet>
  );
}

import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <PageTransition>
      <SEO title="Page not found | Intelion" description="The page you requested could not be found." path="/404" />
      <section className="px-4 pb-20 pt-28 sm:px-6">
        <div className="mx-auto max-w-[720px] rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white">Page not found</h1>
          <p className="mt-4 text-base leading-8 text-slate-300">The route does not exist, or the page has moved.</p>
          <div className="mt-8 flex justify-center">
            <Button to="/">Return home</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

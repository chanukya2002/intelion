import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../data/site';

export function SupportSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Developer & support"
              title="Clear paths for support, updates, and app listings."
              description={
                <>
                  Intelion is structured to work as an official developer website for Google Play listings and support references.
                  Replace <span className="font-medium text-white">{siteConfig.supportEmail}</span> with your preferred support email before publishing.
                </>
              }
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-medium text-white">Support contact</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Preferred email:
                  <span className="ml-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-medium text-white">
                    {siteConfig.supportEmail}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  If the contact address is not yet configured, keep the support page live and update the placeholder once your final support workflow is ready.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-medium text-white">Important files</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-300">
                  <li>• Static app-ads.txt is served from the site root.</li>
                  <li>• Firebase Hosting rewrites preserve SPA routes.</li>
                  <li>• Google Play links live in a centralized configuration file.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/support">Open support page</Button>
              <Button to="/privacy" variant="secondary">
                Review privacy page
              </Button>
              <Link to="/#products" className="inline-flex items-center text-sm text-slate-300 transition hover:text-white">
                Browse products →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

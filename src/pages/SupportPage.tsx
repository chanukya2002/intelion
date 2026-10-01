import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { apps, siteConfig } from '../data/site';

const troubleshooting = [
  'Check that you are using the latest version available on Google Play.',
  'Restart the app and the device before reporting repeatable issues.',
  'When contacting support, include the app name, device model, Android version, and a short description of the problem.',
];

export function SupportPage() {
  return (
    <PageTransition>
      <SEO
        title="Support | Intelion"
        description="Support information for Intelion applications, including DayOS and Sudoku Zen."
        path="/support"
      />
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Support"
            title="Support for Intelion applications"
            description="Use this page as the public support reference for your Google Play listings. Replace the placeholder contact with your final support address before launch."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {apps.map((app) => (
              <div key={app.slug} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{app.category}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{app.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{app.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-medium text-white">Troubleshooting</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {troubleshooting.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-medium text-white">Support contact</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Email:
                <span className="ml-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 font-medium text-white">
                  {siteConfig.supportEmail}
                </span>
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Replace this placeholder with your preferred support address. Do not publish a made-up email address on the live site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

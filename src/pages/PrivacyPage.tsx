import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';

const sections = [
  {
    title: 'Website information',
    body: 'This website is an informational product and developer site for Intelion applications. It does not include account creation or a built-in contact form in its current implementation.',
  },
  {
    title: 'Hosting and analytics',
    body: 'Standard hosting or platform-level logs may be created by your deployment provider. If you add analytics, crash reporting, sign-in, or advertising features later, update this page to reflect the exact services and data flows in use.',
  },
  {
    title: 'Application-specific disclosures',
    body: 'DayOS and Sudoku Zen may each require more specific privacy details depending on the final feature set and release configuration. Keep this page aligned with your published Google Play Data safety disclosures and any in-app privacy policy requirements.',
  },
];

export function PrivacyPage() {
  return (
    <PageTransition>
      <SEO
        title="Privacy | Intelion"
        description="Privacy information for the Intelion website and published applications."
        path="/privacy"
      />
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Privacy"
            title="Privacy information"
            description="This page keeps the current website claims factual and intentionally avoids making unsupported statements about application data handling."
          />
          <div className="mt-10 space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-lg font-medium text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

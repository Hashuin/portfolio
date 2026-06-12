import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { certifications } from '../../data/certifications';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const Certifications: React.FC = () => {
  const { language } = useLanguage();
  const text = copy[language].certifications;

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={text.title}
          subtitle={text.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={`${certification.title.en}-${certification.year}-${certification.credentialId ?? 'no-id'}`}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/75"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {certification.title[language]}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                      {certification.year}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-blue-600 dark:text-cyan-300">
                    {certification.issuer} · {certification.location}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {certification.expedition && (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-950">
                        {language === 'es' ? 'Expedición' : 'Issued'}: {certification.expedition}
                      </span>
                    )}
                    {certification.credentialId && (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-950">
                        {language === 'es' ? 'ID de la credencial' : 'Credential ID'}: {certification.credentialId}
                      </span>
                    )}
                  </div>

                  {certification.note && (
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {certification.note[language]}
                    </p>
                  )}

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm text-white dark:bg-slate-50 dark:text-slate-950">
                    <BadgeCheck className="h-4 w-4 text-amber-500 dark:text-amber-600" />
                    {text.verified}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
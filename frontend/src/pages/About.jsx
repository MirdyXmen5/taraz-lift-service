import { ArrowRight, ExternalLink, FileText, Lightbulb, ShieldCheck, Verified } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection.jsx";
import DiagonalBackground from "../components/DiagonalBackground.jsx";
import ParallaxPanel from "../components/ParallaxPanel.jsx";
import { elevatorImages } from "../data/assets.js";
import { useLanguage } from "../data/i18n.jsx";
import licensePdf from "../assets/docs/license.pdf";

const valueIcons = [ShieldCheck, Verified, Lightbulb];

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative flex min-h-[620px] items-center overflow-hidden border-b border-outline-variant bg-surface-container-highest">
        <ParallaxHeroImage />
        <div className="relative z-10 mx-auto w-full max-w-layout px-4 py-20 md:px-16">
          <AnimatedSection className="max-w-2xl rounded-lg border border-outline-variant bg-surface-container-lowest/92 p-6 shadow-soft backdrop-blur-md md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">{t.common.company}</p>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl">{t.about.heroTitle}</h1>
            <p className="mt-5 text-lg leading-8 text-on-surface-variant">{t.about.heroText}</p>
            <Link
              to="/contacts"
              className="mt-7 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-on-primary transition hover:bg-[#005c5c] active:scale-[0.98]"
            >
              {t.common.contactUs}
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="mx-auto grid max-w-layout grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-16 md:py-20">
        <div>
          <h2 className="text-3xl font-bold text-on-surface">{t.about.historyTitle}</h2>
          <p className="mt-5 leading-7 text-on-surface-variant">{t.about.p1}</p>
          <p className="mt-4 leading-7 text-on-surface-variant">{t.about.p2}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-outline-variant pt-6">
            <Stat value="500+" label={t.about.projects} />
            <Stat value="10+" label={t.about.years} />
          </div>
        </div>
        <ParallaxPanel image={elevatorImages.machinery} alt="Elevator engineering equipment" className="min-h-[420px]" />
      </AnimatedSection>

      <section className="relative overflow-hidden border-y border-outline-variant bg-surface-container-low">
        <DiagonalBackground />
        <div className="relative mx-auto max-w-layout px-4 py-16 md:px-16 md:py-20">
          <AnimatedSection>
            <h2 className="mb-10 text-3xl font-bold text-on-surface">{t.about.principles}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {t.about.values.map(([title, text], index) => {
                const Icon = valueIcons[index];
                return (
                  <article
                    key={title}
                    className={`rounded-lg border border-outline-variant bg-surface-container-lowest p-6 ${index === 0 || index === 2 ? "md:col-span-2" : ""}`}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-semibold text-on-surface">{title}</h3>
                    <p className="mt-3 leading-7 text-on-surface-variant">{text}</p>
                  </article>
                );
              })}
              <a
                href={licensePdf}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-outline-variant bg-surface-container-lowest p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText size={26} />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-on-surface">Лицензия компании</h3>
                    <p className="mt-3 leading-7 text-on-surface-variant">Ознакомьтесь с официальным документом компании в формате PDF.</p>
                  </div>
                  <ExternalLink className="mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <span className="block text-3xl font-bold text-primary">{value}</span>
      <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.08em] text-secondary">{label}</span>
    </div>
  );
}

function ParallaxHeroImage() {
  return (
    <div className="absolute inset-0">
      <ParallaxPanel image={elevatorImages.lobby} alt="" className="h-full rounded-none border-0 opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20" />
    </div>
  );
}

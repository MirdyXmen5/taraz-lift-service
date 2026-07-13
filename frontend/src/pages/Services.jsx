import { Check, Construction, Handshake, PhoneCall, ShieldAlert, Wrench } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import DiagonalBackground from "../components/DiagonalBackground.jsx";
import logoTls from "../assets/logos/logo-tls.png";
import { partnerLogos } from "../data/assets.js";
import { useLanguage } from "../data/i18n.jsx";

const serviceIcons = [Construction, Wrench, Handshake, ShieldAlert];

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-lowest">
        <DiagonalBackground />
        <div className="relative mx-auto grid max-w-layout grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-16 md:py-20">
          <AnimatedSection>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-on-surface md:text-5xl">{t.services.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-on-surface-variant">{t.services.heroText}</p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-2">
              <Check size={18} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface">{t.common.certified}</span>
            </div>
          </AnimatedSection>
          <HeroLogo />
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-layout px-4 py-16 md:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.services.cards.map(([title, text, items], index) => {
            const Icon = serviceIcons[index];
            const emergency = index === 3;
            return (
              <article
                key={title}
                className={`flex min-h-[300px] flex-col rounded-lg border p-6 transition hover:-translate-y-1 hover:shadow-soft ${
                  emergency ? "border-error-container bg-surface-container-high" : "border-outline-variant bg-surface-container-lowest"
                }`}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded border ${emergency ? "border-error/20 bg-error-container text-error" : "border-outline-variant bg-surface-container text-primary"}`}>
                  <Icon size={28} />
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-on-surface">{title}</h2>
                  {emergency && <span className="rounded bg-error px-2 py-1 text-xs font-bold text-on-error">24/7</span>}
                </div>
                <p className="leading-7 text-on-surface-variant">{text}</p>
                <ul className="mt-5 space-y-2 border-t border-outline-variant pt-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {emergency && (
                  <a
                    href="tel:+77771343431"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded bg-error px-4 py-3 font-semibold text-on-error transition hover:bg-[#a31717]"
                  >
                    <PhoneCall size={18} />
                    {t.common.emergency}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <section className="border-t border-outline-variant bg-surface-container-low">
        <AnimatedSection className="mx-auto max-w-layout px-4 py-12 md:px-16">
          <h2 className="mb-8 text-3xl font-bold text-on-surface">{t.common.partners}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.partners.map(([name, text], index) => (
              <article key={name} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 text-center">
                <div className="mb-5 flex h-24 items-center justify-center">
                  <img src={partnerLogos[index]} alt={name} className="max-h-full max-w-[180px] object-contain" />
                </div>
                <h3 className="text-lg font-bold text-on-surface">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">{text}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

function HeroLogo() {
  return (
    <div className="mx-auto flex w-full max-w-[220px] items-center justify-center md:max-w-md md:justify-end">
      <img src={logoTls} alt="Taraz lift service" className="h-auto w-full object-contain" />
    </div>
  );
}

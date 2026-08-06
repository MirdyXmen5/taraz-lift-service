import axios from "axios";
import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import DiagonalBackground from "../components/DiagonalBackground.jsx";
import { useLanguage } from "../data/i18n.jsx";

const initialForm = { name: "", address: "", phone: "", service: "", message: "" };

export default function Contacts() {
  const { language, t, webhookUrl } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const serviceOptions = useMemo(
    () => t.services.cards.map(([title], index) => ({ value: ["installation", "maintenance", "modernization", "emergency"][index], label: title })),
    [t]
  );

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setNotice("");

    try {
      await axios.post(webhookUrl, {
        ...form,
        language,
        source: "taraz-lift-service-website",
        submittedAt: new Date().toISOString()
      });
      setForm(initialForm);
      setStatus("success");
      setNotice(t.contacts.success);
    } catch (error) {
      setStatus("error");
      setNotice(t.contacts.error);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <DiagonalBackground />
      <div className="relative mx-auto max-w-layout px-4 py-16 md:px-16 md:py-20">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl">{t.contacts.title}</h1>
          <p className="mt-4 text-lg leading-8 text-on-surface-variant">{t.contacts.subtitle}</p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InfoCard icon={MapPin} title={t.contacts.address} text={t.contacts.addressText} />
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Phone size={22} />
                <h2 className="font-bold text-on-surface">{t.contacts.contacts}</h2>
              </div>
              <p className="leading-7 text-secondary">
                <a className="transition hover:text-primary" href="tel:+77771343431">+7 (777) 134-34-31</a>
              </p>
              <a className="mt-3 flex items-center gap-2 text-secondary transition hover:text-primary" href="mailto:info@tarazlift.kz">
                <Mail size={18} />
                dm-kom@mail.ru
              </a>
            </article>
          </div>

          <AnimatedSection className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 md:p-10">
            <h2 className="mb-6 text-2xl font-semibold text-on-surface">{t.contacts.formTitle}</h2>
            <form className="flex flex-col gap-5" onSubmit={submitForm}>
              <Field label={t.contacts.name} name="name" value={form.name} onChange={updateField} placeholder={t.contacts.placeholders.name} required />
              <Field label={t.contacts.address} name="address" value={form.address} onChange={updateField} placeholder={t.contacts.placeholders.address} required />
              <Field label={t.contacts.phone} name="phone" type="tel" value={form.phone} onChange={updateField} placeholder={t.contacts.placeholders.phone} required />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface">{t.contacts.service}</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  required
                  className="rounded border border-outline-variant bg-white px-4 py-3 text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>{t.contacts.select}</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface">{t.contacts.message}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="4"
                  placeholder={t.contacts.placeholders.message}
                  className="resize-none rounded border border-outline-variant bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-on-primary transition hover:bg-[#005c5c] disabled:cursor-wait disabled:opacity-70"
              >
                {status === "submitting" ? "..." : t.contacts.submit}
              </button>
              {notice && (
                <p className={`text-center text-sm font-semibold ${status === "success" ? "text-primary" : "text-error"}`} role="status">
                  {notice}
                </p>
              )}
              <p className="text-center text-xs leading-5 text-secondary">{t.contacts.consent}</p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface">{label}</span>
      <input
        {...props}
        className="rounded border border-outline-variant bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
      <div className="mb-3 flex items-center gap-2 text-primary">
        <Icon size={22} />
        <h2 className="font-bold text-on-surface">{title}</h2>
      </div>
      <p className="whitespace-pre-line leading-7 text-secondary">{text}</p>
    </article>
  );
}

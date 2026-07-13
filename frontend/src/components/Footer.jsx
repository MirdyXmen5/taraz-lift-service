import { NavLink } from "react-router-dom";
import logoTls from "../assets/logos/logo-tls.png";
import { useLanguage } from "../data/i18n.jsx";

const navItems = [
  ["about", "/about"],
  ["services", "/services"],
  ["contacts", "/contacts"]
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-surface-container-highest">
      <div className="mx-auto grid w-full max-w-layout grid-cols-1 gap-6 px-4 py-10 md:grid-cols-4 md:px-16">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <img src={logoTls} alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">{t.common.brand}</span>
          </div>
          <p className="text-sm leading-6 text-on-surface-variant">© 2026 {t.common.company}. {t.common.rights}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:col-span-2 md:justify-end">
          {navItems.map(([key, path]) => (
            <NavLink key={key} to={path} className="text-on-surface-variant transition hover:text-primary hover:underline">
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}

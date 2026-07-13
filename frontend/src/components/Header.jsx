import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import logoTls from "../assets/logos/logo-tls.png";
import { useLanguage } from "../data/i18n.jsx";

const navItems = [
  ["about", "/about"],
  ["services", "/services"],
  ["contacts", "/contacts"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const mobileMenu = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0px)" : "translateY(-10px)",
    config: { tension: 280, friction: 28 }
  });

  const requestCall = () => {
    setOpen(false);
    navigate("/contacts");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-layout items-center justify-between px-4 py-3 md:px-16">
        <NavLink to="/about" className="flex items-center gap-3" aria-label="Taraz Lift Service">
          <img src={logoTls} alt="Taraz lift service" className="h-11 w-auto" />
          <span className="hidden text-base font-bold text-primary sm:inline">Taraz lift service</span>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(([key, path]) => (
            <NavLink
              key={key}
              to={path}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-sm font-semibold transition-colors ${
                  isActive ? "border-primary text-primary" : "border-transparent text-secondary hover:text-primary"
                }`
              }
            >
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button
            type="button"
            onClick={requestCall}
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition hover:bg-[#005c5c] active:scale-[0.98]"
          >
            <Phone size={16} />
            {t.nav.cta}
          </button>
        </div>

        <button
          type="button"
          className="rounded border border-outline-variant p-2 text-on-surface md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <animated.div style={mobileMenu} className="border-t border-outline-variant bg-surface md:hidden">
          <nav className="mx-auto flex max-w-layout flex-col gap-1 px-4 py-4">
            {navItems.map(([key, path]) => (
              <NavLink
                key={key}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-3 py-3 font-semibold ${isActive ? "bg-surface-container text-primary" : "text-secondary"}`
                }
              >
                {t.nav[key]}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <button
                type="button"
                onClick={requestCall}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-sm font-semibold text-on-primary"
              >
                <Phone size={16} />
                {t.nav.cta}
              </button>
            </div>
          </nav>
        </animated.div>
      )}
    </header>
  );
}

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded border border-outline-variant bg-surface-container-lowest text-sm font-bold">
      {["kk", "ru"].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`px-3 py-2 uppercase transition ${language === item ? "bg-primary text-on-primary" : "text-secondary hover:text-primary"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

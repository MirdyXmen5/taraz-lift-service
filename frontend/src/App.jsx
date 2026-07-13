import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./data/i18n.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background text-on-surface">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import ReaderDemo from "./components/ReaderDemo.jsx";
import SecurityPillars from "./components/SecurityPillars.jsx";
import Catalog from "./components/Catalog.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Payments from "./components/Payments.jsx";
import AuthorCTA from "./components/AuthorCTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col selection:bg-gold/20 selection:text-ink">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <ReaderDemo />
          <SecurityPillars />
          <Catalog />
          <HowItWorks />
          <Payments />
          <AuthorCTA />
          <FAQ />
          <Waitlist />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

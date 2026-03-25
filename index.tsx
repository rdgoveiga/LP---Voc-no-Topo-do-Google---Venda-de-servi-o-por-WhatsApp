
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getABVersion, ABVersion } from './lib/abTest';
import { captureUTMs } from './lib/utmTracking';

// Import components
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Results } from './components/Results';
import { Promises } from './components/Promises';
import { Chapters } from './components/Chapters';
import { Author } from './components/Author';
import { Solution } from './components/Solution';
import { TargetAudience } from './components/TargetAudience';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyCTA } from './components/StickyCTA';

const App = () => {
  const [version, setVersion] = useState<ABVersion>('A');

  useEffect(() => {
    captureUTMs();
    setVersion(getABVersion());
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Hero version={version} />
      <PainPoints version={version} />
      <Results version={version} />
      <Promises />
      <Solution version={version} />
      <TargetAudience />
      <Chapters />
      <Author />
      <Pricing version={version} />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);

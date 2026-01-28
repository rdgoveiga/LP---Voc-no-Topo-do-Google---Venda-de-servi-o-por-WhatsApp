
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import components
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Chapters } from './components/Chapters';
import { Author } from './components/Author';
import { Solution } from './components/Solution';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App = () => (
  <div className="bg-brand-dark min-h-screen text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
    <Hero />
    <PainPoints />
    <Solution />
    <Chapters />
    <Author />
    <Pricing />
    <FAQ />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);

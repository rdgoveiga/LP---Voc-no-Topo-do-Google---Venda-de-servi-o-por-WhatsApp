import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Chapters } from './components/Chapters';
import { Author } from './components/Author';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
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
}

export default App;
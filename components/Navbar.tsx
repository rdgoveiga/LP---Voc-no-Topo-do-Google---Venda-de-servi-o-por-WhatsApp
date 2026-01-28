
import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-900 text-xl">G</div>
          <span className="text-white font-bold text-lg hidden sm:block">Você no Topo <span className="text-amber-500">do Google</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden md:flex border-amber-500/20 text-slate-300 hover:text-amber-500"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Método
          </Button>
          <Button 
            size="sm" 
            onClick={() => window.open(CONFIG.links.whatsapp, "_blank")}
            className="text-xs md:text-sm px-4 py-2"
          >
            Análise Gratuita
          </Button>
        </div>
      </div>
    </nav>
  );
};

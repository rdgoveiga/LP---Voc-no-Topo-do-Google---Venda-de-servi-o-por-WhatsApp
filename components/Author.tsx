
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { CONFIG } from '../config';

export const Author = () => {
  const [imgError, setImgError] = useState(false);

  const authorImage = imgError 
    ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
    : CONFIG.author.image;

  return (
    <div className="bg-slate-800/30">
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-
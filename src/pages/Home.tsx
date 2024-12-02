import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Services from '../components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
    </main>
  );
}
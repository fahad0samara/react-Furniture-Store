import React from 'react';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Services from './Services';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Testimonials />
    </main>
  );
}
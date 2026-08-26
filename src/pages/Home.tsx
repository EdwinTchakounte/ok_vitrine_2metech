import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ValueProposition from '../components/Home/ValueProposition';
import AppTeaser from '../components/Home/AppTeaser';
import VideoSection from '../components/Home/VideoSection';
import ProductShowcase from '../components/Home/ProductShowcase';
import MegaCTA from '../components/Home/MegaCTA';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PartnersSection from '../components/Partners/PartnersSection';
import Testimonials from '../components/Testimonials';
import PageTransition from '../components/ui/PageTransition';

const Home: React.FC = () => (
  <PageTransition>
    <HeroSection />
    <ValueProposition />
    <AppTeaser />
    <VideoSection />
    <ProductShowcase />
    <Testimonials />
    <AwardsGrid />
    <PartnersSection />
    <MegaCTA />
  </PageTransition>
);

export default Home;

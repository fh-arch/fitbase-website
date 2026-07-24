'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureTabsSection } from './components/FeatureTabsSection';
import { StudioTypesSection } from './components/StudioTypesSection';
import { CorePlatformSection } from './components/CorePlatformSection';
import { GrowthRetentionSection } from './components/GrowthRetentionSection';
import { DashboardSection } from './components/DashboardSection';
import { BrandedAppSection } from './components/BrandedAppSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialSection } from './components/TestimonialSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

import { DemoModal } from './components/DemoModal';
import { StaffLoginModal } from './components/StaffLoginModal';
import { AskUsModal } from './components/AskUsModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isStaffLoginModalOpen, setIsStaffLoginModalOpen] = useState(false);
  const [isAskUsModalOpen, setIsAskUsModalOpen] = useState(false);
  const [selectedStudioType, setSelectedStudioType] = useState<string>('pilates');

  const handleOpenDemoWithStudio = (typeId: string) => {
    setSelectedStudioType(typeId);
    setIsDemoModalOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#252525] font-sans antialiased selection:bg-[#18F28D] selection:text-[#252525]">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar 
        onAskClick={() => setIsAskUsModalOpen(true)} 
      />

      {/* 2. Sticky Header / Navigation */}
      <Header 
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenStaffLogin={() => setIsStaffLoginModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 3. Hero Section */}
        <HeroSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 4. Feature Tabs Section */}
        <FeatureTabsSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 5. Studio Types Section */}
        <StudioTypesSection 
          onSelectStudioType={handleOpenDemoWithStudio} 
        />

        {/* 6. Core Platform Section */}
        <CorePlatformSection />

        {/* 7. Growth & Retention Section */}
        <GrowthRetentionSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 8. Dashboard Insights Section */}
        <DashboardSection />

        {/* 9. Branded App / Member Experience Section */}
        <BrandedAppSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 10. Pricing Preview Section */}
        <PricingSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 11. Testimonials Section */}
        <TestimonialSection />

        {/* 12. Blog & Guide Section */}
        <BlogSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 13. FAQ Accordion Section */}
        <FAQSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 14. Final CTA Section */}
        <FinalCTASection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />
      </main>

      {/* 13. Footer */}
      <Footer 
        onOpenStaffLogin={() => setIsStaffLoginModalOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Modals */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        defaultStudioType={selectedStudioType}
      />

      <StaffLoginModal 
        isOpen={isStaffLoginModalOpen} 
        onClose={() => setIsStaffLoginModalOpen(false)} 
      />

      <AskUsModal 
        isOpen={isAskUsModalOpen} 
        onClose={() => setIsAskUsModalOpen(false)} 
      />

    </div>
  );
}

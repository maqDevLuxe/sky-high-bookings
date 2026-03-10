import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PartnersSection from "@/components/landing/PartnersSection";
import RoutesSection from "@/components/landing/RoutesSection";
import FleetSection from "@/components/landing/FleetSection";
import TimeSavedSection from "@/components/landing/TimeSavedSection";
import AppDemoSection from "@/components/landing/AppDemoSection";
import VIPTransferSection from "@/components/landing/VIPTransferSection";
import CityscapeSection from "@/components/landing/CityscapeSection";
import CountersSection from "@/components/landing/CountersSection";
import NewsSection from "@/components/landing/NewsSection";
import SafetySection from "@/components/landing/SafetySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <RoutesSection />
    <FleetSection />
    <TimeSavedSection />
    <AppDemoSection />
    <VIPTransferSection />
    <CityscapeSection />
    <CountersSection />
    <NewsSection />
    <SafetySection />
    <TestimonialsSection />
    <CTAFooter />
  </div>
);

export default Index;

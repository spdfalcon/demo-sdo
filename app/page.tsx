"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { DashboardSlider } from "@/components/landing/DashboardSlider";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { AISection } from "@/components/landing/AISection";
import { RolesSection } from "@/components/landing/RolesSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

const ParticleBackground = dynamic(
  () => import("@/components/effects/ParticleBackground").then((m) => m.ParticleBackground),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <PillarsSection />
          <AnalyticsSection />
          <WorkflowSection />
          <DashboardSlider />
          <ModulesSection />
          <IntegrationsSection />
          <AISection />
          <RolesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

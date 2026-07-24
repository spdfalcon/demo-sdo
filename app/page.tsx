"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/landing/Navbar";
import { HeroBento } from "@/components/landing/HeroBento";
import { Ticker } from "@/components/ui/Ticker";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { FeatureTabs } from "@/components/landing/FeatureTabs";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { InteractiveWorkflow } from "@/components/landing/InteractiveWorkflow";
import { DashboardBento } from "@/components/landing/DashboardBento";
import { WhySDO } from "@/components/landing/WhySDO";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { IntegrationOrbit } from "@/components/landing/IntegrationOrbit";
import { AISection } from "@/components/landing/AISection";
import { RolesSection } from "@/components/landing/RolesSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { TRUST_BADGES } from "@/lib/demo-data";

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
          <HeroBento />
          <div className="py-8">
            <Ticker items={TRUST_BADGES} />
          </div>
          <ProblemSection />
          <PillarsSection />
          <FeatureTabs />
          <AnalyticsSection />
          <InteractiveWorkflow />
          <DashboardBento />
          <WhySDO />
          <ModulesSection />
          <IntegrationOrbit />
          <AISection />
          <RolesSection />
          <SocialProof />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

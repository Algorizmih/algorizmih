import AIHeroSection from "@/components/sections/AIHeroSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import CTASection from "@/components/sections/CTASection";
import PartnershipStory from "@/components/sections/PartnershipStory";
import PatientExperienceSection from "@/components/sections/PatientExperienceSection";
import ProfessionalFeatureSection from "@/components/sections/ProfessionalFeatureSection";
import ResearchSection from "@/components/sections/ResearchSection";
import TransformationSection from "@/components/sections/TransformationSection";
import TrustSecuritySection from "@/components/sections/TrustSecuritySection";
import WorkflowVisualization from "@/components/sections/WorkflowVisualization";
import Form from "@/components/forms/Form";
import Team from "@/components/themes/Team";

export default function Home() {
  return (
    <>
      <AIHeroSection />
      <TransformationSection />
      <PartnershipStory id="partnership" />
      <CapabilitiesSection />
      <WorkflowVisualization />
      <PatientExperienceSection />
      <ProfessionalFeatureSection />
      <TrustSecuritySection />
      <ResearchSection />
      <Team />
      <CTASection />
      <Form />
    </>
  );
}

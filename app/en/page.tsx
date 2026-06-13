import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import PerfectCompaniesSection from '@/components/sections/PerfectCompaniesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function EnHomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <WhyUsSection />
      <IndustriesSection />
      <PackagesSection />
      <PerfectCompaniesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PartnerTicker from "../components/PartnerTicker";
import MetricsGlance from "../components/MetricsGlance";
import BenefitsSection from "../components/BenefitsSection";
import ReportSection from "../components/ReportSection";
import ExamPatternSection from "../components/ExamPatternSection";
import StudentMisconceptions from "../components/StudentMisconceptions";
import MidPageCTA from "../components/MidPageCTA";
import CycleProofSection from "../components/CycleProofSection";
import ConversationsSection from "../components/ConversationsSection";
import MentorsSection from "../components/MentorsSection";
import MagazinesSection from "../components/MagazinesSection";
import RegistrationSteps from "../components/RegistrationSteps";
import CredentialsSection from "../components/CredentialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import StickyBottomBar from "../components/StickyBottomBar";
import SEOHead from "../components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Legal Olympiad 2.0 — India's National Benchmark Exam for Law Students"
        description="Find out where you actually stand among law students in India. Legal Olympiad 2.0, Sunday 18 October 2026. Online, proctored, Rs 500. All India Rank, State Rank, mentorship and internships. Open to every law student and CLAT aspirant in India."
        keywords="legal olympiad 2.0, legal olympiad, law benchmark exam, law students india, All India Rank law, legal reasoning exam, LL.B. benchmark"
        url="https://legalolympiad.com"
      />
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* Partner Law Colleges Infinite Ticker */}
      <PartnerTicker />

      {/* 3. Key Metrics at a Glance */}
      <MetricsGlance />

      {/* 4. What Every Participant Gets */}
      <BenefitsSection />

      {/* 5. Exam Pattern & Syllabus */}
      <ExamPatternSection />

      {/* 6. Student Misconceptions & Doubts */}
      <StudentMisconceptions />

      {/* 7. Mid-Page CTA Banner */}
      <MidPageCTA />

      {/* 8. Cycle 1.0 Ground Proof & Photo Gallery */}
      <CycleProofSection />

      {/* 9. Conversations with Senior Bar (Video Section) */}
      <ConversationsSection />

      {/* 10. Mentorship & Advocates Section */}
      <MentorsSection />

      {/* 11. Monthly Magazine Publication */}
      <MagazinesSection />

      {/* 12. 4-Step Registration Workflow */}
      <RegistrationSteps />

      {/* 13. Credentials & 15 Advocates Grid */}
      <CredentialsSection />

      {/* 14. FAQ Accordion */}
      <FAQSection />

      {/* 15. Final CTA Banner */}
      <CTASection />

      {/* 16. Footer */}
      <Footer />

      {/* 17. Floating Sticky Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
};

export default Index;

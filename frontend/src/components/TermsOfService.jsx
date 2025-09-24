import React from "react";
import Header from "./Header";

export default function TermsOfService() {
  const today = "July 9, 2025"; // Fixed as per your request

  return (
    <div
      className="min-h-screen bg-black"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed pt-[80px]">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-300 text-center mb-10">
          Last updated: {today}
        </p>

        <p className="mb-6 text-white">
          Welcome to <strong>Legal Olympiad</strong>. By accessing or using our
          website, services, and platforms, you agree to the following Terms of
          Service. Please read them carefully before proceeding.
        </p>

        <Section title="1. Acceptance of Terms">
          <p className="text-white">
            By using Legal Olympiad, you agree to comply with these Terms, our
            Privacy Policy, and any other policies communicated. If you do not
            agree, you must not use our services.
          </p>
        </Section>

        <Section title="2. Services Provided">
          <p className="text-white">
            Legal Olympiad provides educational competitions, online resources,
            training programs, AI-based tools, and related legal-tech solutions.
            We may update or modify services at our discretion.
          </p>
        </Section>

        <Section title="3. Eligibility">
          <ul className="list-disc list-inside text-white">
            <li>
              Users must be 18 years or older, or have verified
              parental/guardian consent if under 18.
            </li>
            <li>
              You must provide accurate information during registration or
              participation.
            </li>
          </ul>
        </Section>

        <Section title="4. User Responsibilities">
          <p className="text-white mb-2">You agree to:</p>
          <ul className="list-disc list-inside text-white">
            <li>Use our website and services only for lawful purposes.</li>
            <li>Not share false, misleading, or infringing content.</li>
            <li>Maintain confidentiality of login credentials.</li>
            <li>
              Respect intellectual property rights of Legal Olympiad and third
              parties.
            </li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <ul className="list-disc list-inside text-white">
            <li>
              All website content, logos, study material, and digital resources
              are the property of Legal Olympiad.
            </li>
            <li>
              You may not copy, reproduce, distribute, or modify without prior
              written consent.
            </li>
          </ul>
        </Section>

        <Section title="6. Payments & Refunds (if applicable)">
          <ul className="list-disc list-inside text-white">
            <li>
              Fees for competitions, resources, or services must be paid in
              advance.
            </li>
            <li>
              Refunds are subject to Legal Olympiad's refund policy (to be
              defined per program/event).
            </li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          <ul className="list-disc list-inside text-white">
            <li>
              Legal Olympiad is not responsible for technical issues,
              interruptions, or data loss caused by external factors.
            </li>
            <li>
              Our liability is limited to the amount paid by you for the
              specific service.
            </li>
          </ul>
        </Section>

        <Section title="8. Third-Party Services">
          <p className="text-white">
            Our website may integrate third-party tools or link to external
            sites. We are not liable for their practices, terms, or content.
          </p>
        </Section>

        <Section title="9. Termination">
          <p className="text-white">
            We reserve the right to suspend or terminate access if a user
            violates these Terms, applicable laws, or harms the integrity of the
            platform.
          </p>
        </Section>

        <Section title="10. Governing Law & Jurisdiction">
          <p className="text-white">
            These Terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts in Delhi.
          </p>
        </Section>

        <Section title="11. Contact">
          <p className="text-white">
            For any queries regarding these Terms, please contact us:
          </p>
          <p className="mt-2 text-white">
            <a
              href="mailto:Partner@legalolympiad.com"
              className="text-[#EA6220] underline hover:text-[#EA6220]/80 transition-colors"
            >
              Partner@legalolympiad.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      {children}
    </section>
  );
}

import React from "react";
import Header from "./Header";

export default function PrivacyPolicy() {
  const today = "July 9, 2025"; // Fixed as per your request

  return (
    <div
      className="min-h-screen bg-black"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed pt-[80px]">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-300 text-center mb-10">
          Last updated: {today}
        </p>

        <p className="mb-6 text-white">
          At <strong>Legal Olympiad</strong>, we value your trust. As a
          next-generation legal-tech and education solutions provider, working
          across AI, IoT, Blockchain, AR/VR, and Digital Transformation, data
          protection is at the heart of our operations. This Privacy Policy
          explains how we collect, use, store, share, and protect your personal
          data in accordance with India's Digital Personal Data Protection Act,
          2023 (DPDPA) and international best practices including GDPR.
        </p>

        <Section title="1. What Data We Collect">
          <ul className="list-disc list-inside text-white">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              and any details you provide via contact forms, competition
              registrations, or email communication.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, device type, browser,
              OS (for analytics and system performance).
            </li>
            <li>
              <strong>Interaction Data:</strong> Website usage, session
              behavior, and navigation data.
            </li>
            <li>
              <strong>Sensitive Personal Data (if applicable):</strong> Only
              where explicitly required for services (e.g., participation in
              AI-based assessments, career counselling tools).
            </li>
          </ul>
        </Section>

        <Section title="2. Legal Basis for Processing">
          <ul className="list-disc list-inside text-white">
            <li>
              Your explicit consent (via website forms, sign-ups, or
              checkboxes).
            </li>
            <li>
              Contractual necessity (to provide competition services, access to
              study materials, or related offerings).
            </li>
            <li>Compliance with legal obligations under Indian law.</li>
            <li>
              Legitimate interests, where not overridden by your rights (e.g.,
              website security and fraud prevention).
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul className="list-disc list-inside text-white">
            <li>
              Respond to queries, registrations, demo, or partnership requests.
            </li>
            <li>
              Manage participation in Legal Olympiad competitions and related
              events.
            </li>
            <li>Improve our website and educational services.</li>
            <li>Monitor system stability and security.</li>
            <li>
              Personalize services where relevant (e.g., AI-based learning
              tools).
            </li>
            <li>Fulfill statutory and compliance obligations.</li>
          </ul>
        </Section>

        <Section title="4. User Consent">
          <p className="text-white">
            Consent is obtained clearly through opt-ins and consent banners. You
            can withdraw consent at any time by contacting us or via privacy
            settings.
          </p>
          <ul className="list-disc list-inside text-white mt-2">
            <li>
              If you are under 18, we require verified parental/guardian consent
              before collecting or processing your data.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <ul className="list-disc list-inside text-white">
            <li>
              We retain your data for 12 months unless longer retention is
              legally required or consented.
            </li>
            <li>
              For Olympiad participation records, retention may extend to comply
              with academic/legal reporting obligations.
            </li>
            <li>
              Data is securely deleted or anonymized after the retention period.
            </li>
          </ul>
        </Section>

        <Section title="6. Data Sharing & Processors">
          <p className="text-white mb-2">Your data may be shared:</p>
          <ul className="list-disc list-inside text-white">
            <li>
              With verified service providers (cloud, analytics, event partners)
              under strict contracts.
            </li>
            <li>For legal compliance or security reasons.</li>
            <li>With your explicit consent, if applicable.</li>
          </ul>
          <p className="mt-2 text-white">
            We conduct privacy due diligence before engaging third parties and
            ensure GDPR/DPDPA-aligned contracts.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p className="text-white mb-2">You have the right to:</p>
          <ul className="list-disc list-inside text-white">
            <li>Access your data.</li>
            <li>Request correction or deletion.</li>
            <li>Withdraw consent.</li>
            <li>Object to processing.</li>
            <li>Request data portability.</li>
          </ul>
          <p className="mt-2 text-white">
            You can contact us at{" "}
            <a
              href="mailto:Partner@legalolympiad.com"
              className="text-[#EA6220] underline hover:text-[#EA6220]/80 transition-colors"
            >
              Partner@legalolympiad.com
            </a>{" "}
            or through the Privacy Dashboard (coming soon). We respond within 15
            working days.
          </p>
        </Section>

        <Section title="8. Cookie & Tracking Notice">
          <ul className="list-disc list-inside text-white">
            <li>
              We use minimal cookies for performance analytics and essential
              site functionality.
            </li>
            <li>
              A cookie consent banner is shown on your first visit, allowing you
              to manage preferences.
            </li>
            <li>Tools: CookieYes (implementation in progress).</li>
          </ul>
        </Section>

        <Section title="9. Data Security">
          <ul className="list-disc list-inside text-white">
            <li>Encrypted cloud storage (AWS/GCP).</li>
            <li>Role-based access and multi-factor authentication.</li>
            <li>Regular penetration testing and threat monitoring.</li>
            <li>
              Breach reporting protocol: notify authorities and users within 72
              hours.
            </li>
          </ul>
        </Section>

        <Section title="10. External Links">
          <p className="text-white">
            Our website may contain links to external platforms. We are not
            responsible for their content or privacy practices. Please review
            their policies separately.
          </p>
        </Section>

        <Section title="11. Updates to This Policy">
          <p className="text-white mb-2">
            We may update this policy periodically.
          </p>
          <ul className="list-disc list-inside text-white">
            <li>
              Changes will be posted here with a revised "Last Updated" date.
            </li>
            <li>
              For material changes, we may also notify you via email or banners
              on the website.
            </li>
          </ul>
        </Section>

        <Section title="12. Grievance Redressal">
          <p className="text-white">
            In compliance with Rule 5(9) of the Indian IT Rules, 2011 and the
            DPDPA:
          </p>
          <address className="not-italic mt-2 text-white">
            Email:{" "}
            <a
              href="mailto:Partner@legalolympiad.com"
              className="text-[#EA6220] underline hover:text-[#EA6220]/80 transition-colors"
            >
              Partner@legalolympiad.com
            </a>
            <br />
            Address: Greater Kailash,
            <br />
            South Delhi, 110048
          </address>
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

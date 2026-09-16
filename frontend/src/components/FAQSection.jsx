import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      q: "How credible is Legal Olympiad?",
      a: "We are incubated by Guru Nanak Dev University, have 3,000+ law students on the platform and partnerships with 50+ law colleges nationwide. Cycle 1.0 is complete, with training programmes delivered across the country, and our YouTube channel carries podcasts with some of India's most senior advocates. The exam is proctored and your rank is published as an All India Rank and a State Rank. Nothing about it is self-declared.",
    },
    {
      q: "Who can sit the Legal Olympiad?",
      a: "Every law student in India, in three-year and five-year programmes, any year of study, any college, any state. CLAT aspirants preparing for law school are also eligible.",
    },
    {
      q: "Do I need my college to enrol me?",
      a: "No. You register directly. No college tie-up or permission is required.",
    },
    {
      q: "Is there negative marking?",
      a: "No. Attempt every question.",
    },
    {
      q: "When are results declared?",
      a: "Two weeks after the exam. You receive your All India Rank, State Rank and certificate.",
    },
    {
      q: "Does everyone get mentorship, or only rankers?",
      a: "Every participant. Mentorship is not restricted to toppers.",
    },
  ];

  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: "860px" }}>
        <div className="head center">
          <div className="eyebrow">Questions</div>
          <h2>Before you register</h2>
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="center" style={{ marginTop: "36px" }}>
          <Link
            to="/faqs"
            className="btn btn-d"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              fontWeight: 600,
              padding: "13px 32px",
              borderRadius: "999px",
              border: "1.5px solid rgba(7,39,30,0.22)",
              color: "var(--ink)",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            View all FAQs
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <p className="center" style={{ marginTop: "28px", fontSize: "14.5px" }}>
          Still have a question? Write to{" "}
          <a
            href="mailto:connect@legalolympiad.com"
            style={{ color: "var(--gold)", fontWeight: 600 }}
          >
            connect@legalolympiad.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+917827050511"
            style={{ color: "var(--gold)", fontWeight: 600 }}
          >
            +91 78270 50511
          </a>
          . We reply within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;

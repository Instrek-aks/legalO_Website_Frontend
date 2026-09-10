const FAQSection = () => {
  const faqs = [
    {
      q: "How credible is Legal Olympiad?",
      a: "We are incubated by Guru Nanak Dev University, have 3,000+ law students on the platform and partnerships with 50+ law colleges nationwide. Cycle 1.0 is complete, with training programmes delivered across the country, and our YouTube channel carries podcasts with some of India's most senior advocates. The exam is proctored and your rank is published as an All India Rank and a State Rank. Nothing about it is self-declared.",
    },
    {
      q: "Who can sit the Legal Olympiad?",
      a: "Every law student and CLAT aspirant in India. Three-year and five-year programmes, any year of study, any college, any state.",
    },
    {
      q: "Do I need my college to enrol me?",
      a: "No. You register directly. No college tie-up or permission is required.",
    },
    {
      q: "Is this only for NLU students?",
      a: "No. Every law student and CLAT aspirant in India is eligible, from any college in any state. Your rank depends only on your reasoning, not your institution.",
    },
    {
      q: "How long is the exam and how many questions?",
      a: "Two hours, 80 to 100 multiple choice questions.",
    },
    {
      q: "Is there negative marking?",
      a: "No. Attempt every question.",
    },
    {
      q: "Is the exam proctored?",
      a: "Yes. It is a proctored online exam, which is what makes the rank credible.",
    },
    {
      q: "Do I need to study a syllabus?",
      a: "No cramming is required. The paper tests logical reasoning and critical thinking across five areas. The full pattern is on the syllabus page.",
    },
    {
      q: "Is the handbook compulsory?",
      a: "No. Registration is ₹499 on its own. The handbook is optional at ₹99 digital or ₹299 physical, and it is the only place the sample questions appear.",
    },
    {
      q: "When are results declared?",
      a: "Two weeks after the exam. You receive your All India Rank, State Rank and certificate.",
    },
    {
      q: "What do I actually receive after the exam?",
      a: "All India Rank, State Rank, an official certificate, one-to-one mentorship with practising advocates and one year free on app.legalolympiad.com. Top 200 rankers also receive internship and job opportunities.",
    },
    {
      q: "Does everyone get mentorship, or only rankers?",
      a: "Every participant. Mentorship is not restricted to toppers.",
    },
    {
      q: "Is the certificate useful on a CV?",
      a: "Yes. A national rank is a verified result rather than a self-reported claim, which is what makes it worth putting on a CV.",
    },
    {
      q: "I am in my first year. Should I wait?",
      a: "No. Sitting it early gives you a benchmark and three or four years to improve on it.",
    },
    {
      q: "Can I get a refund?",
      a: "Registration fees are non-refundable. Genuine exceptions such as a duplicate payment are resolved by our team.",
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

        <p className="center" style={{ marginTop: "26px", fontSize: "14.5px" }}>
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

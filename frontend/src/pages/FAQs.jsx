import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const allFAQs = [
  {
    category: "CREDIBILITY",
    items: [
      {
        q: "How credible is Legal Olympiad?",
        a: "We are incubated by Guru Nanak Dev University, have 3,000+ law students on the platform and partnerships with 50+ law colleges nationwide. Cycle 1.0 is complete, with training programmes delivered across the country, and our YouTube channel carries podcasts with some of India's most senior advocates. The exam is proctored and your rank is published as an All India Rank and a State Rank. Nothing about it is self-declared.",
      },
    ],
  },
  {
    category: "ELIGIBILITY",
    items: [
      {
        q: "Who can sit the Legal Olympiad?",
        a: "Every law student in India, in three-year and five-year programmes, any year of study, any college, any state. CLAT aspirants preparing for law school are also eligible.",
      },
      {
        q: "I am a CLAT aspirant, not yet in law school. Can I sit it?",
        a: "Yes. CLAT aspirants are eligible and encouraged to register. You get a national rank, an official certificate and a full year on the platform before you even begin your degree.",
      },
      {
        q: "Will it help my CLAT preparation?",
        a: "Yes. The paper is built on legal reasoning, critical reasoning and analytical reasoning — the same abilities CLAT tests. It is full length practice under proctored conditions, with a national benchmark at the end of it.",
      },
      {
        q: "Do I need my college to enrol me?",
        a: "No. You register directly. No college tie-up or permission is required.",
      },
      {
        q: "Is this only for NLU students?",
        a: "No. Every law student in India is eligible, from any college in any state. Your rank depends only on your reasoning, not your institution.",
      },
      {
        q: "I am in my first year. Should I wait?",
        a: "No. Sitting it early gives you a benchmark and three or four years to improve on it.",
      },
    ],
  },
  {
    category: "THE EXAM",
    items: [
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
        a: "No cramming is required. The paper tests logical reasoning and critical thinking across five areas: Legal Reasoning, Critical Reasoning, Analytical Reasoning, Judgement Appreciation and Legal Awareness. The full pattern is on the syllabus page.",
      },
      {
        q: "Is the syllabus the same for every year?",
        a: "No. The syllabus is set separately for each year of study, so you are always compared against a paper built for your stage. CLAT aspirants sit the paper equivalent to Year 1 of the five year LL.B programme.",
      },
      {
        q: "Is the handbook compulsory?",
        a: "No. Registration is Rs 499 on its own. The handbook is optional at Rs 99 for a digital copy or Rs 299 for a physical copy, and it is the only place the sample questions appear.",
      },
    ],
  },
  {
    category: "RESULTS AND CERTIFICATES",
    items: [
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
        q: "Do I get a physical certificate?",
        a: "Every student receives a digital certificate as standard. If you would like a physical copy, you can request one and pay the applicable delivery charges.",
      },
    ],
  },
  {
    category: "PAYMENT",
    items: [
      {
        q: "Can I get a refund?",
        a: "Registration fees are non-refundable. Genuine exceptions such as a duplicate payment are resolved by our team.",
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={"faq-item" + (open ? " faq-open" : "")}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-chevron">{open ? "\u2212" : "+"}</span>
      </div>
      {open && (
        <div className="faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [search, setSearch] = useState("");

  const filtered = allFAQs
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  const total = allFAQs.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <SEOHead
        title="Frequently Asked Questions - Legal Olympiad 2.0"
        description="All your questions about Legal Olympiad 2.0 answered - eligibility, exam pattern, results, certificates, payment, and more. India's national benchmark exam for law students."
        keywords="legal olympiad faqs, legal olympiad questions, law exam eligibility, legal olympiad results, legal olympiad certificate"
        url="https://legalolympiad.com/faqs"
      />
      <Header />

      {/* Page Hero */}
      <div className="faq-page-hero">
        <div
          className="wrap"
          style={{ maxWidth: "760px", textAlign: "center" }}
        >
          <div className="eyebrow" style={{ color: "var(--gilt)" }}>
            Legal Olympiad 2.0
          </div>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              color: "var(--ivory)",
              marginBottom: "16px",
              fontFamily: "var(--ser)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              color: "var(--jade)",
              fontSize: "15px",
              marginBottom: "8px",
            }}
          >
            Sunday, 18 October 2026&nbsp;&nbsp;|&nbsp;&nbsp;Online and
            proctored&nbsp;&nbsp;|&nbsp;&nbsp;Rs 499&nbsp;&nbsp;|&nbsp;&nbsp;Open
            to every law student in India and to CLAT aspirants
          </p>
          <p
            style={{
              color: "rgba(199,211,203,0.65)",
              fontSize: "13.5px",
              marginBottom: "36px",
            }}
          >
            {total} questions answered across {allFAQs.length} categories
          </p>

          {/* Search */}
          <div className="faq-search-wrap">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, opacity: 0.5 }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="faq-search"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="faq-clear"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch("");
                }}
                aria-label="Clear search"
              >
                x
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div
        className="wrap"
        style={{ maxWidth: "820px", paddingTop: "60px", paddingBottom: "80px" }}
      >
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "var(--mute)",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "8px" }}>
              No results for &ldquo;{search}&rdquo;
            </p>
            <p style={{ fontSize: "14px" }}>
              Try a different keyword or browse all categories.
            </p>
            <button
              className="btn btn-d"
              style={{ marginTop: "20px" }}
              onClick={() => setSearch("")}
            >
              Clear search
            </button>
          </div>
        ) : (
          filtered.map((group) => (
            <div key={group.category} className="faq-category-block">
              <div className="faq-category-label">{group.category}</div>
              {group.items.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          ))
        )}

        {/* Contact card */}
        <div className="faq-contact-card">
          <div className="faq-contact-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h3 style={{ marginBottom: "6px", fontSize: "18px" }}>
              Still have a question?
            </h3>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--body)",
                marginBottom: "16px",
                lineHeight: 1.6,
              }}
            >
              Write to{" "}
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
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://app.legalolympiad.com/exam/registration"
                className="btn btn-g"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "14px" }}
              >
                Register &mdash; Rs 499
              </a>
              <a
                href="https://app.legalolympiad.com/exam/syllabus"
                className="btn btn-d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "14px" }}
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            to="/"
            style={{
              color: "var(--gold)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>&larr;</span> Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

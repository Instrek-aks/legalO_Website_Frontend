const BenefitsSection = () => {
  return (
    <section id="benefits" style={{ background: "var(--panel)" }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">WHAT EVERY PARTICIPANT GETS</div>
          <h2>
            ₹499 buys a great deal more than a<br />
            question paper
          </h2>
          <p className="lede">
            Not just the toppers. Every single student who sits the exam receives all
            five, plus a sixth if you finish in the top 100.
          </p>
        </div>

        <div className="grid g3">
          <div className="card">
            <div className="num">1</div>
            <h3>All India Rank and State Rank</h3>
            <p>
              A verified national position, published after results. Not a
              participation certificate.
            </p>
          </div>

          <div className="card">
            <div className="num">2</div>
            <h3>Official certificate</h3>
            <p>
              A Legal Olympiad certificate carrying your rank, ready to put on a
              CV.
            </p>
          </div>

          <div className="card">
            <div className="num">3</div>
            <h3>One-to-one mentorship</h3>
            <p>
              Personal sessions with practising advocates. Open to every
              participant, not restricted to rankers.
            </p>
          </div>

          <div className="card">
            <div className="num">4</div>
            <h3>A full year on the platform</h3>
            <p>
              Free access to app.legalolympiad.com for twelve months: practice,
              courses, magazine and webinars.
            </p>
          </div>

          <div className="card">
            <div className="num">5</div>
            <h3>A training path built for you</h3>
            <p>
              A recommended programme matched to how you actually performed in
              the paper.
            </p>
          </div>

          <div
            className="card"
            style={{ background: "var(--ink)", border: 0 }}
          >
            <div
              className="num"
              style={{
                background: "linear-gradient(140deg, #E0B23C, #C6930A)",
                color: "#07271E",
                fontSize: "16px",
              }}
            >
              ★
            </div>
            <h3 style={{ color: "var(--ivory)" }}>
              Top 100: internships and jobs
            </h3>
            <p style={{ color: "var(--jade)" }}>
              The top 100 rankers are put directly in front of leading lawyers for
              internship and job opportunities.
            </p>
          </div>
        </div>

        <p
          className="center"
          style={{
            marginTop: "36px",
            fontSize: "14.5px",
            color: "var(--body)",
          }}
        >
          All of it is included in the ₹499. The handbook is the only optional add-on.
        </p>
        <p className="center" style={{ marginTop: "16px" }}>
          <a
            className="btn btn-g"
            href="https://app.legalolympiad.com/exam/registration"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for ₹499 →
          </a>
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;

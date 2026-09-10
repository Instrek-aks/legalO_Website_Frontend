const ExamPatternSection = () => {
  return (
    <section className="dark" id="paper">
      <div className="jaali"></div>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">THE PAPER</div>
          <h2>
            <span style={{ display: "block" }}>It tests how you think, not what you</span>
            <span style={{ display: "block" }}>memorised</span>
          </h2>
          <p className="lede">
            Five areas, all reasoning. If you can read a set of facts and work out
            what follows, you are already prepared.
          </p>
        </div>
        <div className="exam">
          <div className="left">
            <h3 style={{ color: "var(--ivory)", fontSize: "18px", marginBottom: "16px" }}>
              What is on the paper
            </h3>
            <dl>
              <dt>Legal Reasoning</dt>
              <dd>Applying a given principle to a set of facts</dd>
              <dt>Critical Reasoning</dt>
              <dd>Arguments, assumptions and conclusions</dd>
              <dt>Analytical Reasoning</dt>
              <dd>Logic, sequences and deduction</dd>
              <dt>Judgement Appreciation</dt>
              <dd>Reading a judgement and identifying what actually decides it</dd>
              <dt>Legal Awareness</dt>
              <dd>Landmark judgements and current legal developments</dd>
            </dl>
            <p style={{ marginTop: "28px" }}>
              <a
                className="btn btn-g"
                href="https://app.legalolympiad.com/exam/syllabus"
                target="_blank"
                rel="noopener noreferrer"
              >
                For the full syllabus, click here →
              </a>
            </p>
          </div>
          <div className="right">
            <h4
              style={{
                fontFamily: "var(--san)",
                fontSize: "11px",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              THE OFFICIAL HANDBOOK
            </h4>
            <p style={{ color: "var(--soft)", fontSize: "14px", lineHeight: "1.5" }}>
              Optional. It is the only place the sample paper appears, and it
              adds preparation guidance. Add it while registering.
            </p>
            <div className="row" style={{ marginTop: "14px" }}>
              <span>Digital copy</span>
              <b>₹99</b>
            </div>
            <div className="row">
              <span>Physical copy, delivered</span>
              <b>₹299</b>
            </div>
            <p style={{ marginTop: "24px", color: "var(--jade)", fontSize: "13px", lineHeight: "1.4" }}>
              Registration is ₹499 on its own. The handbook is never required to sit the paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamPatternSection;

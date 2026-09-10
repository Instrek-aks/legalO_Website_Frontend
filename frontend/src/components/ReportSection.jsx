const ReportSection = () => {
  return (
    <section style={{ background: "var(--panel)", padding: "72px 0" }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">March 2026 Findings</div>
          <h2>1,200 law students from 6 states took the exam</h2>
          <p className="lede">
            Cycle 1.0 ran in March 2026. Here is what we found.
          </p>
        </div>

        <div className="grid g3" style={{ marginBottom: "36px" }}>
          <div className="card reveal">
            <h3>State vs NLU Gap</h3>
            <p>
              Students from tier-2 and tier-3 state universities scored on par with
              NLU students in core analytical reasoning.
            </p>
          </div>
          <div className="card reveal">
            <h3>First-Year Surge</h3>
            <p>
              1st-year candidates demonstrated high baseline aptitude, matching
              3rd-year averages in logical comprehension.
            </p>
          </div>
          <div className="card reveal">
            <h3>The Reasoning Deficit</h3>
            <p>
              Judgement appreciation (ratio decidendi extraction) showed the
              largest performance variance across all batches.
            </p>
          </div>
          <div className="card reveal">
            <h3>Regional Performance</h3>
            <p>
              State rank benchmarks revealed consistent top percentile performers
              across non-metro law campuses.
            </p>
          </div>
          <div className="card reveal">
            <h3>Subject-Wise Insights</h3>
            <p>
              Legal awareness &amp; current developments showed strong correlation
              with daily reading habits over cramming.
            </p>
          </div>
          <div
            className="card reveal"
            style={{ background: "var(--deep)", color: "var(--ivory)" }}
          >
            <h3 style={{ color: "var(--gilt)" }}>Key Takeaway</h3>
            <p style={{ color: "var(--soft)" }}>
              Merit is evenly distributed across India; opportunity and objective
              national benchmarks are not.
            </p>
          </div>
        </div>

        <div className="center">
          <a href="#paper" className="btn btn-g">
            Read Full Report ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;

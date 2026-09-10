const PrizesSection = () => {
  return (
    <section id="prizes" className="dark">
      <div className="jaali"></div>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Rewards &amp; Recognition</div>
          <h2>National recognition, cash prizes and advocate internships</h2>
          <p className="lede">
            More than just a rank — top candidates gain tangible career
            acceleration and direct professional rewards.
          </p>
        </div>

        <div className="grid g4">
          <div className="card reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(216,184,92,0.3)" }}>
            <span className="tag">TOP RANKERS</span>
            <h3 style={{ color: "var(--gilt)" }}>₹2,50,000+ Cash Pool</h3>
            <p style={{ color: "var(--soft)" }}>
              Cash prizes awarded to Top 10 All-India rankers and State Toppers
              across 3-year and 5-year LL.B programs.
            </p>
          </div>
          <div className="card reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(216,184,92,0.3)" }}>
            <span className="tag">CAREER ACCELERATION</span>
            <h3 style={{ color: "var(--gilt)" }}>Advocate Internships</h3>
            <p style={{ color: "var(--soft)" }}>
              Guaranteed internship shortlists with Senior Advocates, Supreme
              Court Counsel, and top-tier litigation firms.
            </p>
          </div>
          <div className="card reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(216,184,92,0.3)" }}>
            <span className="tag">MERIT RECOGNITION</span>
            <h3 style={{ color: "var(--gilt)" }}>Trophies &amp; Medals</h3>
            <p style={{ color: "var(--soft)" }}>
              Physical trophies, gold/silver/bronze medals, and framed
              Certificates of Excellence delivered to your doorstep.
            </p>
          </div>
          <div className="card reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(216,184,92,0.3)" }}>
            <span className="tag">EVERY CANDIDATE</span>
            <h3 style={{ color: "var(--gilt)" }}>National Percentile Report</h3>
            <p style={{ color: "var(--soft)" }}>
              Every participant receives an official verified digital Certificate
              of Merit with percentile breakdown.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;

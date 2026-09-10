const HeroSection = () => {
  return (
    <section className="hero dark" id="top">
      <div className="jaali"></div>
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            Legal Olympiad 2.0 &nbsp;·&nbsp; Sunday, 18 October 2026
          </div>
          <h1>
            Find out where you actually stand among<br />
            <em>law students in India.</em>
          </h1>
          <p>
            India's national benchmark exam for law students. Online,
            proctored, and open to every law student and CLAT aspirant in the country. Your
            college ranks you against your batch. This ranks you against India.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-g"
              href="https://app.legalolympiad.com/exam/registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now — ₹500 →
            </a>
            <a className="btn btn-o" href="#benefits">
              See what you get
            </a>
          </div>
          <p className="trustline">
            Incubated at GNDU &nbsp;·&nbsp; Proctored &nbsp;·&nbsp; No negative marking &nbsp;·&nbsp; No college permission needed
          </p>
          <div className="stats">
            <div className="stat">
              <b>3,000+</b>
              <span>Law students on the platform</span>
            </div>
            <div className="stat">
              <b>50+</b>
              <span>Partner law colleges nationwide</span>
            </div>
          </div>
        </div>

        <aside className="hero-card">
          <h4>THE EXAM AT A GLANCE</h4>
          <ul>
            <li>
              <b>Date</b>
              <span>Sunday, 18 October 2026</span>
            </li>
            <li>
              <b>Mode</b>
              <span>Online, MCQ, proctored</span>
            </li>
            <li>
              <b>Length</b>
              <span>2 hours · 100 questions</span>
            </li>
            <li>
              <b>Marking</b>
              <span>No negative marking</span>
            </li>
            <li>
              <b>Fee</b>
              <span>₹500, all inclusive</span>
            </li>
            <li>
              <b>Who</b>
              <span>Every law student and CLAT aspirant in India, any year, any college</span>
            </li>
          </ul>
          <div style={{ marginTop: "18px" }}>
            <a
              className="btn btn-g"
              href="https://app.legalolympiad.com/exam/registration"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Register in two minutes →
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
